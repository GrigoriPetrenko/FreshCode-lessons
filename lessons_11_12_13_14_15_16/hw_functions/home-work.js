// 0) Реалізувати функцію isWorkingAgePerson, яка буде перевіряти, чи працездатного людина віку (від 16 до 65). Функція приймає в якості параметра вік людини і повертає значення булевського типу.
// Очікуваний результат:
// isWorkingAgePerson(20); // true
// isWorkingAgePerson(4); // false
// isWorkingAgePerson(88); // false

const provideAge = Number(prompt("Input age:"));
function isWorkingAgePerson(age) {
  return age >= 18 && age <= 65 ? alert("Can work!") : alert("Can't work!");
}
isWorkingAgePerson(provideAge);

// 1) *Реалізувати функцію, яка приймає число і повертає булевське значення, чи воно просте (просте число ділитися без залишку тільки на себе і на одиницю).
//(function expression)

let isNormal = function (number) {
  if (number % 1 == 0 && number % number == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isNormal(0.25));
console.log(isNormal(1));

// 2) Реалізувати функцію checkMultiplicity, яка приймає два числа і перевіряє, чи ділиться перше на друге націло (без залишку):

let checkMultiplicity = function (firstNumber, secondNumber) {
  if (firstNumber % secondNumber == 0) {
    return console.log("true");
  } else {
    return console.log("false");
  }
};

checkMultiplicity(25, 5); // true
checkMultiplicity(15, 3); // true
checkMultiplicity(15, 5); // true
checkMultiplicity(15, 4); // false

// 3) Перевірка можливості існування трикутника. Реалізувати функцію, яка приймає довжини трикутника; функція повертає true, якщо треугольник можливий, і false, якщо ні (див. умови існування трикутника).
/**
 * Function to check whether it is possible to construct a triangle with the following parameters:
 * @param {number} x- Enter one of the smaller sides of the triangle.
 * @param {number} y - Enter the second of the smaller sides of the triangle.
 * @param {number} z - Enter the longest side of the triangle.
 * @returns The function will return the result of the possibility of constructing a triangle.
 */
function isPosibleExist(x, y, z) {
  if (z < x + y) {
    return true;
  } else {
    return false;
  }
}
console.log(isPosibleExist(1, 2, 3));

// 4) Реалізувати функції розрахунку площі (або поверхні) наступної фігури (тіла): трикутника, прямокутника (або конуса, паралелепіпеда) в залежності від переданих розмірів фігури. Функція повинна повернути обчислене значення. Мінімум для однієї фігури на вибір.

/**
 * Function to calculete Square (function expression)
 * @param {number} x- Enter sides of the triangle.
 * @param {number} y - Enter sides of the triangle.
 * @param {number} z - Enter sides of the triangle.
 * @returns The function will return squere of triangel just provide length of 3 sides.
 */

const triangelSquare = function (x, y, z) {
  const perimetr = (x + y + z) / 2;
  let square = Math.sqrt(
    perimetr * (perimetr - x) * (perimetr - y) * (perimetr - z)
  );
  return square;
};

console.log(triangelSquare(1, 3, 3) + " cm^2");
// 2 функції на вибір реалізувати у форматі функціонального виразу (function expression).

// Буде плюсом використовувати JSDoc (на вибір 2 функції).
