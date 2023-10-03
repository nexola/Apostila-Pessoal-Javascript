"use strict";

// Uma enquete tem uma questão, um array de opções que o usuário pode escolher, e um array com o número de resposta para cada opção. Esses dados podem ser guardados no objeto abaixo

/* DESAFIO 01
  1.1 Criar um método chamado 'registrarNovaResposta' no objeto 'enquete'. Esse método faz 2 coisas:
  - Mostra um prompt para o usuário inserir o número da opção selecionada, o prompt deve ser dessa forma:
    Qual sua linguagem de programação preferida?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Insira o número da opção)

  1.2 Baseado no valor do input, atualize o array de respostas. Por exemplo, se a opção for 3, aumente o valor na posição 3 em 1. Confira se o input é um número e se o número faz sentido.

  1.3 Chamar o método toda vez que o usuário clicar no botão 'Answer poll'

  1.4 Criar um método 'mostrarResultados' que mostre os resultados da enquete. O método aceita string como um input (chamada 'tipo'), que pode ser 'string' ou 'array'. Se o tipo for 'array', simplesmente mostre os resultados em array como são, usando o console.log(). Essa deve ser a opção padrão. se o tipo for 'string', mostre uma string tipo "Os resultados da enquete são 13, 2, 4, 1".

  1.5 Execute o método 'mostrarResultados' no final de cada chamada do método 'registrarNovaResposta'
*/

const enquete = {
  pergunta: "What is your favourite programming language?",
  opcoes: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  respostas: new Array(4).fill(0),
  registrarNovaResposta() {
    const pergunta =
      "Qual sua linguagem de programação preferida?\n0: JavaScript\n1: Python\n2: Rust\n3: C++\n(Insira o número da opção)";
    let resposta = prompt(pergunta);
    while (resposta < 0 || resposta > 3 || !resposta) {
      resposta = prompt(pergunta);
    }
    this.respostas[resposta]++;
    console.log("Resposta registrada!");
    this.mostrarResultados("string");
  },
  mostrarResultados(tipo) {
    switch (tipo) {
      case "array":
        console.log(this.respostas);
        break;
      case "string":
        const [zero, um, dois, tres] = [...this.respostas];
        console.log(
          `Os resultados da enquete são ${zero}, ${um}, ${dois} e ${tres}`
        );
        break;
      default:
        console.log(this.respostas);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", enquete.registrarNovaResposta.bind(enquete));
