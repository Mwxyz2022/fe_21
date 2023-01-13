// const createLogger = () => {
//   const records = [];

//   return {
//     warn(message) {
//       records.push({
//         message,
//         dateTime: new Date(),
//         type: 'warn',
//       });
//     },
//     error(message) {
//       records.push({
//         message,
//         dateTime: new Date(),
//         type: 'error',
//       });
//     },
//     log(message) {
//       records.push({
//         message,
//         dateTime: new Date(),
//         type: 'log',
//       });
//     },
//     getRecords(type) {
//       return (type ? records.filter(el => el.type === type) : records).sort(
//         (a, b) => b.dateTime - a.dateTime,
//       );
//     },
//   };
// };

// // examples
// const logger1 = createLogger();
// logger1.log('User logged in');
// logger1.warn('User is tring to ented restricted page');
// logger1.log('User logged out');
// logger1.error('Unexpected error on the site');

// console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]

// const logger2 = createLogger();
// logger2.log('sdsdsdsd');

// console.log(logger2.getRecords());

/* eslint-disable */

// hoisting var example 1
// console.log(message);
// var message = 'Hoisting is here!';

// // hoisting var example 2
// var a = 55;
// console.log(a);

// if (a) {
//   var a = 1;

//   console.log(a);
// }

// console.log(a);

// hoisting var example 3
var a = 77;
console.log(a);

function print() {
  var a = 2;
  console.log(a);
}
print();

console.log(a);

// hoisting func example 4
run();

function run() {
  console.log('RUN');
}

stop();
const stop = function () {
  console.log('STOP');
};
