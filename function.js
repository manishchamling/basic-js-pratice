// function are the main building block of any program
// 2 core principles
// DRY (Donot repeat yourself)
//SoC(Seperation of concern)

// 2 way to write a function
// ES5

// write a sum function for adding 2 numbers

// function declare
//a, b and c are parameters
function sum(a, b) {
  //logic
  const c = a + b;
  return c;
}

// function call/ execute
const result = sum(2, 3);
const result1 = sum(5, 3);
console.log({ result, result1 });

