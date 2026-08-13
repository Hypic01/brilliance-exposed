/* ============================================================
   BRILLIANCE EXPOSED — site.js
   Intro exposure · nav · reveals · hero carousel · gallery
   filters · portrait modal · forms · cart toast
   ============================================================ */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Intro overlay (plays once per session) ---------- */
  var intro = document.getElementById('introOverlay');
  if (intro) {
    var seen = false;
    try {
      seen = localStorage.getItem('be-intro') === '1' ||
             sessionStorage.getItem('be-intro') === '1';
    } catch (e) {}

    var endIntro = function () {
      if (intro.classList.contains('is-exiting') || intro.classList.contains('is-done')) return;
      intro.classList.add('is-exiting');
      document.body.classList.remove('intro-active');
      try { localStorage.setItem('be-intro', '1'); } catch (e) {}
      setTimeout(function () { intro.classList.add('is-done'); }, 950);
    };

    if (seen || reducedMotion) {
      intro.classList.add('is-done');
      document.body.classList.remove('intro-active');
    } else {
      document.body.classList.add('intro-active');
      intro.classList.add('is-playing');
      var autoEnd = setTimeout(endIntro, 2800);
      var skip = function () { clearTimeout(autoEnd); endIntro(); };
      intro.addEventListener('click', skip);
      document.addEventListener('keydown', function onKey(e) {
        skip();
        document.removeEventListener('keydown', onKey);
      });
    }
  }

  /* ---------- Nav scroll state (auto-hides on mobile scroll-down) ---------- */
  var nav = document.getElementById('navbar');
  if (nav) {
    var lastY = window.scrollY;
    var onScroll = function () {
      var y = window.scrollY;
      nav.classList.toggle('is-scrolled', y > 24);
      if (y > 320 && y > lastY + 6) {
        nav.classList.add('is-hidden');
      } else if (y < lastY - 6 || y <= 320) {
        nav.classList.remove('is-hidden');
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Mobile panel ---------- */
  var burger = document.getElementById('navHamburger');
  var panel = document.getElementById('navMobilePanel');
  var backdrop = document.getElementById('navBackdrop');
  if (burger && panel) {
    var setPanel = function (open) {
      burger.classList.toggle('is-open', open);
      panel.classList.toggle('is-open', open);
      if (backdrop) backdrop.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      panel.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
    };
    burger.addEventListener('click', function () {
      setPanel(!panel.classList.contains('is-open'));
    });
    if (backdrop) backdrop.addEventListener('click', function () { setPanel(false); });
    panel.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setPanel(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('is-open')) setPanel(false);
    });
  }

  /* ---------- aria-current for nav links ---------- */
  var here = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a, .nav-mobile-panel a, .footer-col a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').split('#')[0];
    if (href && href === here && !a.classList.contains('btn-gold')) {
      a.setAttribute('aria-current', 'page');
    }
  });

  /* ---------- Reveal on scroll (develop-from-black) ---------- */
  var revealEls = document.querySelectorAll('.reveal, .develop');
  if (revealEls.length) {
    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      revealEls.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- Hero portrait carousel ---------- */
  var heroPortrait = document.getElementById('heroPortrait');
  var heroPlate = document.getElementById('heroPlate');
  if (heroPortrait) {
    var slides = Array.prototype.slice.call(heroPortrait.querySelectorAll('.hero-portrait-slide'));
    var idx = 0;
    var INTERVAL = 5200;

    var setPlate = function (i) {
      if (!heroPlate) return;
      var s = slides[i];
      heroPlate.classList.add('is-switching');
      setTimeout(function () {
        var chip = heroPlate.querySelector('.hero-plate-chip');
        var name = heroPlate.querySelector('.hero-plate-name');
        var role = heroPlate.querySelector('.hero-plate-role');
        if (chip) chip.textContent = s.getAttribute('data-chip') || '';
        if (name) name.textContent = s.getAttribute('data-name') || '';
        if (role) role.textContent = s.getAttribute('data-role') || '';
        heroPlate.classList.remove('is-switching');
      }, 450);
    };

    if (slides.length > 1 && !reducedMotion) {
      setInterval(function () {
        slides[idx].classList.remove('is-active');
        idx = (idx + 1) % slides.length;
        var img = slides[idx].querySelector('img');
        if (img) {
          img.style.animation = 'none';
          void img.offsetWidth;
          img.style.animation = '';
        }
        slides[idx].classList.add('is-active');
        setPlate(idx);
      }, INTERVAL);
    }
  }

  /* ---------- Gallery filters ---------- */
  var tabs = document.querySelectorAll('.gallery-tab');
  var cards = document.querySelectorAll('.gallery-card[data-cat]');
  var galleryEmpty = document.getElementById('galleryEmpty');
  if (tabs.length && cards.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var cat = tab.getAttribute('data-cat');
        var shown = 0;
        tabs.forEach(function (t) {
          t.classList.toggle('is-active', t === tab);
          t.setAttribute('aria-selected', String(t === tab));
        });
        cards.forEach(function (card) {
          var match = cat === 'all' || card.getAttribute('data-cat') === cat;
          card.classList.toggle('is-hidden', !match);
          if (match) shown++;
        });
        if (galleryEmpty) galleryEmpty.classList.toggle('is-visible', shown === 0);
      });
    });
  }

  /* ---------- Portrait modal ---------- */
  var modal = document.getElementById('portraitModal');
  if (modal) {
    var lastFocus = null;

    var openModal = function (data) {
      var img = modal.querySelector('[data-modal-image]');
      var name = modal.querySelector('[data-modal-name]');
      var role = modal.querySelector('[data-modal-role]');
      var bio = modal.querySelector('[data-modal-bio]');
      var chip = modal.querySelector('[data-modal-chip]');
      if (img) { img.src = data.image; img.alt = 'Portrait of ' + data.name; }
      if (name) name.textContent = data.name;
      if (role) role.textContent = data.role;
      if (chip) chip.textContent = data.chip || 'Honoree Profile';
      if (bio) bio.innerHTML = data.bio;
      lastFocus = document.activeElement;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      var closeBtn = modal.querySelector('.portrait-modal-close');
      if (closeBtn) closeBtn.focus();
    };

    var closeModal = function () {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    };

    modal.querySelectorAll('[data-modal-close]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });

    document.querySelectorAll('.gallery-card:not(.is-undeveloped)').forEach(function (card) {
      card.addEventListener('click', function () {
        var img = card.querySelector('img');
        var defaultBio = '<p>Full biography and interview segments for this honoree will be published as the exhibition tour continues. Each portrait in the series is accompanied by an oral-history interview recorded with the honoree.</p>';
        openModal({
          image: img ? img.src : '',
          name: (card.getAttribute('data-name') || card.querySelector('.gallery-card-name').textContent),
          role: (card.getAttribute('data-role') || card.querySelector('.gallery-card-role').textContent),
          chip: card.getAttribute('data-chip') || 'Honoree Profile',
          bio: card.getAttribute('data-bio') || defaultBio
        });
      });
    });
  }

  /* ---------- Toast ---------- */
  var toast = document.getElementById('toast');
  var toastTimer = null;
  var showToast = function (msg) {
    if (!toast) return;
    var msgEl = toast.querySelector('[data-toast-msg]');
    if (msgEl) msgEl.textContent = msg;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 3200);
  };

  /* ---------- Preorder buttons ---------- */
  document.querySelectorAll('[data-add-to-cart]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      showToast((btn.getAttribute('data-add-to-cart') || 'This piece') + ' — preorders open with the New York reception. Join the newsletter below to be first.');
    });
  });

  /* ---------- Mobile sticky ticket bar ---------- */
  var ticketBar = document.getElementById('ticketBar');
  if (ticketBar) {
    var barShown = false;
    window.addEventListener('scroll', function () {
      var show = window.scrollY > window.innerHeight * 0.9;
      if (show !== barShown) {
        barShown = show;
        ticketBar.classList.toggle('is-visible', show);
      }
    }, { passive: true });
  }

  /* ---------- Generic toast buttons ---------- */
  document.querySelectorAll('[data-toast]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      showToast(btn.getAttribute('data-toast'));
    });
  });

  /* ---------- Shop thumbnails ---------- */
  var mainShot = document.querySelector('.shop-featured-main img');
  document.querySelectorAll('.shop-thumb').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      var img = thumb.querySelector('img');
      if (img && mainShot) {
        mainShot.src = img.src;
        document.querySelectorAll('.shop-thumb').forEach(function (t) {
          t.classList.toggle('is-active', t === thumb);
        });
      }
    });
  });

  /* ---------- Forms (newsletter + contact) ---------- */
  document.querySelectorAll('form[data-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('[data-form-status]') ||
                   form.parentElement.querySelector('[data-form-status]');
      var type = form.getAttribute('data-form');
      var msg = type === 'newsletter'
        ? 'Welcome to the light. Exhibition updates are on their way.'
        : 'Message received — we read every one. Expect a reply within a few days.';
      if (status) status.textContent = msg;
      form.reset();
    });
  });

  /* ---------- Footer year ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
