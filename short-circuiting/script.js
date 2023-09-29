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

// Operador de coalescência nula -> Ignora 0 e strings como falsy values
restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log("----OR----");
// short-circuiting
// OR -> ambos verdadeiros, retorna o primeiro valor, ambos falsos, o último valor
console.log(3 || "Jonas");
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);

const guests1 = restaurant.numGuests || 10;
console.log(guests1);

console.log("----AND----");
// AND -> ambos verdadeiros, retorna o último valor, ambos falsos, o primeiro
console.log(0 && "Jonas");
console.log(7 && "Jonas");
console.log("Hello" && 23 && null && "Jonas");

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
