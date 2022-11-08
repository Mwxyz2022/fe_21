const numbersList1 = [1, 2, 3, 77, 5];

//                          (!)
// input: none;
// output: number:
console.log('BEFORE POP', numbersList1);
const popRes = numbersList1.pop();
console.log(popRes);

console.log('AFTER POP', numbersList1);

// input: element (any type)
// output: array (new length) -- NEW LENGTH!!!!!

const numbersList2 = [1, 2, 3, 4, 5];
console.log('BEFORE PUSH', numbersList2);

const pushRes = numbersList2.push(100, 'number', {}, []);
console.log(pushRes);

console.log('AFTER PUSH', numbersList2);

// input: element (any type)
// output: array (new length) -- NEW LENGTH!!!!!
const numbersList3 = [1, 2, 3, 4, 5];
console.log('BEFORE UNSHIFT', numbersList3);

const unshiftRes = numbersList3.unshift(100, 'number', {}, []);
console.log(unshiftRes);

console.log('AFTER UNSHIFT', numbersList3);

input: callback
output: array (new array)

const anotherNumbersList = [5, 13, 0, 12, -10, 700];

// const filterResult = anotherNumbersList.filter(function filterCallback(element) {
//   return element > 5;
// });

const filterResult = anotherNumbersList.filter(element => element > 5);

console.log(filterResult);
