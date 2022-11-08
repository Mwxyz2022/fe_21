//
//
// input: callback
// output: new array
//
// input: number
// output: nemder

// const numbersList = [5, 0, 8, 10, -4, 50, 220];

// const mapRes = numbersList.map(el => {
//   if (el > 0) {
//     return el * el;
//   }
//   return el;
//   return el > 0 ? el ** 2 : el;
// });

// console.log(mapRes);

// const mapRes = numbersList.map(el => (el > 0 ? el ** 2 : el));

//    find
// input: callback
// output: element | undefined
//
// input: el, index(opt),arr(opt)
// output: boolean

// const findNum = numbersList.find(el => el > 100);
// console.log(findNum);

//        forEach
//
// input: callback
// output:  undefined
//
// input: el, index(opt),arr(opt)
// output: undefined

// const numForeach = numbersList.forEach(el => {
//   if (el > 0) {
//     console.log(el);
//   }
// });
// numbersList.forEach(el => console.log(el > 0 ? el : 'Error'));

//    reduce
// input: callback.accInitValue(opt)
// output:  result (any type)
//
// callback
// input: acc,el, index(opt),arr(opt)
// output: result (any type)

// const numbersList = [5, 0, -8, 10, -4, -50, 220];

// const reduceSum = numbersList.reduce((acc, el) => {
//   if (el < 0) {
//     acc += el;
//   }
// }, 0);

// console.log(reduceSum);

const numbersList = [5, 0, -8, 10, -4, -50, 220];

// const reduceSum = numbersList.reduce((acc, el) => {
//   // console.log('acc: ' + acc);
//   // console.log('el: ' + el);
//   if (el < 0) {
//     acc += el;
//   }
//   return acc;
// }, 0);

// refactoring
//
numbersList.reduce((acc, el) => (el < 0 ? acc + el : acc), 0);

// console.log(reduceSum);
