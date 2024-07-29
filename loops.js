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
// console.log(`My name is ${name} and my repocount is ${repocount}`); // printing the data or value of name and repocount using string literal.
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
// console.log(newscore.toFixed(2)); //toFixed Number method add 0. when we pass 2 in parameters this method add two zero (.00 like this ).

////Write a js function to that convert full name into proper case
// e.g manish chamling rai => Manish Chamling Rai
const properCase = (text) => {
  return text //returning the text value
    .split(" ") //.split method is using to split the word with the " "(space) When the user put the space in the name that split like (manish chamling rai) here is the two space the split method split this word into three words/
    .map(
      // using map method for loop
      (
        word //
      ) =>
        word.slice(0, 1).toUpperCase() + //here we use splice method to divide the word. In the method slice we put the parameter (0, 1) because to differ first letter form other letter and when the first letter differ from other. we put Uppercase string method to convert the word into uppercase or capital letter.
        word.slice(1, word.length).toLowerCase() //slice is the string method. in this  line we use slice method to slice the word from 1st letter to word.length. and we use another method LowerCase to convert the word into lower case. ([m:0][a:1][n:2][i:3][s:4][h:5]) so we put 0 and 1 parameter to convert first letter into uppercase. we put 1 to word.length parameter to convert other letter except first into LowerCase.
    )
    .join(" "); // .join method is used to join the word. when the word split with the split method at last we have to join that word. so we use join method to join the split word. Things to remember when we split and join the String :[in the split method we split with the (" " space) when we split with the space. we have to join with the (" " space).]
};
console.log(properCase("maniSh cHamling rai")); //at last we are calling the properCase function and printing the value.
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

//Get the total mass of all character using reduced method
const initialValue = 0; //declaring the initailvalue
const sumOfMass = (arr) => {
  //make the function "name sumOfMass" and put the "arr" parameter in the function
  return arr.reduce((preval, currval) => {
    //use reduce method pass the parameter" preval" and "currval" and reutrn arr
    return preval + Number(currval?.mass); //return the preval and add with tha currval
  }, initialValue); //We already declare the inital value in the top [const initialValue = 0;]
};
console.log(sumOfMass(characters)); // calling function "sumOfMass" and printing the character length
