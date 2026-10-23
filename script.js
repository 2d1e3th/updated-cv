(() => {
  'use strict';

  const query = (selector) => document.querySelector(selector);
  const header = query('header');
  const menu = query('.menu');
  const navigation = query('#navigation');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = window.matchMedia('(max-width: 900px)');
  const links = [...document.querySelectorAll('#navigation a')];
  const sections = [...document.querySelectorAll('main section[id]')];
  document.documentElement.classList.add('js');

  function setMenu(open) {
    if (!menu || !navigation) return;
    navigation.classList.toggle('open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  }

  if (menu && navigation) {
    menu.hidden = false;
    menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
    links.forEach((link) => link.addEventListener('click', () => {
      setMenu(false);
      const target = document.getElementById(link.hash.slice(1));
      if (target && mobile.matches) {
        target.tabIndex = -1;
        target.focus({ preventScroll: true });
      }
    }));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menu.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (header && !header.contains(event.target)) setMenu(false);
    });
    header?.addEventListener('focusout', (event) => {
      if (!header.contains(event.relatedTarget)) setMenu(false);
    });
    mobile.addEventListener('change', () => setMenu(false));
  }

  // Enhance only when the observer is available; content otherwise stays visible.
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06 });
    document.documentElement.classList.add('reveal-ready');
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  }

  const progress = query('.scroll-progress');
  let framePending = false;
  function updateScroll() {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const fraction = height > 0 ? Math.max(0, Math.min(1, window.scrollY / height)) : 0;
    if (progress) progress.style.transform = `scaleX(${fraction})`;
    header?.classList.toggle('scrolled', window.scrollY > 20);
    let current = sections[0]?.id;
    const threshold = (header?.getBoundingClientRect().bottom || 88) + 60;
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= threshold) current = section.id;
    });
    if (height > 0 && window.scrollY >= height - 4) current = sections.at(-1)?.id;
    links.forEach((link) => {
      if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    framePending = false;
  }
  window.addEventListener('scroll', () => {
    if (!framePending) {
      framePending = true;
      window.requestAnimationFrame(updateScroll);
    }
  }, { passive: true });
  window.addEventListener('resize', updateScroll);
  updateScroll();

  // Pointer movement affects only the decorative grid, capped at eight pixels.
  const composition = query('.portrait-composition');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 901px)');
  function resetDecoration() {
    composition?.style.setProperty('--pointer-x', '0px');
    composition?.style.setProperty('--pointer-y', '0px');
  }
  composition?.addEventListener('pointermove', (event) => {
    if (reducedMotion.matches || !finePointer.matches) return;
    const box = composition.getBoundingClientRect();
    const x = Math.max(-8, Math.min(8, (event.clientX - box.left - box.width / 2) / box.width * 16));
    const y = Math.max(-8, Math.min(8, (event.clientY - box.top - box.height / 2) / box.height * 16));
    composition.style.setProperty('--pointer-x', `${x}px`);
    composition.style.setProperty('--pointer-y', `${y}px`);
  });
  composition?.addEventListener('pointerleave', resetDecoration);
  reducedMotion.addEventListener('change', resetDecoration);
  finePointer.addEventListener('change', resetDecoration);

  const form = query('#contact-form');
  const status = query('#form-status');
  if (form && status) {
    const fields = [...form.querySelectorAll('input, textarea')];
    fields.forEach((field) => field.addEventListener('input', () => {
      field.setCustomValidity('');
      field.removeAttribute('aria-invalid');
      status.classList.remove('is-error');
      status.textContent = 'Opens a draft in your email app for you to review and send.';
    }));
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      let firstInvalid = null;
      fields.forEach((field) => {
        field.value = field.value.trim();
        field.setCustomValidity('');
        if (!field.value) field.setCustomValidity('Please complete this field.');
        const valid = field.checkValidity();
        field.setAttribute('aria-invalid', String(!valid));
        if (!valid && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) {
        status.textContent = firstInvalid.validity.typeMismatch
          ? 'Please enter a valid email address.'
          : 'Please complete all required fields with non-empty values.';
        status.classList.add('is-error');
        firstInvalid.focus();
        return;
      }
      const data = new FormData(form);
      const body = `From: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
      const draft = `mailto:alteradomayantonette@gmail.com?subject=${encodeURIComponent(data.get('subject'))}&body=${encodeURIComponent(body)}`;
      status.classList.remove('is-error');
      status.textContent = 'Your email application should open with a prepared draft. Review it before sending.';
      try {
        window.location.href = draft;
      } catch {
        status.textContent = 'Unable to open an email application. Please email alteradomayantonette@gmail.com directly.';
        status.classList.add('is-error');
      }
    });
  }

  const year = query('#current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
