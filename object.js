// CRUD (Creade read update delete)
//Create
const manish = {
  name: "Manish rai",
  dob: "2020-02-20",
  gender: "m",
  hasvalidLicense: true,
  phone: {
    home: 9745463137,
    office: 9745463137,
  },
  age: function age() {
    return 2024 - Number(this.dob.split("-")[0]);
  },
  newAge: () => {
    return 2024 - Number(manish.dob.split("-")[0]);
  },
};

//Read
//property
console.log(manish.name, manish.gender);

//Method
console.log(manish.age());
console.log(manish.newAge());

//update
manish.name = "Manish Rai";
console.log({ manish });

//Delete
//delete manish.newAge;

//Spread Operator
const { newAge, ...rest } = manish;
console.log({ rest });

// Immutable JS ( object/array)
