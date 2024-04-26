// function saySomething(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("something" + x);
//     }, 2000);
//   });
// }
// async function talk(x) {
//   const words = await saySomething(x);
//   console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

let count = 0;
function outputTime(val) {
  return new Promise((resolve) => {
    setTimeout(() => {
      count++;
      resolve(`x value ${val} counter:${count}`);
    }, 1000);
  });
}
async function aCall(val) {
  console.log(`ready ${val} counter:${count}`);
  const res = await outputTime(val);
  console.log(res);
}
for (let x = 1; x < 10; x++) {
  aCall(x);
}
