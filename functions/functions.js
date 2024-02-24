// Function with parameters

// function greet(name, greeting) {
//   console.log(greeting + ", " + name + "!");
// }

// return
// function add(a, b) {
//   return a + b;
// }

// console.log(add(10, 5)); // Outputs: 15

// function fullName(firstName, secondName) {
//   let full = firstName + secondName;
//   return full;
// }

// let name = fullName("jawwad", "ahmad");
// console.log(name);

// console.log(fullName("jawwad", "ahmad"));

// function expression
// const square = function (number) {
//   return number * number;
// };

// console.log(square(4)); // Outputs: 16

// default parameters
// function addTwoNumbers(x = 30, y = 20) {
//   console.log(x + y);
// }

// addTwoNumbers(100, 200, 300, 400);

// arrow function
// function doingStuff() {
//   console.log("PAKISTAN");
// }

// let doingStuff = () => console.log("Pakistan");
// doingStuff();

// function doingStuff(x) {
//   console.log(x);
// }

// let doingStuff = (x) => console.log(x);
// doingStuff(10);

// function doingStuff(x, y) {
//   console.log(x, y);
// }
// let doingStuff = (x, y) => console.log(x, y);
// doingStuff(10, 29);

// spread operator
// let arr = [10, 20, 30];
// let arr2 = [...arr, 40, 50];
// console.log(arr2);

// rest operator
// function add(x, y, ...z) {
//   console.log(x);
//   console.log(y);
//   console.log(z);
// }

// add(10, 20, 30, 40, 50);

// returning function

// function addTwoNumbers(x, y) {
//   return x + y;
// }
// let resultsArr = [];
// for (let i = 0; i < 10; i++) {
//   let result = addTwoNumbers(i, 2 * i);
//   resultsArr.push(result);
// }
// console.table(resultsArr);

// returning with arrow function

// let addTwoNumbers = (x, y) => x + y;

// console.log(addTwoNumbers(10, 20));

// function addTwoNumbers(x, y) {
//   console.log("Adding...");
//   return x + y;
// }

// let addTwoNumbers = (x, y) => {
//   console.log("Adding...");
//   return x + y;
// };

// IIFE functions
// ((x, y) => {
//   console.log(x, y);
// })(10, 20);

// recursive function
// function getRecursive(nr) {
//   console.log(nr);
//   if (nr == 0) return;
//   getRecursive(--nr);
// }
// getRecursive(3);

// nested functions
// function doOuterFunctionStuff(nr) {
//   console.log("Outer function");
//   doInnerFunctionStuff(nr);
//   function doInnerFunctionStuff(x) {
//     console.log(x + 7);
//     console.log("I can access outer variables:", nr);
//   }
// }
// doOuterFunctionStuff(2);

function doOuterFunctionStuff(nr) {
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    let z = 10;
  }
  console.log("Not accessible:", z);
}
doInnerFunctionStuff(2);
