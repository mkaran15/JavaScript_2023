let score = 55;
console.table([score == '55', score === '55', score ===55]); //true false true === checks datatype as well.


let checkForNull = null; // for comparison (<,<=,>,>= null is treated as 0) but its is not true in case of equality.
console.log(checkForNull==0) //false
console.log(checkForNull===0) //false
console.log(checkForNull<0) //false
console.log(checkForNull<=0) //true 
console.log(checkForNull>0) // false
console.log(checkForNull>=0) //true






let checkForUndefined = undefined; 
console.log(checkForUndefined==0) //false
console.log(checkForUndefined===0) //false
console.log(checkForUndefined<0) //false
console.log(checkForUndefined<=0) //false 
console.log(checkForUndefined>0) // false
console.log(checkForUndefined>=0) //flase


