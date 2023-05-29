// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true
let checkIfInputIsArray = function (input) {
    if (toString.call(input) === "[object Array]")
        return true;
    return false;
};
console.log(checkIfInputIsArray('w3resource'));
console.log(checkIfInputIsArray([1, 2, 4, 0]));

// 2.Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6))
function lastArrayNum(array, n) {
    if (array == null) return void 0;
    if (n == null) return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
};
console.log(lastArrayNum([7, 9, 0, -2]));
console.log(lastArrayNum([7, 9, 0, -2], 3));
console.log(lastArrayNum([7, 9, 0, -2], 6));
// 3.Write a simple JavaScript program to join all elements of the following array into a string.
// Expected Output:
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
arrayColorsToString = ["Red", "Green", "White", "Black"];
console.log(arrayColorsToString.toString());
console.log(arrayColorsToString.join(" , "));
console.log(arrayColorsToString.join("+"));
// 4.Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
let sortArrayFromLowestToBiggest = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
sortArrayFromLowestToBiggest.sort(function (a, b) {
    return a - b;
});
console.log(sortArrayFromLowestToBiggest);
// 5.Write a JavaScript function to get random items from an array.
function randomItemsFromArray(items) {
    return items[Math.floor(Math.random() * items.length)];
}
let items = [254, 45, 212, 365, 2543];
console.log(randomItemsFromArray(items));
