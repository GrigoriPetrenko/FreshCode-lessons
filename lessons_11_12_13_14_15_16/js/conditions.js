// const isLoged = true;

// if (isLoged) {
//   console.log("You are in)))");
// } else {
//   console.log("try agein((( ");
// }

// const isEnouthMoney = Infinity;
// if (isEnouthMoney > 1) {
//   console.log("Enouth");
// } else {
//   console.log("Not enouth");
// }

// const inputValue = Number(prompt("Input Number"));
// if (Number.isFinite(inputValue)) {
//   console.log("Number");
// } else {
//   console.log("Not a Number");
// }

// const age = 18;

// console.log("age >18 :>> ", age > 18);
// console.log("age >= 18 :>> ", age >= 18);

// //wrong
// console.log("age == 18 :>> ", age == 18);
// //correct
// console.log("age === 18 :>> ", age === 18);

// const isUserAge = Number(prompt("Input Age"));
// const isCertificat = Boolean(prompt("Input true or false"));
// if (isUserAge < 18) {
//   console.log("Welcome");
// } else {
//   if (isCertificat === true) {
//     console.log("Welcome");
//   } else {
//     console.log("you need vactination");
//   }
// }

// const numberOne = Number(prompt("numberOne"));
// const numberTwo = Number(prompt("numberTwo"));

// if (numberOne > numberTwo) {
//   console.log(numberOne);
// } else if (numberOne === numberTwo) {
//   console.log("numberOne=numberTwo");
// } else {
//   console.log(numberTwo);
// }

// const isUserAge = 20;
// const isCertificat = false;
// if (isUserAge < 18 || isCertificat) {
//   console.log("Welcome");
// } else {
//   console.log("you need vactination");
// }

// const userAge = 20;
// const userChildAge = 5;
// if (userAge >= 60 || userChildAge < 18) {
//   console.log("Znigki)");
// }

// const isAdult = true;
// if (!isAdult) {
//   console.log("Adult)");
// }

// const value = 10;

// if (typeof value === "number" && Number.isNaN(value) === false) {
//   console.log("number not NaN");
// }
// if (isNaN(value) === false) {
//   console.log("number not NaN");
// }

// Реалізувати переведення оцінки за 12-ти бальної системи у 5 - ти бальну
const mark = 12;

// if (mark === 12) {
//   console.log("5+ :>> ", "5+");
// } else if (mark === 11) {
//   console.log("5 :>> ", 5);
// } else if (mark === 10) {
//   console.log("5- :>> ", "5-");
// } else {
//   console.log("mark < 5");
// }

// switch (mark) {
//   case 12:
//     console.log("5+");
//     break;
//   case 11:
//     console.log("5");
//     break;
//   case 10:
//     console.log("5-");
//     break;
//   default:
//     console.log("mark < 5");
// }

// const inputFirstValue = Number(prompt("Input Number"));
// const inputSecondValue = Number(prompt("Input Number"));
// const inputOperation = prompt("Input /, *, +, -");

// switch (inputOperation) {
//   case "+":
//     alert(inputFirstValue + inputSecondValue);
//     break;
//   case "-":
//     alert(inputFirstValue - inputSecondValue);
//     break;
//   case "*":
//     alert(inputFirstValue * inputSecondValue);
//     break;
//   case "/":
//     alert(inputFirstValue / inputSecondValue);
//     break;
//   default:
//     alert("incorect operation");
// }

// const inputMonthNomber = Number(prompt("Input Month Number"));

// switch (inputMonthNomber) {
//   case 12:
//   case 1:
//   case 2:
//     alert("Зима.");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     alert("Весна.");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     alert("Літо.");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     alert("Осінь.");
//     break;
//   default:
//     alert("Некоректний місяць.");
//     break;
// }

const a = 15;
const b = 8;
let minAB2 = a < b ? a : b;
console.log("minAB2 :>> ", minAB2);

const inputUserAge = Number(prompt("Input Age"));
let isLeagalAge = inputUserAge >= 18 ? alert("true") : alert("false");
