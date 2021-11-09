//iteração com arrays

//For Each

const carros = ["ford", "fiat", "honda"];
carros.forEach((item, index, array) => {
  console.log(item, index, array);
});

//para forEach com apenas um argumento não é preciso colocar os parênteses ()
//para forEach com apenas uma linha de retorno não é preciso colocar as chaves {}

const li = document.querySelectorAll("li");

li.forEach((i) => i.classList.add("ativo"));

li.forEach(function (item) {
  item.classList.add("ativo");
});

//map()

const carros2 = ["ford", "fiat", "honda"];

const arrayNova = carros2.map((item, index, array) => {
  return item.toUpperCase();
});

console.log(arrayNova); //nova array gerada pelo método map()
console.log(carros2); //este método não modifica a array antiga

const numeros = [2, 3, 4, 56, 34, 65];
const numerosX2 = numeros.map(n => n * 2);//se o retorno é apenas uma linha então não precisa de chaves e da palavra 'return'

console.log(numerosX2)
console.log(numeros)

const aulas = [{
  nome: 'HTML 1',
  min: 15
},
{
  nome: 'HTML 2',
  min: 10
},
{
  nome: 'CSS 1',
  min: 20
},
{
  nome: 'JS 1',
  min: 25
}]

const tempoAulas = aulas.map(aula => aula.min)
console.log(tempoAulas)

//a mesma coisa com separação da função

const nomeAulas = function(aula){
  return aula.nome
}

//ou const nomeAulas = aula => aula.nome

const arrayNomeAulas = aulas.map(nomeAulas)
console.log(arrayNomeAulas)

//reduce

const aulas2 = [10, 25, 30]

const reduceAulas2 = aulas2.reduce((acumulador, item, index, array)=>{
  console.log(acumulador, item)
  return acumulador + item
}, 0)

console.log(reduceAulas2) 

const numeros2 = [23,314,54,2,123,544,6]

const maiorNumero = numeros2.reduce((anterior, atual) => anterior > atual ? anterior : atual, 0) //operador ternário
  // if(anterior > atual){
  //   return anterior
  // } else {
  //   return atual
  // }

console.log(maiorNumero)

//não necessariamente o reduce retorna um valor númerico

const listaAulas = aulas.reduce((acumulador, aula, index)=>{
  acumulador[index] = aula.nome
  return acumulador
},{})//acumulador aqui é um objeto vazio

console.log(listaAulas)

//some() -  se pelo menos um for truthy o método retorna 'true'

const frutas = ['banana', '', 'pera', 'uva']

const temUva = frutas.some((item)=>{
  return item === 'uva'
})

//every() - se todos forem true o método retorna 'true'
//string não vazia é truthy
const every = frutas.every((fruta)=>{
  return fruta
})

console.log(temUva)
console.log(every)

const numeros3 = [3,434,5,2,5345,656,345]
const maiorQue3 = numeros3.some((n => n < 2))//existe algum número menor que 2?
console.log(maiorQue3)

//findIndex()

const indexUva = frutas.findIndex(fruta=>{
  return fruta === 'uva'
})
console.log('fruta com index:',indexUva)


//find -  retornar o valor que for o primeiro truthy do array

const novosNumeros = [6, 43, 22, 88, 101, 29]
const buscaMaior45 = novosNumeros.find(n => n > 45)
console.log(buscaMaior45)

//filter - retorna um array com todos os valores que forem truthy

const ehMaior45 = novosNumeros.filter(n=> n > 45)
console.log(ehMaior45)

const novasFrutas = ['banana', '', null, undefined, 'uva', 0, 'maça']

const arrayFrutas = novasFrutas.filter((fruta)=>{
  return fruta
})
console.log(arrayFrutas)

const maiores15 = aulas.filter((aula)=>{
  return aula.min > 15
})
console.log(maiores15)