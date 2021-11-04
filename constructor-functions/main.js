// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor); //retorna o seletor
//   },
//   ativar() {
//     // const elementoSelecionado = document.querySelector(this.seletor)
//     // const elementoSelecionado = this.element()
//     // elementoSelecionado.classList.add('ativo')
//     this.element().classList.add("ativo"); //pega a função que retorna o seletor e adiciona a classe 'ativo' nele
//   },
// };

// function Dom(seletor){
//   this.seletor = seletor;
//   this.element = function(){
//     return document.querySelector(this.seletor)
//   }
//   this.ativar = function(){
//     this.element().classList.add('ativar')
//   }
// }

// const li = new Dom('li')
// const ul = new Dom('ul')
// const lastLi = new Dom ('li:last-child')

//exercícios ----------------------------------------

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

function Pessoa(nome, idade) {
  (this.nome = nome),
    (this.idade = idade),
    (this.andar = function () {
      console.log(this.nome + " andou");
    });
}

const diego = new Pessoa("Diego", 35);
console.log(diego);

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

// function Pessoa (nome, idade){
//   this.nome = nome,
//   this.idade = idade
// }

const joao = new Pessoa("João", "20 anos");
const maria = new Pessoa("Maria", "25 anos");
const bruno = new Pessoa("Bruno", "15 anos");

console.log(joao, maria, bruno);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos


function Dom (seletor){
  const elementList = document.querySelectorAll(seletor)
  this.element = elementList
  this.addClasse = function(classe){
    elementList.forEach((element)=>{
      element.classList.add(classe)
    })
  }
  this.removeClasse = function(classe){
    elementList.forEach((element)=>{
      element.classList.remove(classe)
    })
  }
}

const listaItems = new Dom ('li')


// function Dom(seletor) {
//   this.elements = document.querySelectorAll(seletor);
//   this.ativar = function () {
//     this.elements.forEach((seletor) => {
//       seletor.classList.add("ativo");
//     });
//   };
//   this.remover = function () {
//     this.elements.forEach((seletor) => {
//       seletor.classList.remove("ativo");
//     });
//   };
// }

// const li = new Dom("li");

