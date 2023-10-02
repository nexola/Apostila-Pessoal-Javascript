"use strict";

const reservas = [];

const criarReserva = function (
  numVoo,
  numPassageiros = 1,
  preco = 199 * numPassageiros
) {
  const reserva = {
    numVoo,
    numPassageiros,
    preco,
  };
  console.log(reserva);
  reservas.push(reserva);
};

criarReserva("LH123", undefined, 3);
