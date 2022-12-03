//n! = 1*2*2*3...*n
//5!=1*2*3*4*5=4!*5 - recursion

function factorial(n) {
  //   debugger;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// const a = b;
console.log("next line :>> ");

console.log("factorial(5) :>> ", factorial(5));
