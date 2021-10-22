const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection[1]);

//seletor geral único - querySelector - retorna o 1º elemento solicitado

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linksInternos = document.querySelector('[href^="#"]'); //selecinar todos os links que comecem '^=' com '#'
console.log(linksInternos);

//seletor geral lista

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg[0]);

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelector(".grid-section");

primeiraUl.classList.add("grid-section");

//console.log(gridSectionHTML);
//console.log(gridSectionNode);

//gridSectionNode.forEach(function(item,index){
//  console.log(item);
//});

// Retorne no console todas as imagens do site

const img = document.getElementsByTagName('img')
console.log (img)

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imgPalavra = document.querySelectorAll('img[src^="img/imagem"]')
console.log (imgPalavra)

// Selecione todos os links internos (onde o href começa com #)

const links = document.querySelectorAll('[href^="#"]')
console.log(links)
// Selecione o primeiro h2 dentro de .animais-descricao

const h2 = document.querySelector('.animais-descricao h2')
console.log(h2)

// Selecione o último p do site

const p = document.querySelectorAll('p')
console.log(p[p.length-1])
//por ser array like pode usar o 'length'