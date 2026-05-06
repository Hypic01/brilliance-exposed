/* ============================================================
   Brilliance Exposed — site script
   SPA-like architecture: the navbar and footer stay in place
   across all pages. Clicking an internal link fetches the
   target page, extracts its <main> content, and swaps it
   into the current page — giving the feel of React/Next.js
   page transitions without a framework.

   On file:// URLs (double-click to open), fetch() is blocked
   by CORS, so the script falls back to a normal hard-navigate.
   For the smooth SPA transitions, serve via a local server:
   python3 -m http.server 8000  (from the project root)
   ============================================================ */
(function () {
  'use strict';

  // ===========================================================
  // Honoree data
  // ===========================================================
  const IMAGES_BASE = './Images/';
  const PLACEHOLDER_BIO = [
    'This portrait is part of the Brilliance Exposed 2026 collection &mdash; an international photographic series honoring Black-presenting professionals in Science, Technology, Engineering, Arts and Mathematics.',
    'Full biographies and interview segments for each honoree will be published alongside the inaugural exhibition opening at the Charles H. Wright Museum of African American History in Detroit, April 2026.'
  ];
  const HONOREES = [
    { id: 'h1', image: IMAGES_BASE + 'image13.jpeg', name: 'Featured Honoree', role: '2026 Portrait Series', bio: PLACEHOLDER_BIO, videoUrl: null },
    { id: 'h2', image: IMAGES_BASE + 'image6.jpeg',  name: 'Featured Honoree', role: '2026 Portrait Series', bio: PLACEHOLDER_BIO, videoUrl: null },
    { id: 'h3', image: IMAGES_BASE + 'image10.jpeg', name: 'Featured Honoree', role: '2026 Portrait Series', bio: PLACEHOLDER_BIO, videoUrl: null },
    { id: 'h4', image: IMAGES_BASE + 'image11.jpeg', name: 'Featured Honoree', role: '2026 Portrait Series', bio: PLACEHOLDER_BIO, videoUrl: null },
    { id: 'h5', image: IMAGES_BASE + 'image12.jpeg', name: 'Featured Honoree', role: '2026 Portrait Series', bio: PLACEHOLDER_BIO, videoUrl: null }
  ];

  // ===========================================================
  // Utilities
  // ===========================================================
  function forceReflow(el) { if (el) void el.offsetWidth; }
  function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

  // ===========================================================
  // Intro overlay (home page only, plays once per session)
  // ===========================================================
  (function initIntro() {
    const overlay = document.getElementById('introOverlay');
    if (!overlay) return;

    try {
      if (sessionStorage.getItem('be_intro_seen') === '1') {
        overlay.remove();
        document.body.classList.remove('intro-active');
        return;
      }
    } catch (e) {}

    const INTRO_DURATION = 7200;
    let dismissed = false;

    function markSeen() { try { sessionStorage.setItem('be_intro_seen', '1'); } catch (e) {} }

    function finish() {
      if (dismissed) return;
      dismissed = true;
      markSeen();
      document.body.classList.remove('intro-active');
      setTimeout(() => overlay.remove(), 400);
    }

    function skip() {
      if (dismissed) return;
      dismissed = true;
      markSeen();
      overlay.classList.add('skipped');
      document.body.classList.remove('intro-active');
      setTimeout(() => overlay.remove(), 650);
    }

    const autoTimer = setTimeout(finish, INTRO_DURATION);

    overlay.addEventListener('click', () => { clearTimeout(autoTimer); skip(); });
    const keyHandler = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        clearTimeout(autoTimer);
        skip();
        document.removeEventListener('keydown', keyHandler);
      }
    };
    document.addEventListener('keydown', keyHandler);

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      clearTimeout(autoTimer);
      skip();
    }
  })();

  // ===========================================================
  // Persistent: navbar scroll state
  // ===========================================================
  const navbar = document.getElementById('navbar');
  function checkNavScroll() {
    if (!navbar) return;
    if (window.pageYOffset > 60) navbar.classList.add('is-scrolled');
    else navbar.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', checkNavScroll, { passive: true });
  checkNavScroll();

  // ===========================================================
  // Persistent: mobile hamburger
  // ===========================================================
  const hamburger = document.getElementById('navHamburger');
  const mobilePanel = document.getElementById('navMobilePanel');
  const navBackdrop = document.getElementById('navBackdrop');

  function closeMobilePanel() {
    if (!hamburger) return;
    hamburger.classList.remove('is-open');
    if (mobilePanel) { mobilePanel.classList.remove('is-open'); mobilePanel.setAttribute('aria-hidden', 'true'); }
    if (navBackdrop) navBackdrop.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger && mobilePanel) {
    const openPanel = () => {
      hamburger.classList.add('is-open');
      mobilePanel.classList.add('is-open');
      if (navBackdrop) navBackdrop.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
      mobilePanel.setAttribute('aria-hidden', 'false');
      const firstLink = mobilePanel.querySelector('a');
      if (firstLink) firstLink.focus();
    };
    hamburger.addEventListener('click', () => {
      hamburger.classList.contains('is-open') ? closeMobilePanel() : openPanel();
    });
    if (navBackdrop) navBackdrop.addEventListener('click', closeMobilePanel);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && hamburger.classList.contains('is-open')) closeMobilePanel();
    });
  }

  // ===========================================================
  // Persistent: portrait modal (queries DOM dynamically so it
  // works after SPA content swaps — modal lives inside <main>)
  // ===========================================================
  let lastFocusedBeforeModal = null;

  function openPortraitModal(honoreeIndex) {
    const modal = document.getElementById('portraitModal');
    if (!modal) return;
    const h = HONOREES[honoreeIndex];
    if (!h) return;

    const imgEl  = modal.querySelector('[data-modal-image]');
    const nameEl = modal.querySelector('[data-modal-name]');
    const roleEl = modal.querySelector('[data-modal-role]');
    const bioEl  = modal.querySelector('[data-modal-bio]');
    const videoBtn = modal.querySelector('[data-modal-video]');

    if (imgEl)  { imgEl.src = h.image; imgEl.alt = 'Portrait of ' + h.name.replace(/&[^;]+;/g, ''); }
    if (nameEl) nameEl.innerHTML = h.name;
    if (roleEl) roleEl.innerHTML = h.role;
    if (bioEl)  bioEl.innerHTML  = h.bio.map(p => '<p>' + p + '</p>').join('');

    if (videoBtn) {
      if (h.videoUrl) {
        videoBtn.href = h.videoUrl;
        videoBtn.removeAttribute('aria-disabled');
        videoBtn.innerHTML = 'Watch the Interview <span class="arrow">&rarr;</span>';
      } else {
        videoBtn.href = '#';
        videoBtn.setAttribute('aria-disabled', 'true');
        videoBtn.innerHTML = 'Interview Coming Soon';
      }
    }

    lastFocusedBeforeModal = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    teardownHeroCarousel();

    const closeBtn = modal.querySelector('.portrait-modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function closePortraitModal() {
    const modal = document.getElementById('portraitModal');
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    initHeroCarousel();
    if (lastFocusedBeforeModal && typeof lastFocusedBeforeModal.focus === 'function') {
      lastFocusedBeforeModal.focus();
    }
  }

  // Modal close listeners (persistent — these delegate to the dynamic element)
  document.addEventListener('click', (e) => {
    if (e.target.matches('[data-modal-close]') || e.target.closest('[data-modal-close]')) {
      closePortraitModal();
    }
  });
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('portraitModal');
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) closePortraitModal();
  });
  // Focus trap (delegated)
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const modal = document.getElementById('portraitModal');
    if (!modal || !modal.classList.contains('is-open')) return;
    const focusable = modal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  // ===========================================================
  // Per-page: hero carousel (init / teardown)
  // ===========================================================
  let carouselTimer = null;
  let currentSlide = 0;
  let heroClickFn = null;
  let heroKeyFn = null;

  // ===========================================================
  // HERO LABELS (v1, placeholder data)
  // See: docs/superpowers/specs/2026-05-06-hero-discipline-labels-design.md
  // Labels are static HTML inside each .hero-portrait-slide and inherit
  // .is-active state automatically. v2 will replace placeholders with
  // Alexis's real per-subject metadata (separate spec).
  // ===========================================================
  function initHeroCarousel() {
    const heroPortrait = document.getElementById('heroPortrait');
    if (!heroPortrait) return;
    const slides = heroPortrait.querySelectorAll('.hero-portrait-slide');
    if (!slides.length) return;

    currentSlide = 0;

    function showSlide(idx) {
      currentSlide = ((idx % slides.length) + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        if (i === currentSlide) {
          slide.classList.remove('is-active');
          forceReflow(slide);
          slide.classList.add('is-active');
        } else {
          slide.classList.remove('is-active');
        }
      });
    }

    function start() {
      if (carouselTimer) return;
      carouselTimer = setInterval(() => showSlide(currentSlide + 1), 5000);
    }

    showSlide(0);
    start();

    heroClickFn = () => openPortraitModal(currentSlide);
    heroKeyFn = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPortraitModal(currentSlide); } };

    heroPortrait.addEventListener('click', heroClickFn);
    heroPortrait.addEventListener('keydown', heroKeyFn);
    heroPortrait.setAttribute('role', 'button');
    heroPortrait.setAttribute('tabindex', '0');
    heroPortrait.setAttribute('aria-label', 'View featured honoree profile');
  }

  function teardownHeroCarousel() {
    if (carouselTimer) { clearInterval(carouselTimer); carouselTimer = null; }
    const heroPortrait = document.getElementById('heroPortrait');
    if (heroPortrait && heroClickFn) heroPortrait.removeEventListener('click', heroClickFn);
    if (heroPortrait && heroKeyFn) heroPortrait.removeEventListener('keydown', heroKeyFn);
    heroClickFn = null;
    heroKeyFn = null;
  }

  // ===========================================================
  // Per-page: reveal-on-scroll
  // ===========================================================
  let revealObserver = null;

  function initReveal() {
    if (revealObserver) revealObserver.disconnect();
    const els = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('is-visible'));
      return;
    }
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -80px 0px', threshold: 0.1 });
    els.forEach(el => revealObserver.observe(el));
  }

  // ===========================================================
  // Per-page: form handlers
  // ===========================================================
  function initForms() {
    document.querySelectorAll('form[data-form]').forEach(form => {
      if (form._beHandled) return;    // prevent double-binding
      form._beHandled = true;
      const status = form.querySelector('[data-form-status]') ||
                     form.parentElement.querySelector('[data-form-status]');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (status) {
          const kind = form.dataset.form;
          if (kind === 'newsletter') status.textContent = 'Subscribed. We will be in touch.';
          else if (kind === 'contact') status.textContent = 'Thank you — your message has been received.';
          else status.textContent = 'Received. Thank you.';
        }
        form.reset();
      });
    });
  }

  // ===========================================================
  // Per-page: gallery category filter
  // ===========================================================
  function initGalleryFilter() {
    const tabs = document.querySelectorAll('#galleryTabs .gallery-v2-tab');
    const cards = document.querySelectorAll('#galleryGrid .gallery-v2-card');
    if (!tabs.length || !cards.length) return;
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const cat = tab.dataset.cat;
        tabs.forEach(t => {
          const isActive = t === tab;
          t.classList.toggle('is-active', isActive);
          t.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        // Immediately swap visibility, fade in new cards
        cards.forEach(card => {
          const match = cat === 'all' || card.dataset.cat === cat;
          if (!match) {
            card.hidden = true;
            card.classList.remove('is-hiding');
          } else if (card.hidden) {
            card.classList.add('is-hiding');
            card.hidden = false;
            forceReflow(card);
            card.classList.remove('is-hiding');
          }
        });
      });
    });
  }

  // ===========================================================
  // Page init / teardown orchestrators
  // ===========================================================
  function initPage() {
    initHeroCarousel();
    initReveal();
    initForms();
    initGalleryFilter();
  }

  function teardownPage() {
    teardownHeroCarousel();
    if (revealObserver) { revealObserver.disconnect(); revealObserver = null; }
  }

  // Initial page setup
  initPage();

  // ===========================================================
  // SPA router — intercept internal links, fetch + swap <main>
  // Navbar and footer stay in place. Falls back to hard-navigate
  // if fetch fails (e.g. on file:// due to CORS).
  // ===========================================================
  function updateNavActive(href) {
    const filename = href.split('/').pop().split('#')[0].split('?')[0] || 'index.html';

    document.querySelectorAll('.nav-links a').forEach(a => {
      const lf = a.getAttribute('href').split('#')[0];
      if (lf === filename) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    document.querySelectorAll('.nav-mobile-panel a').forEach(a => {
      const lf = a.getAttribute('href').split('#')[0];
      if (lf === filename) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    const donateBtn = document.querySelector('.nav-donate');
    if (donateBtn) {
      if (filename === 'donate.html') donateBtn.setAttribute('aria-current', 'page');
      else donateBtn.removeAttribute('aria-current');
    }
  }

  let isNavigating = false;

  async function navigateTo(href) {
    if (isNavigating) return;
    isNavigating = true;

    const main = document.getElementById('main');
    if (!main) { window.location.href = href; return; }

    // Close mobile panel if open
    closeMobilePanel();

    // 1. Fade out current content
    main.style.transition = 'opacity 0.35s cubic-bezier(0.16,1,0.3,1), transform 0.35s cubic-bezier(0.16,1,0.3,1)';
    main.style.opacity = '0';
    main.style.transform = 'translateY(12px)';

    await delay(380);

    // 2. Teardown page-specific JS
    teardownPage();

    try {
      // 3. Fetch target page
      const res = await fetch(href);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const newMain = doc.querySelector('#main');
      if (!newMain) throw new Error('No #main in target page');

      // 4. Swap content
      main.innerHTML = newMain.innerHTML;

      // 5. Update document title
      document.title = doc.title;

      // 6. Push URL (only if this isn't a popstate-triggered navigation)
      if (href !== window.location.href) {
        history.pushState({ href: href }, '', href);
      }

      // 7. Update nav active states
      updateNavActive(href);

      // 8. Scroll to top (or to hash)
      const hash = href.split('#')[1];
      if (hash) {
        const target = document.getElementById(hash);
        if (target) target.scrollIntoView({ behavior: 'instant' });
        else window.scrollTo(0, 0);
      } else {
        window.scrollTo(0, 0);
      }

      // 9. Clean body state
      document.body.classList.remove('intro-active', 'is-leaving', 'modal-open');
      checkNavScroll();

      // 10. Re-init page-specific JS
      initPage();

      // 11. Fade in new content
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          main.style.opacity = '1';
          main.style.transform = 'translateY(0)';
          isNavigating = false;
        });
      });

    } catch (err) {
      // Fetch failed (file://, CORS, network) — fall back to hard navigation
      isNavigating = false;
      window.location.href = href;
    }
  }

  // Click interceptor for internal links
  document.addEventListener('click', (e) => {
    if (document.body.classList.contains('intro-active')) return;
    if (isNavigating) return;

    const link = e.target.closest('a');
    if (!link) return;

    // Respect modifier keys
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Skip non-navigational links
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    if (link.target === '_blank' || link.hasAttribute('target')) return;
    if (link.hasAttribute('data-no-transition')) return;
    if (link.getAttribute('aria-disabled') === 'true') return;

    // Only intercept same-origin internal pages
    try {
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
    } catch (err) { return; }

    e.preventDefault();
    navigateTo(href);
  });

  // Handle back/forward browser buttons
  window.addEventListener('popstate', () => {
    navigateTo(window.location.href);
  });

  // Mobile panel links also go through the SPA router
  if (mobilePanel) {
    mobilePanel.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', (e) => {
        closeMobilePanel();
        // The main click interceptor above will handle the SPA navigation
      });
    });
  }

})();
