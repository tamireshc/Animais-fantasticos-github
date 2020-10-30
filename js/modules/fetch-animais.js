export default function initFetchAnimais() {}

async function fetchAnimais(url) {
  const animaisResponse = await fetch(url);
  const animaisJSON = await animaisResponse.json();
  const numerosGrid = document.querySelector(".numeros-grid");

  animaisJSON.forEach((animal) => {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  });
}

fetchAnimais("http://127.0.0.1:5500/animaisapi.json");

function createAnimal(animal) {
  console.log(animal);
  const div = document.createElement("div");
  div.classList.add("numero-animal");

  div.innerHTML = `<h3>${animal.especie}</h3><span>${animal.total}</span>`;
  return div;
}
