'use strict';

/* Julia e Kate estão estudando sobre cães. Cada uma delas perguntou a 5 donos de cães sobre a idade dos cachorros e armazenaram os dados num array (um array para cada). Por agora, elas estão apenas interessadas em saber se o cão é um adulto ou filhote. Um cão é adulto se tiver pelo menos 3 anos de idade.

Criar uma funcao chamada 'checarCaes', que aceita 2 arrays de idades de cão 'caesJulia' e 'caesKate' e faça os seguintes passos:

1 - Julia descobriu que os donos do primeiro e dos dois ultimos cachorros na realidade tem gatos e não cães. Crie então uma copia do array de Julia e remova a idade dos gatos do array copiado (porque é uma má prática mudar parametros de funções)

2 - Criar um array com os dados novos de Julia e os da Kate

3 - Para cada cão remanescente, log no console qual é adulto e qual é filhote ('O cão 1 é adulto, e tem 5 anos de idade') ('O cão 2 ainda é um filhote')

4 - Use os dados teste abaixo
*/

const caesJulia1 = [3, 5, 2, 12, 7];
const caesJulia2 = [9, 16, 6, 8, 3];
const caesKate1 = [4, 1, 15, 8, 3];
const caesKate2 = [10, 5, 6, 1, 4];

const checarCaes = function (caesJulia, caesKate) {
  const caesJuliaCorreto = caesJulia.slice(1, -2);
  const caes = caesJuliaCorreto.concat(caesKate);
  caes.forEach((idadeCao, index) => {
    idadeCao >= 3
      ? console.log(
          `O cão ${index + 1} é adulto, e tem ${idadeCao} anos de idade`
        )
      : console.log(`O cão ${index + 1} ainda é um filhote`);
  });
};

checarCaes(caesJulia1, caesKate1);
console.log('----------------------------------------');
checarCaes(caesJulia2, caesKate2);

// Desafio 02
/* Crie uma função chamada 'calcIdadeHumana', que aceita array de idades de cães e faça o seguinte:
- Calcule a idade canina em anos humanos usando a fórmula:
-- Se o cão tiver <= 2 anos (idadeHumana = 2 * idadeCao)
-- Se o cão tiver > 2 anos (idadeHumana = 16 + idadeCao * 4)

- Exclua todos os cães que tiverem menos que 18 anos de idade humana

- Calcule a média de idade humana de todos os cães adultos */

const idadesCaes1 = [5, 2, 4, 1, 15, 8, 3];
const idadesCaes2 = [16, 6, 10, 5, 6, 1, 4];

const calcIdadeHumana = function (idadesCaes) {
  return Math.round(
    idadesCaes
      .map(idadeCao => (idadeCao <= 2 ? 2 * idadeCao : 16 + idadeCao * 4))
      .filter(idadeCao => idadeCao >= 18)
      .reduce((acc, idadeCao, i, arr) => acc + idadeCao / arr.length, 0)
  );
};

console.log(calcIdadeHumana(idadesCaes1));
console.log(calcIdadeHumana(idadesCaes2));

// Desafio 03
/* Uma alimentação OK para os cães é tolerável apenas 10% abaixo e 10% acima da porção recomendada 

1. Percorra o array dogs e para cada cachorro, calcule a porção recomendada de comida e adicione ao objeto como uma nova propriedade. Não crie um novo array
Formula: comidaRecomendada = peso ** 0.75 * 28. (O resultado é em gramas de comida, e o peso precisa ser em kg)

2. Encontre o cão de Sarah e log no console se ele está comendo demais ou de menos. DICA: alguns cães tem multiplos donos, então primeiro você precisa achar Sarah no array de donos

3. Crie um array contendo todos donos de cães que comem demais ('donosComemMais') e um array com os donos de cães que comem de menos ('donosComemMenos')

4. Log uma string no console para cada array criado no 3. Ex: "os cães de Mathilda e Alice e Bob comem demais!"

5. Log no console se existe um cachorro comendo exatamente a quantidade de comida recomendada (apenas true ou false)

6. Log no console se existe algum cachorro comendo uma quantidade OK de comida (apenas true ou false)

7. Crie um array contendo os cães que comem uma quantidade OK de comida (tente reusar a condição do 6)

8. Crie uma cópia superficial do array de cães e ordene pela quantia recomendada de comida em ordem crescente (tenha em mente as porções dentro do objeto de arrays)
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const recomendado = function (dog) {
  if (dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1) {
    return 'no limite';
  } else if (dog.curFood > dog.recFood * 1.1) {
    return 'acima';
  } else {
    return 'abaixo';
  }
};
// 1.
dogs.map(dog => (dog.recFood = Number((dog.weight ** 0.75 * 28).toFixed(2))));
console.log(dogs);
// 2.
console.log(
  dogs
    .filter(dog => dog.owners.includes('Sarah'))
    .reduce((resultado, dog) => {
      resultado = `O cão de Sarah está comendo ${recomendado(
        dog
      )} do recomendado`;
      return resultado;
    }, '')
);
// 3.
const {
  comemMais: [comemMais],
  comemMenos: [comemMenos],
} = dogs
  .filter(dog => !(recomendado(dog) === 'no limite'))
  .reduce(
    (arrays, dog) => {
      arrays[recomendado(dog) === 'acima' ? 'comemMais' : 'comemMenos'].push(
        dog.owners
      );
      return arrays;
    },
    { comemMais: [], comemMenos: [] }
  );
console.log(comemMais, comemMenos);
// 4.
console.log(`Os cães de ${comemMais.join(' e ')} comem demais.`);
console.log(`Os cães de ${comemMenos.join(' e ')} comem de menos.`);
// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));
// 6.
const comeRecomendado = dog => recomendado(dog) === 'no limite';
console.log(dogs.some(comeRecomendado));
// 7.
const [arrayIdeal] = dogs.filter(comeRecomendado).reduce((array, dog) => {
  array.push(dog);
  return array;
}, []);
console.log(arrayIdeal);
// 8.
const recOrdenada = dogs
  .reduce((novoArray, dog) => {
    novoArray.push(dog.recFood);
    return novoArray;
  }, [])
  .sort((a, b) => a - b);
console.log(recOrdenada);
