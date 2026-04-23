/* =========================================================
   Elionyx Health – Main JavaScript
   ========================================================= */

(function () {
  'use strict';

  /* ---------- Sticky header ---------- */
  const header = document.getElementById('site-header');
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile navigation ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  hamburger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close nav on outside click
  document.addEventListener('click', function (e) {
    if (
      navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  function setActiveLink() {
    let current = '';
    sections.forEach(function (section) {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.id;
      }
    });
    navAnchors.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  /* ---------- Intersection observer – fade-in animations ---------- */
  const animateCandidates = document.querySelectorAll(
    '.service-card, .team-card, .testimonial-card, .about-content, .contact-info, .contact-form, .section-header'
  );

  animateCandidates.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  animateCandidates.forEach(function (el) {
    observer.observe(el);
  });

  /* ---------- Contact form ---------- */
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  function showStatus(msg, type) {
    status.textContent = msg;
    status.className = 'form-note ' + type;
  }

  function validateField(field) {
    const valid = field.checkValidity();
    field.classList.toggle('invalid', !valid);
    return valid;
  }

  // Validate on blur
  form.querySelectorAll('input, select, textarea').forEach(function (field) {
    field.addEventListener('blur', function () {
      if (field.value !== '') validateField(field);
    });
    field.addEventListener('input', function () {
      if (field.classList.contains('invalid')) validateField(field);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;
    form.querySelectorAll('[required]').forEach(function (field) {
      if (!validateField(field)) isValid = false;
    });

    if (!isValid) {
      showStatus('Please fill in all required fields.', 'error');
      return;
    }

    // Simulate async submission
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    status.className = 'form-note';
    status.textContent = '';

    setTimeout(function () {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Book Appointment';
      form.reset();
      form.querySelectorAll('.invalid').forEach(function (f) {
        f.classList.remove('invalid');
      });
      showStatus('✓ Thank you! We\'ll be in touch within 24 hours.', 'success');
      setTimeout(function () { status.textContent = ''; status.className = 'form-note'; }, 6000);
    }, 1200);
  });

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();
