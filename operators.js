//  Arithmetic Operators

// let num1 = 20;
// let num2 = 10;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(10 ** 3); // 10  * 10 * 10 = 1000


// let num1 = 10; 
// let str1 = "2";

// console.log(num1 + str1); // "10" + "2" = "102"
// console.log(num1 - str1); // 10 - 2 = 8
// console.log(num1 * str1); // 10 * 2 = 20
// console.log(num1 / str1); // 10 / 2 = 5





// Unary Operators
// let x = 1;
// x++; // postfix
// ++x; // prefix
// console.log(x);


// let x = 1;
// let y = 2;
// // let sum = y - ++x; // y = 2, x = 2, 2-2 = 0
// let sum = y - x++; // y = 2, x = 1, 2-1=1, 
// console.log(sum);
// console.log(x);












// Operators precedence
// console.log(3 + 4 * 5) // 23
// console.log((2 + 3) * (5 - 2)) // 15
// console.log(10 - 3 + 2);
// console.log(18 / (3 + 3));
// console.log(4 + 5 * (7 - 3) ** 2 - 6 / 2)
// 4 + 5 * 4 ** 2 - 6 / 2
// 4 + 5 * 16 - 6 / 2
// 4 + 5 * 16 - 3
// 4 + 80 - 3
// 4 + 77
// 81
// 15 / 3 * (4 + 2 ^ 2) - 5



// compound assignment operator
// let x = 3;
// x = x + 10; // 13
// x += 10;
// x -= 10;
// x /= 10;
// x *= 10;




// logical operators
let x = 1;
let y = 2;
let z = 3;
// console.log(x < y && y < z); // true && true = true

// console.log(x > y && y < z); // false && true = false

console.log(x > y || y < z); // false || true = true


console.log(x > y || y > z); // false || false = false