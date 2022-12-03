function factorial(n) {
  //   debugger;
  if (typeof n !== "number") {
    throw new TypeError("n must be number value");
  }
  if (typeof n !== "number" || n < 0 || Number.isSafeInteger(n)) {
    throw new RangeError("n must be positiv integer number value");
  }
  if (n < 0 || Number.isSafeInteger(n)) {
    throw new Error("n must be positiv integer value");
  }
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

try {
  factorial(-5);
} catch (err) {
  console.dir(err);
  if (err instanceof TypeError) {
    console.log("Input Incorrect type");
  } else if (err instanceof RangeError) {
    console.log("Must be positive");
  } else {
    console.log("Something whent wrong");
  }
}

function isCorrecName(name) {
  if (typeof name !== "string") {
    throw new TypeError("Name cant include numbers");
  }
  if (name.length < 4 || name.length > 32) {
    throw new RangeError("To long Name shod be less then 32");
  }
  return name;
}
try {
  const isCorrecName1 = isCorrecName("qq");
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Name cant include numbers", error);
  } else if (error instanceof RangeError) {
    console.log("To long Name shod be less then 32", error);
  } else {
    console.log("err", error);
  }
}

function validateAge(age) {
  //   debugger;
  if (typeof age !== "number") {
    throw new TypeError("age must be number");
  }
  if (age > 112 || age < 18 || !Number.isSafeInteger(age)) {
    throw new RangeError("You are to old or to you that use our service");
  }
  return age;
}

try {
  validateAge("22");
} catch (err1) {
  console.dir(err1);
  if (err1 instanceof TypeError) {
    console.log("Input Incorrect type");
  } else if (err1 instanceof RangeError) {
    console.log("You are to old or to you that use our service");
  } else {
    console.log("Something whent wrong");
  }
}
