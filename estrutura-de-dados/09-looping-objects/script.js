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

for (const dia of Object.keys(openingHours)) {
  console.log(dia);
}

// Keys
const keys = Object.keys(openingHours);
console.log(`Estamos abertos ${keys.length} dias por semana!`);

let openStr = `Estamos abertos ${keys.length} dias por semana!`;

// Values
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`${key} nós abrimos às ${open} e fechamos às ${close}`);
}
