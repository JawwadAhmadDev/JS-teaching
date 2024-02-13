// if statement
let a = 10;
let b = 20;

if (a > b) {
  console.log("if executed");
}

// if-else
// let rain = false;
// if (rain) {
//   console.log("** Taking my umbrella when I need to go outside **");
// } else {
//   console.log("** I can leave my umbrella at home **");
// }

// let hobby = "dancing";
// if (hobby == "coding") {
//   console.log("** I love coding too! **");
// } else {
//   console.log("** Can you teach me that? **");
// }

// let isCodingExpert = true;

// if (isCodingExpert) {
//   console.log("Most welcome.");
// } else {
//   console.log("You are not allowed. Only experts are allowed");
// }

// if (!isCodingExpert) {
//   console.log("Most welcome.");
// } else {
//   console.log("You are not allowed. Only experts are allowed");
// }

// let age = 10;
// let cost = 0;
// let message;
// if (age < 3) {
//   cost = 0;
//   message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {
//   cost = 5;
//   message = "With the child discount, the fee is 5 dollars";
// } else if (age >= 12 && age < 65) {
//   cost = 10;
//   message = "A regular ticket costs 10 dollars.";
// } else {
//   cost = 7;
//   message = "A ticket is 7 dollars.";
// }
// console.log(message);
// console.log("Your Total cost " + cost);

let userQuestion = "What is your name?";
let randomNumber = Math.random() * 5; // 0-5
let RandomNumber = Math.floor(randomNumber);
let message;

switch (RandomNumber) {
  case 0:
    message = "Case 0 is executed";
    break;
  case 1:
    message = "Case 1 is executed";
    break;
  case 2:
    message = "Case 2 is executed";
    break;
  case 3:
    message = "Case 3 is executed";
    break;
  case 4:
    message = "Case 4 is executed";
    break;
  case 5:
    message = "Case 5 is executed";
    break;
  default:
    message = "default case is executed";
    break;
}

console.log(`User question: ${userQuestion}`);
console.log(`message : ${message}`);
