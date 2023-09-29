"use strict";

const diasDaSemana = ["seg", "ter", "qua", "qui", "sex", "sab", "dom"];

const openingHours = {
  [diasDaSemana[3]]: {
    open: 12,
    close: 22,
  },
  [diasDaSemana[4]]: {
    open: 11,
    close: 23,
  },
  [diasDaSemana[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 object literals melhorado
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...ingredients) {
    console.log(mainIngredient);
    console.log(ingredients);
  },
};

// SET - Ignora duplicatas
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);
// Tamanho
console.log(ordersSet.size);
// Conferindo se possui um valor
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
// Adicionando valores | Ignora o valor duplicado
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
console.log(ordersSet);
// Removendo valores
ordersSet.delete("Risotto");
console.log(ordersSet);
// Deleta todos os elementos
ordersSet.clear();
// console.log(ordersSet);

// Exemplo
const colaboradores = [
  "Garçom",
  "Chef",
  "Garçom",
  "Administrador",
  "Chef",
  "Garçom",
];

const cargos = new Set(colaboradores).size;
console.log(cargos);
