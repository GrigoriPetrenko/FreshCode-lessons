const arr = [];
const arr2 = new Array();

const numbers = [1, 2, 3, 4];

const usersList = [
  {
    1: { id: 1, name: "test" },
    2: { id: 2, name: "Ivo" },
  },
];

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("arr[i] :>>", arr[i]);
  }
}
printArray(numbers);

function countArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(countArray(numbers));

const arr4 = numbers;
arr4[5] = 10;
console.log("arr4", arr4);

const arr3 = Array.from(arr4);
const arr5 = Array.from(arr4);
console.log(arr4 === numbers);
console.log(arr4 === arr5);

const arr6 = [...arr4];
console.log(arr6 === arr5);

arr3[arr3.length] = 5;
console.log(arr3);
arr3.push(6);
console.log(arr3);

function inputArray(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Number(prompt("Input item: ")));
  }
  return arr;
}

// console.log("inpurArray(5)", inputArray(5));
console.log("arr " + arr3);
console.log(arr3[arr3.length - 1]);
console.log(arr3.pop());
console.log(arr3.shift());
console.log(arr3.unshift(10));
console.log("arr " + arr3);

//slice/spice
const singlNumber = arr3.slice(3);
console.log(singlNumber);
const arr10 = [10, 15, 2, 3, 5, 122, 155];
console.log(arr10.slice(2, 5));
console.log(arr10.splice(4, 1));
console.log("arr10", arr10);

const arr11 = [1, 2, 3];
const arr12 = [10, 11, 12];
const arr13 = arr11.concat(arr12);
console.log("arr13", arr13);

for (key in arr13) {
  console.log(arr13[key]);
}

for (item of arr13) {
  console.log(item);
}

for (const iterator of usersList) {
  console.log("Users", iterator);
}

const myCb = function (x) {
  console.log("x :>>", x);
};
function f(cb, a) {
  cb(a);
}
f(myCb, 5);

const arr20 = [1, 2, 5, 7];

function printArray(currentValue, index, array) {
  console.log(
    `currentValue:${currentValue};
        index:${index};
        array:${array}.`
  );
}
arr20.forEach(printArray);

const users = [
  {
    1: { id: 1, name: "test" },
    2: { id: 2, name: "Ivo" },
  },
];

users.forEach(function (user) {
  user.isLiked = false;
});
console.log("users", users);
users.forEach(printArray);

function printUsers(currentValue, index, array) {
  //   console.log(
  //     `id:${currentValue};
  //           name:${array}.`
  //   );
  console.log(currentValue);
}
users.forEach(printUsers);

const arr21 = [10, 20, 30];

function mapArray(currentValue) {
  return currentValue ** 2;
}

const arr22 = arr21.map(mapArray);
console.log("arr22", arr22);

const arr23 = [1, 2, 3, 4];

function isOdd(item) {
  return item % 2 === 1;
}
const arr24 = arr23.filter(isOdd);
console.log("arr24", arr24);

const arr25 = [1, -5, 3, -11, -55, 3];

function isPositive(item) {
  return item >= 0;
}
const arr26 = arr25.filter(isPositive);
console.log("arr26", arr26);

// find index

function find3(item) {
  return item === 3;
}
const foundedIndex = arr25.findIndex(find3);
console.log("foundedIndex", foundedIndex);
