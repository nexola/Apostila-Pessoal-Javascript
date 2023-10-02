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
book.apply(swiss, flightData);
// Método atual
book.call(swiss, ...flightData);
