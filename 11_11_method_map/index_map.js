//        1.  Фу-я mapArrayElements(arr, callback)
//        2.  Создать новый массив
//        3.  проиттерировать масcив
//        4.  callback на каждый Эл. => in New ar r
//        5.  вернуть результирующий массив
//
// input: [array],callback
// output: [new array]
//
// callback
// input: el,index,array
// output: [new array]

//        code

// const mapArrayElements = (arr, callback) => {
//   const resArray = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     resArray.push(callback(arr[index], index, arr));
//   }
//   return resArray;
// };

//        refactoring

const mapArrayElements = (arr, callback) => {
  const resArray = [];
  arr.forEach((element, index, array) => resArray.push(callback(element, index, array)));
  return resArray;
};

// datatest
const mapArrayFirst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mapArraylast = [14, 42, 43, 44, 45, 46, 47, 48, 49, 0];

const getSquared = (num, index) => {
  if (index > 4) {
    return num ** 2;
  }
  return num;
};

console.log(mapArrayElements(mapArrayFirst, getSquared));
console.log(mapArrayElements(mapArraylast, getSquared));
