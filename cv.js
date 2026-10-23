(() => {
  'use strict';
  const print = () => window.print();
  document.querySelector('#print-cv')?.addEventListener('click', print);
  if (window.location.hash === '#print') {
    window.addEventListener('load', print, { once: true });
  }
})();
