const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection[1]);

//querySelector retorna o 1º elemento solicitado

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linksInternos = document.querySelector('[href^="#"]'); //selecinar todos os links que comecem '^=' com '#'
console.log(linksInternos);

//seletor geral

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg[0]);

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelector(".grid-section");

primeiraUl.classList.add("grid-section");

//console.log(gridSectionHTML);
//console.log(gridSectionNode);

gridSectionNode.forEach(function(item,index){
  console.log(item);
});