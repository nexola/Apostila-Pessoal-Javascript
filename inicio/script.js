'use strict';

// // Add elements
// const friends = ['Jonas', 'Steven', 'Michael'];
// console.log(friends);

// friends.push('Peter'); // End
// console.log(friends);

// friends.unshift('Jay'); // Start
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// const popped = friends.pop(); // Also can be associated with a variable
// console.log(popped);

// console.log(friends.indexOf('Steven')); // Index of an specific element
// console.log(friends.indexOf('Bob')); // Returns -1 if the element does not exist

// console.log(friends.includes('Bob')); // Returns a boolean value;

// CHALLENGE
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// // Objects
// const aluno = {
//   nome: "Julio",
//   idade: 20,
//   residencia: "Poá",
//   curso: "Análise e desenvolvimento de sistemas",
// };

// aluno["semestre"] = 3;

// console.log(Object.keys(aluno));
// console.log(Object.values(aluno));

// // CHALLENGE
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     console.log(
//       `Summary\n First name = ${this.firstName} \n Last name = ${
//         this.lastName
//       } \n Age = ${this.age} \n Friends = ${
//         this.friends
//       } \n Driver's license: ${this.hasDriversLicense ? "B" : "N/A"}`
//     );
//   },
// };

// console.log(jonas.calcAge());

// jonas.getSummary();

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   heigth: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.heigth * this.heigth);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   heigth: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.heigth * this.heigth);
//     return this.bmi;
//   },
// };

// john.calcBMI();
// mark.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
//   );
// } else {
//   console.log("Their BMI are equal");
// }

function likes(names) {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

const names = ['Julio', 'Maria', 'José', 'Wilton', 'Leandro', 'Marcela'];

console.log(likes(names));
