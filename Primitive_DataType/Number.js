//++++++++++++ Creating String ++++++++++++
let age = 18;
let newAge = new Number(18);
console.log(age); // 18
console.log(typeof age); //number
console.log(newAge); // [Number: 18]
console.log(typeof newAge); //object

//MAX_VALUE and MIN_VALUE
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE);

// ++++++++++++ Number Conversions ++++++++++++

// String to Number
let str='101';
console.log(Number(str)); //101

let alphaNumer = '123abc';
console.log(Number(alphaNumer)); //alphanuric -> NaN

let checkUndefined = undefined;
console.log(Number(checkUndefined)); // undfined -> Nan

console.log(Number(null));
// console.log(Number(Symbol('123'))); // TypeError: Cannot convert a Symbol value to a number

//toFixed()

console.log(123.4599.toFixed(3)); //123.460
console.log(123.4599.toFixed(5)); //123.45990
console.log(123.4599.toFixed(0)); //123

//toPrecision()
console.log(123.4599.toPrecision(1)); // 1e+2
console.log(123.4599.toPrecision(2)); // 1.2e+2
console.log(123.4599.toPrecision(3)); // 123
console.log(123.4599.toPrecision(4)); // 123.5
console.log(123.4599.toPrecision(5)); // 123.46

//Date to Number
const dateToNumber = new Date("2023-07-27T04:21:00");
console.log(Number(dateToNumber)); //1690431660000 (time in milliseconds)

let d = new Date(1690431660000);
console.log(d.toString()); //Thu Jul 27 2023 04:21:00 GMT+0000 








