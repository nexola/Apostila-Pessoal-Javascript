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

// MAPS - Utiliza keys e values, porém as keys podem ser valores além de strings
const restMap = new Map();
// seta uma nova key e value
restMap.set("name", "Classico Italiano");
restMap.set(1, "Firenze, Italy");
restMap.set(2, "Lisbon, Portugal");
console.log(restMap);
// set linkado
restMap
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "Estamos abertos :D")
  .set(false, "Estamos fechados :(");
// método get passando key
console.log(restMap.get("name"));
// utilizando as keys boolean
const horario = 21;
console.log(
  restMap.get(horario > restMap.get("open") && horario < restMap.get("close"))
);

console.log(restMap.has("categories"));
restMap.delete(2);
console.log(restMap.size);
restMap.clear();
console.log(restMap);

const arr = [1, 2];
restMap.set(arr, "Test");
console.log(restMap);
console.log(restMap.get(arr));

restMap.set(document.querySelector("h1"), "Heading");
console.log(restMap);
// Convertendo objetos para maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// Outro método de adição
const pergunta = new Map([
  ["pergunta", "Qual é a melhor linguagem de programação?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correto!"],
  [false, "Tente de novo"],
]);
console.log(pergunta.get("pergunta"));
for (const [key, value] of pergunta.entries()) {
  if (typeof key === "number") console.log(`${key}: ${value}`);
}
// const resposta = Number(prompt("Sua resposta: "));
const resposta = 3;
console.log(pergunta.get(pergunta.get("correct") === resposta));

// Convertendo map para array
console.log([...pergunta]);
console.log([...pergunta.keys()]);
console.log([...pergunta.values()]);
