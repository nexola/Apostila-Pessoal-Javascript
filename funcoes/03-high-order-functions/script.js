"use strict";

const umaPalavra = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperUmaPalavra = function (str) {
  const [primeira, ...outras] = str.split(" ");
  return [primeira.toUpperCase(), ...outras].join(" ");
};

// High-order function
const transformar = function (str, fn) {
  console.log(`String original: ${str}`);
  console.log(`String transformada: ${fn(str)}`);

  console.log(`Transformada por: ${fn.name}()`);
};

transformar("JavaScript é o melhor!", upperUmaPalavra);
transformar("JavaScript é o melhor!", umaPalavra);

// JS usa callback o tempo todo
const high5 = function () {
  console.log("👋");
};

document.body.addEventListener("click", high5);

["Jonas", "Martha", "Alex"].forEach(high5);
