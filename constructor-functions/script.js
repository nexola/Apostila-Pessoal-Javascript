class Carro {
  constructor(marca, preco) {
    this.marca = marca;
    this.preco = preco;
  }
}

const honda = new Carro("Honda", 40000);

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2("Mazda", 5000);
