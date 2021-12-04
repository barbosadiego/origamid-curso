// const h1 = document.querySelector('h1')
// console.log(h1)

// function callH1(){
//   console.log('clicou em', h1.innerHTML)
// }

// const classes = h1.classList
// h1.addEventListener('click', callH1)

// Retorne o url da página atual utilizando o objeto window

const paginaAtual = window.location.href
console.log(paginaAtual)

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const primeiro = document.querySelector('.ativo')
console.log(primeiro)
// Retorne a linguagem do navegador
const linguagem = window.navigator.language
console.log(linguagem)
// Retorne a largura da janela 
const largura = window.innerWidth
console.log(largura)
