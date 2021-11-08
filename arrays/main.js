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

//splice
console.log(carros2)
console.log(carros2.splice(2,0,'fusca'))// o retorno aqui são dos itens removidos, então a array gerada é vazia. para ver o novos valores no array, dar 'console.log'
console.log(carros2)
console.log(carros2.splice(2,1,'mercedez'))// o retorno aqui é 'fusca', pois foi removido
console.log(carros2)

//copyWithin
console.log(['item 1', 'item 2', 'item 3', 'item 4', 'item 5'].copyWithin(2,0,3))

//fill - preenche a array com o valor passado
console.log(['item 1', 'item 2', 'item 3', 'item 4', 'item 5'].fill('banana', 2))

//métodos de acesso (não modificam a array)

const transporte1 = ['barco', 'avião']
const transporte2 = ['carro', 'moto']
const transportes = transporte1.concat(transporte2, 'outro valor', 234, 'oi')
console.log(transportes)

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js']

console.log(linguagens.includes('css'))
console.log(linguagens.includes('ruby'))
console.log(linguagens.indexOf('python'))
console.log(linguagens.indexOf('js'))
console.log(linguagens.lastIndexOf('js'))
console.log(linguagens.join())
console.log(linguagens.join(' '))
console.log(linguagens.join('-_-'))

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2')
htmlString = htmlString.join('h1')
console.log(htmlString)

console.log(linguagens.slice(2,4))
const cloneLinguagem = linguagens.slice()//slice sem parâmetro também serve para clonar arrays