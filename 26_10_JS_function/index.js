function getSenseOfLife() {
  return 42;
}

/// Option 1

const res = getSenseOfLife();
console.log(res);

/// Option 2
console.log(getSenseOfLife());

function getSquare(num) {
  return num * num;
}

/// /////////////////////////////////////////////////////
function sum(first, second) {
  return first + second;
}

/// /// test
console.log(sum(12, 23));
console.log(sum(-3, 53));
console.log(sum(-2, NaN));

/// /////////////////////////////////////////////////////
function getMassage(age) {
  if (age < 0 || typeof age !== 'number') {
    return null;
  }

  console.log(`I am ${age} years old`);
}

getMassage(22);
getMassage(21);
getMassage(undefined);
getMassage(null);

/// /////////////////////////////////////////////////////
// const mult = (a, b) => a * b; /// (  const mult = (a, b) => console.log(a * b); - не проходит в консоле  если вызвать: mult(a, b)--=(( )) )

const mult = (a, b) => console.log(a * b);
/// test

mult(12, 13);
mult(13, 10);

console.log(mult(12, 23)); // 256
console.log(mult(NaN, -23)); // NaN
console.log(mult(undefined, 0)); // NaN

/// ////////////////////////////////////////

const getMagicNumber = () => 17; /// / ( стрелочная фун-я,  с консолями в условии ---> не проходит !!!! )

// test

console.log(getMagicNumber()); // 17
