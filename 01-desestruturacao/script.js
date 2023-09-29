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
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Desestruturação no parâmetro
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
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via Lactea, 14",
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Desestruturando objeto e substituindo os nomes das variáveis
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Valores default em objetos
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Trocando variáveis
let [main, , secondary] = restaurant.categories;
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Trocando variáveis em objetos
let a = 111;
let b = 999;

const abc = { a: 23, b: 7, c: 14 };

({ a, b } = abc);
console.log(a, b);

// Desestruturação com funções
const [starterOrder, mainOrder] = restaurant.order(2, 0);
console.log(starterOrder, mainOrder);

// Desestruturação dentro da desestruturação
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Valores default
const [p = 1, q = 2, r = 3] = [8, 9];
console.log(p, q, r);

// Objetos aninhados
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
