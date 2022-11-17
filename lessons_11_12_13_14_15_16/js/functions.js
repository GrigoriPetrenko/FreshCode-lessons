// debugger;
// function functionName() {
//   //function body
//   console.log("Hello");
// }
// functionName();

// const userName = "Ivo";

// function sayHelloToUser(name) {
//   console.log(`Hello, ${name}`);
// }
// sayHelloToUser(userName);

// const myNumber = 4;

// function multiplyFourTimes(number) {
//   return number ** 4;
// }
// console.log(multiplyFourTimes(myNumber));

// function countSum(lowLimit, upperLimit) {
//   let sum = 0;
//   for (let k = lowLimit; k <= upperLimit; k++) {
//     sum = sum + k;
//   }
//   return sum;
// }
// console.log(countSum(5, 10));

// function isAdult(age) {
//   return age >= 18; // ? true : false;
// }
// console.log(isAdult(17));

// function getInitials(userFullName) {
//   let initials = "";
//   let positionOfSecondName = userFullName.indexOf(" ");
//   //   console.log(positionOfSecondName);
//   initials =
//     userFullName.substring(0, 1) +
//     userFullName.substring(positionOfSecondName + 1, positionOfSecondName + 2);

//   return initials;
// }
// console.log(getInitials("Ivon Smith"));
// console.log(getInitials("Mvosrn Lmith"));

// function power(base, pow = 4) {
//   // if (pow === undefined) {
//   //   pow = 4;
//   // }
//   return base ** pow;
// }
// console.log("power(10,2", power(10));

/**
 * Returns multiplication between of two numbers
 * @param {number} n2 - last number
 * @param {number} [n1 = 1] - first number
 * @returns {number} multiplication of all numbers in the limit of two numbers between them. If the "first number" is not provided then the default value is 1.
 */

// function multiply(n2, n1 = 1) {
//   let power = 1;
//   for (n1; n1 <= n2; n1++) {
//     power *= n1;
//   }
//   return power;
// }

// console.log("multiply(2,4)", multiply(3));

/**
 * Functional expression
 * @param {*} a
 * @param {*} b
 * @returns
 */
// const sum3 = function (a, b) {
//   return a + b;
// };

// const powMult = function (base, pow = 4) {
//   return base ** pow;
// };
// console.log("powMult", powMult(6, 3));

function sum5(a) {
  return (a = Math.random());
}
console.log("sum5(1)", sum5(1));
console.log("sum5(1)", sum5(1));

function sum4(a) {
  return a + b;
}

let b = 10;
console.log("sum4(1)", sum4(1));

b = 15;
console.log("sum4(1)", sum4(1));
