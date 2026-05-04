/* ============================================
   Dossier · Barthélémy Joris — App
   ============================================ */

// =========================================================
// DATA
// =========================================================
const LANGS = [
  { name: "Français", level: "Natif · Langue maternelle" },
  { name: "Anglais", level: "B2 · Écrit & Parlé" },
  { name: "Espagnol", level: "A2 · Notions" }
];

const EXPERIENCES = [
  {
    num: "01",
    title: "Stage Communication | Intermarché",
    sub: "Stage · Dijon",
    period: "Avr → Juin 2026",
    status: "live",
    statusLabel: "En cours",
    desc: "Intégré à l'équipe communication d'un magasin Intermarché à Lyon. Création des supports locaux, animation des réseaux sociaux et mise en place d'actions promotionnelles cohérentes avec la charte de l'enseigne.",
    results: "<strong>Objectifs :</strong> développer la présence digitale, augmenter l'engagement social et produire des supports visuels alignés avec la charte Intermarché."
  },
  {
    num: "02",
    title: "Stage Communication | France Travail",
    sub: "Stage · Direction Régionale France Travail de Valmy, Dijon",
    period: "Mai → Juin 2025",
    status: "past",
    statusLabel: "Terminé",
    desc: "Au sein de l'agence France Travail de Valmy, contribution à la communication interne et externe : production de supports, création de contenus pour les réseaux sociaux, montée en compétences sur les outils institutionnels.",
    results: "<strong>Résultats :</strong> supports validés par l'équipe, prise en main complète des outils et codes de la communication publique."
  },
  {
    num: "03",
    title: "Stage Ressources Humaines | France Travail",
    sub: "Stage · Direction Régionale France Travail de Valmy, Dijon",
    period: "Mai → Juin 2024",
    status: "past",
    statusLabel: "Terminé",
    desc: "Accueil et suivi des demandeurs d'emploi, rédaction de comptes-rendus, mise à jour des outils de gestion interne. Première immersion dans une structure publique de grande taille.",
    results: "<strong>Résultats :</strong> compétences développées en communication interpersonnelle et compréhension fine d'une structure publique."
  },
  {
    num: "04",
    title: "Création de contenus vidéo | Studios & plateformes",
    sub: "Projet personnel · TikTok - Instagram",
    period: "Avr 2023 → présent",
    status: "live",
    statusLabel: "En cours",
    desc: "Création et animation de plusieurs comptes TikTok en autonomie. Production vidéo (After Effects, Premiere Pro), gestion de communautés et collaborations avec Lionsgate, Hulu, Canal+ et plusieurs studios majeurs.",
    results: "<strong>Résultats :</strong> plusieurs <strong>centaines de millions de vues</strong> cumulées. Maîtrise des algorithmes TikTok et des mécaniques de contenu viral."
  },
  {
    num: "05",
    title: "Stage Découverte | Meroje & Co",
    sub: "Agence de communication · Lyon",
    period: "Décembre 2019",
    status: "past",
    statusLabel: "Terminé",
    desc: "Première immersion en agence aux côtés d'un photographe professionnel. Couverture d'événements, découverte des codes de l'image et de la communication événementielle.",
    results: "<strong>Résultats :</strong> expérience fondatrice qui a confirmé ma vocation pour la communication."
  }
];

const SKILLS = [
  {
    num: "B.01",
    title: "Stratégie de <em>contenu</em>",
    teaser: "Le bon message, au bon moment, sur la bonne plateforme.",
    detail: "Une bonne communication ne s'improvise pas, elle s'anticipe. J'élabore des stratégies de contenu en posant les bonnes questions : à qui je parle, sur quel réseau, et avec quel objectif ? Plannings éditoriaux, ligne éditoriale et adaptation par plateforme."
  },
  {
    num: "B.02",
    title: "Community <em>management</em>",
    teaser: "Créer du lien pas juste poster des images.",
    detail: "J'anime et fédère des communautés en ligne en publiant des contenus engageants et en interagissant avec les abonnés. Adaptation aux codes de TikTok, Instagram, LinkedIn pour instaurer un dialogue naturel tout en veillant à l'e-réputation."
  },
  {
    num: "B.03",
    title: "Direction <em>visuelle</em>",
    teaser: "L'image, premier contact avec une marque.",
    detail: "Conception de visuels attractifs : affiches, publications réseaux, maquettes web, logos. Respect d'une charte graphique pour garantir une identité visuelle cohérente, professionnelle, agréable à l'œil."
  },
  {
    num: "B.04",
    title: "Analyse &amp; <em>reporting</em>",
    teaser: "Lire les chiffres comme on lit une histoire.",
    detail: "Analyse des KPIs (engagement, portée, clics) pour comprendre l'audience. Ajustement de la stratégie et recommandations concrètes pour faire mieux à la prochaine campagne."
  },
  {
    num: "B.05",
    title: "<em>Copy</em>writing",
    teaser: "Le mot juste clair, percutant, persuasif.",
    detail: "Rédaction structurée pour accrocher, susciter l'intérêt, inciter à passer à l'action du post Instagram à l'article de blog en passant par l'affiche, en gardant un ton naturel et adapté à la cible."
  },
  {
    num: "B.06",
    title: "Gestion de <em>projet</em>",
    teaser: "De la prise de brief au rendu final.",
    detail: "Coordination de missions multiples, respect des délais (rétroplannings), travail en équipe. Chaque étape s'enchaîne, les imprévus trouvent une solution rapide la livraison est tenue."
  }
];

const PROJECTS = [
  {
    num: "01",
    cat: "Stratégie événementielle",
    title: "JPO | Génie <em>Biologique</em>",
    date: "Déc 2025 — Fév 2026",
    cover: "assets/projet1.png",
    detail: "assets/imageprojet1.png",
    description: "Pour ce projet, j'ai conçu et déployé la <strong>stratégie de communication globale</strong> des Journées Portes Ouvertes du département Génie Biologique. Analyse SWOT, définition des cibles (lycéens, parents), création de supports visuels et digitaux : publications Instagram, vidéo d'interview, affiches interactives. Coordination des équipes bénévoles le jour J un projet 360° complet.",
    learning: "Véritable baptême en <strong>gestion de projet événementiel</strong> et en communication 360°. Passage de l'analyse stratégique à l'opérationnel terrain. La création de supports pertinents passe par un parcours visiteur fluide et la communication externe ne fonctionne pas sans des équipes alignées en interne. J'en ressors avec une vision transverse du métier.",
    tags: ["Stratégie de communication", "Création de contenus", "Gestion d'événement", "Analyse de cibles", "Communication interne"]
  },
  {
    num: "02",
    cat: "Identité de marque",
    title: "Solidélice | Association anti-<em>gaspillage</em>",
    date: "Déc 2025",
    cover: "assets/projet2.png",
    detail: "assets/imageprojet2.png",
    description: "Solidélice : projet d'association solidaire et anti-gaspillage. Construction de toute l'<strong>identité de marque</strong> en partant de zéro : stratégie digitale ciblée Instagram/TikTok, charte graphique complète (logo, couleurs, typographies), maquette du site web pensée UX, calendrier éditorial.",
    learning: "Glissement dans la peau d'un <strong>Brand Manager</strong>. Construction du socle et de l'ADN d'une marque de A à Z, traduction des valeurs en éléments graphiques cohérents. L'arborescence et l'UX du site m'ont appris à structurer l'information vers un tunnel de conversion. Le planning éditorial m'a forgé une vraie rigueur en content marketing long-terme.",
    tags: ["Identité visuelle", "Stratégie digitale", "UI/UX Design", "Planning éditorial", "Création de marque"]
  },
  {
    num: "03",
    cat: "Création de contenu",
    title: "Réseaux Sociaux | Collaboration &amp; <em>marques</em>",
    date: "2023 — Maintenant",
    cover: "assets/projet3.png",
    detail: "assets/imageprojet3.png",
    description: "Contacté par des marques pour promouvoir produits ou sorties de films directement sur TikTok. Gestion de l'<strong>ensemble du processus créatif</strong> : analyse du besoin, montage final, captation de l'attention en quelques secondes. Codes, musiques et tendances actuelles engagement maximisé tout en mettant le produit en valeur.",
    learning: "Plongée quotidienne dans la réalité du <strong>Social Media Management</strong> et du contenu UGC. Réactivité forte sur le trendjacking, jeu avec les algorithmes pour booster la visibilité organique. Maîtrise du <strong>storytelling court</strong> et du snack content. Échanges directs avec les annonceurs : brief créatif strict + résultats vision orientée ROI.",
    tags: ["Montage vidéo", "UGC", "Veille de tendances", "Relations marques", "Social Media Management"],
    extLink: "https://www.tiktok.com/@lionsgate/video/7620829557918059790"
  }
];

// =========================================================
// LOADER
// =========================================================
(() => {
  const loader = document.getElementById("loader");
  const num = document.getElementById("loaderNum");
  const fill = document.getElementById("loaderFill");
  let p = 0;
  const tick = () => {
    p += Math.random() * 14 + 6;
    if (p >= 100) p = 100;
    num.textContent = String(Math.floor(p)).padStart(2, "0");
    fill.style.right = (100 - p) + "%";
    if (p < 100) {
      setTimeout(tick, 90);
    } else {
      setTimeout(() => loader.classList.add("is-done"), 400);
    }
  };
  setTimeout(tick, 200);
})();

// =========================================================
// CUSTOM CURSOR — removed
// =========================================================

// =========================================================
// SCROLL PROGRESS + REVEALS
// =========================================================
(() => {
  const prog = document.getElementById("scrollProg");
  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    prog.style.transform = `scaleX(${max ? h.scrollTop / max : 0})`;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
})();

// =========================================================
// THEME TOGGLE
// =========================================================
(() => {
  const btn = document.getElementById("themeBtn");
  const root = document.documentElement;
  const saved = localStorage.getItem("dossier-theme");
  if (saved === "dark") root.dataset.theme = "dark";
  btn.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("dossier-theme", next);
  });
})();

// =========================================================
// MOBILE MENU (burger)
// =========================================================
(() => {
  const burger = document.getElementById("burgerBtn");
  const menu = document.getElementById("mobileMenu");
  const bg = document.getElementById("mobileMenuBg");
  if (!burger || !menu) return;
  const close = () => {
    menu.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };
  const open = () => {
    menu.classList.add("is-open");
    burger.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  burger.addEventListener("click", () => {
    if (menu.classList.contains("is-open")) close(); else open();
  });
  bg && bg.addEventListener("click", close);
  menu.querySelectorAll("[data-mobile-link]").forEach(a => {
    a.addEventListener("click", close);
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900 && menu.classList.contains("is-open")) close();
  });
})();

// =========================================================
// CLOCK (Dijon time)
// =========================================================
(() => {
  const el = document.getElementById("topTime");
  const elM = document.getElementById("mobileTime");
  const tick = () => {
    const d = new Date();
    const t = d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Paris" });
    const text = `Dijon · ${t}`;
    if (el) el.textContent = text;
    if (elM) elM.textContent = text;
  };
  tick();
  setInterval(tick, 30000);
})();

// =========================================================
// LANGUAGE CYCLE
// =========================================================
(() => {
  const name = document.getElementById("langName");
  const lvl = document.getElementById("langLevel");
  let i = 1;
  const render = () => {
    name.textContent = LANGS[i].name;
    lvl.textContent = LANGS[i].level;
  };
  document.getElementById("langPrev").addEventListener("click", () => {
    i = (i - 1 + LANGS.length) % LANGS.length;
    render();
  });
  document.getElementById("langNext").addEventListener("click", () => {
    i = (i + 1) % LANGS.length;
    render();
  });
  render();
})();

// =========================================================
// LEDGER (parcours)
// =========================================================
(() => {
  const root = document.getElementById("ledger");
  EXPERIENCES.forEach((e, idx) => {
    const row = document.createElement("div");
    row.className = "ledger__row";
    row.innerHTML = `
      <span class="ledger__num">${e.num}</span>
      <div class="ledger__title-wrap">
        <p class="ledger__title">${e.title}</p>
      </div>
      <div class="ledger__period-wrap">
        <p class="ledger__sub">${e.sub}</p>
      </div>
      <p class="ledger__period">${e.period}</p>
      <span class="ledger__status ledger__status--${e.status}">${e.statusLabel}</span>
      <span class="ledger__toggle">+</span>
      <div class="ledger__detail">
        <div class="ledger__detail-inner">
          <p class="ledger__desc">${e.desc}</p>
          <p class="ledger__results">${e.results}</p>
        </div>
      </div>
    `;
    row.addEventListener("click", () => row.classList.toggle("is-open"));
    root.appendChild(row);
  });
})();

// =========================================================
// SKILLS (flip cards)
// =========================================================
(() => {
  const root = document.getElementById("skills");
  SKILLS.forEach((s) => {
    const el = document.createElement("div");
    el.className = "skill";
    el.innerHTML = `
      <div class="skill__inner">
        <div class="skill__face skill__front">
          <span class="skill__num">${s.num}</span>
          <h4 class="skill__title">${s.title}</h4>
          <p class="skill__teaser">${s.teaser}</p>
          <span class="skill__hint">Retourner</span>
        </div>
        <div class="skill__face skill__back">
          <span class="skill__num">${s.num}</span>
          <p class="skill__back-text">${s.detail}</p>
          <span class="skill__hint">Retourner</span>
        </div>
      </div>
    `;
    el.addEventListener("click", () => el.classList.toggle("is-flipped"));
    root.appendChild(el);
  });
})();

// =========================================================
// PROJECTS LIST + HOVER PREVIEW + MODAL
// =========================================================
(() => {
  const list = document.getElementById("projects");

  PROJECTS.forEach((p) => {
    const row = document.createElement("div");
    row.className = "project";
    row.innerHTML = `
      <span class="project__num">${p.num}</span>
      <span class="project__cat">${p.cat}</span>
      <p class="project__title">${p.title}</p>
      <span class="project__date">${p.date}</span>
      <span class="project__arrow">→</span>
    `;
    row.addEventListener("click", () => openModal(p));
    list.appendChild(row);
  });

  // Modal
  const modal = document.getElementById("modal");
  const body = document.getElementById("modalBody");
  function openModal(p) {
    body.innerHTML = `
      <div class="modal__meta">
        <span>${p.num}</span>
        <span>${p.cat}</span>
        <span>${p.date}</span>
      </div>
      <h3 class="modal__title">${p.title}</h3>
      <div class="modal__img"><img src="${p.detail}" alt="" /></div>
      <p class="modal__label">Description</p>
      <p class="modal__text">${p.description}</p>
      <p class="modal__label">Ce que ça m'a apporté</p>
      <p class="modal__text">${p.learning}</p>
      <p class="modal__label">Compétences mobilisées</p>
      <div class="modal__tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
      ${p.extLink ? `<p style="margin-top:2rem"><a class="btn btn--ghost" href="${p.extLink}" target="_blank" rel="noopener">Voir la réalisation
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </a></p>` : ""}
    `;
    modal.classList.add("is-on");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.classList.remove("is-on");
    document.body.style.overflow = "";
  }
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalBg").addEventListener("click", closeModal);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
})();

// =========================================================
// EMAIL COPY
// =========================================================
(() => {
  const row = document.getElementById("rowEmail");
  const action = document.getElementById("emailAction");
  const toast = document.getElementById("toast");
  row.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("jorisbarthelemypro@gmail.com");
      action.textContent = "Copié ✓";
      toast.classList.add("is-on");
      setTimeout(() => {
        toast.classList.remove("is-on");
        action.textContent = "Copier →";
      }, 2200);
    } catch {}
  });
})();

// =========================================================
// SMOOTH ANCHORS + ACTIVE LINK
// =========================================================
(() => {
  document.querySelectorAll("[data-link]").forEach(a => {
    a.addEventListener("click", e => {
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const tg = document.querySelector(href);
      if (!tg) return;
      e.preventDefault();
      tg.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const links = document.querySelectorAll(".topbar__menu a");
  const ids = ["profil", "parcours", "savoirfaire", "dossiers", "contact"];
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const id = en.target.id;
        links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + id));
      }
    });
  }, { threshold: 0.4 });
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  });
})();
