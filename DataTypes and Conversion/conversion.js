//--------------------To number -> Number();------------------------------------
let score = "33";
console.table([typeof score, Number(score), typeof Number(score)]);

let isLoggedIn = true;
console.table([typeof isLoggedIn, Number(isLoggedIn), typeof Number(isLoggedIn)]);

//NaN is of Type number
let alphaNumeric= "33abc";
console.table([typeof alphaNumeric, Number(alphaNumeric), typeof Number(alphaNumeric)]);


// null becomes 0 when typecaste to number.
let checkForNull = null;
console.table([typeof checkForNull, Number(checkForNull), typeof Number(checkForNull)]);

let checkForUndefined = undefined; // undefined -> NaN
console.table([typeof checkForUndefined, Number(checkForUndefined), typeof Number(checkForUndefined)]);

//--------------------To boolean -> Boolean();------------------------------------

let checkForNumber1 = 0 // false
console.table([typeof checkForNumber1, Boolean(checkForNumber1), typeof Boolean(checkForNumber1)]);

let checkForNumber2 = 1 // true
console.table([typeof checkForNumber2, Boolean(checkForNumber2), typeof Boolean(checkForNumber2)]);

let checkForNumber3 = -5 // Non-Zero will return true
console.table([typeof checkForNumber3, Boolean(checkForNumber3), typeof Boolean(checkForNumber3)]);

let checkForString1 = "" //Empty String -> false
console.table([typeof checkForString1, Boolean(checkForString1), typeof Boolean(checkForString1)]);

let checkForString2 = "Karan" // this will be true
console.table([typeof checkForString2, Boolean(checkForString2), typeof Boolean(checkForString2)]);

let checkForNull1 = null; // null -> false
console.table([typeof checkForNull1, Boolean(checkForNull1), typeof Boolean(checkForNull1)]);

let checkForUndefined1 = undefined; // undefined -> false
console.table([typeof checkForUndefined1, Boolean(checkForUndefined1), typeof Boolean(checkForUndefined1)]);