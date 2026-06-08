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

// 4.Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
// Please solve it without using the built-in Array.reduce method.

function reduce(nums, fn, init) {
  for (let num of nums) {
    init = fn(init, num);
  }
  return init;
}
console.log(reduce([1, 2, 3, 4], (i, n) => i + n, 0));

// 5.Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// The fn function takes one or two arguments:
// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
// Please solve it without the built-in Array.filter method.

function filter(arrNums, fn) {
  let filteredArr = [];
  for (let arr of arrNums) {
    if (fn(arr)) {
      filteredArr.push(arr);
    }
  }
  return filteredArr;
}
console.log(filter([1, 2, 3, 4], (num) => num > 2));

// 6.Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

function map(arr, fn) {
  let newArr = [];
  let i = 1;
  for (let element of arr) {
    newArr.push(fn(element, i));
  }
  return newArr;
}
console.log(map([1, 2, 3, 4], (e, i) => e + i));



function map2(arr, fn) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = fn(arr[i], i);
  }

  return newArr;
}
console.log(map2([1, 2, 3, 4], (e, i) => e + i));



function map3(arr, fn) {
  let newArr = [];

  for (let element of arr) {
    if (element) {
      newArr.push(fn);
    }
  }
  return newArr;
}
console.log(map3([1, 2, 3, 4], 45));

/*Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
The three functions are:
increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it. */

function createCounter(number) {
  let resultObj = number;
  function increment() {
    return ++resultObj;
  }

  function reset() {
    return (resultObj = number);
  }

  function decrement() {
    return --resultObj;
  }

  return { increment, reset, decrement };
}

let counterNum = createCounter(5);
let obj = {
  increament: counterNum.increment(),
  reset: counterNum.reset(),
  descrement: counterNum.decrement(),
};
console.log(obj);

/* Given an array arr and a chunk size size, return a chunked array.
A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
Please solve it without using lodash's _.chunk function. */

function chunk(array, size) {
  let chunkResult = [];
  for (let i = 0; i < array.length; i += size) {
    let arraySlice = array.slice(i, i + size);
    chunkResult.push(arraySlice);
  }
  return chunkResult;
}

console.log(chunk([1, 2, 3, 4, 5, 6], 2));


/* Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse. */

const isEmpty = function(obj) {
    if(JSON.stringify(obj).length <= 2) return true
    else return false
};

const person = {x: 5, y: 42};
console.log(isEmpty(person));