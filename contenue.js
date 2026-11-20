/* ==========================================================
   contenue.js : TOUT LE CONTENU DU PORTFOLIO
   Modifie ici les textes, les liens et les projets.
   Les chemins partent du dossier où se trouve index.html.
   ========================================================== */

const CONTENU = {

  site: {
    nomComplet: "Lyam Passé-Coutrin",
    nomHero: ["LYAM", "PASSÉ-COUTRIN"],
    periode: "2025—2026"
  },

  hero: {
    video: "asset/video/video making off.mp4",
    etiquetteVideo: "Vidéos · Projets",
    role: ["Créateur numérique", "Vidéo · Design · Web"],
    statut: "Recherche une alternance",
    lieu: "Île-de-France"
  },

  navigation: [
    { label: "Profil",  cible: "#profil" },
    { label: "Projets", cible: "#mes-projets" },
    { label: "Avis",    cible: "#avis" },
    { label: "Contact", cible: "#contact" }
  ],

  titres: {
    profil: "Qui suis-je",
    projets: "Mes projets",
    avis: "Des avis sur moi",
    competences: "Mes compétences",
    cv: "Mon CV",
    contact: "Me contacter"
  },

  profil: {
    photo: "asset/img/photo_profil.png",
    photoAlt: "Portrait de Lyam",
    paragraphes: [
      "Je m'appelle Lyam, j'ai 20 ans et je suis étudiant en BUT MMI, parcours Création Numérique. Curieux et motivé, j'aime apprendre en expérimentant et relever de nouveaux défis en mêlant créativité et technique.",
      "Passionné de musique, je joue de la guitare en autodidacte depuis plusieurs années. Le sport m'aide à me dépasser et à garder un bon équilibre, tandis que les jeux vidéo nourrissent mon esprit créatif, mon sens de la stratégie et mon goût du challenge.",
      "À travers mes projets, je développe mes compétences dans le numérique afin de construire un avenir professionnel qui me ressemble.",
      "Je maîtrise la suite Adobe (Photoshop, Illustrator, InDesign, Premiere Pro, After Effects) pour concevoir des supports visuels créatifs et adaptés aux différents médias.",
      "J'ai également de solides compétences en développement web (HTML, CSS, JavaScript, PHP), me permettant de créer des sites dynamiques, performants et responsives."
    ],
    // Icônes autour de la photo (réparties automatiquement en cercle)
    icones: [
      { src: "asset/icon/Photoshop.png",      alt: "Photoshop" },
      { src: "asset/icon/premiere pro.png",   alt: "Premiere Pro" },
      { src: "asset/icon/after effect.png",   alt: "After Effects" },
      { src: "asset/icon/indesign1.png",      alt: "InDesign" },
      { src: "asset/icon/illustrator.png",    alt: "Illustrator" },
      { src: "asset/icon/php.png",            alt: "PHP" },
      { src: "asset/icon/html.png",           alt: "HTML" },
      { src: "asset/icon/css.png",            alt: "CSS" },
      { src: "asset/icon/js.png",             alt: "JavaScript" },
      { src: "asset/icon/wordpress-logo.png", alt: "WordPress" }
    ]
  },

  alternance: {
    titre: "🚀 À la recherche d'une alternance en Création Numérique",
    texte: "Actuellement en BUT MMI, je cherche un contrat d'apprentissage pour mettre mes compétences en montage vidéo, design et web au service de vos projets.",
    details: [
      { label: "Disponibilité", valeur: "Dès à présent en Île-de-France (Permis B)" },
      { label: "Rythme", valeur: "3 semaines en entreprise / 1 semaine à l'école" }
    ],
    boutonCV: { texte: "Télécharger mon CV", fichier: "asset/docs/CV audiovisuel lyam Passé Coutrin.pdf" },
    boutonContact: { texte: "Me contacter", lien: "mailto:lyampassecoutrin94@gmail.com" }
  },

  // Icônes utilisées dans les pages projet (clés du champ "outils")
  outils: {
    ps:   { src: "asset/icon/Photoshop.png",      alt: "Photoshop" },
    ai:   { src: "asset/icon/illustrator.png",    alt: "Illustrator" },
    id:   { src: "asset/icon/indesign1.png",      alt: "InDesign" },
    pr:   { src: "asset/icon/premiere pro.png",   alt: "Premiere Pro" },
    ae:   { src: "asset/icon/after effect.png",   alt: "After Effects" },
    wp:   { src: "asset/icon/wordpress-logo.png", alt: "WordPress" },
    js:   { src: "asset/icon/js.png",             alt: "JavaScript" },
    css:  { src: "asset/icon/css.png",            alt: "CSS" },
    html: { src: "asset/icon/html.png",           alt: "HTML" },
    php:  { src: "asset/icon/php.png",            alt: "PHP" }
  },

  /* ----------------------------------------------------------
     PROJETS (l'ordre ici = l'ordre sur la grille)
     taille de la carte : "grande" (2x2), "large" (2x1), "normale"
     galerie : type "image" | "video" (fichier local) | "embed" (YouTube)
     ---------------------------------------------------------- */
  projets: [
    {
      slug: "la-teloche",
      categorie: "Court métrage",
      titre: ["La téloche"],
      cover: "asset/img/la_teloche_cover.png",
      carte: { theme: "Court métrage", titre: "La téloche", sousTitre: "Réalisation d'un court métrage mêlant réalité et fiction", taille: "grande" },
      description: "La téloche est un court métrage de deux minutes qui mélange réalité et fiction. Le personnage principal quitte son quotidien pour littéralement entrer dans la télévision : on le retrouve incrusté en arrière-plan de trois publicités françaises différentes, comme si lui-même ne se sentait pas à sa place.",
      details: "Le projet a démarré par une phase de storyboard, pour poser la partie réelle du récit ainsi que les scènes fictives à l'intérieur des publicités. Une partie du tournage s'est faite sur fond vert afin de permettre l'incrustation du personnage dans les pubs, réalisée principalement sous After Effects. Premiere Pro a servi pour le montage général du court métrage.",
      outils: ["pr", "ae"],
      lien: "",
      galerie: [
        { type: "embed", src: "https://www.youtube.com/embed/ilYHRhDcYhk", nom: "Court métrage : La téloche" },
        { type: "image", src: "asset/img/storyboard.png",     nom: "Storyboard" },
        { type: "image", src: "asset/img/scene_vert.png",     nom: "Tournage fond vert" },
        { type: "image", src: "asset/img/montage_teloche.png", nom: "Montage" }
      ]
    },
    {
      slug: "affiches",
      categorie: "Design",
      titre: ["Affiches", "Ciné, série & créations"],
      cover: "asset/img/affiches_ciné_cover.png",
      carte: { theme: "Design", titre: "Affiches", sousTitre: "Ciné, série & créations diverses", taille: "normale" },
      description: "Une série d'affiches réalisées pour le plaisir, sans brief imposé, dans le but de m'entraîner sur les outils de la suite Adobe. Les thèmes varient librement : cinéma, séries, musique, sport, portraits.",
      details: "Chaque affiche est l'occasion de travailler un style graphique différent et d'approfondir des techniques précises sur Photoshop, InDesign et After Effects, entre composition, retouche et mise en page.",
      outils: ["ps", "ai", "id"],
      lien: "",
      galerie: [
        { type: "image", src: "asset/img/Lip affiche.jpg",    nom: "Affiche Lip Gallagher - SHAMELESS" },
        { type: "image", src: "asset/img/Pogba affiche.jpg",  nom: "Affiche Paul Pogba - Noir et blanc" },
        { type: "image", src: "asset/img/Fionna affiche.jpg", nom: "Affiche Fiona Gallagher - SHAMELESS" },
        { type: "image", src: "asset/img/Zamdane affiche.png", nom: "Affiche Zamdane - SOLSADE 2024" }
      ]
    },
    {
      slug: "webinventory",
      categorie: "Développement web",
      titre: ["Web Inventory", "sur l'automobile"],
      cover: "asset/img/webinventory_cover.png",
      carte: { theme: "Dev Web", titre: "Web Inventory", sousTitre: "Création d'un site web d'inventaire sur le thème des voitures.", taille: "normale" },
      description: "Web Inventory est un site permettant de consulter et trier un inventaire d'objets. J'ai choisi de l'appliquer aux voitures : chaque fiche peut être filtrée par modèle, marque, pays ou type de moteur.",
      details: "Le site a été codé en HTML, CSS et JavaScript, avec un système de tri et de filtres dynamiques pour naviguer facilement dans la base de voitures.",
      outils: ["html", "css", "js"],
      lien: "",
      galerie: [
        { type: "image", src: "asset/img/selection_voiture.png", nom: "Affichage des voitures" },
        { type: "image", src: "asset/img/carte_voiture.png",     nom: "Carte d'une voiture" }
      ]
    },
    {
      slug: "interview-sacha-nelken",
      categorie: "Interview",
      titre: ["L'interview", "Sacha Nelken"],
      cover: "asset/img/minia_interview.png",
      carte: { theme: "Interview", titre: "Sacha Nelken", sousTitre: "Interview d'un journaliste de Libération", taille: "normale" },
      description: "Dans le cadre de ce projet, j'ai réalisé l'interview complète de Sacha Nelken, journaliste à Libération, pour plonger au cœur de la réalité de son métier. C'est le premier projet audiovisuel que j'ai mené de bout en bout.",
      details: "Le projet s'est déroulé en plusieurs phases. D'abord un travail éditorial : définir les questions à poser et la manière de les aborder. Puis une phase d'apprentissage technique de la captation : prise en main de la caméra, des micros et des différents plans utilisables pour une interview. Est venue ensuite la phase de tournage, où j'ai filmé l'échange en posant moi-même les questions. Le montage, réalisé sur Premiere Pro, a consisté à sélectionner les meilleures réponses pour obtenir un format de moins de cinq minutes, avec un style propre où les questions sont mises en valeur et les réponses choisies avec soin.",
      outils: ["ps", "pr"],
      lien: "",
      galerie: [
        { type: "embed", src: "https://www.youtube.com/embed/csvEddXVVao", nom: "Vidéo de l'interview" },
        { type: "image", src: "asset/img/mail_interview.png",    nom: "Prise de contact" },
        { type: "image", src: "asset/img/montage_interview.png", nom: "Montage" }
      ]
    },
    {
      slug: "odyssee",
      categorie: "Graphisme",
      titre: ["L'odyssée", "entre mer et univers"],
      cover: "asset/img/corto_silver_cover.png",
      carte: { theme: "Graphisme", titre: "L'odyssée entre mer et univers", sousTitre: "Affiche en lien avec des films ou séries", taille: "normale" },
      description: "L'odyssée entre mer et univers est un musée virtuel imaginé en groupe, mêlant les univers de Corto Maltese et de Silver Surfer. Le projet inclut la création complète d'une agence fictive spécialisée dans les musées virtuels, avec son propre site web interactif.",
      details: "Le site a été conçu de zéro : plusieurs pages présentent l'agence, et une page dédiée présente l'exposition elle-même. La direction artistique reprend des éléments visuels tirés des deux bandes dessinées, pour rester fidèle à cet univers entre mer et espace.",
      outils: ["ps", "ai", "id"],
      lien: "",
      galerie: [
        { type: "image", src: "asset/img/accueil_X.png",          nom: "Accueil de l'agence" },
        { type: "image", src: "asset/img/expo.png",               nom: "L'exposition" },
        { type: "image", src: "asset/img/accueil_site_expo.png",  nom: "Site de l'exposition" },
        { type: "image", src: "asset/img/jeu_expo.png",           nom: "Jeu du site de l'expo" }
      ]
    },
    {
      slug: "nutri-way",
      categorie: "Dev Web",
      titre: ["Heal Nutri Way"],
      cover: "asset/img/nutri_way_cover.png",
      carte: { theme: "Dev Web", titre: "Heal Nutri Way", sousTitre: "Réalisation d'un site web sur la nutrition", taille: "normale" },
      description: "Heal Nutri Way est un site autour de la nutrition, pensé pour proposer une expérience personnalisée selon les objectifs de chacun : prise de masse, perte de poids, ou simplement mieux-être général.",
      details: "Réalisé en groupe, de la maquette à la version codée, le site propose des abonnements et des plans de repas qui s'adaptent au profil de l'utilisateur. Chacun peut mettre des plats en favori, leur donner une note, laisser un avis et les partager, pour une expérience à la fois personnalisée et communautaire.",
      outils: ["html", "css", "js"],
      lien: "https://hnutriway.fr/index.php",
      galerie: [
        { type: "image", src: "asset/img/accueil_nutri.png", nom: "Accueil Heal Nutri Way" },
        { type: "image", src: "asset/img/page_recette.png",  nom: "Page des recettes" },
        { type: "image", src: "asset/img/depot_git.png",     nom: "Dépôt GitHub" },
        { type: "image", src: "asset/img/inscription.png",   nom: "Formulaire d'inscription" }
      ]
    },
    {
      slug: "stage-communication-dali",
      categorie: "Montage vidéo",
      titre: ["Stage de communication", "Dali Nikolovski"],
      cover: "asset/img/minia_dali.png",
      carte: { theme: "Montage vidéo", titre: "Stage de communication", sousTitre: "Stage de personal branding pour Dali Nikolovski, PDG d'Eco Green Energy", taille: "large" },
      description: "Stage de personal branding pour Dali Nikolovski, PDG d'Eco Green Energy. Mission axée sur le développement de concepts vidéo, le storytelling sur les réseaux sociaux et la création de miniatures.",
      details: "Au cours de ce stage de communication, j'ai géré le montage de vidéos courtes et l'optimisation des réseaux sociaux pour renforcer le personal branding de Dali Nikolovski. J'ai notamment travaillé sur l'édition de reels (comme la vidéo 'Père riche père pauvre'), la conception de highlights pour Instagram, et la stratégie visuelle globale du compte. Mon travail a directement contribué à la croissance de la communauté, faisant passer le compte de 12k à 32k abonnés.",
      outils: ["pr", "ps"],
      lien: "",
      galerie: [
        { type: "image", src: "asset/img/compte_dali.jpg", nom: "Gestion du compte Instagram" },
        { type: "video", src: "asset/video/pere riche pere pauvre.mp4", nom: "Montage vidéo - Père riche père pauvre" },
        { type: "image", src: "asset/img/screen_1_dali.png", nom: "Création de contenu 1" },
        { type: "image", src: "asset/img/screen_2_dali.png", nom: "Création de contenu 2" }
      ]
    },
    {
      slug: "mercatoviz",
      categorie: "Dev Web / Datavisualisation",
      titre: ["MercatoViz"],
      cover: "asset/img/mercatoviz_cover.png",
      carte: { theme: "Dev Web / Datavisualisation", titre: "MercatoViz", sousTitre: "L'explosion du marché des transferts dans le football européen", taille: "normale" },
      description: "MercatoViz est un projet de data-visualisation consacré à l'explosion du marché des transferts dans le football européen. L'idée de départ était simple : le football n'est plus seulement un sport, c'est devenu une véritable économie, capable de brasser des sommes vertigineuses chaque mercato. Le site a été pensé pour rendre ce phénomène lisible et concret à travers des graphiques clairs plutôt que de simples chiffres bruts.",
      details: "Le site s'articule autour de plusieurs visualisations complémentaires. La première met en avant les transferts individuels les plus chers réalisés sur les dix dernières années, joueur par joueur, pour montrer l'évolution des montants au fil du temps. La deuxième se concentre sur le cumul des trois transferts les plus chers de tous les temps, afin de donner une idée de l'ampleur que peuvent atteindre les plus grosses opérations à elles seules. La troisième analyse l'évolution des dépenses par championnat, pour comparer la capacité d'investissement des différentes ligues européennes sur la durée. Techniquement, l'ensemble a été codé en HTML et CSS, avec un travail particulier sur la mise en forme des données pour que chaque graphique reste lisible et impactant malgré la complexité des chiffres manipulés. Au-delà de l'aspect technique, ce projet a aussi été l'occasion de réfléchir à la manière de raconter une histoire avec de la donnée : montrer, à travers ces courbes et ces barres, à quel point le football est devenu un secteur économique à part entière.",
      outils: ["html", "css", "js"],
      lien: "https://idrisouus.github.io/Mercato_Viz/",
      galerie: [
        { type: "image", src: "asset/img/acceuille_mercatoviz.png",   nom: "MercatoViz" },
        { type: "image", src: "asset/img/graphique1_mercatoviz.png",  nom: "Les plus gros transferts par joueur (10 ans)" },
        { type: "image", src: "asset/img/championnat_mercato.png",    nom: "Évolution des dépenses par championnat" }
      ]
    }
  ],

  imagesAvis: {
    etoiles: "asset/img/etoile_avis.png",
    guillemet: "asset/img/quote.png"
  },

  avis: [
    {
      nom: "Madhvi", role: "Camarade de classe",
      texte: "J'ai eu l'opportunité de collaborer avec Lyam sur un gros projet lors de notre première année. J'ai été particulièrement impressionné par son sérieux et son engagement. Il a toujours su répondre avec précision aux attentes du groupe et a fait preuve d'une grande réactivité face aux besoins de notre projet. Lyam est une personne fiable, qui prend des initiatives et qui sait faire preuve de leadership lorsque c'est nécessaire."
    },
    {
      nom: "Mathieu", role: "Camarade de classe",
      texte: "J'ai eu l'occasion de travailler avec Lyam sur plusieurs projets importants en MMI, comme des interviews, des courts-métrages et la refonte d'un site pour un club de football local. On s'est toujours très bien entendus et les projets se sont toujours déroulés sans problème. Lyam est investi, créatif et fiable, que ce soit en vidéo ou en développement web."
    },
    {
      nom: "Tania", role: "Partenaire de projet",
      texte: "J'ai travaillé avec Lyam dès le lycée sur différents projets, et nous continuons encore aujourd'hui à nous entraider dans nos études supérieures. Il est toujours disponible pour aider, expliquer et proposer des idées pertinentes. C'est quelqu'un de motivé, polyvalent et agréable avec qui collaborer, autant sur le plan humain que professionnel."
    }
  ],

  competences: [
    {
      titre: "Création numérique",
      sousTitre: "Design graphique et audiovisuel",
      tags: ["Photoshop", "Figma", "Canva", "Premiere Pro", "After Effects"]
    },
    {
      titre: "Développement web",
      sousTitre: "Front & back",
      tags: ["HTML", "CSS", "PHP", "JavaScript", "WordPress"]
    }
  ],

  cv: {
    carteTitre: "CV - Lyam Passé-Coutrin",
    texte: "Télécharger mon CV complet pour mieux découvrir mon expérience, mon parcours et mes formations.",
    fichier: "asset/docs/CV_pdf.pdf",
    bouton: "Télécharger le PDF",
    apercu: "asset/img/CV_lyam.png",
    apercuAlt: "Aperçu du CV de Lyam"
  },

  contact: [
    { icone: "asset/icon/mail_logo.webp",     alt: "Logo Email",    titre: "Email",    texte: "lyampassecoutrin94@gmail.com", lien: "mailto:lyampassecoutrin94@gmail.com", externe: false },
    { icone: "asset/icon/linkedin-logo.png",  alt: "Logo LinkedIn", titre: "LinkedIn", texte: "Lyam Passé-Coutrin",           lien: "https://www.linkedin.com/in/lyam-passé-coutrin", externe: true }
  ]
};