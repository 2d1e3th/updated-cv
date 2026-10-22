<<<<<<< HEAD
document.documentElement.classList.add('js');
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu.hidden=false;
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation')}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{closeMenu();const target=document.querySelector(a.hash);target.tabIndex=-1;target.focus({preventScroll:true})}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus()}});
document.addEventListener('click',e=>{if(!e.target.closest('header'))closeMenu()});window.matchMedia('(max-width:900px)').addEventListener('change',closeMenu);
const reduce=window.matchMedia('(prefers-reduced-motion:reduce)');
if('IntersectionObserver' in window&&!reduce.matches){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.06});document.querySelectorAll('.reveal').forEach(s=>observer.observe(s))}else document.querySelectorAll('.reveal').forEach(s=>s.classList.add('visible'));
const sections=[...document.querySelectorAll('main section[id]')],links=[...nav.querySelectorAll('a')];let scheduled=false;
function update(){const height=document.documentElement.scrollHeight-innerHeight;document.documentElement.style.setProperty('--progress',height?Math.min(1,scrollY/height):0);document.querySelector('header').classList.toggle('scrolled',scrollY>20);let id='home';sections.forEach(s=>{if(s.getBoundingClientRect().top<170)id=s.id});if(scrollY+innerHeight>=document.documentElement.scrollHeight-5)id='contact';links.forEach(a=>a.hash==='#'+id?a.setAttribute('aria-current','location'):a.removeAttribute('aria-current'));if(!reduce.matches){document.querySelector('.portrait img').style.transform='translateY('+Math.min(scrollY*.025,9)+'px) scale(1.025)'}scheduled=false}
addEventListener('scroll',()=>{if(!scheduled){requestAnimationFrame(update);scheduled=true}},{passive:true});addEventListener('resize',update);update();
document.querySelector('#contact-form').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.target);const body=`From: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;location.href=`mailto:alteradomayantonette@gmail.com?subject=${encodeURIComponent(data.get('subject'))}&body=${encodeURIComponent(body)}`;document.querySelector('#form-status').textContent='Your email draft is ready. Review it and send it from your email app. If no app opened, email alteradomayantonette@gmail.com directly.'});
=======
// Footer Year
document.querySelector("#current-year").textContent = new Date().getFullYear();

/* Mobile Navigation
   A normal button works with mouse, touch, Enter, and Space. */
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
const mobileScreen = window.matchMedia("(max-width: 600px)");

function setMenuOpen(isOpen) {
  navigation.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
}

menuButton.addEventListener("click", function () {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

navigation.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function (event) {
    // Smooth scrolling, with an immediate jump for reduced-motion users.
    event.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(link.getAttribute("href"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" });
    history.pushState(null, "", link.getAttribute("href"));
    if (mobileScreen.matches) {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    }
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuButton.focus();
  }
});
document.addEventListener("click", function (event) {
  if (!event.target.closest(".site-header")) setMenuOpen(false);
});
mobileScreen.addEventListener("change", function () { setMenuOpen(false); });
document.documentElement.classList.add("menu-ready");
menuButton.hidden = false;

/* Active Section Detection / Active Navigation
   Highlight the last section that has reached the sticky header.
   Regular anchor links still work when JavaScript is disabled. */
const sections = document.querySelectorAll("main section");
const navigationLinks = document.querySelectorAll("nav a");
const header = document.querySelector(".site-header");
const progressBar = document.querySelector(".scroll-progress");

function updateNavigation() {
  let activeId = sections[0].id;
  const scrollPadding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const headerBottom = Math.max(header.getBoundingClientRect().bottom, scrollPadding) + 8;

  sections.forEach(function (section) {
    if (section.getBoundingClientRect().top <= headerBottom) {
      activeId = section.id;
    }
  });

  // The last section may be too short to reach the header.
  if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    activeId = sections[sections.length - 1].id;
  }

  navigationLinks.forEach(function (link) {
    if (link.getAttribute("href") === "#" + activeId) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  header.classList.toggle("is-scrolled", window.scrollY > 20);

  // SCROLL PROGRESS: guard against division by zero on a short page.
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
  progressBar.style.transform = "scaleX(" + Math.max(0, Math.min(1, progress)) + ")";
}

window.addEventListener("scroll", updateNavigation, { passive: true });
window.addEventListener("resize", updateNavigation);
updateNavigation();

/* Scroll Animation
   Animate each section once when it enters the screen, then stop observing it.
   CSS disables all motion when the visitor requests reduced motion. */
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
if ("IntersectionObserver" in window && !motionPreference.matches) {
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".cv-section").forEach(function (section) {
    revealObserver.observe(section);
  });
}

// Profile Image: leave a clean portrait area until the real image is supplied.
const portrait = document.querySelector(".profile-photo");
function checkPortrait() {
  portrait.hidden = !portrait.naturalWidth;
}
portrait.addEventListener("load", checkPortrait);
portrait.addEventListener("error", checkPortrait);
if (portrait.complete) checkPortrait();
>>>>>>> be19b11f78213f6ee7b9c0d6c42daea01481cf5b
