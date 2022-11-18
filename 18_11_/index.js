/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
// function buildObject(keysList, valuesList) {
//   const resultObj = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     resultObj[keysList[index]] = valuesList[index];
//   }
//   return resultObj;
// }
/// refactorind
//
function buildObject(keysList, valuesList) {
  return keysList.reduce((acc, key, index) => ({ ...acc, [key]: valuesList[index] }), {});
}

// examples
const keys = ['name', 'address', 'age', 'name', 'city name'];
const values = ['Bob', 'Ukraine', '34', 'Jack', 'Kyiv'];
const result = buildObject(keys, values);
console.log(result);
