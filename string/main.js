const comida = 'pizza'
console.log(comida)// retorna uma string

const agua = new String ('agua')
console.log(agua) // retorna um objeto

const frase = 'A melhor comida'
console.log(frase[frase.length-1])//acessando como array o último item
console.log(frase.charAt([frase.length-1]))//método equivalente 'charAt'

//concatenação
const frase1 = 'A melhor linguagem é '
const linguagem = 'JavaScript '

const fraseFinal = frase1.concat(linguagem, frase, ' teste', ' oi')
console.log(fraseFinal)

//busca de string
const fruta = 'banana';
const listaFrutas = 'melancia, banana, laranja'

console.log(listaFrutas.includes(fruta))//fruta está dentro de listaFrutas - true
console.log(listaFrutas.includes(fruta, 14))//começa procurar do índice 14 - false

//começa com
console.log(fruta.startsWith('Ba'))//case sensitive - false
//termina com
console.log(fruta.endsWith('na'))

//cortar a string de acordo com o valor de índice passado

const transacao1 = 'depósito de cliente'
const transacao2 = 'depósito de fornecedor'
const transacao3 = 'taxa de camisas'

console.log(transacao1.slice(0,3))
console.log(transacao2.slice(0,5))
console.log(transacao3.slice(0,1))
console.log(transacao1.slice(12))//corta as 12 primeiras posições
console.log(transacao1.slice(-4))//exibe as 4 últimas posições

//indexOf
console.log(fruta.indexOf("a"))//retorna o primeiro na string
console.log(fruta.lastIndexOf("a"))//retorna o último na string

//aumentar string
const preco = 'R$ 99,00'
console.log(preco.padStart(20, '-'))//aumenta em 20 caracteres com '-'
console.log(preco.padStart(20))//aumenta em 20 caracteres
console.log(preco.padEnd(20))//aumenta em 20 caracteres no final
console.log(preco.padEnd(20, '-'))//aumenta em 20 caracteres com '-' no fina.

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000']
listaPrecos.forEach((item)=>{
  console.log(item.padStart(10, '-'))
})

//repetição

const ta = 'tá'
console.log(ta.repeat(5))

//trocar string

let listaItens = 'camisa bonés calças bermudas vestidos saias'
listaItens = listaItens.replace(/[ ]+/g, ', ')//usando regular expression para todos os itens da lista, senão apenas o primeiro é modificado
console.log(listaItens)

//split - dividir

const arrayLista = listaItens.split(', ')
console.log(arrayLista)

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'
const htmlArray = htmlText.split('div')
const novoHtml = htmlArray.join('section')


console.log(htmlText)
console.log(htmlArray)
console.log(novoHtml)

//minúsculo e maiúsculo

const sexo1 = 'Feminino'
const sexo2 = 'feminino'
const sexo3 = 'FEMININO'

console.log(sexo1.toLowerCase() === 'feminino')
console.log(sexo3.toLowerCase() === 'feminino')
console.log(sexo2.toUpperCase() === 'FEMININO')

//remover espaço

const valor = '  R$ 23.00  '
valor.trim()// 'R$23.00' remove do início e fim
valor.trimStart()// 'R$23.00   ' remove do início
valor.trimEnd()// '  R$23.00' remove do fim

