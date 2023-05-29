// 1.Write a JavaScript function to check whether an 'input' is a string or not.

// Test Data:
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false
is_string = function (_inputIsString) {
    if (Object.prototype.toString.call(_inputIsString) === '[object String]')
        return true;
    else
        return false;
};
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));
// 2.Write a JavaScript function to check whether a string is blank or not.

// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false
is_Blank = function (_inputBlank) {
    if (_inputBlank.length === 0)
        return true;
    else
        return false;
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));
// 3.Write a JavaScript function to capitalize the first letter of a string.

// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"
capitalize = function (_firstLetterCapitalize) {
    return _firstLetterCapitalize.charAt(0).toUpperCase() + _firstLetterCapitalize.slice(1);
}

console.log(capitalize('js string exercises'));
// 4.Write a JavaScript function to concatenate a given string n times (default is 1).

// Test Data:
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"
function repeatString(_string, _times) {
    if (typeof (_times) == "undefined") {
        _times = 1;
    }
    return _times < 1 ? '' : new Array(_times + 1).join(_string);
}
console.log(repeatString('Ha!'));
console.log(repeatString('Ha!', 2));
console.log(repeatString('Ha!', 3));
// 5.Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.

// Test Data:
// console.log(swapcase('AaBbc'));
// "aAbBC"
function swapcase(_string) {
    return _string.replace(/([a-z]+)|([A-Z]+)/g, function (_match, _letter) {
        return _letter ? _match.toUpperCase() : _match.toLowerCase();
    });
}
console.log(swapcase('AaBbc'))