"use strict";

const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterOla = greet("Olá!");
greeterOla("Vitor");
greeterOla("Marcos");

greet("Oi")("Ana");
