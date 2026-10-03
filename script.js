document.getElementById("year").textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll(".card, .tl-item, .contact-card");

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = (i % 3) * 70 + "ms";
    io.observe(el);
  });
} else {
  revealTargets.forEach((el) => el.classList.add("in"));
}

const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  nav.style.boxShadow = window.scrollY > 8 ? "0 10px 30px -20px #000" : "none";
}, { passive: true });
