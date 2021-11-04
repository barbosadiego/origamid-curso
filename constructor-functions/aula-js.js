function Carro(marcaAtribuoda, precoAtribuido) {
  this.marca = marcaAtribuoda;
  this.preco = precoAtribuido;
}

const honda = new Carro("Honda", 500);
const fiat = new Carro();
fiat.marca = "Fiat";
fiat.preco = 3000;

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 5000)
console.log(mazda)
