// let i = 0;
// while (i < 50) {
//   console.log(i);
//   i++;
// }

// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
// let notFound = true;
// while (notFound && someArray.length > 0) {
//   if (someArray[0] === "Louiza") {
//     console.log("Found her!");
//     notFound = false;
//   } else {
//     someArray.shift();
//   }
// }

// fabonacci series
// let nr1 = 0;
// let nr2 = 1;
// let temp;

// let fibonacciArray = [];

// while (fibonacciArray.length < 25) {
//   fibonacciArray.push(nr1);
//   temp = nr1 + nr2; // 2
//   nr1 = nr2; // 1
//   nr2 = temp; // 2
// }

// console.log(fibonacciArray);

// let number;
// do {
//   number = prompt("Please enter a number between 0 and 100: ");
// } while (number >= 0 && number < 100);

// for loop

// let step = 10;
// let index = 0;
// for (; index < 100; index += step) {
//   console.log(index);
// }

// let arr = [];
// for (let i = 0; i < 100; i++) {
//   arr.push(i);
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 100; i += 2) {
//   arr.push(i);
// }
// console.log(arr);

// let i = 10;
// let j = 5;

// let counting = 1;
// for (let outer = 0; outer < i; outer++) {
//   for (let inner = 0; inner < j; inner++) {
//     console.log(counting++);
//   }
//   console.log();
// }

// let arrOfArrays = [];

// for (let i = 0; i < 3; i++) {
//   arrOfArrays.push([]);
//   for (let j = 0; j < 7; j++) {
//     arrOfArrays[i].push(j);
//   }
// }

// console.table(arrOfArrays);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

// for (let index = 0; index < names.length; index++) {
//   console.log(names[index]);
// }

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   names[i] = "hello " + names[i];
// }

// console.log(names);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

// for (let i = 0; i < names.length; i++) {
//   if (names[i].startsWith("M")) {
//     delete names[i];
//     continue;
//   }
//   names[i] = "hello " + names[i];
// }
// console.log(names.length);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   names.push("...");
// }

//  for of loop
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let name of names) {
//   console.log(name);
// }

// for in loop
// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "black",
// };
// for (let prop in car) {
//   console.log(car[prop]);
// }

// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "black",
// };
// let arrKeys = Object.keys(car);
// console.log(arrKeys);

// for (let key of Object.keys(car)) {
//   console.log(key);
// }

// let arrValues = Object.values(car);
// console.log(arrValues);

// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "black",
// };
// let arrKeys = ["model", "make", "year", "color"];
// for (let i = 0; i < arrKeys.length; i++) {
//   console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
// }

// let arrEntries = Object.entries(car);
// for (let entry of arrEntries) {
//   for (let subEntry of entry) {
//     console.log(subEntry);
//   }
//   console.log();
// }

//  break and continue statements

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 4) {
//     continue;
//   }
//   console.log("jawwad");
// }
