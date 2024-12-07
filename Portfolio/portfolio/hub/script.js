// Animations dynamiques
document.addEventListener("DOMContentLoaded", () => {
  // Animation de titre
  const title = document.getElementById("dynamic-title");
  const subtitle = document.getElementById("subtitle");

  title.style.opacity = "0";
  subtitle.style.opacity = "0";

  setTimeout(() => {
    title.style.transition = "opacity 1s";
    subtitle.style.transition = "opacity 1s";
    title.style.opacity = "1";
    subtitle.style.opacity = "1";
  }, 500);

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

  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
});
});
