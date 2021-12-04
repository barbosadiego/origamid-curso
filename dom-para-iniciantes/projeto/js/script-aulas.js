// const animais = document.getElementById('animais')
// console.log(animais)

// const gridSection = document.getElementsByClassName('grid-section')
// console.log(gridSection)

// const primeiraLi = document.querySelector('li')
// console.log(primeiraLi)

// const primeiraUl = document.querySelector('ul')
// console.log(primeiraUl)

// const linksInterno = document.querySelector('[href^="#"')
// console.log(linksInterno)

// const animaisImg = document.querySelectorAll('.animais img')
// console.log(animaisImg[0])

// //htmlcollection x nodelist

// const gridSectionHTMl = document.getElementsByClassName('grid-section')
// const gridSectionNode = document.querySelectorAll('.grid-section')

// console.log(gridSectionHTMl, gridSectionNode)

// gridSectionNode.forEach(function(item, index){
//   console.log(item, index)
// })

// Retorne no console todas as imagens do site
// const imagens = document.querySelectorAll('img')
// console.log(imagens)

// // Retorne no console apenas as imagens que começaram com a palavra imagem

// const imagens2 = document.querySelectorAll('img[src^="img/imagem"]')
// console.log (imagens2)

// // Selecione todos os links internos (onde o href começa com #)

// const linksInternos = document.querySelectorAll('a[href^="#"]')
// console.log(linksInternos)

// // Selecione o primeiro h2 dentro de .animais-descricao
// const h2 = document.querySelector('.animais-descricao h2')
// console.log (h2)

// // Selecione o último p do site
// const p = document.querySelectorAll('p')
// console.log(p[--p.length]) // ou p.length-1

// const imgs = document.querySelectorAll('img')

// imgs.forEach(function(item, index){
//   console.log(item, index)
// })

// const titulos = document.getElementsByClassName("titulo");
// const titulosArray = Array.from(titulos);

// console.log(titulos);
// console.log(titulosArray);

// titulosArray.forEach(function (item) {
//   console.log(item);
// });

// //arrow function

// const imgs = document.querySelectorAll("img");

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// Mostre no console cada parágrado do site
// const paragrado = document.querySelectorAll('p')
// paragrado.forEach((item) =>{
//   console.log(item)
// })

// // Mostre o texto dos parágrafos no console
// paragrado.forEach((item,index) =>{
//   console.log(item.innerText)
// })
// // Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

// classes e atributos

// const menu = document.querySelector(".menu");
// menu.classList.add("ativo");
// menu.classList.remove("ativo");
// //menu.classList.toggle('azul')

// if (menu.classList.contains("azul")) {
//   menu.classList.add("tem-azul");
// } else {
//   menu.classList.add("nao-tem-azul");
// }
// // menu.classList.toggle('azul')
// console.log(menu);

// //attributes

// const animais = document.querySelector(".animais");
// console.log(animais.attributes)

// //getAttribute e setAttribute

// const img = document.querySelector('img')
// console.log(img.getAttribute('src'))
// img.setAttribute('alt', 'raposa')
// const possuiAlt = img.hasAttribute('alt')
// console.log(possuiAlt)

// exercícios

// Adicione a classe ativo a todos os itens do menu

// const menuAtivo = document.querySelectorAll(".menu a");
// menuAtivo.forEach((item) => {
//   item.classList.add("ativo");
// });

// // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// menuAtivo.forEach((item) => {
//   item.classList.remove("ativo");
// });
// menuAtivo[0].classList.add("ativo");

// // Verifique se as imagens possuem o atributo alt

// const imagens = document.querySelectorAll("img");
// imagens.forEach((img)=>{
//   const possuiAtributo = img.hasAttribute('alt')
//   console.log(img, possuiAtributo)
// })
// // imagens.forEach((img, i) => {
// //   if (img.hasAttribute("alt")) {
// //     console.log(`a imagem ${i} poussi atributo alt`);
// //     console.log(img);
// //   } else {
// //     console.log("a imagem " + i + " não poussi atributo alt");
// //     console.log(img);
// //   }
// // });

// // Modifique o href do link externo no menu.

// const link = document.querySelector('a[href^="http"]');
// link.setAttribute('href', 'https://www.google.com.br')

//dimensões e distâncias

// const animaisLista = document.querySelector('.animais-lista')
// const height = animaisLista.scrollHeight
// const animaisTop = animaisLista.offsetTop

// console.log(animaisTop)

// const primeiroH2 = document.querySelector('h2')
// const left = primeiroH2.offsetLeft

// console.log(left)

// const rect = primeiroH2.getBoundingClientRect()
// console.log(rect.top)
// console.log(rect.height)
// console.log(rect.width)
// console.log(rect.right)

// if (rect.top < 0){
//   console.log('passou do elemento')
// }

// console.log(
//   window.innerHeight, //altura da janela
//   window.innerWidth, //largura da janela
//   window.pageYOffset, //quantidade de scroll vertical
//   window.pageXOffset, //quantidade de scroll horizontal
// )

// if (window.innerWidth < 600){ // usa-se mais o 'matchMedia()'
//   console.log('tela pequena')
// }

// const small = window.matchMedia('(max-width:600px)')
// if (small.matches){
//   console.log('tela pequena')
// } else {
//   console.log('tela grande')
// }

// exercícios

// Verifique a distância da primeira imagem
// em relação ao topo da página

// const primeiraImg = document.querySelector("img");
// console.log(primeiraImg.offsetTop);

// // Retorne a soma da largura de todas as imagens

// const imagens = document.querySelectorAll("img");
// let largura = 0;
// imagens.forEach((img) => {
//   largura += img.offsetWidth;
// });
// console.log(largura);

// // Verifique se os links da página possuem
// // o mínimo recomendado para telas utilizadas
// // com o dedo. (48px/48px de acordo com o google)

// const links = document.querySelectorAll("a");

// links.forEach((link) => {
//   const linkWidth = links.offsetWidth;
//   const linkHeight = links.offsetHeight;
//   if (linkWidth >= 46 && linkHeight >= 48) {
//     console.log(link, "possui acessibilidade");
//   } else {
//     console.log(link, "não possui acessibilidade");
//   }
// });

// // Se o browser for menor que 720px,
// // adicione a classe menu-mobile ao menu

// const janelaPequena = window.matchMedia("(max-width: 720px)");

// if (janelaPequena.matches) {
//   const menu = document.querySelector(".menu");
//   menu.classList.add("menu-mobile");
// } else {
//   menu.classList.remove("menu-mobile");
// }

// eventos

// const img1 = document.querySelector("img");

// function callback(event) {
//   console.log(event);
// }

// img1.addEventListener("click", callback);

// // img1.addEventListener('click', function(){
// //   console.log('clicou!')
// // })

// const animaisLista = document.querySelector(".animais-lista");

// function callbackLista(event) {
//   console.log(event.currentTarget);
//   // console.log(event.target); // retorna exatamento onde clicou
// }

// animaisLista.addEventListener("click", callbackLista);

// const linkExterno = document.querySelector('a[href^="http"');

// function barraLinkExterno(event) {
//   event.preventDefault();
//   console.log(this.getAttribute('href'))
// }

// linkExterno.addEventListener("click", barraLinkExterno);

// const h1 = document.querySelector('h1')

// function handleEvent(event){
//   console.log(event.type, event)
// }

// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)
// h1.addEventListener('mousemove', handleEvent)

// window.addEventListener('scroll', handleEvent)
// window.addEventListener('resize', handleEvent)
// window.addEventListener('keydown', handleEvent)

// function handleKeyboard(event) {
//   if (event.key === "f") {
//     document.body.classList.toggle("fullscreen");
//   }
// }

// window.addEventListener("keydown", handleKeyboard);

// const imagens = document.querySelectorAll("img");

// function handleImg(event) {
//   console.log(event.currentTarget.getAttribute("src"));
// }

// imagens.forEach((img) => {
//   img.addEventListener("click", handleImg);
// });

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

// const linksInternos = document.querySelectorAll('a[href^="#"]');

// function callback(event) {
//   event.preventDefault();
//   linksInternos.forEach((link)=>{
//     link.classList.remove('ativo')
//   })
//   event.currentTarget.classList.add('ativo')
// }

// linksInternos.forEach((link) => {
//   link.addEventListener("click", callback);
// });

// // Selecione todos os elementos do site começando a partir do body,
// // ao clique mostre exatamente quais elementos estão sendo clicados

// const tudoNaTela = document.querySelectorAll('body');

// function mostrar(event) {
//   console.log(event.target);
//   //event.target.remove()
// }

// tudoNaTela.forEach((item) => {
//   item.addEventListener("click", mostrar);
// });

// // Utilizando o código anterior, ao invés de mostrar no console,
// // remova o elemento que está sendo clicado, o método remove() remove um elemento

// // Se o usuário clicar na tecla (t), aumente todo o texto do site.

// function textoMaior(event){
//   if (event.key === 't'){
//     document.documentElement.classList.toggle('textoMaior')
//     console.log('clicou t')
//   }
// }

// window.addEventListener('keydown', textoMaior)

// traversing e manipulação

// const h1 = document.querySelector('h1')
// const animaisDescricao = document.querySelector('.animais-descricao')

// console.log(h1.innerHTML)
// console.log(h1.outerHTML)
// console.log(h1.innerText)

// // h1.innerHTML = '<h1>Novo título</h1>'

// // console.log(animaisDescricao.innerText)

// // traversing

// const lista = document.querySelector(".animais-lista");

// // console.log(lista.children[lista.children.length-1])//acessando último item da lista

// // console.log(lista.querySelector('li:last-child'))
// // console.log(lista.previousSibling)

// const animais = document.querySelector(".animais");
// const contato = document.querySelector(".contato");
// const titulo = contato.querySelector(".titulo");
// const mapa = document.querySelector(".mapa");

// // animais.appendChild(titulo)

// // contato.removeChild(titulo)
// // contato.replaceChild(lista, titulo);
// // contato.insertBefore(animais, mapa)

// const novoh1 = document.createElement("h1"); //criando novo elemento
// novoh1.innerText = "Novo título"; //adicionando o texto
// novoh1.classList.add("titulo"); //adicionando classe
// mapa.appendChild(novoh1); //adicionando após o mapa

//clonar elementos

// const h1 = document.querySelector("h1");
// const faq = document.querySelector(".faq");

// const cloneH1 = h1.cloneNode(true); //clonando o h1
// cloneH1.classList.add("azul"); //modificou o clone mas não o original

// faq.appendChild(cloneH1); //inserindo no fim do faq

// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')
const cloneMenu = menu.cloneNode(true)
copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq

const primeiroDt = document.querySelector('.faq-lista dt')
console.log(primeiroDt)

// Selecione o DD referente ao primeiro DT

const dd = primeiroDt.nextElementSibling
console.log(dd)

// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector('.faq')
// const faqCont = faq.querySelector('.faq-lista')
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML

// faq.replaceChild(animais, faqCont)
