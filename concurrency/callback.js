// function doSomething(callback) {
//   callback();
// }
// function sayHi() {
//   console.log("Hi!");
// }
// doSomething(sayHi);

// function judge(grade) {
//   switch (true) {
//     case grade == "A":
//       console.log("You got an", grade, ": amazing!");
//       break;
//     case grade == "B":
//       console.log("You got a", grade, ": well done!");
//       break;
//     case grade == "C":
//       console.log("You got a", grade, ": alright.");
//       break;
//     case grade == "D":
//       console.log("You got a", grade, ": hmmm...");
//       break;
//     default:
//       console.log("An", grade, "! What?!");
//   }
// }
// function getGrade(score, callback) {
//   let grade;
//   switch (true) {
//     case score >= 90:
//       grade = "A";
//       break;
//     case score >= 80:
//       console.log(score);
//       grade = "B";
//       break;
//     case score >= 70:
//       grade = "C";
//       break;
//     case score >= 60:
//       grade = "D";
//       break;
//     default:
//       grade = "F";
//   }
//   callback(grade);
// }
// getGrade(85, judge);

// function task1(callback) {
//   setTimeout(() => {
//     console.log("First Task");
//     callback();
//   }, 2000);
// }

// function task2() {
//   setTimeout(() => {
//     console.log("Second Task");
//   }, 1000);
// }

// task1(task2);

// function greet(fullName) {
//   console.log(`Welcome, ${fullName[0]} ${fullName[1]}`);
// }
// function processCall(user, callback) {
//   const fullName = user.split(" ");
//   callback(fullName);
// }
// processCall("Jawwad Ahmad", greet);

// Concurrency

// simple
// const posts = [
//   { title: "Post1", data: "This is post1." },
//   { title: "Post2", data: "This is post2." },
// ];

// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach((post) => {
//       console.log(`Title: ${post.title}, data: ${post.data}`);
//     });
//   }, 1000);
// }

// createPost({ title: "Task3", data: "This is task3" });

// callback
// const posts = [
//   { title: "Post1", data: "This is post1." },
//   { title: "Post2", data: "This is post2." },
// ];

// function createPost(post, callback) {
//   setTimeout(() => {
//     console.log("checking");
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach((post) => {
//       console.log(`Title: ${post.title}, data: ${post.data}`);
//     });
//   }, 1000);
// }

// createPost({ title: "Post3", data: "This is Post3" }, getPosts);

function firstFunction(a) {
  console.log("This is first function");
  a();
}

function secondFunction() {
  console.log("This is second function");
}

firstFunction(secondFunction);
