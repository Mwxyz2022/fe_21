// input: [array],callback
// output: [new array]
//
// callback
// input: el,index,array
// output: boolean
//
// algo
//    0. create result arr
//    1. iterate array - loop
//    2. call callback for each el
//    3. if callback - true => push el
//    4. after iteration return res arr
//
//        code
//
// const filterArrayElements = (arr, callback) => {
//   const resultArray = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     const resCallback = callback(arr[index], index, arr);
//     if (resCallback === true) {
//       resultArray.push(index);
//     }
//   }
//   return resultArray;
// };
//
//        refactoring
//

const filterArrayElements = (arr, callback) => {
  const resultArray = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index], index, arr)) {
      resultArray.push(arr[index]);
    }
  }
  return resultArray;
};

// datatest
const testArrayFirst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testArraylast = [14, 42, 43, 44, 45, 46, 47, 48, 49, 0];

const getEvenNum = num => num % 2 === 0;

console.log(filterArrayElements(testArrayFirst, getEvenNum));
console.log(filterArrayElements(testArraylast, getEvenNum));

console.log(
  filterArrayElements(['Andrey', 'Ivan', 'Jack', 'Jane', 'Mortal'], el =>
    el.toLowerCase().includes('an'),
  ),
);
