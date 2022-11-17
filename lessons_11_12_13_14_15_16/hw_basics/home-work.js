// 1) Створіть дві змінні a та b. Виведіть у консоль результат їх множення.
// 2) Створіть дві змінні c та d. Виведіть у консоль результат ділення першого на друге.
// 3) Створіть дві змінні e та f. Виведіть у консоль результат додавання.
const a = 11,
  b = 20,
  c = 3,
  d = 4,
  e = 16,
  f = 8;
console.log("a * b :>> ", a * b);
console.log("c * d :>> ", c / d);
console.log("e + f :>> ", e + f);
// 4) Визначте змінні зі значеннями 11, true, "java script", "100" і виведіть їх в консоль
const firstVariable = 11,
  secondVariable = true,
  thirdVariable = "java script",
  fourthVariable = 100;
console.log(
  " List of variables:",
  firstVariable +
    ", " +
    secondVariable +
    ", " +
    thirdVariable +
    ", " +
    fourthVariable +
    "."
);
// 5) Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --
// let num = 1;
// num = num + 11;
// num = num – 11;
// num = num * 11;
// num = num / 11;
// num = num + 1;
// num = num – 1;
let num = 10;
console.log("num :>> ", (num += 11));
console.log("num :>> ", (num -= 11));
console.log("num :>> ", (num *= 11));
console.log("num :>> ", (num /= 11));
console.log("num :>> ", ++num);
console.log("num :>> ", --num);

// Таски на prompt (вводити з допомогою prompt, виводити з допомогою alert):
// 1) Запитати число у користувача, піднести його до квадрату і вивести результат.
const inputValue = Number(prompt("Input value"));
console.log("inputValue^2 = ", inputValue * inputValue);
// // 2) Вивести середнє арифметичне двох чисел. Числа запитувати у користувача.
const secondValue = Number(prompt("Input value"));
const thirdValue = Number(prompt("Input value"));
console.log("(secondValue + thirdValue)/2 = ", (secondValue + thirdValue) / 2);
// 3) Перевести кількість хвилин на секунди та вивести результат. Число хвилин запитувати у користувача.
const inputCountOfMinutes = Number(prompt("Input Count Of Minutes"));
console.log(
  " You inputted " + inputCountOfMinutes + " minutes, it is ",
  inputCountOfMinutes * 60,
  " seconds!"
);
// 4) Створіть змінну greeting зі значенням 'Hello,' і оголосіть змінну userName. Запитайте ім'я користувача та внесіть це значення у змінну userName. Виведіть повідомлення з привітанням, наприклад, 'Hello, Vasya!'. (згадайте про конкатенацію)
const greeting = "Hello, ";
const userName = prompt("Input User Name:");
console.log(greeting + userName + "!");
