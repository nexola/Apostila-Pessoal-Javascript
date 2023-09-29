// Criar um array de jogador para cada time (jogadores1 e jogadores2)

// O primeiro jogador em cada array é o goleiro, e os outros são os jogadores de campo. para o Bayern de Munique (time 1), criar uma variável (goleiro) com o nome do goleiro, e um array (jogadoresDeLinha) para o restante

// Criar um array (todosJogadores) contendo todos os jogadores de ambos os times

// durante o jogo, o Bayern (time 1) fez 3 substituições. Crie um array (jogadoresFinais) contendo todos os jogadores iniciais + 'Thiago', 'Coutinho' e 'Perisic'

// Baseado em game.odds, criar uma variável para cada chance ('time1', 'empate', 'time2')

// Crie uma funcao (imprimirGols) que recebe um ou mais nomes de jogadores e imprima cada um no console, juntamente com o número de gols que foram feitos (número de jogadores passados como arg)

// O time com a menor odd é mais propício a ganhar. Imprima no console qual time é mais provável que ganhe, sem usar if/else ou operador ternário

// 'Davies', 'Muller', 'Lewandowski', e 'Kimmich'

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
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [jogadores1, jogadores2] = game.players;
console.log(jogadores1, jogadores2);

const [goleiro, ...jogadoresDeLinha] = jogadores1;
console.log(goleiro, jogadoresDeLinha);

const todosJogadores = [...jogadores1, ...jogadores2];
console.log(todosJogadores);

const jogadoresFinais = [...jogadores1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(jogadoresFinais);

const { team1: time1, team2: time2, x: empate } = game.odds;
console.log(time1, time2, empate);

const imprimirGols = function (...jogadores) {
  let gols = 0;
  jogadores.forEach(jogador => {
    console.log(jogador);
    gols++;
  });
  console.log('Gols feitos: ' + gols);
};
imprimirGols(...game.scored);

time1 < time2 &&
  time1 < empate &&
  console.log('O time 1 tem mais chances de ganhar');
time2 < time1 &&
  time2 < time1 &&
  console.log('O time 2 tem mais chances de ganhar');
empate < time1 &&
  empate < time2 &&
  console.log('O empate é mais propício nesse jogo');
