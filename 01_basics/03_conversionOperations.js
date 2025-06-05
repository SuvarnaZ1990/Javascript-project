
let score = "33";
let score1 = "33abc";
let score2 = null
let score3;
let score4 = true

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)

let valueInNumber4= Number(score4)
console.log(typeof valueInNumber4)

console.log(valueInNumber)
console.log(valueInNumber1) // NaN (Not a Number)
console.log(valueInNumber2) // 0 (null is converted to 0)
console.log(valueInNumber3) // undefined (score3 is not defined, so it remains undefined)
console.log(valueInNumber4) // 1 (true is converted to 1)



/*
"33" -> 33
"33abc" -> NaN (Not a Number)
null -> 0
*/



let isLoggesIn = 0;

let valueInBoolean = Boolean(isLoggesIn);
console.log(typeof valueInBoolean); // boolean
console.log(valueInBoolean); // true (any non-zero number is considered true)
/*
1 or any number other than 0 is considered true
empty string "" is considered false  else true
null is considered false
undefined is considered false
NaN is considered false
*/