// const arr = new Array();
// console.log({ arr });
// const arrV1 = [];
// const cars = [
//   { name: "Tesla", model: 2012 },
//   { name: "TATA Nexon", model: 2031 },
//   { name: "Toyota", model: 2012 },
//   { name: "BMW", model: 1230 },
// ];
//Read
// console.log(cars[0]);
//update
// const copiesOfCars = cars; // referential value x x
// const copyOfCars = [...cars];
// const newName = "Tesla Model X";
// copyOfCars[0].mae = newName;
// console.log({ copyOfCars, cars });
//delete
//delete copyOfCars[0];
// const [a, ...rest] = copyOfCars;
// console.log({ rest });

//Write a js function that sorts the age in ascending order
// const peoples = [
//     {name:"Manish", age:18},
//     {name:"Ankit", age:19},
//     {name:"Sonam", age:17}
// ];
//sort by value
// peoples.sort((a, b)) =>  a.value - b.value

// MAP
// Get an array of all names
// Get an array of all heights
// Get an array of objects with just name and height properties
// Get an array of all first names
// REDUCE
// Get the total mass of all characters
// Get the total height of all characters
// Get the total number of characters in all the character names
// Get the total number of characters by eye color (hint. a map of eye color to count)
// FILTER
// Get characters with mass greater than 100
// Get characters with height less than 200
// Get all male characters
// Get all female characters
// SORT
// Sort by name
// Sort by mass
// Sort by height
// Sort by gender
// EVERY
// Does every character have blue eyes?
// Does every character have mass more than 40?
// Is every character shorter than 200?
// Is every character male?
// SOME
// Is there at least one male character?
// Is there at least one character with blue eyes?
// Is there at least one character taller than 200?
// Is there at least one character that has mass less than 50?

// const characters = [
//   {
//       name: 'Luke Skywalker',
//       height: '172',
//       mass: '77',
//       eye_color: 'blue',
//       gender: 'male',
//   },
//   {
//       name: 'Darth Vader',
//       height: '202',
//       mass: '136',
//       eye_color: 'yellow',
//       gender: 'male',
//   },
//   {
//       name: 'Leia Organa',
//       height: '150',
//       mass: '49',
//       eye_color: 'brown',
//       gender: 'female',
//   },
//   {
//       name: 'Anakin Skywalker',
//       height: '188',
//       mass: '84',
//       eye_color: 'blue',
//       gender: 'male',
//   },
// ];

// const foodA =["Noodle", "Pastha", "Ice-cream"]
// const foodB =["Ice-cream", "fries", "pizza"]

//  const findcommon= (a,b) => a. filter(item) => b.include(itme);
// console.log(foodA, foodB);

//Writa a js program to write the name in proper way
//Eg; manish rai => Manish Rai

const foodA = ["dal", "Rice", "Butter"];
const foodB = ["dal", "Chicken", "Butter"];
const commonfinder = (a, b) => a.filter((item) => b.includes(item));
console.log(commonfinder(foodA, foodB));
