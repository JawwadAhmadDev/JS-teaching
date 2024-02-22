let isPrimeFor = true;
let userInput = 11;

for (let i = 2; i < userInput; i++) {
  if (userInput % i === 0) {
    isPrimeFor = false;
    break;
  }
}

if (isPrimeFor && userInput > 1) {
  console.log(userInput + " is a prime number (For loop)");
} else {
  console.log(userInput + " is not a prime number (For loop)");
}
