// input: {}. "str", value
// output:{}

// const transaction = {
//   value: 170,
// };

// const user = {
//   name: 'Vlad',
// };

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// console.log(addPropertyV1(user, 'age', 30));
// console.log(addPropertyV1(transaction, 'currency', 'EUR'));

// input: {},{},
// output:{new obj}

//= ============V2
//
function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

// const obj1 = {};
// console.log(addPropertyV2(obj1, 'age', 30));
// console.log('after', obj1);

// const obj2 = {};
// console.log(addPropertyV2(obj2, 'currency', 'USD'));
// console.log('after', obj2);

// const obj3 = {};
// console.log(addPropertyV2(obj3, 'currency', 'EUR'));
// console.log('after', obj3);

//= ============V3

function addPropertyV3(obj, key, value) {
  return { ...obj, [key]: value };
}

// const obj1 = {};
// console.log(addPropertyV3(obj1, 'age', 30));
// console.log('after', obj1);

// const obj2 = {};
// console.log(addPropertyV3(obj2, 'currency', 'USD'));
// console.log('after', obj2);

// const obj3 = {};
// console.log(addPropertyV3(obj3, 'currency', 'EUR'));
// console.log('after', obj3);

//= ==========V4

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

const obj1 = {};
console.log(addPropertyV4(obj1, 'age', 30));
console.log('after', obj1);

const obj2 = {};
console.log(addPropertyV4(obj2, 'currency', 'USD'));
console.log('after', obj2);

const obj3 = {};
console.log(addPropertyV4(obj3, 'currency', 'EUR'));
console.log('after', obj3);
