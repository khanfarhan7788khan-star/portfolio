document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     LOGO TYPE ANIMATION
  ===================== */
  /* LOGO TYPE ANIMATION (FIXED) */
  
const logoText = "Farhan";
const logoEl = document.getElementById("logo-text");
let l = 0;

if (logoEl) {
  logoEl.innerHTML = ""; // 🔥 IMPORTANT LINE

  function typeLogo() {
    if (l < logoText.length) {
      logoEl.innerHTML += logoText.charAt(l++);
      setTimeout(typeLogo, 120);
    }
  }
  typeLogo();
}


  /* =====================
     TYPING SUBTITLE
  ===================== */
  const typingEl = document.getElementById("typing");
  const typingText = "Creative Web Developer";
  let i = 0;

  function typeSubtitle() {
    if (typingEl && i < typingText.length) {
      typingEl.innerHTML += typingText.charAt(i++);
      setTimeout(typeSubtitle, 80);
    }
  }
  typeSubtitle();

  /* =====================
     DARK / LIGHT MODE
  ===================== */
  const toggle = document.getElementById("themeToggle");

  if (localStorage.getItem("theme")) {
    document.body.className = localStorage.getItem("theme");
  }

  if (toggle) {
    toggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";

    toggle.onclick = () => {
      document.body.classList.toggle("light");
      localStorage.setItem("theme", document.body.className);
      toggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
    };
  }

  /* =====================
     CUSTOM CURSOR (DESKTOP ONLY)
  ===================== */
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");

  if (dot && ring && window.innerWidth > 768) {
    window.addEventListener("mousemove", e => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      ring.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
    });
  }

  /* =====================
     SCROLL PROGRESS BAR
  ===================== */
  const progressBar = document.getElementById("scroll-progress");

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = (scrollTop / height) * 100;
    if (progressBar) progressBar.style.width = progress + "%";
  });

  /* =====================
     SKILLS ANIMATION
  ===================== */
  const skills = document.querySelectorAll(".progress");

  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width;
      }
    });
  }, { threshold: 0.5 });

  skills.forEach(skill => skillObserver.observe(skill));

  /* =====================
     FADE-UP ANIMATION
  ===================== */
  const faders = document.querySelectorAll(".fade-up");

  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(el => fadeObserver.observe(el));

  /* =====================
     SCROLL TO TOP + NAV ACTIVE
  ===================== */
  const scrollBtn = document.getElementById("scrollTop");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    if (scrollBtn) {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    }

    sections.forEach(sec => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 200;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => link.classList.remove("active"));
        const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  });

  if (scrollBtn) {
    scrollBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }

});
/* =====================
   PORTRAIT PARALLAX (DESKTOP ONLY)
===================== */
const portrait = document.getElementById("parallaxPortrait");

if (portrait && window.innerWidth > 768) {
  window.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    portrait.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
  });
}
