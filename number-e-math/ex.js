// Retorne um número aleatório
// entre 1050 e 2000

console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);

// Retorne o maior número da lista abaixo

const numeros = "4, 5, 20, 8, 9";
const numerosArray = numeros.split(", ");
const numMax = Math.max(...numerosArray) // o '...' é Spread operator e passar cada um dos item do array 
 
console.log(`o número máximo é ${numMax}`);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPreco(preco){
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',','.')
  preco = +preco.toFixed(2)
  return preco  
}
let soma = 0
listaPrecos.forEach((preco)=>{
  soma += limparPreco(preco)
})
console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))


// let total = 0;
// listaPrecos.forEach((preco) => {
//   preco = preco.toLowerCase();
//   preco = preco.trim();
//   preco = preco.replace("r$", "");
//   preco = preco.replace(",", ".");
//   preco = Number.parseFloat(preco, 10);
//   total += preco;
//   console.log(preco);
// });

// console.log(`o total somado é de ${total.toFixed(2)}`);
