// Animations dynamiques
document.addEventListener("DOMContentLoaded", () => {
  // Animation de titre
  const title = document.getElementById("dynamic-title");
  const subtitle = document.getElementById("subtitle");
  const loader = document.getElementById("loader");
  const mainContent = document.querySelector("main");

  title.style.opacity = "0";
  subtitle.style.opacity = "0";

  setTimeout(() => {
    title.style.transition = "opacity 1s";
    subtitle.style.transition = "opacity 1s";
    title.style.opacity = "1";
    subtitle.style.opacity = "1";
  }, 500);

  // Animations de sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
      }
    });
  }, observerOptions);

  document.querySelectorAll("section").forEach((section) => {
    sectionObserver.observe(section);
  });

  // Gestion sophistiquée du loader
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("opacity-0");
      setTimeout(() => {
        loader.style.display = "none";
        mainContent.classList.add("staggered-animation");
      }, 1000);
    }, 1500);
  });

  document.querySelectorAll(".hover-lift").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-15px)";
      card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "none";
    });
  });

  // Animation de compétences
  const skillTags = document.querySelectorAll(".skill-tag");
  skillTags.forEach((tag, index) => {
    tag.style.transform = "scale(0)";
    setTimeout(() => {
      tag.style.transition =
        "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      tag.style.transform = "scale(1)";
    }, 200 * (index + 1));
  });

  // Smooth scrolling et autres animations
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Animations interactives des cartes
  document.querySelectorAll(".hover-lift").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-15px)";
      card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "none";
    });
  });

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Merci pour votre message ! Nous vous contacterons bientôt.");
    });
});
