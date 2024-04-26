// const posts = [
//   { title: "Post1", data: "This is post1." },
//   { title: "Post2", data: "This is post2." },
// ];

// function createPost(post) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       posts.push(post);
//       const error = true;
//       if (error) {
//         rej("Promise rejected");
//       } else {
//         res();
//       }
//     }, 2000);
//   });
// }

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach((post) => {
//       console.log(`Title: ${post.title}, data: ${post.data}`);
//     });
//   }, 1000);
// }

// createPost({ title: "Post3", data: "This is Post3" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// let promise = new Promise((resolve, reject) => {
//   let x = 5;
//   if (x > 10) {
//     resolve(x); // on success
//   } else {
//     reject("Too low"); // on error
//   }
// });
// promise
//   .then(function (value) {
//     console.log("Success:", value);
//   })
//   .catch(function (error) {
//     console.log("Error:", error);
//   });

// const promise = new Promise((resolve, reject) => {
//   resolve("rejected!");
// })
//   .then((value) => {
//     console.log(value);
//   })
//   .then((value) => {
//     console.log(value);
//     return "can";
//   })
//   .then((value) => {
//     console.log(value);
//     return "chain";
//   })
//   .then((value) => {
//     console.log(value);
//     return "promises";
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log(value);
//   });

const promise = new Promise((resolve, reject) => {
  reject("oops... ");
})
  .then((value) => {
    console.log(value);
    return "we";
  })
  .then((value) => {
    console.log(value);
    return "can";
  })
  .then((value) => {
    console.log(value);
    return "chain";
  })
  .then((value) => {
    console.log(value);
    return "promises";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });
