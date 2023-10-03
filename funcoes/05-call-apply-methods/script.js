"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(148, "Jonas Schmedtmann");
lufthansa.book(300, "Louis Serra");
console.log(lufthansa);

const book = lufthansa.book;

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

// Não funciona
// book(23, "Sarah Williams");

// Método call
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 498, "Mary Cooper");
console.log(lufthansa);

book.call(swiss, 466, "Marcus Roger");
console.log(swiss);

// Método apply (ANTIGO)
const flightData = [583, "George Cooper"];
// book.apply(swiss, flightData);
// Método atual - CALL
book.call(swiss, ...flightData);

// Método bind - Seta o this keyword e a função para uma nova variável
const bookEW = book.bind(eurowings);
bookEW(23, "Steve Williams");
const bookLX = book.bind(swiss);
const bookLH = book.bind(lufthansa);
// Setar valores padrões para os argumentos com bind
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Ana Lucia");

// Com Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(`New plane buyed for ${this.airline}`);

  this.planes++;
  console.log(`Now ${this.airline} has ${this.planes} planes`);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Aplicação parcial - parâmetros pré definidos
// Função geral
const addTax = function (rate, value) {
  return value + value * rate;
};

// Aplicação parcial
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(150));

// Refatorando com funções retornando funções
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(150));
