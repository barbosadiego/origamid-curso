console.log(Number.isNaN(NaN));
console.log(Number.isNaN(5)); // 5 não é NaN -> false
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.89)); // 10,89 não é inteiro ->false
console.log(Number.parseFloat("  98274382749.87987"));
console.log(Number.parseFloat("jldjafslkj  98274382749.87987")); // string na frente -> NaN
console.log(Number.parseFloat("100.23 reais")); // retorna ponto flutuante
console.log(Number.parseInt("100.23 reais")); // apenas retorna num. inteiro
console.log(Number.parseInt(23.56)); // apenas retorna num. inteiro

const preco = 10.34254;
console.log(preco.toFixed()); // to.Fixed retorna uma string, usar '+' para transformar strig em número
console.log(+preco.toFixed());

console.log((99.78).toFixed(1)); //arredonda com uma casa decimal

let valor = 48.49;
valor = valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
console.log(valor);

// Math - OBJETO com métodos e propriedades pré prontas

console.log(Math.PI);

//métodos mais usados

console.log(Math.abs(-6)); //retorna valor absoluto

console.log(Math.ceil(2.3)); // retorna inteiro arredondado para cima

console.log(Math.floor(2.7)); // retorna inteiro arredondado para baixo

console.log(Math.round(4.3)); // arredonda normal
console.log(Math.round(4.7)); // arredonda normal

console.log(Math.max(23, 13, 3142, 43)); // retorna o maior número
console.log(Math.min(23, 13, 3142, 43)); // retorna o menor número

const aleatorio = Math.ceil(Math.random() * 100);
console.log(aleatorio);

//exemplo de aplicação: número random entre 72 e 32
const aleatorio2 = Math.floor(Math.random() * (72 - 32 + 1)) + 32;
console.log(aleatorio2);
// Math.floor(Math.random() * (max - min + 1)) + min
