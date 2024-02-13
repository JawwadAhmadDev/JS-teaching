// 1. Arrays 2. Objects


// let arr = [10, 20, "Jawwad", true, null];
// console.log(arr);


// arr[2] = "ahmad";

// console.log(arr[-1]);















// length property
// colors = ["black", "orange", "pink"]
// booleans = [true, false, false, true];
// emptyArray = [];
// console.log("Length of colors:", colors.length);
// console.log("Length of booleans:", booleans.length);
// console.log("Length of empty array:", emptyArray.length);

// console.log(colors[colors.length - 1]);











// let shoppingList = ["Milk", "Bread", "Apples"];
// console.log(shoppingList.length);

// shoppingList[1] = "Banana";
// console.log(shoppingList);



// adding or removing elements from the array
// let arr = [10, 20, 30, 40, 50];
// console.log(arr);

// removing elements from the last - pop() method
// arr.pop()
// console.log(arr)

// removing element from the start
// arr.shift();
// console.log(arr)


// adding elements in the last - push() method
// arr.push(60);
// console.log(arr);

// adding elements at the start - unshift() method
// arr.unshift(1, 2, 3);
// console.log(arr);


















// Array methods
// insertion at the start - unshift()
// let arr = [10, 20, 30, 40, 50];

// let newLength = arr.unshift(1, 2, 3);
// console.log(newLength);
// console.log(arr);

// console.log(arr.unshift(1, 2, 3));
// console.log(8);



// removing element from the start - shift()
// let arr = [10, 20, 30, 40, 50];

// let removedElement = arr.shift()
// console.log(removedElement);
// console.log(arr);



// insertion at the end of an array - push()
// let arr = [10, 20, 30, 40, 50];

// let newLength = arr.push(1, 2);
// console.log(newLength);
// console.log(arr);



// removing elements from the end of the array - pop()
// let arr = [10, 20, 30, 40, 50];

// let removedElement = arr.pop();
// console.log(removedElement);
// console.log(arr);





// splice method
// let arr = [10, 20, 30, 40, 50];
// 1. adding single value at the start, removing zero element
// arr.splice(0, 0, 1);
// console.log(arr);

// 2. adding multiple values at the start, removing zero elements
// arr.splice(0, 0, 1, 2, 3);
// console.log(arr);

// 3. adding zero element, removing one or multiple values from the start
// arr.splice(0, 2);
// console.log(arr);

// 4. adding elements at the end, removing zero element
// arr.splice(arr.length, 0, 60, 70, 80);
// console.log(arr);

// 5. adding one element at the index no. 2, removing zero element
// arr.splice(2, 0, "jawwad"); 
// console.log(arr);

// 6. adding more than one element at index no. 2, removing zero element.
// arr.splice(2, 0, "jawwad", "ahmad", "imran");
// console.log(arr);

// 7. adding zero element at the index no. 2, and removing multiple values
// arr.splice(2, 2);
// console.log(arr);

// 8. adding multiple values at the index no. 2, and removing multiple values
// arr.splice(2, 3, "jawwad", "ahmad","imran");
// console.log(arr);



// concat() method
// let arr1 = [10, 20, 30];
// let arr2 = ["jawwad", "ahmad", "imran"];

// let arr3 = arr1.concat(arr2).concat(arr1);

// [10, 20, 30, "jawwad", "ahmad", "imran", 10, 20, 30];
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);


// sort() method
// let arr = [100, 50, 30, 9, 59]; 
// arr.sort();

// console.log(arr);

let names = ['abdul wahab', 'wahab', 'luqman', 'usman'];
names.sort();
console.log(names);



// reverse() method
let arr = [10, 20, 30, 40, 50];
arr.reverse();
console.log(arr);