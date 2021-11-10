function somar (n1, n2, n3){
  return n1+n2
}
//acessando os métodos do construtor de função
console.log(somar.name)//retorna o nome da função
console.log(somar.length)//retorna o total de argumentos

//principais métodos
//método call
function darOi(nome, idade){
  console.log('Oi para você ' + nome + idade)
}

darOi.call(null, 'diego ', 35)//o primeiro argumento faz referência ao 'this'

const carro = {
  marca: 'ford',
  ano: 2018
}

function descricaoCarro(velocidade){
  console.log(this)//neste momento o this desta função é o objeto window, e como o window não tem marca e ano ele retorna 'undefined'
  console.log(this.marca + ' ' + this.ano + velocidade)
}

descricaoCarro()

//com o call pode substituir o this por outro objeto, basta informar as propriedades

descricaoCarro.call({marca:'honda', ano: 2021}, 60)//o primeiro parâmetro é o objeto novo ao qual vai se fazer referência, depois são os parâmetros da função

//geralmente o objeto é criado fora e depois é referenciado no call
//descricaoCarro.call(carro)

const carros = ['ford', 'fiat', 'vw']
const frutas = ['banana', 'uva', 'pera']
carros.forEach.call(frutas, (item)=>{//alterando o this do objeto para 'frutas'
  console.log(item)
})

function Dom (seletor){
  this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function (classe){
  // console.log(this)
  this.element.classList.add(classe)
}

const ul = new Dom('ul')
const li = {element: document.querySelector('li')}
ul.ativo.call(li,'ativo') 

//método apply
//funciona como o 'call', apenas difere que pode receber os argumentos da função por um array
const numeros = [33,542,5,653,2,7,8,45,23]

console.log(Math.max.call(null, numeros))
console.log(Math.max.apply(null, numeros))


//método bind
//não executa a função, apenas retorna com o novo contexto do 'this'

const carro2 = {
  marca: 'ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo){
    return `${this.marca} acelerou ${aceleracao} em ${tempo} segundos`
  }
}

console.log(carro2.acelerar(100,20))

const honda = {
  marca: 'honda'
}

const acelerarHonda = carro2.acelerar.bind(honda)//modificando o this para honda agora
console.log(acelerarHonda(100,20))