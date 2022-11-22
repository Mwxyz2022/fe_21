// input: { obj };
// output: [{obj},{obj}]
const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Jack',
    age: 25,
  },
  'customer-id-4': {
    name: 'Harry',
    age: 27,
  },
};

// algo
//  1. create resArray
//  2. get key/value (.entries)
//  3. add new id key to value => new obj
//  4. push to the resArr (.map)
//  5. sort obj by age (.sort)

// === code

// const getCustomersList = obj => {
//   const resArray = [];
//   const arrayObj = Object.entries(obj);
//   console.log('entries=>', arrayObj);

//   for (let index = 0; index < arrayObj.length; index += 1) {
//     resArray.push({ ...arrayObj[index][1], id: arrayObj[index][0] });
//   }
//   return resArray.sort((a, b) => a.age - b.age);
// };

// === ref

const getCustomersList = obj =>
  Object.entries(obj)
    .map(([key, value]) => ({ ...value, id: key }))
    .sort((a, b) => a.age - b.age);

console.log(getCustomersList(customers));
