"use strict";

const voo = "LH234";
const vitor = {
  nome: "Vitor Vianna",
  passaporte: 2487898481,
};

const checkIn = function (numVoo, passageiro) {
  numVoo = "LH999";
  passageiro.nome = "Mr. " + passageiro.nome;

  if (passageiro.passaporte === 2487898481) {
    alert("Check in");
  } else {
    alert("Passaporte errado");
  }
};

checkIn(voo, vitor);
console.log(voo);
console.log(vitor);

const novoPassaporte = function (passageiro) {
  passageiro.passaporte = Math.trunc(Math.random() * 10000000000);
};

novoPassaporte(vitor);
console.log(vitor);
