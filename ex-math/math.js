// 1.Write a JavaScript function to format a number up to specified decimal places.
// Test Data :
// console.log(decimals(2.100212, 2));
// console.log(decimals(2.100212, 3));
// console.log(decimals(2100, 2));
// "2.10"
// "2.100"
// "2100.00"
function decimals(_numberDecimal, _decimal) {
    _numberDecimal = parseFloat(_numberDecimal);
    return _numberDecimal.toFixed(_decimal);
}
console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));
// 2. Write a JavaScript function to find the highest value in an array.
// Test Data :
// console.log(max([12,34,56,1]));
// console.log(max([-12,-34,0,-56,-1]));
// 56
// 0
function max(input) {
    if (toString.call(input) !== "[object Array]")
        return false;
    return Math.max.apply(null, input);
}
console.log(max([12, 34, 56, 1]));
console.log(max([-12, -34, 0, -56, -1]));
// 3.Write a JavaScript function to find out if a number is a natural number or not.

// Note:
// Natural numbers are whole numbers from 1 upwards : 1, 2, 3, and so on ... or from 0 upwards in some area of mathematics: 0, 1, 2, 3 and so on ...
// No negative numbers and no fractions.
// Test Data:
// console.log(is_Natural(-15));
// console.log(is_Natural(1));
// console.log(is_Natural(10.22));
// console.log(is_Natural(10/0));
// Output:
// false
// true
// false
// false
function is_Natural(_numberNatural) {
    if (typeof _numberNatural !== "number")
        return "Not a number";
    return (_numberNatural >= 0.0) && (Math.floor(_numberNatural) === _numberNatural && _numberNatural !== Infinity);
}
console.log(is_Natural(-15));
console.log(is_Natural(1));
console.log(is_Natural(10.22));
console.log(is_Natural(10 / 0));
// 4.Write a JavaScript function to test if a number is a power of 2.

// Test Data:
// console.log(power_of_2(16));
// console.log(power_of_2(18));
// console.log(power_of_2(256));
// Output:
// true
// false
// true
function power_of_2(_numberPower) {
    if (typeof _numberPower !== "number")
        return "Not a number";

    return _numberPower && (_numberPower & (_numberPower - 1)) === 0;
}

console.log(power_of_2(16));
console.log(power_of_2(18));
console.log(power_of_2(256));
// 5. Write a JavaScript function to check whether a variable is numerical or not.
// Test Data :
// console.log(is_Numeric(12));
// console.log(is_Numeric('abcd'));
// console.log(is_Numeric('12'));
// console.log(is_Numeric(' '));
// console.log(is_Numeric(1.20));
// console.log(is_Numeric(-200));
// Output :
// true
// false
// true
// false
// true
// true
function is_Numeric(_numberNumeric) {
    return !isNaN(parseFloat(_numberNumeric)) && isFinite(_numberNumeric);
}
console.log(is_Numeric(12));
console.log(is_Numeric('abcd'));
console.log(is_Numeric('12'));
console.log(is_Numeric(' '));
console.log(is_Numeric(1.20));
console.log(is_Numeric(-200));