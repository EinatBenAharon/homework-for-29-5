// 1. Write a JavaScript program that displays the largest integer among two integers.
function largestNumber(_number1, _number2) {
    return Math.max(_number1, _number2);
}
// 2.Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1
let num1 = 4;
let num2 = -1;
let num3 = 0;
let largest = Math.max(num1, num2, num3);
let smallest = Math.min(num1, num2, num3);
let middle = num1 + num2 + num3 - largest - smallest;
let result = smallest + ", " + middle + ", " + largest;
alert("Sorted numbers: " + result);
// 3.Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output:
// "0 is even"
// "1 is odd"
// "2 is even"
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}
// 4.Write a JavaScript program to construct the following pattern, using a nested for loop.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  
let pattern = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += '* ';
    }
    pattern += '\n';
}
console.log(pattern);

