const pessoa = new Object({
  nome: 'diego'
})

console.log(pessoa)

const carro = {
  rodas: 4,
  init(valor){
    this.marca = valor
    return this
  },
  acelerar(){
    return this.marca + ' acelerou'
  },
  buzinar(){
    return this.marca + ' buzinou'
  }
}

//criando novos objetos 

const honda = Object.create(carro).init('honda')

console.log(honda)
console.log(honda.acelerar())

const ferrari = Object.create(carro).init('ferrari')
console.log(ferrari)
console.log(ferrari.acelerar())

//método assign()

const funcaoAutomovel = {
  acelerar(){
    return 'acelerou'
  },
  buzinar(){
    return 'buzinou'
  },
}

const moto = {
  rodas: 2,
  capacete: true
}

//com o método assign() adicinamos os métodos de 'funcaoAutomóvel' ao objeto 'moto', modificando-o

Object.assign(moto, funcaoAutomovel)

//definindo propriedades com 'object.Properties'

const moto2 ={}

Object.defineProperties(moto2,{
  rodas:{
    value: 2,
    configurable: false,//valor padrão
    writeble: true//valor padrão é false
  }
})

moto2.rodas = 3 //não altera pois o configurable é 'false'
console.log(moto2)