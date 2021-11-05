// //qualquer função possui um prototype
// function teste() {
//   return 1 + 1;
// }

// //prototype está sempre ligada apenas a uma função
// function Pessoa(nome, idade) {
//   (this.nome = nome), (this.idade = idade);
//   //criando uma função aqui ela será instaciada sempre que um novo obj for criado
//   this.abracar = function () {
//     return this.nome + " abraçou";
//   };
// }

// const diego = new Pessoa("diego", 35);
// console.log(diego.prototype); // não possui pois é objeto
// console.log(Pessoa.prototype); // função possui prototype

// //o objeto prototype pode receber novos métodos e propriedades também
// //pode adicionar à função criada similar a adionar novas propriedades e métodos nos obj.

// //criando um objeto
// const carro = {
//   preco: 2000,
//   marca: "fiat",
// };

// // adicionando nova propriedade
// carro.cor = "preto";

// //da mesma forma podemos fazer usando o prototype
// //desta forma é criada uma vez apenas, o objeto construído tem acesso mas a função não é instaciada toda vez que for criado novo obj
// Pessoa.prototype.andar = function () {
//   return this.nome + " andou";
// };

// Pessoa.prototype.nadar = function () {
//   return this.nome + " nadou";
// };

// console.log(Pessoa.prototype);

// const pais = "brasil";
// const cidade = new String("rio");

// const animais = ["cachorro", "gato", "cavalo"];

// //nodelist
// const lista = document.querySelectorAll('li')

// //transformando em array para acessar métodos e propriedades não disponíveis para nodelist

// const listaArray = Array.prototype.slice.call(lista)

// // existe também o método linkado diretamente ao objeto

// const listaArray2 = Array.from(lista)

// //lista com os métodos / propriedades do item passado
// console.log(Object.getOwnPropertyNames(Pessoa.prototype))
// console.log(Object.getOwnPropertyNames(diego))

//exercício ------------------------------

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome, 
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`
}

const diego = new Pessoa('diego', 'barbosa', 35)
console.log (diego.nomeCompleto())

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList))
console.log(Object.getOwnPropertyNames(HTMLCollection))
console.log(Object.getOwnPropertyNames(Document))

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li;
console.log(li.constructor.name)
li.click;
console.log(li.click.constructor.name)
li.innerText;
console.log(li.innerText.constructor.name)
li.value;
console.log(li.value.constructor.name)
li.hidden;
console.log(li.hidden.constructor.name)
li.offsetLeft;
console.log(li.offsetLeft.constructor.name)
li.click();
console.log(li.click.constructor.name)

// Qual o construtor do dado abaixo:
console.log(li.hidden.constructor.name)
