/* ============================================================
   TRACKER.JS — Funnel Listicle Veloura
   Tracking : visiteurs uniques, scroll depth, clics CTA,
   conversion. Envoi vers Supabase + Meta Pixel + GA.
   ============================================================ */

(function () {
  'use strict';

  var CFG = window.FUNNEL_CONFIG || {};
  var supabaseClient = null;
  var visitorId = generateVisitorId();
  var scrollMilestones = { 25: false, 50: false, 75: false, 100: false };
  var pixelReady = false;

  /* ---- Visitor ID (session-based, no localStorage) ---- */
  function generateVisitorId() {
    return 'v-' + Date.now().toString(36) + '-' + Math.random().toString(36).substr(2, 9);
  }

  /* ---- Supabase Init ---- */
  function initSupabase() {
    if (!CFG.supabaseUrl || !CFG.supabaseAnonKey) return;
    if (typeof window.supabase === 'undefined') return;
    supabaseClient = window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseAnonKey);
  }

  /* ---- Meta Pixel Init ---- */
  function initMetaPixel() {
    if (!CFG.metaPixelId) return;
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', CFG.metaPixelId);
    window.fbq('track', 'PageView');
    pixelReady = true;
  }

  /* ---- Google Analytics Init ---- */
  function initGA() {
    if (!CFG.gaId) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + CFG.gaId;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', CFG.gaId);
  }

  /* ---- Send Event to Supabase ---- */
  function sendEvent(eventType, eventData) {
    if (!supabaseClient) return;
    supabaseClient.from('funnel_events').insert({
      funnel_id: CFG.funnelId || 'listicle',
      visitor_id: visitorId,
      event_type: eventType,
      event_data: eventData || {},
      page_url: window.location.href,
      user_agent: navigator.userAgent,
      referrer: document.referrer || ''
    }).then(function () { /* silent */ });
  }

  /* ---- Send Event to Meta Pixel ---- */
  function sendPixelEvent(eventName, params) {
    if (!pixelReady || typeof window.fbq !== 'function') return;
    window.fbq('trackCustom', eventName, params || {});
  }

  /* ---- Track: Page View ---- */
  function trackPageView() {
    sendEvent('page_view', { timestamp: new Date().toISOString() });
    sendPixelEvent('FunnelEntry', { funnel: CFG.funnelId });
  }

  /* ---- Track: Scroll Depth ---- */
  function trackScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    ) - window.innerHeight;
    if (docHeight <= 0) return;
    var pct = Math.round((scrollTop / docHeight) * 100);

    var milestones = [25, 50, 75, 100];
    for (var i = 0; i < milestones.length; i++) {
      var m = milestones[i];
      if (pct >= m && !scrollMilestones[m]) {
        scrollMilestones[m] = true;
        sendEvent('scroll_' + m, { percent: m });
        sendPixelEvent('ScrollDepth', { percent: m, funnel: CFG.funnelId });
      }
    }
  }

  /* ---- Track: CTA Clicks ---- */
  function trackCTAClicks() {
    document.addEventListener('click', function (e) {
      var target = e.target.closest('[data-cta]');
      if (!target) return;

      var ctaName = target.getAttribute('data-cta');
      sendEvent('cta_click', { cta: ctaName });
      sendPixelEvent('CTAClick', { cta: ctaName, funnel: CFG.funnelId });

      // Conversion CTAs : CTA final + CTA sticky = conversion
      if (ctaName === 'cta_2' || ctaName === 'cta_sticky' || ctaName === 'cta_final') {
        sendEvent('conversion', { cta: ctaName });
        sendPixelEvent('FunnelConversion', { funnel: CFG.funnelId, cta: ctaName });
        if (pixelReady && typeof window.fbq === 'function') {
          window.fbq('track', 'Lead');
        }
      }
    });
  }

  /* ---- Throttle ---- */
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) {
        last = now;
        fn.apply(this, arguments);
      }
    };
  }

  /* ---- Init ---- */
  function init() {
    setTimeout(function () {
      CFG = window.FUNNEL_CONFIG || {};
      initSupabase();
      initMetaPixel();
      initGA();
      trackPageView();
      window.addEventListener('scroll', throttle(trackScroll, 250), { passive: true });
      trackCTAClicks();
    }, 500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
