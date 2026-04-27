// 1.Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
//Note that minor deviation from millis in the actual sleep duration is acceptable.

async function sleep(millis) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), millis);
  });
  let result = await promise;
  console.log(result);
}
sleep(5000);

// 2.Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
//You may assume the array is the output of JSON.parse.

Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }
  return this.at(-1);
};
const array1 = [1, 2, 3];
console.log(array1.last());

const array2 = [];
console.log(array2.last());


// 3.Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
let arrayItems = ["Ali", "Mary", "Mohadese", "zahra"];

function counter(n) {
  let numbers = [];
  for (let arrayItem of arrayItems) {
    if (arrayItem) {
      let plusN = n++;
      numbers.push(plusN);
    }
  }
  return numbers;
}
console.log(counter(10));