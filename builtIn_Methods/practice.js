// let s = "Hello";
// console.log(
//   s
//     .concat(" there!") // Hello there!
//     .toUpperCase() // HELLO THERE!
//     .replace("THERE", "you") // HELLO you!
//     .concat(" You're amazing!") // HELLO you! You are amazing!
// );

// let x = 0;
// console.log(Number.isNaN(x));

// let str_int = 10.5;
// let int_int = parseInt(str_int);
// console.log("Type of ", int_int, "is", typeof int_int);

// let str_float = "7.6";
// let int_float = parseInt(str_float);
// console.log("Type of", int_float, "is", typeof int_float);

// let str_binary = "0b101";
// let int_binary = parseInt(str_binary);
// console.log("Type of", int_binary, "is", typeof int_binary);

// let str_nan = "hello!";
// let int_nan = parseInt(str_nan);
// console.log("Type of", int_nan, "is", typeof int_nan);

// let arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element, index) {
//   console.log("Printing stuff:", element, "on array position:", index);
// }
// arr.forEach(printStuff);

// arr.forEach(function printStuffer(jawwad) {
//   console.log("Printing stuff:", jawwad);
// });

// let arr = ["squirrel", 5, "Tjed", new Date(), true];

// function checkString(element, index) {
//   return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(arr);
// console.log(filterArr);

// console.log(arr.every(checkString));

let arr = [1, 2, 3, 4];
let mapped_arr = arr.map((x) => x + 1);
console.log(mapped_arr);
