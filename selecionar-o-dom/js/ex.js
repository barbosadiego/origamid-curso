// Adicione a classe ativo a todos os itens do menu
const menuAtivo = document.querySelectorAll(".menu a");

menuAtivo.forEach((item) => {
  item.classList.add("ativo"); //adiciona em todos
});
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuAtivo.forEach((item) => {
  item.classList.remove("ativo"); //remove de todos
});

menuAtivo[0].classList.add("ativo"); //adiciona só no 1º

// Verifique se as imagens possuem o atributo alt
/*
const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(img, possuiAtributo);
});
*/
// Modifique o href do link externo no menu
//const link = document.querySelector('a[href^="http"]');
//link.setAttribute("href", "https://google.com"); //1º atributo que vai ser mudado, 2º o novo valor dele

// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImg = document.querySelectorAll("img");
const res = primeiraImg[0].offsetTop;
console.log(res);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a"); //selecionar todos os links

links.forEach((link) => {//para cada item de 'links'
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "possui boa acessibilidade");
  } else {
    console.log(link, "não possui boa acessibilidade");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width:720px').matches
if(browserSmall){
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile')
}
