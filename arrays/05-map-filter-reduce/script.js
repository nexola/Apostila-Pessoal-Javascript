'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
const eurParaUsd = 1.1;
const transacoes = [200, 450, -400, 3000, -650, -130, 70, 1300];

const transacoesUSD = transacoes.map(transacao =>
  Math.round(transacao * eurParaUsd)
);
console.log(transacoes);
console.log(transacoesUSD);

const transacaoDescricao = transacoes.map(
  (transacao, i) =>
    `Transação ${i + 1}: Você ${
      transacao > 0 ? 'depositou' : 'sacou'
    } $${Math.abs(transacao)}`
);
console.log(transacaoDescricao);

const depositos = transacoes.filter(transacao => transacao > 0);
const saques = transacoes
  .filter(transacao => transacao < 0)
  .map(transacao => Math.abs(transacao));
console.log(depositos);
console.log(saques);
// acumulador -> bola de neve
const balanco = transacoes.reduce((acc, transacao) => acc + transacao, 0);
console.log(balanco);
// Valor máximo com reduce
const maior = transacoes.reduce(
  (acc, transacao) => (transacao > acc ? (acc = transacao) : acc),
  transacoes[0]
);
console.log(maior);
// PIPELINE
const totalDepositosUSD = transacoes
  .filter(x => x > 0)
  .map((x, i, arr) => {
    // console.log(arr);
    return x * eurParaUsd;
  })
  .reduce((acc, x) => acc + x);
console.log(totalDepositosUSD);
// Método FIND - Retorna o primeiro elemento que satisfaz a condição
const primeiroSaque = transacoes.find(transacao => transacao < 0);
console.log(primeiroSaque);
const account = accounts.find(account => account.owner === 'Jessica Davis');
console.log(account);
// Método INCLUDES - Compara igualdade - Retorna boolean
console.log(transacoes.includes(-130));
// Método SOME - Compara condições - Retorna boolean
const algumDeposito = transacoes.some(transacao => transacao > 0);
console.log(algumDeposito);
// Método EVERY - Compara se TODOS os elementos correspondem a condição - Retorna boolean
console.log(account4.movements.every(transacoes => transacoes > 0));

// Callback separado
const deposito = transacao => transacao > 0;
console.log(transacoes.some(deposito));

// Sort
// return < 0, A, B (manter ordem)
// return > 0, B, A (trocar ordem)
// Crescente
// transacoes.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
transacoes.sort((a, b) => a - b);
console.log(transacoes);
// Decrescente
transacoes.sort((a, b) => b - a);
console.log(transacoes);
