/* ============================================
   Motion System — Dossier
   --------------------------------------------
   Principles:
   • Apple-grade easing: cubic-bezier(0.32, 0.72, 0.24, 1)
   • Durations: micro 200ms · short 400ms · medium 700ms · long 1100ms
   • Transforms + opacity only · GPU-accelerated · rAF-throttled
   • Reduced-motion: full kill-switch
   ============================================ */

(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  // ============================================================
  // 1 · STAGGERED REVEALS (refined)
  // Re-observe .reveal and add cascade delay to direct children
  // for groups that contain multiple animated items.
  // ============================================================
  (() => {
    // Mark .reveal containers so children stagger in
    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el) => {
      // If element has multiple identifiable children, stagger them
      const kids = el.querySelectorAll(
        ":scope > .stat, :scope > .ss-card, :scope > .skill, :scope > .project, :scope > .meta-row, :scope > .contact__row, :scope > .ledger__row"
      );
      if (kids.length > 1) {
        el.classList.add("reveal--stagger");
        kids.forEach((k, i) => {
          k.style.setProperty("--stagger-i", i);
        });
      }
    });
  })();

  // ============================================================
  // 2 · HERO PARALLAX
  // Subtle scroll-tied transforms on portrait, glow blobs,
  // hero text. All transforms only, capped magnitude.
  // ============================================================
  (() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const portrait = hero.querySelector(".hero__portrait");
    const title = hero.querySelector(".hero__title");
    const lede = hero.querySelector(".hero__lede");
    const foot = hero.querySelector(".hero__foot");
    const blobs = document.querySelectorAll("body::before, body::after"); // pseudo, can't grab — use body var

    // Body ambient glow parallax via CSS var
    let raf = null;
    const update = () => {
      raf = null;
      const y = window.scrollY;
      const heroH = hero.offsetHeight;
      const t = clamp(y / heroH, 0, 1);

      // Portrait: gentle lift + scale recede
      if (portrait) {
        portrait.style.transform = `translate3d(0, ${y * 0.08}px, 0) scale(${1 - t * 0.03})`;
      }
      // Title: faster downward drift creates depth (foreground)
      if (title) {
        title.style.transform = `translate3d(0, ${y * -0.12}px, 0)`;
        title.style.opacity = String(1 - t * 0.4);
      }
      if (lede) {
        lede.style.transform = `translate3d(0, ${y * -0.08}px, 0)`;
        lede.style.opacity = String(1 - t * 0.6);
      }
      if (foot) {
        foot.style.opacity = String(1 - t * 0.8);
      }

      // Body ambient glow parallax (CSS var consumed in styles.css)
      document.documentElement.style.setProperty("--scroll-y", y + "px");
      document.documentElement.style.setProperty("--scroll-t", String(t));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
  })();

  // ============================================================
  // 3 · HERO PORTRAIT — POINTER TILT
  // Soft 3D rotation around portrait that follows pointer.
  // ============================================================
  (() => {
    const portrait = document.querySelector(".hero__portrait");
    if (!portrait) return;
    const img = portrait.querySelector("img");
    let tx = 0, ty = 0, rx = 0, ry = 0;
    let mx = 0, my = 0;

    portrait.addEventListener("pointermove", (e) => {
      const r = portrait.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      my = ((e.clientY - r.top) / r.height - 0.5) * 2;
    });
    portrait.addEventListener("pointerleave", () => { mx = 0; my = 0; });

    const loop = () => {
      rx = lerp(rx, my * -3, 0.08);    // tilt down on hover-bottom
      ry = lerp(ry, mx * 4, 0.08);     // tilt right on hover-right
      tx = lerp(tx, mx * 6, 0.08);
      ty = lerp(ty, my * 6, 0.08);
      portrait.style.setProperty("--tilt-rx", rx + "deg");
      portrait.style.setProperty("--tilt-ry", ry + "deg");
      if (img) img.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(1.06)`;
      requestAnimationFrame(loop);
    };
    loop();
  })();

  // ============================================================
  // 4 · MAGNETIC BUTTONS
  // Soft pointer-follow on primary CTAs and key chips.
  // ============================================================
  (() => {
    const targets = document.querySelectorAll(
      ".topbar__theme, .lang-cycle button, .modal__close"
    );
    targets.forEach((el) => {
      let raf = null;
      let tx = 0, ty = 0, cx = 0, cy = 0;
      const STR = 0.28;  // strength
      const RAD = 1.2;   // radius multiplier

      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const dist = Math.hypot(dx, dy);
        const max = Math.max(r.width, r.height) * RAD;
        if (dist < max) {
          tx = dx * STR;
          ty = dy * STR;
        } else {
          tx = 0; ty = 0;
        }
        if (!raf) raf = requestAnimationFrame(loop);
      };
      const loop = () => {
        cx = lerp(cx, tx, 0.18);
        cy = lerp(cy, ty, 0.18);
        el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
        if (Math.abs(cx - tx) > 0.05 || Math.abs(cy - ty) > 0.05) {
          raf = requestAnimationFrame(loop);
        } else {
          raf = null;
          if (Math.abs(tx) < 0.1 && Math.abs(ty) < 0.1) {
            el.style.transform = "";
          }
        }
      };
      const onLeave = () => { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(loop); };

      // Use parent-region listening so the field of attraction is generous
      const parent = el.closest("section, header, .modal, .lang-cycle") || document;
      parent.addEventListener("pointermove", onMove);
      parent.addEventListener("pointerleave", onLeave);
    });
  })();

  // ============================================================
  // 5 · LIQUID-GLASS NAVBAR
  // • Adds .is-floating past 80px — CSS handles the morph.
  // • Drives a sliding pill indicator behind the active link
  //   via --ind-x / --ind-w / --ind-o CSS vars on .topbar__menu.
  // • Indicator follows hover; settles back on the active link.
  // • Recomputes on resize + on state change (sizes change with floating).
  // ============================================================
  (() => {
    const bar = document.querySelector(".topbar");
    if (!bar) return;
    const menu = bar.querySelector(".topbar__menu");
    const links = menu ? Array.from(menu.querySelectorAll("a")) : [];

    // — Scroll → floating state
    let last = false;
    const onScroll = () => {
      const past = window.scrollY > 60;
      if (past !== last) {
        bar.classList.toggle("is-floating", past);
        last = past;
        // size of links changes with state — recompute after morph settles
        setTimeout(updateIndicator, 480);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // — Sliding pill indicator
    if (!menu || !links.length) return;
    let activeLink = links.find((l) => l.classList.contains("active")) || null;
    let hoverLink = null;

    const setIndicator = (link, opacity = 1) => {
      if (!link) {
        menu.style.setProperty("--ind-o", "0");
        return;
      }
      const mr = menu.getBoundingClientRect();
      const lr = link.getBoundingClientRect();
      menu.style.setProperty("--ind-x", lr.left - mr.left + "px");
      menu.style.setProperty("--ind-w", lr.width + "px");
      menu.style.setProperty("--ind-o", String(opacity));
    };
    const updateIndicator = () => setIndicator(hoverLink || activeLink);

    links.forEach((l) => {
      l.addEventListener("pointerenter", () => {
        hoverLink = l;
        updateIndicator();
      });
      l.addEventListener("pointerleave", () => {
        hoverLink = null;
        updateIndicator();
      });
    });
    menu.addEventListener("pointerleave", () => {
      hoverLink = null;
      updateIndicator();
    });

    // Watch for active class changes from app.js's IntersectionObserver
    const mo = new MutationObserver(() => {
      activeLink = links.find((l) => l.classList.contains("active")) || null;
      if (!hoverLink) updateIndicator();
    });
    links.forEach((l) =>
      mo.observe(l, { attributes: true, attributeFilter: ["class"] })
    );

    window.addEventListener("resize", updateIndicator);
    // Initial paint after layout settles
    requestAnimationFrame(() => requestAnimationFrame(updateIndicator));
  })();

  // ============================================================
  // 6 · SECTION KICKER — reveal-on-enter line draw
  // The kicker line draws from 0 → full when its section enters.
  // ============================================================
  (() => {
    const kickers = document.querySelectorAll(".kicker");
    if (!kickers.length) return;
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("kicker--in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    kickers.forEach((k) => io.observe(k));
  })();

  // ============================================================
  // 7 · SCROLL-LINKED PROJECTS — refine project row hover
  // Slight horizontal nudge on hover instead of CSS-only.
  // (No-op safety: works even if elements absent.)
  // ============================================================
  // Handled in styles.css via :hover; kept here for future hooks.

})();
