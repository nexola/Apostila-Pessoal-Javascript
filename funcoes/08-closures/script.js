"use strict";

// Variável com escopo local passengerCount
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
// Ao ser atribuida a uma variável, a função leva consigo seu próprio escopo
// Isso se dá pelo closure, um tipo de escopo externo que segura as variáveis mesmo que a função já tenha sido executada e não exista mais
// O closure da acesso a todas variáveis da sua função pai, mesmo após esse pai já ter dado return
const booker = secureBooking();
booker();
booker();
booker();
// Visualização do escopo criado pelo closure
console.dir(booker);

// Exemplo 1
let f;

const g = function () {
  let a = 23;
  f = function () {
    a++;
    console.log(a);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();
console.dir(f);

// Exemplo 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;

boardPassengers(180, 3);
