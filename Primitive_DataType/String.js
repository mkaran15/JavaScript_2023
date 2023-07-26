//++++++++++++ Creating String ++++++++++++

//As a Primitives
const str = "Karan Maheshwari";
console.table([str, typeof str]); //'Karan Maheshwari'  string

let newStr = str;
console.table([newStr, typeof newStr]); // 'Karan Maheshwari'  string

//Passing as value or Reference ? -> value
newStr = "Karan Bla Bla Maheshwari"
console.table([str, newStr]); //'Karan Maheshwari' 'Karan Bla Bla Maheshwari'

//As a Object

let strObject = new String('Karan Maheshwari');
console.table([strObject, typeof strObject]);  // 'k' 'a' 'r' .... 'i'  'object'

let newStrObject = strObject;
console.table([newStrObject, typeof newStrObject]); // 'k' 'a' 'r' .... 'i'  'object'

//Passing as value or Reference ? -> value
newStrObject =  new String('Karan');
console.table([strObject, newStrObject]); //strObject-> Karan Maheshwari -- newStrObject->Karan





//++++++++++++ String Character Access++++++++++++

//1. Using charAt()
//str='Karan Maheshwari'
console.log(`Character at 0th positition ${str.charAt(0)}`); //K
console.log(`Character at 0th positition ${strObject.charAt(0)}`); //K

//2. Indexing []
console.log(`Character at 0th positition ${str[0]}`); //K
console.log(`Character at 0th positition ${strObject[0]}`); //K

//A String object can always be converted to its primitive counterpart with the valueOf() method.
let stringPrem = strObject.valueOf();
console.table([typeof strObject, stringPrem, typeof stringPrem]);




//++++++++++++ String Methods ++++++++++++

//length -> Return  the length of the string.
let firstName = 'Karan';
console.log(firstName.length); //5

//at() -> return character at the specified index, accepts negative integers, which count back from the last string character.
firstName = 'Karan';
console.log(`Character from 0th ${firstName.at(0)}`);//K
console.log(`Character at -1 ${firstName.at(-1)}`); //n

//charAt()
firstName = 'Karan';
console.log(`Character from 2nd Index ${firstName.charAt(2)}`);//r

//charCodeAt()
console.log(`ASCII value of character from 2nd Index ${firstName.charCodeAt(1)}`);// a->97

//includes -> serach string is present in the given string or not
fullName = 'Karan Maheshwari'
console.log(fullName.includes('ara')); //true

//indexOf() -> return the first matching index of the given character, return -1 when not found.
fullName = 'Karan Maheshwari'
console.log(fullName.indexOf('K')); //0
console.log(fullName.indexOf('k')); //-1

/*
isWellFormed() -> Returns a boolean indicating whether this string contains any lone surrogates.

 "lone surrogate" is a 16-bit code unit satisfying one of the descriptions below:

It is in the range 0xD800–0xDBFF, inclusive (i.e. is a high surrogate), but it is the last code unit in the string, or the next code unit is not a low surrogate.
It is in the range 0xDC00–0xDFFF, inclusive (i.e. is a low surrogate), but it is the first code unit in the string, or the previous code unit is not a high surrogate.

*/

/*
Notes:
It's possible to use String as a more reliable toString() alternative, 
as it works when used on null and undefined.
*/
let nullToString = null;
//console.log(nullToString.toString()); //TypeError: Cannot read properties of null (reading 'toString')
console.log(String(nullToString)); //null

let undefinedToString = undefined;
//console.log(undefinedToString.toString()); //TypeError: Cannot read properties of undefined (reading 'toString')
console.log(String(undefinedToString)); //undefined

//trim() -> Trims whitespace from the beginning and end of the string.
let lastName = "       Maheshwari      "
console.log(lastName); // '       Maheshwari      ' 
console.log(lastName.trim()); // 'Maheshwari'

//slice() -> Extracts a section of a string and returns a new string.

fullName="Karan Maheshwari";
console.log(`First Name: ${fullName.slice(0,5)}`); //First Name: Karan








