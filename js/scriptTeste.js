// const animais = document.getElementById("animais");
// console.log(animais);

// const img = document.getElementsByTagName("img");
// console.log(img);
// const img2 = document.querySelectorAll('img[src^="img/imagem"]');

// console.log(img2);

// const linkInterno = document.querySelectorAll("[href^='#']");

// console.log(linkInterno);

// const h2 = document.querySelector(".animais-descrissao h2");
// console.log(h2);

// const paragrafos = document.getElementsByTagName("p");

// console.log(paragrafos);

// const paragrafosArray = Array.from(paragrafos);

// console.log(paragrafosArray);

// //const lastP = document.querySelector("--paragrafos[paragrafos.lenght]");

// paragrafosArray.forEach((element) => {
//   console.log(element);
// });

// paragrafosArray.forEach((element) => {
//   console.log(element.innerText);
// });

// const itensMenu = document.querySelectorAll(".menu a");
// console.log(itensMenu);

// // itensMenu.forEach((item) => {
// //   item.classList.add("ativo");
// // });

// itensMenu[0].classList.remove("ativo");

// const imgArray = Array.from(img);
// console.log(imgArray);

// imgArray.forEach((item) => {
//   const possuiaAtributo = item.hasAttribute("alt");
//   console.log(item, possuiaAtributo);
// });

// const hrefMenu = document.querySelector('a[href="https://www.origamid.com/"]');
// console.log(hrefMenu);

// hrefMenu.setAttribute("href", "https://www.google.com");

// const linksInterno = document.querySelectorAll("a");
// console.log("links são", linksInterno);

// function addAtivo(e) {
//   e.preventDefault();

//   linksInterno.forEach((item) => item.classList.remove("ativo"));
//   e.currentTarget.classList.add("ativo");
// }
// linksInterno.forEach((item) => item.addEventListener("click", addAtivo));

// const body = document.querySelectorAll("*");
// console.log(body);

// const arrayBody = Array.from(body);
// console.log(arrayBody);

// // arrayBody.forEach((item) => item.addEventListener("click", ondeClicou));

// // function ondeClicou(item) {
// //   console.log(item.target.remove(item));
// // }

// function aumentarTexto(item) {
//   if (item.key === "t") {
//     document.documentElement.classList.toggle("large"); // seleção do documento
//   }
// }

// window.addEventListener("keydown", aumentarTexto);

// const menu = document.querySelector(".menu");
// const copy = document.querySelector(".copy");
// console.log("copy:", copy, "menu:", menu);

// const menuClone = menu.cloneNode(true);
// const newCopy = copy.appendChild(menuClone);

// const faqLista = document.querySelector(".faq-lista");

// console.log(faqLista);

// const primeirodt = faqLista.querySelector("dt");
// const primeirodd = faqLista.querySelector("dd");

// console.log(primeirodt);
// console.log(primeirodd);

// const faq = document.querySelector("#faq");

// console.log(faq);

// // faq.replaceChild(animais, faqLista);
