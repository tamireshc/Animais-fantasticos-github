/*JS Scroll Suave- clica no titulo na navegação e vai até a seção*/

export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );

  function scrollToSection(event) {
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    event.preventDefault();
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // FORMA AUTERNATIVA
    //window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  linksInternos.forEach((link) =>
    link.addEventListener("click", scrollToSection)
  );
}
