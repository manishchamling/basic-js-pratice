/*
for 
 do while
while
*/

// for (syntax)
// for(begin; step condition; increase begin step){
// code to be executed
// }
// write a js program for multiplication table
// const table = Number(prompt("Enter the number for table"));
// if (isNaN(table)) {
//   alert("You didn't enter number");
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(`${table} * ${i} = ${table * i}`);
// }

// do while
/*begin step
do{
code execution
 increase begin step
 }
 while(step condition)

*/
// while loop

/*
begin step 
while(step condition){
//code execution
increase begin step
}
*/
// const table1 = Number(prompt("Enter the number for table"));
// if (isNaN(table)) {
//   alert("You didn't enter number");
// }
// let a = 1;
// do {
//   console.log(`${table} * ${a} = ${table * a}`);
//   i++;
// } while (a <= 10);

// const table3 = Number(prompt("Enter the number for table"));
// if (isNaN(table)) {
//   alert("You didn't enter number");
// }
// let b = 1;
// while (b <= 10) {
//   console.log(`${table} * ${b} = ${table * b}`);
//   b++;
// }

// for pratice
// const table = Number(prompt("Enter the Number"));
// if (isNaN(table)) {
//   alert("You didn't enter number");
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(`${table} * ${i} = ${table * i}`);
// }

// // do while loop
// const table1 = Number(prompt("Enter the number"));
// let a = 1;
// do {
//   if (isNaN(table1)) {
//     alert("You have to enter a number");
//   }
//   console.log(`${table1} * ${a} = ${table1 * a}`);
//   a++;
// } while (a <= 10);

// Function `printNumbers()` prints numbers from 1 to 10 using for loop
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Function `printArray()` prints all the elements of a 2D array using nested for loops.
// function myfunc(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[0].length; i++) {
//       console.log(arr[i][j]);
//     }
//   }
// }
// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// Function `printEven()` prints all the even numbers of a 2D array using for loops and ‘%’ operator
function printEven(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      // console.log(arr[i]);
    }
  }
}
let arr = [100, 20, 30, 2, 34, 33, 35];
printEven(arr);
const sentence = "What is your name?";
// console.log(sentence.length);
// Srting Method and Datatype
const name = "Manish Rai"; // declaring the variable with String datatype
const repocount = 34; // declaring the variable with Number datatype
console.log(`My name is ${name} and my repocount is ${repocount}`); // printing the data or value of name and repocount using string literal.
const gameName = "call of duty"; // declaring the variable name gameName. which variable have string datatype
// console.log(gameName[2]); // Accessing the value of gameName
// console.log(gameName.toUpperCase()); // Convert into Upper case
// console.log(gameName.toLowerCase()); // convert into Lower Case
// console.log(gameName.charAt(6)); //In this case we are finding what character exist in the 6th position. charAt is the string method which helps to finding what character exist in the which position. Ans: o

// console.log(name.indexOf("h")); // finding the position of 'h' using the indexof method . Index of is the method that is used for finding the position of character.

const newstring = gameName.substring(0, 5); // Substring is the string method used when we want only few string in that type of case  we use substring method
// console.log(newstring);

// const anotherString = gameName.slice(-9, 5); // slice method
// console.log(anotherString);
const newanotherstring = "     Rockhang   ";
// console.log(newanotherstring); // without using trim method the string print with space.
// console.log(newanotherstring.trim()); // using trim method. when we use trim method tha useless space will delete.
const url = "https://manish.com/manish%20rai";
// console.log(url.replace("%20", "-"));   //using replace method we can replace the value with the help of replace

//Number and Math
const score = 20;
// console.log(score);
const newscore = new Number(30);
// console.log(newscore);
// console.log(newscore.toString().length); // to string is the Number method used to conver the Number into string.
console.log(newscore.toFixed(2)); //toFixed Number method add 0. when we pass 2 in parameters this method add two zero (.00 like this ).
