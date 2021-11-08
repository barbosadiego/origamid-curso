const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const comida1 = comidas.shift()
console.log(comida1)
// Remova o último valor de comidas e coloque em uma variável
const comida2 = comidas.pop()
console.log(comida2)
// Adicione 'Arroz' ao final da array
comidas.push('Arroz')
console.log(comidas)
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', "Batata")
console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort()
console.log(estudantes)
// Inverta a ordem dos estudantes
estudantes.reverse()
console.log(estudantes)
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'))
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'))

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
let htmlString = html.split('section')
htmlString = htmlString.join('ul')
htmlString = htmlString.split('div')
htmlString = htmlString.join('li')
console.log(htmlString)


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carros2 = carros.slice()
carros.pop()
console.log(carros)
console.log(carros2)