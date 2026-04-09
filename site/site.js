/* ============================================================
   Brilliance Exposed — shared site script
   Loaded on every page.
   Feature-detects presence of each DOM element so pages
   only run the behaviors they actually need.
   ============================================================ */
(function () {
  'use strict';

  // --------------------------------------------------------
  // Honoree data — shared between the hero carousel and the modal.
  // Bios are third-person paraphrases of the captions baked into
  // the asset JPEGs — safe to edit or replace with researched copy.
  // videoUrl: null means "interview not yet published" and renders
  // the Watch the Interview button as disabled (aria-disabled).
  // --------------------------------------------------------
  const ASSET_BASE = '../assets/images/rebrillianceexposedxdfakickoffteamrosterinformatio/';
  const HONOREES = [
    {
      id: 'clemons',
      image: ASSET_BASE + 'image0.jpeg',
      name: 'William &ldquo;Bil&rdquo; Clemons Jr.',
      role: 'Structural Biologist &mdash; Caltech',
      quote: '&ldquo;Decoding the ribosome with Nobel laureate Venki Ramakrishnan &mdash; proof that the machinery of life is itself a work of architecture.&rdquo;',
      bio: [
        'Dr. William &ldquo;Bil&rdquo; Clemons Jr. is a Professor of Biochemistry at Caltech whose structural biology research has helped decode the atomic architecture of the ribosome &mdash; the molecular machinery responsible for translating genetic code into the proteins that build all life.',
        'He completed his doctoral work with Nobel laureate Venki Ramakrishnan and has since focused on the structure and function of membrane proteins, including the SecY channel and chaperones involved in tail-anchored protein targeting. He was elected a member of the American Academy of Arts &amp; Sciences.'
      ],
      videoUrl: null
    },
    {
      id: 'west',
      image: ASSET_BASE + 'image1.jpeg',
      name: 'Dr. Gladys West',
      role: 'Mathematician &mdash; GPS Pioneer',
      quote: '&ldquo;Her mathematical modeling of Earth&rsquo;s shape is the geodesic foundation beneath every GPS signal in the world.&rdquo;',
      bio: [
        'Dr. Gladys West is a mathematician whose contributions to the mathematical modeling of the precise shape of the Earth laid the computational foundation for the Global Positioning System. Her satellite-geodesy models, developed over decades at the U.S. Naval Surface Warfare Center, were later incorporated directly into the GPS we rely on today.',
        'In 2018 she was inducted into the United States Air Force Hall of Fame &mdash; a rare honor that publicly acknowledged work she had quietly carried for more than forty years.'
      ],
      videoUrl: null
    },
    {
      id: 'alexander',
      image: ASSET_BASE + 'image2.jpeg',
      name: 'Dr. Stephon Alexander',
      role: 'Theoretical Physicist &mdash; String Theory &amp; Cosmology',
      quote: '&ldquo;Co-inventor of D-Brane cosmic inflation &mdash; where the mathematics of strings meets the improvisational structure of jazz.&rdquo;',
      bio: [
        'Dr. Stephon Alexander is a theoretical physicist specializing in string theory and cosmology, where the physics of superstrings is applied to long-standing questions about the origin of the universe. He co-invented a model of cosmic inflation based on higher-dimensional hyper-surfaces in string theory called D-Branes.',
        'He is also a jazz saxophonist, and his book <em>The Jazz of Physics</em> argues that cosmology and improvisational music share a common grammar &mdash; both are, in his words, "the physics of possibility."'
      ],
      videoUrl: null
    }
  ];

  // --------------------------------------------------------
  // Helper: simple reflow to restart a CSS animation
  // --------------------------------------------------------
  function forceReflow(el) { if (el) void el.offsetWidth; }

  // --------------------------------------------------------
  // Landing intro overlay (home page only)
  // --------------------------------------------------------
  (function initIntro() {
    const overlay = document.getElementById('introOverlay');
    if (!overlay) return;

    // Total duration must match CSS animation timings (see styles.css)
    // Slow cinematic intro:
    // quote in 0.25+1.0, out 2.85+0.75, logo in 3.65+0.85, out 5.55+0.75, overlay out 6.2+0.9 ≈ 7.1s
    const INTRO_DURATION = 7200;
    let dismissed = false;

    function finish() {
      if (dismissed) return;
      dismissed = true;
      document.body.classList.remove('intro-active');
      setTimeout(() => overlay.remove(), 400);
    }

    function skip() {
      if (dismissed) return;
      dismissed = true;
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

  // --------------------------------------------------------
  // Page transitions — JS-driven fade overlay
  // Masks the browser's native navigation flash. Works even on
  // file:// URLs (unlike the CSS View Transitions API).
  // --------------------------------------------------------
  (function initPageTransitions() {
    document.addEventListener('click', (e) => {
      // Don't intercept while the intro overlay is still playing
      if (document.body.classList.contains('intro-active')) return;
      if (document.body.classList.contains('is-leaving')) return;

      const link = e.target.closest('a');
      if (!link) return;

      // Respect modifier keys (cmd/ctrl/shift/alt open in new tab)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Skip in-page anchors, external links, mailto/tel, new tabs,
      // aria-disabled links, and anything explicitly opted out.
      if (href.startsWith('#')) return;
      if (href.startsWith('mailto:') || href.startsWith('tel:')) return;
      if (link.target === '_blank' || link.hasAttribute('target')) return;
      if (link.hasAttribute('data-no-transition')) return;
      if (link.getAttribute('aria-disabled') === 'true') return;

      // External (different origin) links skip the transition
      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;
      } catch (err) { return; }

      e.preventDefault();
      document.body.classList.add('is-leaving');
      // Slightly longer than the CSS animation so it finishes cleanly
      setTimeout(() => { window.location.href = href; }, 380);
    });

    // Back/forward navigation via bfcache — clear leaving state
    window.addEventListener('pageshow', (e) => {
      if (e.persisted) {
        document.body.classList.remove('is-leaving');
      }
    });
  })();

  // --------------------------------------------------------
  // Navbar scroll state
  // --------------------------------------------------------
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.pageYOffset > 60) navbar.classList.add('is-scrolled');
      else navbar.classList.remove('is-scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --------------------------------------------------------
  // Mobile hamburger + backdrop + focus return
  // --------------------------------------------------------
  const hamburger = document.getElementById('navHamburger');
  const mobilePanel = document.getElementById('navMobilePanel');
  const navBackdrop = document.getElementById('navBackdrop');

  if (hamburger && mobilePanel) {
    const closePanel = () => {
      hamburger.classList.remove('is-open');
      mobilePanel.classList.remove('is-open');
      if (navBackdrop) navBackdrop.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobilePanel.setAttribute('aria-hidden', 'true');
      hamburger.focus();
    };
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
      const isOpen = hamburger.classList.contains('is-open');
      if (isOpen) closePanel();
      else openPanel();
    });
    mobilePanel.querySelectorAll('a').forEach(a => a.addEventListener('click', closePanel));
    if (navBackdrop) navBackdrop.addEventListener('click', closePanel);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && hamburger.classList.contains('is-open')) closePanel();
    });
  }

  // --------------------------------------------------------
  // Portrait modal — honoree detail view
  // --------------------------------------------------------
  const portraitModal = document.getElementById('portraitModal');
  let lastFocusedBeforeModal = null;

  function openPortraitModal(honoreeIndex) {
    if (!portraitModal) return;
    const h = HONOREES[honoreeIndex];
    if (!h) return;

    const imgEl  = portraitModal.querySelector('[data-modal-image]');
    const nameEl = portraitModal.querySelector('[data-modal-name]');
    const roleEl = portraitModal.querySelector('[data-modal-role]');
    const bioEl  = portraitModal.querySelector('[data-modal-bio]');
    const videoBtn = portraitModal.querySelector('[data-modal-video]');

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
    portraitModal.classList.add('is-open');
    portraitModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    stopCarousel();

    const closeBtn = portraitModal.querySelector('.portrait-modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function closePortraitModal() {
    if (!portraitModal) return;
    portraitModal.classList.remove('is-open');
    portraitModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    startCarousel();
    if (lastFocusedBeforeModal && typeof lastFocusedBeforeModal.focus === 'function') {
      lastFocusedBeforeModal.focus();
    }
  }

  if (portraitModal) {
    portraitModal.addEventListener('click', (e) => {
      if (e.target.matches('[data-modal-close]') || e.target.closest('[data-modal-close]')) {
        closePortraitModal();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && portraitModal.classList.contains('is-open')) closePortraitModal();
    });

    // Simple focus trap inside the modal
    portraitModal.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      const focusable = portraitModal.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  // --------------------------------------------------------
  // Hero — full-viewport portrait slideshow (home page only)
  // Slow Ken Burns zoom + long opacity crossfade between honorees.
  // No text, no carousel dots — click the portrait to open the modal.
  // The slideshow keeps running (and is *not* paused on hover) since
  // the hero has no hoverable controls to pause for.
  // --------------------------------------------------------
  const heroPortrait = document.getElementById('heroPortrait');
  const slides = heroPortrait ? heroPortrait.querySelectorAll('.hero-portrait-slide') : [];

  let currentSlide = 0;
  let carouselTimer = null;
  // Must be shorter than the CSS `kenBurns` keyframe duration so the
  // zoom keeps accelerating right up to the crossfade, never stalling.
  const SLIDE_INTERVAL = 11000;

  function showSlide(idx) {
    if (!slides.length) return;
    currentSlide = ((idx % slides.length) + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      if (i === currentSlide) {
        // Force reflow so the Ken Burns keyframes restart from scale(1.02)
        slide.classList.remove('is-active');
        forceReflow(slide);
        slide.classList.add('is-active');
      } else {
        slide.classList.remove('is-active');
      }
    });
  }

  function startCarousel() {
    if (!slides.length || carouselTimer) return;
    carouselTimer = setInterval(() => showSlide(currentSlide + 1), SLIDE_INTERVAL);
  }
  function stopCarousel() {
    if (carouselTimer) { clearInterval(carouselTimer); carouselTimer = null; }
  }

  if (slides.length) {
    showSlide(0);
    startCarousel();

    if (heroPortrait) {
      // Click (or Enter/Space) opens the modal for the current honoree
      heroPortrait.addEventListener('click', () => openPortraitModal(currentSlide));
      heroPortrait.setAttribute('role', 'button');
      heroPortrait.setAttribute('tabindex', '0');
      heroPortrait.setAttribute('aria-label', 'View featured honoree profile');
      heroPortrait.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openPortraitModal(currentSlide);
        }
      });
    }
  }

  // --------------------------------------------------------
  // Active-section nav indicator (single-page hash links only)
  // --------------------------------------------------------
  const sectionLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (sectionLinks.length && 'IntersectionObserver' in window) {
    const linkMap = new Map();
    sectionLinks.forEach(a => {
      const id = a.getAttribute('href').slice(1);
      if (id) linkMap.set(id, a);
    });
    const sectionEls = Array.from(linkMap.keys())
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (sectionEls.length) {
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            sectionLinks.forEach(a => a.removeAttribute('aria-current'));
            const link = linkMap.get(entry.target.id);
            if (link) link.setAttribute('aria-current', 'location');
          }
        });
      }, { root: null, rootMargin: '-40% 0px -55% 0px', threshold: 0 });
      sectionEls.forEach(el => sectionObserver.observe(el));
    }
  }

  // --------------------------------------------------------
  // Reveal on scroll
  // --------------------------------------------------------
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -80px 0px', threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  // --------------------------------------------------------
  // Newsletter + contact form success feedback
  // (no real backend — just show a confirmation)
  // --------------------------------------------------------
  document.querySelectorAll('form[data-form]').forEach(form => {
    const status = form.querySelector('[data-form-status]') ||
                   form.parentElement.querySelector('[data-form-status]');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (status) {
        const kind = form.dataset.form;
        if (kind === 'newsletter') {
          status.textContent = 'Subscribed. We will be in touch.';
        } else if (kind === 'contact') {
          status.textContent = 'Thank you — your message has been received. We will respond within a few days.';
        } else {
          status.textContent = 'Received. Thank you.';
        }
      }
      form.reset();
    });
  });
})();
