/*JS Animação ao scroll- os itens aparecem de acordo com o scroll*/

export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    if (sections.length) {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        } else if (section.classList.contains("ativo")) {
          section.classList.remove("ativo");
        }
      });
    }
  }

  animaScroll();

  window.addEventListener("scroll", animaScroll);
}
