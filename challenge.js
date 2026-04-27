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
