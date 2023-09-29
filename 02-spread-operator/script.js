"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...ingredients) {
    console.log(mainIngredient);
    console.log(ingredients);
  },
};

// Iterável com funções
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1"),
//   prompt("Ingredient 2"),
//   prompt("Ingredient 3"),
// ];
// restaurant.orderPasta(...ingredients);

// Copiando objetos
const newRestaurant = { foudedIn: 1998, ...restaurant, founder: "Giuseppe" };
console.log(newRestaurant);

// Operador spread
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocchi"];
console.log(newMenu);

// Copiar array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Juntar dois ou mais arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iteráveis: arrays, strings, maps, sets. Não objetos
const str = "Jonas";
const letters = [...str, " ", "S."];

console.log(letters[2]);

// SPREAD, fica na DIREITA do =
const array = [1, 2, ...[3, 4]];

// Padrão RESTO, ESQUERDA do =
const [a, b, ...outros] = [1, 2, 3, 4, 5];
console.log(outros);

const [pizza, , risotto, ...resto] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(resto);

// Resto em objetos
const { sat: sabado, ...outrosDias } = restaurant.openingHours;
console.log(outrosDias);

// Funções com rest e spread
const add = function (...valores) {
  let soma = 0;
  valores.forEach((valor) => {
    soma += valor;
  });
  console.log(soma);
};
add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("Mushroons", "onion", "olives", "spinach");
restaurant.orderPizza("Cheese");
