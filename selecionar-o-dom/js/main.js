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

const img = document.getElementsByTagName("img");
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imgPalavra = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgPalavra);

// Selecione todos os links internos (onde o href começa com #)

const links = document.querySelectorAll('[href^="#"]');
console.log(links);
// Selecione o primeiro h2 dentro de .animais-descricao

const h2 = document.querySelector(".animais-descricao h2");
console.log(h2);

// Selecione o último p do site

const p = document.querySelectorAll("p");
console.log(p[p.length - 1]);
//por ser array like pode usar o 'length'
/*
// for each
// for each é a melhor forma de manipular uma lista de itens do DOM
const imgs = document.querySelectorAll("img");
console.log(imgs);

//1º parametro é o item da lista e o 2º é o índice, o 3º é o array
imgs.forEach(function (item, index, array) {
  //console.log(item, index, array)
});
*/

//transformar HTMLCollection em array para usar o forEach()
const titulos = document.getElementsByClassName("titulo"); //retorna HTMLCollection
const titulosArray = Array.from(titulos);//transforma em array
titulosArray.forEach(function(item, index, array){
  console.log(item, index, array)
})

console.log(titulos)
console.log(titulosArray)


//arrow function encurta a sintaxe em relação a 'function expression' normal

const imgs = document.querySelectorAll("img");
console.log(imgs);

imgs.forEach((item, index, array) => {
  console.log(item, index, array)
});

// Mostre no console cada parágrado do site

const paragraph = document.querySelectorAll('p')
paragraph.forEach((x)=>{
  //console.log(x)
  console.log(x.innerHTML)
})

// Mostre o texto dos parágrafos no console


// Como corrigir os erros abaixo:
const imgs2 = document.querySelectorAll('img');

imgs2.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs2.forEach(() => {
  console.log(i++);
});

imgs2.forEach(() => i++);
console.log(i)
