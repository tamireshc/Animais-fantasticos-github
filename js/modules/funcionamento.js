export default function initFuncionamento() {}

const funcionamento = document.querySelector("[data-semana]");
const diaSemana = funcionamento.dataset.semana.split(",").map(Number);
console.log(funcionamento, diaSemana);

const funcionementoHora = document.querySelector("[data-horario]");
const funcionamentoEmHoras = funcionementoHora.dataset.horario
  .split(",")
  .map(Number);
console.log(funcionamentoEmHoras);

const diaAgora = new Date();
const horaAgora = diaAgora.getHours();
const diaDaSemanaAgora = diaAgora.getDay();

console.log(horaAgora, diaDaSemanaAgora);

const semanaAberto = diaSemana.indexOf(diaDaSemanaAgora) !== -1;
const horaAberto =
  horaAgora < funcionamentoEmHoras[1] && horaAgora >= funcionamentoEmHoras[0]
    ? true
    : false;

console.log(semanaAberto, horaAberto);

if (semanaAberto && horaAberto) {
  funcionamento.classList.add("aberto");
}
