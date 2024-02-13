// const theList = [
//   "Laurence",
//   "Svekis",
//   true,
//   35,
//   null,
//   undefined,
//   { test: "one", score: 55 },
//   ["one", "two"],
// ];

// theList.pop();
// theList.shift();

// theList.unshift("FIRST");

// theList[3] = "Hello World";

// theList[2] = "Middle";

// theList[theList.length - 1] = "END";
// console.log(theList);

// Project 2
let inventory = [];

let item1 = { name: "Laptop", model: "Dell", cost: 50000, quantity: 100 };
let item2 = { name: "keyboard", model: "Dell", cost: 500, quantity: 200 };
let item3 = { name: "Mouse", model: "HP", cost: 1000, quantity: 300 };

inventory.push(item1, item2, item3);

console.log(inventory[2].quantity);
