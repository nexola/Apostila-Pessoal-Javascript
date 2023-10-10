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

const mostrarTransacoes = function (transacoes, ordenar = false) {
  containerMovements.innerHTML = '';

  const trans = ordenar ? transacoes.slice().sort((a, b) => a - b) : transacoes;

  trans.forEach((transacao, i) => {
    const tipo = transacao > 0 ? 'deposito' : 'saque';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${tipo}">${i + 1} ${tipo}
      </div>
      <div class="movements__value">${transacao}€
      </div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

mostrarTransacoes(account1.movements);

/////////////////////////////////////////////////
const arr = [1, 2, 3, 4, 5, 6, 7];
const x = new Array(7);
console.log(x);
// Preencher (preenchimento, indice inicial, indice final)
x.fill(1, 3, 5);
console.log(x);
arr.fill(23, 2, 6);
console.log(arr);
// Array.from()
Array.from({ length: 7 }, () => 1);
console.log(Array.from({ length: 7 }, () => 1));

const z = Array.from({ length: 7 }, (curr, i) => i + 1);
console.log(z);

const diceRolls = Array.from({ length: 100 }, () =>
  Math.round(Math.random() * 6)
);
console.log(diceRolls);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});

////////////////////////////////////////////////////////////////////////////////
// 1
const somaDepositoBancario = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(somaDepositoBancario);
// 2
const somaDeposito1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
console.log(somaDeposito1000);
// 3
const { depositos, saques } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (somas, transacao) => {
      // transacao > 0
      //   ? (somas.depositos += transacao)
      //   : (somas.saques += transacao);
      somas[transacao > 0 ? 'depositos' : 'saques'] += transacao;
      return somas;
    },
    { depositos: 0, saques: 0 }
  );
console.log(depositos, saques);
// 4
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const excecoes = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(palavra =>
      excecoes.includes(palavra) ? palavra : capitalize(palavra)
    )
    .join(' ');

  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONGE title'));
console.log(convertTitleCase('but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
