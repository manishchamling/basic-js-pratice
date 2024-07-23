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
// function sum(a, b) {
//   return (c = a + b);
// }
// const number = Number(prompt("|Enter Number for sum"));
// const number1 = Number(prompt("Enter another number for sum"));
// const ans = sum(number1, number);
// console.log({ ans });

// ES6
// const sum1 = (c, d) => {
//   return (e = c + d);
// };
// const num = Number(prompt("Enter the first Number"));
// const num1 = Number(prompt("Enter the second number"));
// const result = sum1(num, num1);
// console.log(result);

/*
Types of function:
1. default function
2. parameterixed function 
3. arrow function 
4. closure
5.IIfes
6. recursive function
7.inline function 
8. anonymous function 
9. callback function
1o. pure function
11. inplicit function
12. explicit function
*/
// 1. default
// used for pagination
// const defaultFunc = (name = "user") => {
//   console.log(`Hellow ${name}`);
// };
// defaultFunc("Admin");
// defaultFunc();

//2. parameterized function
// const sumation = ({ a, b, c, d }) => {
//   console.log(a + b);
// };
// sumation({ a: 2, b: 3, c: 3, d: 4 });

//3. Arrow function
// const summations = (a, b) => {
//   return a + b;
// };

//4. closure fuction
// const maincounter = () => {
//   let count = 0;
//   return () => {
//     count = count + 1;
//     return count;
//   };
// };
// const count1 = maincounter(); // dashain counter
// const count2 = maincounter();
// console.log = count1();
// console.log = count1();

// console.log = count2();

//5. IIFEs (Immediately Invoked Function Expression)
// ((name) => {
//   console.log(`Helow${name}`);
// })(Manish);

//6. Resursive function
// factorial of 5
// const factorial = (num) => {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   return num(factorial - 1);
// };
// const fact = factorual(5);
// console.log(fact);

//6. write a recursion formula for countdown
// const countdown = (counter) => {
//   console.log(counter);
//   let count = count - 1;
//   if (count === 0) return 0;
//   return countdown(count);
// };
// countdown(10);

//7. inline function

//8. Anynomous function

// () => {
//   console.log(a);
// };

//9. callback function
// function defination
// const print = (data) => {
//   console.log({ data });
// };
// const parent = (func) => {
//   const num = "Manish";
//   func(num);
// };
// function calling
// parent(print);

//10. Pure Function

// Function defination ES5
function myname(name) {
  // function decleration
  const num = prompt("Enter your name"); // taking input form the user using prompt
  console.log(num); // print what user write
}
// function calling
myname();
