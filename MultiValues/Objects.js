// objects

// property / key
// value

// name: "jawwad"

// object declaration
// let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// let person2 = person;

// person2.age = 60;

// console.log(person);
// console.log(person2);

let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

// accessing elements of an object
// console.log(person.firstName);
// console.log(person["firstName"]);

// changing value of any property
// person["lastName"] = "ahmad";
// console.log(person)

// nested objects
let company = {
  companyName: "Healthy Candy",
  activity: "food manufacturing",
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  yearOfEstablishment: 2021,
};

// console.log(company.address.street);

// arrays in object
company = {
  companyName: "Healthy Candy",
  activities: [
    "food manufacturing",
    "improving kids' health",
    "manufacturing toys",
  ],
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  yearOfEstablishment: 2021,
};
// console.log(company.activities[1]);

// objects in arrays
let addresses = [
  {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas",
  },
];

// console.log(addresses[0].city);

let company2 = {
  companyName: "Healthy Candy",
  activities: [
    "food manufacturing",
    "improving kids' health",
    "manufacturing toys",
  ],
  address: [
    {
      street: "2nd street",
      number: "123",
      zipcode: "33116",
      city: "Miami",
      state: "Florida",
    },
    {
      street: "1st West avenue",
      number: "5",
      zipcode: "75001",
      city: "Addison",
      state: "Texas",
    },
  ],
  yearOfEstablishment: 2021,
};
console.log(company2.address[0].state);
