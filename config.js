/* ============================================================
   CONFIG.JS — Funnel Advertorial (SAY Multi Balm)
   Toutes les valeurs modifiables depuis l'admin.
   La page index.html charge ce fichier PUIS ecrase les valeurs
   avec celles stockees dans Supabase (si elles existent).
   ============================================================ */

window.FUNNEL_CONFIG = {

  /* ---- Supabase ---- */
  supabaseUrl: 'https://mjkbobemvirtfioanbxu.supabase.co',
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qa2JvYmVtdmlydGZpb2FuYnh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwODgyMDUsImV4cCI6MjA5MTY2NDIwNX0.d1UnuY-TYq8molxjwJBKBdmlBT5xeM3ZUjZQ-4UsB14',
  funnelId: 'advertorial',

  /* ---- Admin ---- */
  adminPassword: 'say2026',

  /* ---- Tracking ---- */
  metaPixelId: '',          // ex: '123456789012345'
  gaId: '',                 // ex: 'G-XXXXXXXXXX'

  /* ---- CTA ---- */
  ctaUrl: 'https://www.votre-boutique.com/products/say-pdrn-multi-balm',

  /* ---- DA Couleurs (CSS custom properties) ---- */
  colors: {
    '--rose-50':     '#FFF5F8',
    '--rose-100':    '#FCE7EC',
    '--rose-300':    '#F7B8CB',
    '--pink-600':    '#D63D7A',
    '--pink-700':    '#B82A63',
    '--ink':         '#1A1A2E',
    '--ink-2':       '#3B3B52',
    '--muted':       '#6B6B80',
    '--cream':       '#FBF7F4',
    '--line':        '#EFE2E7',
    '--gold':        '#C9A66B',
    '--green':       '#1F8A5B',
    '--france':      '#0055A4',
    '--france-red':  '#EF4135'
  },

  /* ---- DA Typographie (Google Fonts) ---- */
  fonts: {
    headline: 'Fraunces',
    body: 'Inter'
  },

  /* ---- Images (URLs Shopify / CDN) ---- */
  images: {
    hero:         '',   // Photo lifestyle : Femme 38 ans appliquant le stick sous l'oeil
    scienceKorea: '',   // Visuel PDRN Coree
    scienceFrance:'',   // Visuel Volufiline France
    testimonial1: '',   // Photo Sophie L.
    testimonial2: '',   // Photo Camille D.
    testimonial3: ''    // Photo Julie M.
  },

  /* ---- Textes cles ---- */
  texts: {
    sponsoredBar: 'Article sponsorise · Partenariat avec SAY France',
    h1: '\u00AB\u00A0J\u2019ai remplac\u00E9 4 cr\u00E8mes anti-\u00E2ge par UN seul stick franco-cor\u00E9en : voici ce qui s\u2019est pass\u00E9 en 14 jours\u00A0\u00BB',
    dek: 'S\u00E9cheresse, ridules, teint terne, rel\u00E2chement, cernes : les 5 signes qui me trahissaient sur 5 zones diff\u00E9rentes du visage. Une amie dermatologue m\u2019a gliss\u00E9 le nom d\u2019un soin cor\u00E9en formul\u00E9 avec un actif brevet\u00E9 fran\u00E7ais. Voici mon journal de 14 jours.',
    productName: 'SAY : PDRN Pink Collagen Volume Multi Balm',
    cta1Title: 'L\u2019offre que SAY fait aux lectrices de Beaut\u00E9 Mag',
    cta1Sub: 'Pack 2 sticks (1 maison + 1 sac) \u00E0 44\u20AC au lieu de 56\u20AC \u00B7 livraison 48h offerte \u00B7 garantie 30 jours',
    cta1Button: 'Voir l\u2019offre SAY \u2192',
    cta1Guarantee: '\u2713 Satisfait ou rembours\u00E9 sans question \u00B7 \u2713 Le seul stick PDRN + Volufiline 5% du march\u00E9 FR',
    cta2Title: '1 stick. 5 zones. 5 signes. 2 sciences. 0 aiguille.',
    cta2Sub: 'Pack 2 sticks \u00E0 44\u20AC (au lieu de 56\u20AC) \u00B7 livraison 48h offerte \u00B7 garantie 30j',
    cta2Button: 'D\u00E9couvrir le Multi Balm \u2192',
    cta2Guarantee: '\u2713 PDRN cor\u00E9en + Volufiline 5% Sederma \uD83C\uDDEB\uD83C\uDDF7 \u00B7 \u2713 12\u00A0847 avis 4,9/5',
    pullQuote: '\u00AB\u00A0Au jour 14, j\u2019ai annul\u00E9 mon rendez-vous chez le m\u00E9decin esth\u00E9tique. Pas par principe : parce qu\u2019un seul stick \u00E0 28\u20AC avait remplac\u00E9 les 3 zones que j\u2019allais faire injecter.\u00A0\u00BB',
    testimonial1Name: 'Sophie L., 38 ans, Paris',
    testimonial1Text: '\u00AB\u00A0Mes cernes creux \u00E9taient mon obsession depuis 2 ans. Au bout de 14 jours, mon mari a remarqu\u00E9 avant moi. J\u2019utilise aussi le stick sur les l\u00E8vres et le cou : tout \u00E7a avec un seul produit, c\u2019est presque irr\u00E9el.\u00A0\u00BB',
    testimonial2Name: 'Camille D., 42 ans, Lyon',
    testimonial2Text: '\u00AB\u00A0J\u2019avais 4 produits dans ma salle de bain : Caudalie, Nuxe, Dior, et une cr\u00E8me jour. Aujourd\u2019hui je n\u2019ai plus qu\u2019UN stick. Mes sillons sont nettement adoucis et le cou est plus ferme. \u00C9conomie : ~100\u20AC par mois.\u00A0\u00BB',
    testimonial3Name: 'Julie M., 35 ans, Bordeaux',
    testimonial3Text: '\u00AB\u00A0Quand j\u2019ai vu "Volufiline 5% Sederma France" sur le packaging, j\u2019ai compris pourquoi \u00E7a marche. C\u2019est pas du marketing K-beauty, c\u2019est de la vraie science europ\u00E9enne. Mes pattes d\u2019oie ont nettement diminu\u00E9 en 3 semaines.\u00A0\u00BB',
    footerDisclaimer: 'Beaut\u00E9 Mag est un magazine ind\u00E9pendant. Cet article est sponsoris\u00E9 par SAY France et a \u00E9t\u00E9 r\u00E9dig\u00E9 en partenariat \u00E9ditorial.'
  }
};
