"use strict";

const airline = "TAP Air Portugal";
const plane = "A320";
console.log(plane[0]);
console.log("B737"[0]);
// Tamanho
console.log(airline.length);
// Index
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));
// Slice
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
// Slice com indexOf
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
// Slice com negativos
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checarAssentoDoMeio = function (assento) {
  // B e E são assentos do meio
  const s = assento.slice(-1);
  s === "B" || s === "E"
    ? console.log("Você está em um assento do meio")
    : console.log("Você está em um assento lateral");
};
checarAssentoDoMeio("11B");
checarAssentoDoMeio("23C");
checarAssentoDoMeio("3E");
// Lower e Upper
console.log(airline.toUpperCase());
console.log("JONAS".toLowerCase());
// Capitalização
let passageiro = "jOnAs"; // Jonas
const passageiroLower = passageiro.toLowerCase();
passageiro = passageiroLower[0].toUpperCase() + passageiroLower.slice(1);
console.log(passageiro);
// Comparando emails
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(
  normalizedEmail === email ? "Email verificado" : "Email não existente"
);
// Replace
const precoBR = "R$ 288,97";
const precoUS = precoBR.replace("R$", "U$").replace(",", ".");
console.log(precoUS);
// ReplaceAll
const anunciamento =
  "Todos os passageiros, venham para porta 23. Embarque porta 23!";
console.log(anunciamento.replaceAll("porta", "portão"));
// Booleans
const aviao = "Airbus 320neo";
console.log(aviao.includes("320"));
console.log(aviao.startsWith("Air"));
console.log(aviao.endsWith("320"));
// Exercício
const checkBagagem = function (items) {
  const bagagem = items.toLowerCase();
  return bagagem.includes("knife") || bagagem.includes("gun")
    ? console.log("Bagagem bloqueada!")
    : console.log("Bagagem liberada!");
};
checkBagagem("I have a laptop, some Food and a pocket Knife");
checkBagagem("Socks and camera");
checkBagagem("Got some snacks and a gun for protection");
// Split
console.log("a+very+nice+string".split("+"));
const [primeiroNome, sobrenome] = "Vitor Vianna".split(" ");
console.log(primeiroNome, sobrenome);
// Join
const novoNome = ["Mr.", primeiroNome, sobrenome.toUpperCase()].join(" ");
console.log(novoNome);
// Criando função capitalize
const capitalize = function (nomeCompleto) {
  const nomes = nomeCompleto.toLowerCase().split(" ");
  for (let i = 0; i < nomes.length; i++) {
    nomes[i] = nomes[i].replace(nomes[i][0], nomes[i][0].toUpperCase());
  }
  return nomes.join(" ");
};
console.log(capitalize("jessic ann smith davies"));
console.log(capitalize("vitor vianna"));
// Preenchimento | Padding
const msg = "Go to gate 23!";
const msg2 = "Im going";
console.log(msg.padStart(25, "+"));
console.log(msg2.padStart(19, "+"));
// Masking
const maskCreditCard = function (numero) {
  const str = numero + "";
  const ultimos = str.slice(-4);
  return ultimos.padStart(str.length, "*");
};
console.log(maskCreditCard(4335845654211022));
console.log(maskCreditCard("4558 4325 4587 4666"));
// Repeat
const message = "Clima ruim... Todos os vôos atrasados... ";
console.log(message.repeat(3));

const avioesNaLinha = function (numAvioes) {
  console.log(`${numAvioes} aviões na linha ${"✈ ".repeat(numAvioes)}`);
};
avioesNaLinha(5);
