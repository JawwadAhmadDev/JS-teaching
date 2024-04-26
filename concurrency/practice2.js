// asynchronous JS

// const posts = [
//   { title: "Post1", data: "This is post1" },
//   { title: "Post2", data: "This is post2" },
// ];

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach((post) => {
//       console.log(`Title: ${post.title}, data: ${post.data}`);
//     });
//   }, 1000);
// }

// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }
// createPost({ title: "Post3", data: "This is post3" });
// getPosts();

// callback

// const posts = [
//   { title: "Post1", data: "This is post1" },
//   { title: "Post2", data: "This is post2" },
// ];

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach((post) => {
//       console.log(`Title: ${post.title}, data: ${post.data}`);
//     });
//   }, 1000);
// }

// function createPost(post, callback) {
//   setTimeout(() => {
//     console.log("checking");
//     posts.push(post);
//     callback();
//   }, 2000);
// }
// createPost({ title: "Post3", data: "This is post3" }, getPosts);

// promises.then()
// const posts = [
//   { title: "Post1", data: "This is post1" },
//   { title: "Post2", data: "This is post2" },
// ];

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach((post) => {
//       console.log(`Title: ${post.title}, data: ${post.data}`);
//     });
//   }, 1000);
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Producing code");
//       posts.push(post);
//       resolve();
//     }, 2000);
//   });
// }
// createPost({ title: "Post3", data: "This is post3" }).then(() => getPosts());

// async await
const posts = [
  { title: "Post1", data: "This is post1" },
  { title: "Post2", data: "This is post2" },
];

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      console.log(`Title: ${post.title}, data: ${post.data}`);
    });
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Creating Post");
      posts.push(post);
      resolve(getPosts);
    }, 2000);
  });
}

async function test() {
  let result = await createPost({ title: "Post3", data: "This is post3" });
  result();
}

test();
