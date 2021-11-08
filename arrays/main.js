const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [67, 45, 23, 98];

console.log(instrumentos[1]);
console.log(precos[2]);

const dados = [
  new String("tipo 1"),
  ["carro", "portas", { cor: "azul", preco: 2000 }],
  function andar(nome) {
    return nome;
  },
];

console.log(dados[0]); //acessando 1º item
console.log(dados[1]); //acessando 2º item
console.log(dados[1][2]); //acessando 3º item (objeto) do 2º item
console.log(dados[1][2].cor); //acessando uma propriedade do objeto
console.log(dados[2]("diego")); //acessando função

const carros = new Array('Ford', 'Fiat', 'Honda');

carros[2] = 'Ferrari'
carros[3] = 'Kia'
carros[20] = 'Kia'

console.log(carros)

const li = document.querySelectorAll('li')
const arrayLi = Array.from(li)
console.log(li) // node list array like
console.log(arrayLi)// array


console.log(Array.of(10)) 
console.log(Array.of('teste', 'teste')) 
console.log(Array(20))// array vazio com 20 itens

const frutas = ['banana', 'pêra', ['uva roxa', 'uva verde']]

console.log(frutas.length)

//métodos modificadores

const instrumentos2 = ['guitarra', 'baixo', 'violão']
instrumentos2.sort //organiza pela ordem alfabética - não funciona com números
console.log(instrumentos2)

const carros2 = ['ford', 'fiat', 'vw']
carros2.unshift('kia', 'ferrari')//adiciona no início e retorna o length
carros2.push('mazda', 'gol')//adiona no fim

console.log(carros2)

console.log(carros2.pop())//retorna o último item e o remove da array
console.log(carros2)
console.log(carros2.shift())//retorna o primeiro item e o remove da array
console.log(carros2)
carros2.reverse()//inverte a ordem da array
console.log(carros2)