// // Write a js program to create sum calculator using user interection
// // alert
// alert("Calculator for Sum");

// //Using prompt to take a number from the user
// const num1 = parseInt(prompt("Enter the first number:"));
// const num2 = parseInt(prompt("Enter the second number:"));
// const num3 = parseInt(prompt("Enter the third number:"));
// // sum is the variable is used to find the sum of two number
// const sum = num1 + num2 + num3;

// //string literal
// alert(`The sum of two number is ${sum}`);

// write a js program to check the day of the week
// alert("find the day");
// const day = Number(prompt("Enter number 1 to 7 "));
// switch (day) {
//   case 1:
//     alert("Sunday");
//     break;
//   case 2:
//     alert("Monday");
//     break;
//   case 3:
//     alert("Tueday");
//     break;
//   case 4:
//     alert("wednesday");
//     break;
//   case 5:
//     alert("Thursday");
//     break;
//   case 6:
//     alert("Friday");
//     break;
//   case 7:
//     alert("Saturday");
//     break;
//   default:
//     alert("choose number 1 to 7 not other'Thank You' ");
// }

// write a js progaram to check the grade of the student
// alert("Welcome to Grade finder");

// const score = Number(prompt("Enter Your score"));
// switch (true) {
//   case score >= 90 && score <= 100:
//     alert(" Your Grade is A+");
//     alert("Excellent");
//     break;
//   case score >= 80 && score <= 90:
//     alert(" Your Grade is A");
//     alert("Best");
//     break;
//   case score >= 70 && score <= 80:
//     alert(" Your Grade is B+");
//     alert("Better");
//     break;
//   case score >= 60 && score <= 70:
//     alert(" Your Grade is B");
//     alert("Good");
//     break;
//   case score >= 50 && score <= 60:
//     alert(" Your Grade is C+");
//     alert("Acceptable");
//     break;
//   case score >= 40 && score <= 50:
//     alert(" Your Grade is C");
//     alert("Not Bad");
//     break;
//   case score >= 30 && score <= 40:
//     alert(" Your Grade is C");
//     alert("Bad");
//     break;
//   case score <= 30:
//     alert(" NG");
//     alert("Very Bad");
//     break;
//   default:
//     alert("You have to put a score from 1 to 100 ");
// }
// write a program to know the gender of the person
// const gender = prompt("Write M for male and F for female");
// const m = "m";
// if (gender == m) {
//   alert("Male");
// } else {
//   alert("Female");
// }

// write a js program to find the sum of two number. if the two value are the same then return triple value.
// alert("Welcome to sum calculator");

// const num1 = Number(prompt("Enter the first number"));
// const num2 = Number(prompt("Enter the second number"));

// const sum = num1 + num2;
// console.log(sum);
// alert(`The sum of two number is ${sum}`);

// alert("Thank you for using sum calculator");

// // write a JS program to multiply two number
// const nm1 = Number(prompt("Enter your first  number"));
// const nm2 = Number(prompt("Enter your second number"));
// const multiply = nm1 * nm2;
// console.log(multiply);
// alert(`${multiply}`);

// write a program to find the subtraction of the two number
// const numb1 = Number(prompt("Enter the 1st Number"));
// const numb2 = Number(prompt("Enter the 2nd Number"));

// const subtraction = numb1 - numb2;

// console.log(subtraction);
// alert(`${subtraction}`);

// write a program to find the division of a number
// const number1 = prompt("Enter the number");
// const number2 = prompt("Enter another number");

// const division = number1 / number2;

// console.log(division);

// alert(`${division}`);

// write a JS program to set the value of PI
// const my_PI = 3.14;
// console.log(my_PI);

// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
//function to convert fahrenheit to celsius
const fahrenheitToCelsius = (fahrenheit) => {
  return (celsius = (fahrenheit * 9) / 5 + 32);
};

// function to convert celsius to fahrenheit
const celsiusToFahrenheit = (celsius) => {
  return (fahrenheit = (celsius * 5) / 9 + 32);
};

// example
var celsiusTemp = Number(
  prompt("Enter the celsius Temperature to convert Fahrenheit")
);
var fahrenheitTemp = Number(
  prompt("Enter the fahrenheit temperature to convert Celsirs")
);

// print
console.log(
  celsiusTemp +
    " degree celsius is " +
    celsiusToFahrenheit(celsiusTemp) +
    "degree faherenhit"
);
console.log(
  fahrenheitTemp +
    " degree fahrenhit is " +
    fahrenheitToCelsius(fahrenheitTemp) +
    "degree celsius"
);
