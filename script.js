/* ===== SCROLL PROGRESS ===== */
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById("scroll-progress").style.width = progress + "%";
});

/* ===== FADE IN ON SCROLL ===== */
const faders = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

faders.forEach(el => observer.observe(el));
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Honeypot check
  if (form.company.value !== "") {
    return;
  }

  emailjs.sendForm(
    "service_xv4qm8p",
    "template_yy3vao9",
    this
  ).then(() => {
    status.textContent = "Message sent successfully!";
    status.style.color = "#00ffd5";
    form.reset();
  }, () => {
    status.textContent = "Failed to send message.";
    status.style.color = "red";
  });
});
