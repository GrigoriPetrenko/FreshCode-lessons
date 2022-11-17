// let i = 1;
// const limit = 4;

// while (i++ <= limit) {
//   console.log("text i");
//   i++;
// }

// let page = 1;
// const pageCount = 5;

// while (page <= pageCount) {
//   console.log("current page " + page);
//   page++;
// }

// let value = prompt("input number");

// while (!Number.isFinite(value) || value === "") {
//   value = prompt("You are input wrong number");
// }

// console.log("value ** 2 :>> ", value ** 2);

// const pageCount = 365;

// for (let page = 1; page <= pageCount; page++) {
//   console.log("current page " + page);
// }

// for (let page = pageCount; page >= 1; page--) {
//   console.log("current page " + page);
// }

// for (i = 2; i <= 16; i += 2) {
//   console.log("i :>> ", i);
// }

// let s = 1;
// for (let i = 1; i <= 15; i += 2) {
//   s *= i;
//   console.log("s :>> ", s);
// }

// let userNumber = null;
// do {
//   userNumber = Number(prompt("Input number "));
// } while (!Number.isFinite(userNumber));
// console.log("userNumber :>> ", userNumber);

let userAnswer = null;
do {
  userAnswer = Number(prompt("Input answer 2+2*2 "));
} while (userAnswer != 6);
console.log("Answer correct");
