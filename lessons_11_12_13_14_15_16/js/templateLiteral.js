// const greeting = "Hello";
// const userName = prompt("input name");
// // console.log(greeting + ", " + userName);
// console.log(`${greeting}, ${userName}`);

// for (let i = 1; i <= 10; i++) {
//   for (j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

let userPassword = "";
const PASSWORD = "qwerty";
const TRY_LIMIT = 3;
let curentTryNumber = 1;
let isPasswortCorect = false;

// do {
//   userPassword = prompt("Input passwd: ").trim();
//   if (userPassword === PASSWORD) {
//     console.log("Password correct");
//   } else {
//     console.log("Password incorrect");
//   }
// } while (userPassword !== PASSWORD && curentTryNumber++ < TRY_LIMIT);

do {
  isPasswortCorect = prompt("Input passwd: ").trim() === PASSWORD;
} while (!isPasswortCorect && curentTryNumber++ < TRY_LIMIT);
// if (isPasswortCorect) {
//   console.log("Password correct");
// } else {
//   console.log("Password incorrect");
// }

console.log(`Password ${isPasswortCorect ? "correct" : "incorect"}`);
