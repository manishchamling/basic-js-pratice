// CRUD (Creade read update delete)
//Create
// const manish = {
//   name: "Manish rai",
//   dob: "2020-02-20",
//   gender: "m",
//   hasvalidLicense: true,
//   phone: {
//     home: 9745463137,
//     office: 9745463137,
//   },
//   age: function age() {
//     return 2024 - Number(this.dob.split("-")[0]);
//   },
//   newAge: () => {
//     return 2024 - Number(manish.dob.split("-")[0]);
//   },
// };

//Read
//property
// console.log(manish.name, manish.gender);

//Method
// console.log(manish.age());
// console.log(manish.newAge());

//update
// manish.name = "Manish Rai";
// console.log({ manish });

//Delete
//delete manish.newAge;

//Spread Operator
// const { newAge, ...rest } = manish;
// console.log({ rest });

// Immutable JS ( object/array)

// find the value of the price property and if t is greater than 100, discount it by 10%. if that's not the case, discount it by 7%. b.Update the object with the new property -discount and the corresponding value (7% or 10%) and the new price.
let prod = {
  hame: "headphones",
  price: 83.7,
  discount: "7%",
};

//update
prod.price = "77.8";
console.log(prod);
//spread operator
const { price, ...newprice } = prod;
console.log({ newprice });
