"use strict";

// Método errado
const runOnce = function () {
  console.log("Isso nunca será executado de novo");
};
// Método correto - Immediately invoked function expression (IIFE)
(function () {
  console.log("Isso nunca será executado de novo");
})();
// Com arrow function
(() => console.log("Isso nunca será executado de novo"))();
// Encapsulamento por chaves
{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate);
