/* ============================================================
   CONFIG.JS — Funnel Listicle Veloura
   Toutes les valeurs par défaut de la page listicle.
   Les valeurs réelles sont écrasées par Supabase (funnel_config).
   ============================================================ */

window.FUNNEL_CONFIG = {
  /* Supabase */
  supabaseUrl: 'https://mjkbobemvirtfioanbxu.supabase.co',
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qa2JvYmVtdmlydGZpb2FuYnh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwODgyMDUsImV4cCI6MjA5MTY2NDIwNX0.d1UnuY-TYq8molxjwJBKBdmlBT5xeM3ZUjZQ-4UsB14',

  /* Funnel identity */
  funnelId: 'listicle',
  adminPassword: 'admin2026',

  /* Tracking */
  metaPixelId: '',
  gaId: '',

  /* URL cible de tous les CTAs */
  ctaUrl: 'https://example.com',

  /* ---- COULEURS ---- */
  colors: {
    '--bg': '#FFFFFF',
    '--pink-accent': '#E3A7C4',
    '--pink-deep': '#C7849A',
    '--pink-light': '#F3D6DE',
    '--pink-gradient-end': '#FBE8EE',
    '--coral': '#EA9393',
    '--text-dark': '#151515',
    '--text-near-black': '#121212',
    '--text-body': '#444444',
    '--text-muted': '#6B6060',
    '--text-light': '#888888',
    '--border-light': '#EEEEEE',

    /* Magazine header/footer */
    '--navy-dark': '#1A1B2E',
    '--pink-line': '#E94C7F',
    '--cream': '#FAF4F0',
    '--sponsor-text': '#6B7280',
    '--footer-text': '#B5B5C8',
    '--footer-copy': '#8A8AA0',

    /* CTAs */
    '--cta-bg': '#E3A7C4',
    '--cta-text': '#FFFFFF'
  },

  /* ---- POLICES ---- */
  fonts: {
    headline: 'Inter',
    body: 'Inter',
    logo: 'Playfair Display',
    marquee: 'Questrial'
  },

  /* ---- IMAGES (rempli via admin) ---- */
  images: {
    author: '',
    hero: '',
    item1: '',
    item2: '',
    item3: '',
    item4: '',
    item5: '',
    item6: '',
    item7: '',
    item8: '',
    item9: '',
    item10: ''
  },

  /* ---- TEXTES (chaque texte visible sur la page) ---- */
  texts: {
    /* Magazine header */
    magazineName: 'Eclat',
    magazineNameItalic: 'Magazine',
    sponsorBarText: 'Article sponsorisé · Partenariat avec Veloura France',

    /* Magazine footer */
    footerAboutText: 'Eclat Magazine est un magazine indépendant. Cet article est sponsorisé par Veloura France et a été rédigé en partenariat éditorial.',
    footerCopyright: '© 2026 Eclat Magazine · Tous droits réservés',

    /* Catégorie au-dessus du H1 */
    heroCategory: 'Bien-être · Santé féminine',

    /* Hero */
    h1: 'Les femmes avisées abandonnent les serviettes jetables pour les <em>serviettes en coton lavables</em>… voici pourquoi',
    heroSubtitle: "Pendant que vous continuez avec les mêmes produits d'incontinence qui vous déçoivent, des milliers de femmes de votre âge ont découvert quelque chose de complètement différent.",
    heroCta: 'Découvrir Veloura Pads',
    bylineAuthor: 'Par Jessica M.',
    bylineDate: 'Mis à jour le 3 février 2026',

    /* Item 1 */
    item1Title: 'Vous méritez une protection qui vous traite comme une femme — pas comme une patiente',
    item1Text: "Les serviettes jetables promettent la discrétion mais donnent l'impression d'un produit médical dès qu'on les met. Veloura mise sur la dignité : une protection en coton sans produits chimiques, absorbante, durable, facile à changer, qui reste confortable toute la journée — pour que vous ne vous sentiez plus jamais comme une patiente gérant une condition.",

    /* Item 2 */
    item2Title: 'Elles tiennent toute la journée pour une vie active et pratique',
    item2Text: "Les culottes absorbantes vous enferment dans une couche humide toute la journée sans échappatoire. Les Veloura Pads tiennent toute la journée, quelle que soit l'activité — elles absorbent les fuites quand vous vous penchez, soulevez ou conduisez. Mieux : vous pouvez les changer quand vous voulez, pour rester fraîche et sèche au lieu d'être coincée dans une couche imbibée.",

    /* Item 3 */
    item3Title: "Les serviettes de pharmacie intoxiquent votre peau et l'environnement",
    item3Text: "Les serviettes jetables se présentent comme sûres mais abîment votre corps et la planète à chaque usage. Veloura casse ce cycle : 100% coton sans produits chimiques, respirant, réutilisable pendant des années, qui évite des tonnes de déchets toxiques en décharge — pour protéger votre peau et l'environnement en même temps, loin des parfums synthétiques et des polluants éternels (PFAS) associés à l'inflammation chronique, aux perturbations hormonales et aux accumulations toxiques.",

    /* Item 4 */
    item4Title: '100% coton, la SEULE matière qui devrait JAMAIS toucher votre peau la plus sensible',
    item4Text: "Les serviettes synthétiques promettent le confort mais piègent la chaleur, l'humidité et les « polluants éternels » (PFAS) contre une peau qui devient plus vulnérable avec l'âge. Veloura utilise du pur coton 100%, qui respire naturellement, évacue l'humidité et ne contient ni PFAS, ni chlore, ni irritants de synthèse — pour que votre peau puisse enfin récupérer au lieu d'absorber des substances qui restent dans le corps pendant des décennies.",

    /* Item 5 */
    item5Title: 'Un système de boutons-pressions qui tient en place. Fini les glissements',
    item5Text: "Les serviettes lavables bon marché promettent de tenir, mais glissent dès que vous vous asseyez ou bougez. Le système de fixation sécurisé Veloura entoure complètement votre culotte avec des fermetures renforcées qui tiennent vraiment — vous l'installez une fois le matin et vous l'oubliez, au lieu de devoir ajuster et vérifier toute la journée.",

    /* Item 6 */
    item6Title: 'Lavable en machine, conçue pour durer des années, et sans odeur',
    item6Text: "Les serviettes jetables vous obligent à racheter sans cesse, vident votre budget et s'entassent dans les décharges. Veloura dure 2 à 3 ans ou plus avec un simple lavage en machine — brisant le cercle coûteux et polluant dans lequel vous étiez piégée. Et contrairement aux jetables qui retiennent la chaleur et l'humidité contre la peau, le coton 100% Veloura respire : l'air circule, les bactéries n'ont pas d'endroit où se développer. Pas d'odeur. Pas de parfum synthétique nécessaire, parce qu'il n'y a rien à masquer. Chaque lavage remet la serviette à neuf.",

    /* Item 7 */
    item7Title: "Un seul achat remplace des milliers d'euros en jetables",
    item7Text: "Les serviettes jetables semblent bon marché à 60 € par mois — jusqu'à ce que vous réalisiez que vous dépensez 720 € par an pour des produits qui ne vous satisfont pas. Veloura coûte moins que 3 mois de jetables mais dure des années, pour une économie de 2 000 €+ sur la durée — et en prime, ça fonctionne mieux. Vous arrêtez de financer votre propre inconfort et vous gardez cet argent pour vous.",

    /* Item 8 */
    item8Title: "De vraies femmes de votre âge ont déjà fait le changement — et ne reviennent pas en arrière",
    item8Text: "On vous a dit de faire confiance aux grandes marques comme Poise et Always, mais des milliers de femmes de 60 ans et plus ont essayé Veloura et ont eu la même réaction : la surprise que quelque chose fonctionne enfin. Elles rapportent une peau apaisée en quelques jours, zéro fuite au jardin ou en course, et un vrai soulagement après des années de produits décevants — vous n'avez plus à subir seule pendant que d'autres ont déjà trouvé la solution.",

    /* Item 9 */
    item9Title: 'En ce moment : une offre spéciale 1 acheté = 1 offert sur tous les packs',
    item9Text: "La plupart des marques vous font attendre les soldes ou imposent un montant minimum pour accéder aux prix corrects. L'offre 1 acheté = 1 offert Veloura fonctionne sur n'importe quelle quantité — pack de 2 ou de 8 — pour vous doubler la protection au même prix. Vous pouvez constituer votre stock à petit prix ou commencer doucement sans être pénalisée.",

    /* Item 10 */
    item10Title: "Commandez n'importe quel pack et nous doublons GRATUITEMENT — mais le stock est presque épuisé",
    item10Text: "La plupart des marques vous forcent à acheter en gros ou à attendre des mois pour les réassorts. Veloura double votre commande gratuitement, sans minimum, sans piège — mais les derniers réassorts sont partis en 48 heures et ne reviendront pas avant plusieurs semaines. Vous avez le choix : agir maintenant tant qu'il y a du stock, ou attendre des mois en regardant d'autres obtenir le soulagement que vous méritez.",

    /* CTA final */
    finalCtaText: 'Vérifier la disponibilité',

    /* Sticky bottom CTA */
    stickyCtaText: 'Profiter de l\'offre'
  }
};
