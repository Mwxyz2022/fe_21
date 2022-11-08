/*
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 * */

// input: number , number, function;
// output: undefined

function sum(from, to, resolver) {
  let result = 0;
  for (let index = from; index <= to; index += 1) {
    result += index;
  }

  // console.log(sum);

  resolver(result);
}

// test data

//  1
function printResult(res) {
  console.log(res);
}

sum(10, 15, printResult);

//  2

function alertResult(res) {
  alert(res);
}
sum(10, 15, alertResult);
