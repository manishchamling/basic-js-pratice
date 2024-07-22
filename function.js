// function are the main building block of any program
// 2 core principles
// DRY (Donot repeat yourself)
//SoC(Seperation of concern)

// 2 way to write a function
// ES5

// write a sum function for adding 2 numbers

// function declare
//a, b and c are parameters
// function sum(a, b) {
//   //logic
//   const c = a + b;
//   return c;
// }

// // function call/ execute
// const result = sum(2, 3);
// const result1 = sum(5, 3);
// console.log({ result, result1 });

// function square(a) {
//   const b = a * a;
//   return b;
// }
// const num = Number(prompt("Enter any number"));
// const ans = square(num);
// console.log({ ans });

// const square = (x) => {
//   return x * x;
// };
// const newans = square(6);
// console.log({ newans });

// // finding square through ES5 function
// function square(a) {
//   const b = a * a;
//   return b;
// }
// const num = 4;
// const result = square(num);
// console.log({ result });

// // ES6
// const square1 = (a) => {
//   return a * a;
// };
// const num1 = Number(prompt("Enter the number"));
// const result1 = square(num1);
// console.log(result1);

// ES5 for sum
function sum(a, b) {
  return (c = a + b);
}
const number = Number(prompt("|Enter Number for sum"));
const number1 = Number(prompt("Enter another number for sum"));
const ans = sum(number1, number);
console.log({ ans });
