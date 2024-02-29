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

// let arr = [1, 2, 3, 4];
// let mapped_arr = arr.map((x) => x + 1);
// console.log(mapped_arr);

// String methods
// combining strings
// let s1 = "Hello ";
// let s2 = "JavaScript";
// let result = s1.concat(s2).concat(s2).concat(s2);
// console.log(result);

// converting string to array
// let result = "Hello,JavaScript,World";
// let arr_result = result.split(",");
// console.log(arr_result);

// converting an array to a string
// let letters = ["a", "b", "c"];
// let x = letters.join("/");
// console.log(x);

// finding index of sub string
// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// let index_re = poem.indexOf("re");
// console.log(index_re);

// creating substrings
// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0, 3);
// console.log("1:", substr1);
// console.log("2:", substr2);

// replacing substring
// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// console.log(hi);
// console.log(new_hi);

// let s3 = "hello hello";
// let new_s3 = s3.replace("hello", "oh");
// console.log(new_s3);

// let s3 = "hello hello";
// let new_s3 = s3.replaceAll("hello", "oh");
// console.log(new_s3);

// Upper case and lower case
// let low_bye = "bye!";
// let up_bye = low_bye.toUpperCase();
// console.log(up_bye);

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// console.log(fixed_caps);

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// let first_capital = fixed_caps
//   .charAt(0)
//   .toUpperCase()
//   .concat(fixed_caps.slice(1));
// console.log(first_capital);

// let encouragement = "You are doing great, keep up the good work!";
// let bool_start2 = encouragement.toLowerCase().startsWith("you");
// console.log(bool_start2);

// Number Methods
// let x = 34;
// console.log(isNaN(x)); // false
// console.log(!isNaN(x)); // true
// let str = "hi";
// console.log(isNaN(str)); // true

// let str1 = "5";
// console.log(isNaN(str1));

// let str1 = undefined;
// console.log(isNaN(str1));

// let x = 3;
// let str = "finite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10 / 0));

// let x = 3;
// let str = "integer";
// console.log(Number.isInteger(x)); // true
// console.log(Number.isInteger(str)); // false
// console.log(Number.isInteger(Infinity)); // false
// console.log(Number.isInteger(2.4)); // false

// let x = 1.23456;
// let newX = x.toFixed(10);
// console.log(newX);

// let x = 123.23456;
// let newX = x.toPrecision(5);
// console.log(newX);

// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords);

let x = 6.78;
let y = 5.34;

console.log("X:", x, "becomes", Math.ceil(x));
console.log("Y:", y, "becomes", Math.ceil(y));

let negativeX = -6.78;
let negativeY = -5.34;
console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX)); // -7
console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY)); // -6
