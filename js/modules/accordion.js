/*JS accordion list- clica no titulo abre o texto*/

export default function initAccordion() {
  const accordionLista = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );

  if (accordionLista.length) {
    accordionLista[0].nextElementSibling.classList.add("ativo");

    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordionLista.forEach((item) =>
      item.addEventListener("click", activeAccordion)
    );
  }
}
