"use strict";

/* DESAFIO 1
  1.1 Crie uma função que receba uma lista de nomes de variáveis em underscore_case e converta-os para camelCase.

  underscore_case
    first_name
  Some_Variable
    calculate_AGE
  delayed_departure
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const botao = document.querySelector("button");

const camelCase = function () {
  // 1.1
  const text = document.querySelector("textarea").value.toLowerCase();
  const strings = text.split("\n");
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].trim();
    const varSplit = strings[i].split("_");
    for (let j = 1; j < varSplit.length; j++) {
      varSplit[j] = varSplit[j].replace(
        varSplit[j][0],
        varSplit[j][0].toUpperCase()
      );
    }
    strings[i] = varSplit.join("");
  }
  console.log(strings);
};

botao.addEventListener("click", camelCase);
