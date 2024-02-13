let max = 10;

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

let isNumberGuessed = false;

while (!isNumberGuessed) {
  let userInput = Number(prompt("Please enter a number between 1 - 10"));

  if (randomNumber === userInput) {
    console.log("You have guessed the right number");
    isNumberGuessed = true;
  } else if (userInput < randomNumber) {
    console.log("please enter a higher number");
  } else {
    console.log("please enter a smaller number");
  }
}
