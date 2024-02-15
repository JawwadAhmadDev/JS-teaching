let myWork = [];

for (let counter = 1; counter <= 10; counter++) {
  let obj = {
    name: `Lesson ${counter}`,
    status: counter % 2 == 0 ? false : true,
  };

  myWork.push(obj);
}
console.log(myWork);
