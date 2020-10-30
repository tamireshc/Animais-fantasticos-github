/*JS Navegação por tabs*/
export default function initTabNav() {
  /*JS Navegação por tabs*/
  const tabMenu = document.querySelectorAll("[data-tab ='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content']");
  tabContent[0].classList.add("ativo");

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((item) => item.classList.remove("ativo"));

      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) =>
      itemMenu.addEventListener("click", function () {
        activeTab(index);
      })
    );
  }
}
