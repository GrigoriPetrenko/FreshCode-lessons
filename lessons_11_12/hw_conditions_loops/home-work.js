// Таски на умови.
// 1) Запитати змінну у користувача. Якщо змінна дорівнює числу 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

const inputValue = Number(prompt("Input some number!"));
if (inputValue === 10) {
  alert("true");
} else {
  alert("false");
}

// 2) Напишіть дві перевірки.
// Якщо змінна test дорівнює true, виведіть 'Вірно', інакше виведіть 'Невірно'.

const test = true;
if (test === true) {
  console.log("Вірно");
} else {
  console.log("Невірно");
}
// Якщо змінна test не дорівнює true, то виведіть 'Вірно', інакше виведіть 'Невірно'
if (test != true) {
  console.log("Вірно");
} else {
  console.log("Невірно");
}
// Перевірте роботу скрипта при test, що дорівнює true, false.

// 3) Обчислити суму покупки з урахуванням знижки. Знижка 3% надається, якщо сума покупки більша за 500 грн., а знижка 5% - якщо сума покупки більша за 800 грн. Суму покупки вводить користувач.

const costOfShoping = Number(prompt("Input cost of shoping!"));
const lowDiscount = 0.03;
const middleDiscount = 0.05;
if (costOfShoping >= 500 && costOfShoping < 800) {
  alert(
    "Final price is " +
      (costOfShoping - costOfShoping * lowDiscount) +
      "₴. Discount 3%."
  );
} else if (costOfShoping >= 800) {
  alert(
    "Final price is " +
      (costOfShoping - costOfShoping * middleDiscount) +
      "₴. Discount 5%."
  );
} else {
  alert("Final price is " + costOfShoping + "₴.");
}

// /************************************************* *****************/
// Таски на цикли.
// Кожне завдання вирішити циклами while, for.
// 1) Виведення чисел від 25 до 0 (порядок зменшення).
let someNumber = 25;
while (someNumber) {
  console.log("someNumber :>> ", someNumber);
  someNumber--;
}

for (let i = someNumber; i >= 1; i--) {
  console.log("i = ", i);
}
// 2) Виведення чисел від 10 до 50, які кратні 5.
let someEnotherNumber = 10;
while (someEnotherNumber <= 50) {
  console.log("someEnotherNumber :>> ", someEnotherNumber);
  someEnotherNumber += 5;
}

for (j = someEnotherNumber; j <= 50; j += 5) {
  console.log("someEnotherNumber :>> ", j);
}
// 3) Знайти суму чисел в межах від 1 до 100.

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("sum :>> ", sum);

let newSum = 0;
let value = 1;
while (value <= 100) {
  newSum += value;
  value++;
}
console.log("while sum :>> ", newSum);
