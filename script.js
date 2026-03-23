/* ============================================
   TAGLINE — Creative Typewriter Effect
============================================ */
const taglineText = "Turning caffeine & curiosity into clean code — one commit at a time.";
const taglineEl   = document.getElementById("tagline");

let charIndex = 0;

function typeWriter() {
  if (charIndex < taglineText.length) {
    taglineEl.innerHTML += taglineText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 45);
  }
}

// Start typing after a short delay
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeWriter, 800);
});


/* ============================================
   CONTACT FORM — Submit Handler
============================================ */
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = this.querySelector("button");
  btn.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
  btn.style.background = "#5E0006";
  btn.style.color = "#fff";

  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Send Message';
    btn.style.background = "";
    btn.style.color = "";
    this.reset();
  }, 3000);
});


/* ============================================
   SCROLL REVEAL — Fade-in sections on scroll
============================================ */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity    = "1";
        entry.target.style.transform  = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".content-section").forEach((section) => {
  section.style.opacity   = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "opacity 0.7s ease, transform 0.7s ease";
  observer.observe(section);
});
