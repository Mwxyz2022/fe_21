/**
 * @param {object} firstObj
 * @param {object} secondObj
 * @return {boolean}
 */

// algo
//
//  1. преобразим входящие объекты в массивы
//  2. сравним длинну: нет => false
//                     да => сравним ключи и значения
//
//

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  age: 17,
  name: 'Tom',
};

const obj6 = {
  city: 'Kherson',
  name: 'Harry',
  age: 17,
  student: true,
};

const obj7 = {
  student: false,
  age: 15,
  name: 'Den',
  city: 'Kyiv',
};

// code

// function compareObjects(firstObj, secondObj) {
//   const firstArray = Object.entries(firstObj).sort().flat();
//   const secondArray = Object.entries(secondObj).sort().flat();
//   if (firstArray.length !== secondArray.length) return false;
//   if (firstArray.join() !== secondArray.join()) return false;
//   return true;
// }

// ref

// function compareObjects(firstObj, secondObj) {
//   const convertObj = obj => Object.entries(obj).sort().flat().join();
//   return convertObj(firstObj) === convertObj(secondObj);
// }

// ref (no - entries / .keys - 1 / )

// function compareObjects(firstObj, secondObj) {
//   const firstObjKeys = Object.keys(firstObj);

//   if (firstObjKeys.length !== Object.keys(secondObj).length) {
//     return false;
//   }

//   return !firstObjKeys.some(key => firstObj[key] !== secondObj[key]);
// }

function compareObjects(firstObj, secondObj) {
  const firstObjKeys = Object.keys(firstObj);

  if (firstObjKeys.length === Object.keys(secondObj).length) {
    return !firstObjKeys.some(key => firstObj[key] !== secondObj[key]);
  }
  return false;
}

// dataTest

console.log(compareObjects(obj1, obj2)); //= > false
console.log(compareObjects(obj2, obj3)); //= > false
console.log(compareObjects(obj1, obj4)); //= > true
console.log(compareObjects(obj4, obj5)); //= > true
console.log(compareObjects(obj7, obj6)); //= > false
console.log(compareObjects(obj3, obj6)); //= > false
console.log(compareObjects(obj7, obj7)); //= > true
