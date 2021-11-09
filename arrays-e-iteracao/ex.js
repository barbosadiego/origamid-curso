// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso')
const arrayCursos = Array.from(cursos)

const objetoCursos = arrayCursos.map((curso)=>{
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aula = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return{
    titulo,// se o nome da chave é igual ao nome da variável não precisa dercrever a variável
    descricao,
    aula,
    horas
  }
})

console.log(objetoCursos)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maior100 = numeros.filter(n => n >100)
console.log(maior100)


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const temBaixo = instrumentos.some((item)=>{
  return item === 'Baixo'
})

console.log(temBaixo)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]
// let total = 0
// const valor = compras.forEach((compra)=>{
//   total += +compra.preco.replace('R$', '').replace(',','.')
// })
// console.log(`o total das compras é ${total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)

const valorTotal = compras.reduce((acumulador, item)=>{
  const precoLimpo = +item.preco.replace('R$', '').replace(',','.')
  return acumulador + precoLimpo
},0)
console.log(valorTotal)

