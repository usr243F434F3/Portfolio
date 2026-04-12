/* ═══════════════════════════════════════════
   main.js — Portfolio Barthélémy Joris
═══════════════════════════════════════════ */

// ── LOADER ────────────────────────────────
(function () {
  const loader = document.getElementById('loader');
  const bar    = document.getElementById('loaderBar');
  const pct    = document.getElementById('loaderPct');
  let progress = 0;

  // Progression autonome jusqu'à 100 — ne dépend PAS de window.load
  // tick toutes les 20ms, ~5s au total
  const iv = setInterval(() => {
    const step = Math.random() * 1.8 + 0.8;
    progress += step;
    if (progress >= 100) {
      progress = 100;
      clearInterval(iv);
      bar.style.width = '100%';
      pct.textContent = '100%';
      setTimeout(() => loader.classList.add('hidden'), 400);
      return;
    }
    bar.style.width = progress + '%';
    pct.textContent = Math.round(progress) + '%';
  }, 20);
})();



// ── NAVBAR SCROLL ─────────────────────────
const nav = document.getElementById('nav');

// ── BARRE DE PROGRESSION ──────────────────
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
  const total = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = (window.scrollY / total * 100) + '%';
}, { passive: true });


// ── HERO FOND DYNAMIQUE ───────────────────
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  if (!hero) return;
  const ratio = Math.min(window.scrollY / hero.offsetHeight, 1);
  const mid   = Math.round(13 + (11 - 13) * ratio);
  const b     = Math.round(38 + (11 - 38) * ratio);
  hero.style.background = `linear-gradient(135deg,#0B0B0B 0%,rgb(${mid},${mid + 5},${b}) 50%,#0B0B0B 100%)`;
}, { passive: true });


// ── FADE-UP ───────────────────────────────
document.querySelectorAll('.fade-up').forEach(el => {
  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = Array.from(entry.target.parentElement.children).indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 70}ms`;
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }).observe(el);
});


// ── COMPTEURS ANIMÉS (stats profil) ──────
document.querySelectorAll('.stat__num').forEach(el => {
  const raw    = el.textContent.trim();          // ex: "15", "5+", "3"
  const suffix = raw.replace(/[0-9]/g, '');      // garde le "+" si présent
  const target = parseInt(raw, 10);
  if (isNaN(target)) return;

  el.textContent = '0' + suffix;                 // part de 0

  const duration = 1600; // ms
  const startTime = { value: null };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(el);

      const start = performance.now();
      function tick(now) {
        const elapsed  = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutExpo pour un effet dynamique qui ralentit à la fin
        const ease     = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current  = Math.round(ease * target);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.3 });

  observer.observe(el);
});


// ── SMOOTH SCROLL ─────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});


// ── ANIMATION ENTRÉE HERO ─────────────────
window.addEventListener('DOMContentLoaded', () => {
  [
    { sel: '.hero__photo-col', delay: 150 },
    { sel: '.hero__badge',     delay: 300 },
    { sel: '.hero__name',      delay: 450 },
    { sel: '.hero__title-role',delay: 550 },
    { sel: '.hero__subtitle',  delay: 620 },
    { sel: '.hero__quote',     delay: 700 },
    { sel: '.hero__actions',   delay: 800 },
  ].forEach(({ sel, delay }) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.style.cssText += 'opacity:0;transform:translateY(16px);transition:opacity .7s ease,transform .7s ease;';
    setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, delay);
  });
});


// ── PHOTO HERO ────────────────────────────
const heroPhoto = document.getElementById('heroPhoto');
if (heroPhoto) {
  heroPhoto.addEventListener('click', () => {
    heroPhoto.classList.remove('clicked');
    void heroPhoto.offsetWidth;
    heroPhoto.classList.add('clicked');
  });
}


// ── SWITCH LANGUES ────────────────────────
const langBtnNext  = document.getElementById('langBtnNext');
const langBtnPrev  = document.getElementById('langBtnPrev');
const langName    = document.getElementById('langName');
const langLevel   = document.getElementById('langLevel');
const langDisplay = langName?.closest('.lang-switch__display');
const langs = [
  { name: 'Anglais',  level: 'B2 — Écrit &amp; Parlé' },
  { name: 'Espagnol', level: 'B2 — Écrit &amp; Parlé' },
];
let langIndex = 0, langBusy = false;

function switchLang(dir) {
  if (langBusy) return; langBusy = true;
  langDisplay.classList.add('animating');
  setTimeout(() => {
    langIndex = (langIndex + dir + langs.length) % langs.length;
    langName.textContent = langs[langIndex].name;
    langLevel.innerHTML  = langs[langIndex].level;
    langDisplay.classList.remove('animating');
    langBusy = false;
  }, 280);
}

if (langBtnNext && langDisplay) langBtnNext.addEventListener('click', () => switchLang(1));
if (langBtnPrev && langDisplay) langBtnPrev.addEventListener('click', () => switchLang(-1));



// ── MODAL SYSTEM ─────────────────────────
function openModal(id) {
  const o = document.getElementById(id);
  if (!o) return;
  o.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(o) {
  if (!o) return;
  o.classList.remove('open');
  if (!document.querySelector('.modal-overlay.open')) document.body.style.overflow = '';
}

document.querySelectorAll('.modal-overlay').forEach(o => {
  o.addEventListener('click', (e) => { if (e.target === o) closeModal(o); });
  o.querySelector('.modal-close')?.addEventListener('click', () => closeModal(o));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.open').forEach(o => closeModal(o));
});

document.querySelectorAll('.comp-card[data-modal]').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.modal));
});

document.querySelectorAll('.real-card[data-modal]').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.modal));
});


// ── PARCOURS — clic sur toute la ligne ────
document.querySelectorAll('.exp-item').forEach(item => {
  item.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.exp-item.open').forEach(el => el.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});


// ── COPIER EMAIL ──────────────────────────
const copyEmail = document.getElementById('copyEmail');
const toast     = document.getElementById('toast');
if (copyEmail && toast) {
  copyEmail.addEventListener('click', () => {
    navigator.clipboard.writeText('jorisbarthelemypro@gmail.com').then(() => {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2200);
    });
  });
}


// ── TICKER ────────────────────────────────
const ticker = document.querySelector('.ticker__track');
if (ticker) {
  ticker.addEventListener('mouseenter', () => ticker.style.animationPlayState = 'paused');
  ticker.addEventListener('mouseleave', () => ticker.style.animationPlayState = 'running');
}
