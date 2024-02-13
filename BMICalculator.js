
// height in inches
let height = 10;
// weight in pounds
let weight = 20;

let centimeters = height * 2.54;
let kilos = weight / 2.2046;

console.log("height in centimeters: ", centimeters)
console.log("weight in kilos: ", kilos)


let meters = centimeters / 100;

let BMI = kilos / (meters ** 2);

console.log(`BMI is ${BMI}`);