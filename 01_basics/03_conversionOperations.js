
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



let numberToString = 33;

let valueNumberToString = String(numberToString);
console.log(typeof numberToString); // number
console.log(typeof valueNumberToString); // string
console.log(valueNumberToString); // "33" (the number is converted to a string)


let value = 3;

let negValue = -value;
console.log(negValue); // -3 (the value is negated)
let posValue = +value;
console.log(posValue); // 3 (the value is unchanged, but the unary plus operator is used)
let strValue = "3";
let negStrValue = -strValue;
console.log(negStrValue); // -3 (the string is converted to a number and negated)
let posStrValue = +strValue;
console.log(posStrValue); // 3 (the string is converted to a number, but the unary plus operator does not change the value)
let boolValue = true;
let negBoolValue = -boolValue;
console.log(negBoolValue); // -1 (true is converted to 1 and then negated)
let posBoolValue = +boolValue;
console.log(posBoolValue); // 1 (true is converted to 1, but the unary plus operator does not change the value)
let nullValue = null;
let negNullValue = -nullValue;
console.log(negNullValue); // 0 (null is converted to 0 and then negated)
let posNullValue = +nullValue;
console.log(posNullValue); // 0 (null is converted to 0, but the unary plus operator does not change the value)
let undefinedValue;
let negUndefinedValue = -undefinedValue;
console.log(negUndefinedValue); // NaN (undefined cannot be converted to a number, so it results in NaN)
let posUndefinedValue = +undefinedValue;
console.log(posUndefinedValue); // NaN (undefined cannot be converted to a number, so it results in NaN)
let nanValue = NaN;
let negNanValue = -nanValue;
console.log(negNanValue); // NaN (NaN cannot be negated, so it remains NaN)
let posNanValue = +nanValue;
console.log(posNanValue); // NaN (NaN cannot be converted to a number, so it remains NaN)
let strToNumber = "123";
let negStrToNumber = -strToNumber;
console.log(negStrToNumber); // -123 (the string is converted to a number and negated)
let posStrToNumber = +strToNumber;
console.log(posStrToNumber); // 123 (the string is converted to a number, but the unary plus operator does not change the value)
let strToFloat = "123.45";
let negStrToFloat = -strToFloat;
console.log(negStrToFloat); // -123.45 (the string is converted to a number and negated)
let posStrToFloat = +strToFloat;
console.log(posStrToFloat); // 123.45 (the string is converted to a number, but the unary plus operator does not change the value)
let strToBoolean = "true";
let negStrToBoolean = -strToBoolean;
console.log(negStrToBoolean); // NaN (the string cannot be converted to a number, so it results in NaN)
let posStrToBoolean = +strToBoolean;
console.log(posStrToBoolean); // NaN (the string cannot be converted to a number, so it results in NaN)
let strToEmpty = "";
let negStrToEmpty = -strToEmpty;
console.log(negStrToEmpty); // 0 (the empty string is converted to 0 and then negated)
let posStrToEmpty = +strToEmpty;
console.log(posStrToEmpty); // 0 (the empty string is converted to 0, but the unary plus operator does not change the value)
let strToNull = "null";
let negStrToNull = -strToNull;
console.log(negStrToNull); // NaN (the string cannot be converted to a number, so it results in NaN)
let posStrToNull = +strToNull;
console.log(posStrToNull); // NaN (the string cannot be converted to a number, so it results in NaN)
let strToUndefined = "undefined";
let negStrToUndefined = -strToUndefined;
console.log(negStrToUndefined); // NaN (the string cannot be converted to a number, so it results in NaN)
let posStrToUndefined = +strToUndefined;
console.log(posStrToUndefined); // NaN (the string cannot be converted to a number, so it results in NaN)
let strToNaN = "NaN";
let negStrToNaN = -strToNaN;
console.log(negStrToNaN); // NaN (the string cannot be converted to a number, so it results in NaN)
let posStrToNaN = +strToNaN;
console.log(posStrToNaN); // NaN (the string cannot be converted to a number, so it results in NaN)
let strToInfinity = "Infinity";
let negStrToInfinity = -strToInfinity;
console.log(negStrToInfinity); // -Infinity (the string is converted to a number and negated)
let posStrToInfinity = +strToInfinity;
console.log(posStrToInfinity); // Infinity (the string is converted to a number, but the unary plus operator does not change the value)
let strToNegativeInfinity = "-Infinity";
let negStrToNegativeInfinity = -strToNegativeInfinity;
console.log(negStrToNegativeInfinity); // Infinity (the string is converted to a number and negated)
let posStrToNegativeInfinity = +strToNegativeInfinity;
console.log(posStrToNegativeInfinity); // -Infinity (the string is converted to a number, but the unary plus operator does not change the value)
let strToZero = "0";
let negStrToZero = -strToZero;
console.log(negStrToZero); // 0 (the string is converted to 0 and then negated)
let posStrToZero = +strToZero;
console.log(posStrToZero); // 0 (the string is converted to 0, but the unary plus operator does not change the value)
let strToOne = "1";
let negStrToOne = -strToOne;
console.log(negStrToOne); // -1 (the string is converted to a number and negated)
let posStrToOne = +strToOne;
console.log(posStrToOne); // 1 (the string is converted to a number, but the unary plus operator does not change the value)
let strToNegativeOne = "-1";
let negStrToNegativeOne = -strToNegativeOne;
console.log(negStrToNegativeOne); // 1 (the string is converted to a number and negated)
let posStrToNegativeOne = +strToNegativeOne;
console.log(posStrToNegativeOne); // -1 (the string is converted to a number, but the unary plus operator does not change the value)
