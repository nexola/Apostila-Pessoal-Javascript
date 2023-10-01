/* DESAFIO 1
 1.1 - Criar um array de jogador para cada time (jogadores1 e jogadores2)

 1.2 - O primeiro jogador em cada array é o goleiro, e os outros são os jogadores de campo. para o Bayern de Munique (time 1), criar uma variável (goleiro) com o nome do goleiro, e um array (jogadoresDeLinha) para o restante

 1.3 - Criar um array (todosJogadores) contendo todos os jogadores de ambos os times

 1.4 - durante o jogo, o Bayern (time 1) fez 3 substituições. Crie um array (jogadoresFinais) contendo todos os jogadores iniciais + 'Thiago', 'Coutinho' e 'Perisic'

 1.5 - Baseado em game.odds, criar uma variável para cada chance ('time1', 'empate', 'time2')

 1.6 - Crie uma funcao (imprimirGols) que recebe um ou mais nomes de jogadores e imprima cada um no console, juntamente com o número de gols que foram feitos (número de jogadores passados como arg)

 1.7 - O time com a menor odd é mais propício a ganhar. Imprima no console qual time é mais provável que ganhe, sem usar if/else ou operador ternário

 'Davies', 'Muller', 'Lewandowski', e 'Kimmich'
 */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [jogadores1, jogadores2] = game.players; // 1.1
console.log(jogadores1, jogadores2);

const [goleiro, ...jogadoresDeLinha] = jogadores1; // 1.2
console.log(goleiro, jogadoresDeLinha);

const todosJogadores = [...jogadores1, ...jogadores2]; // 1.3
console.log(todosJogadores);

const jogadoresFinais = [...jogadores1, 'Thiago', 'Coutinho', 'Perisic']; // 1.4
console.log(jogadoresFinais);

const { team1: time1, team2: time2, x: empate } = game.odds; // 1.5
console.log(time1, time2, empate);

const imprimirGols = function (...jogadores) {
  // 1.6
  let gols = 0;
  jogadores.forEach(jogador => {
    console.log(jogador);
    gols++;
  });
  console.log('Gols feitos: ' + gols);
};
imprimirGols(...game.scored);

time1 < time2 && // 1.7
  time1 < empate &&
  console.log('O time 1 tem mais chances de ganhar');
time2 < time1 &&
  time2 < time1 &&
  console.log('O time 2 tem mais chances de ganhar');
empate < time1 &&
  empate < time2 &&
  console.log('O empate é mais propício nesse jogo');

/* DESAFIO 2
 2.1 - Faça um loop pelo game.scored e imprima o nome de cada jogador, juntamente com o número do gol

 2.2 - Use o loop para calcular a média de odd e imprima

 2.3 - Imprima as 3 odds no console, dessa forma:
      Odd para o Bayern vencer: 1.33
      Odd para empatar: 3.25
      Odd para o Borussia vencer: 6.5
  
  2.4 - Crie um objeto chamado 'marcadores' que contenha o nome dos jogadores que marcaram como keys e o número de gols como values
*/

for (const [gol, jogador] of game.scored.entries()) {
  // 2.1
  console.log(`${gol + 1}º gol marcado por: ${jogador}`);
}

let media = 0; // 2.2
for (const odd of Object.values(game.odds)) {
  media += odd;
}
media /= Object.keys(game.odds).length;
console.log(`A média das odds equivale a: ${media.toFixed(2)}`);

for (const [team, odd] of Object.entries(game.odds)) {
  // 2.3
  console.log(`${game[team] ?? 'empate'} com a odd ${odd}`);
}

const marcadores = {}; // 2.4
for (const jogador of Object.values(game.scored)) {
  marcadores?.[jogador] ? marcadores[jogador]++ : (marcadores[jogador] = 1);
}
console.log(marcadores);

/* DESAFIO 3
  3.1 - Criar um array (eventos) com os diferentes eventos que aconteceram no jogo (sem duplicatas)

  3.2 - Depois que o jogo acabou, o cartão amarelo do minuto 64 foi considerado injusto. Remova essa evento dos logs de evento do jogo

  3.3 - Imprima a seguinte string no console: "Um evento acontece, em média, a cada 9 minutos" (tenha em mente que o jogo tem 90 minutos)

  3.4 - Faça um loop pelos eventos e os imprima no console, marcando se aconteceu no primeiro half ou no segundo, exemplo:
    [FIRST HALF] 17' GOL
*/

const gameEvents = new Map([
  [17, 'Gol'],
  [36, 'Substituição'],
  [47, 'Gol'],
  [61, 'Substituição'],
  [64, 'Cartão amarelo'],
  [69, 'Cartão vermelho'],
  [70, 'Substituição'],
  [72, 'Substituição'],
  [76, 'Gol'],
  [80, 'Gol'],
  [92, 'Cartão amarelo'],
]);

const tiposDeEventos = [...new Set(gameEvents.values())]; // 3.1
console.log(tiposDeEventos);

gameEvents.delete(64); // 3.2
console.log(gameEvents);

console.log(
  // 3.3
  `Um evento acontece em média a cada ${90 / gameEvents.size} minutos`
);

for (const [min, evento] of gameEvents.entries()) {
  console.log(
    `[${min <= 45 ? 'PRIMEIRO' : 'SEGUNDO'} TEMPO] ${min}' ${evento}`
  );
}
