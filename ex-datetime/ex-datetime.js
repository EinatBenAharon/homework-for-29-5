// 1. Write a JavaScript function to get the current date.

// Note : Pass a separator as an argument.
// Test Data :
// console.log(curday('/'));
// console.log(curday('-'));
// Output :
// "11/13/2014"
// "11-13-2014"

function curday(_sep) {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();

    day < 10 ? day = "0" + day : day;
    month < 10 ? month = "0" + month : month;

    return (month + _sep + day + _sep + year);
}
console.log(curday('/'));
console.log(curday('-'));
// 2.Write a JavaScript function to get the number of days in a month.

// Test Data:
// console.log(getDaysInMonth(1, 2012));
// console.log(getDaysInMonth(2, 2012));
// console.log(getDaysInMonth(9, 2012));
// console.log(getDaysInMonth(12, 2012));
// Output :
// 31
// 29
// 30
// 31
function getDaysInMonth(_month, _year) {
    return new Date(_year, _month, 0).getDate();
}
console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));
// 3.Write a JavaScript function to get the month name from a particular date.

// Test Data:
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));
// Output :
// "October"
// "November"
function month_name(_date) {
    let monthNames;
    monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[_date.getMonth()];
};

console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
// 4.Write a JavaScript function to get the last day of a month.

// Test Data:
// console.log(lastday(2014,0));
// console.log(lastday(2014,1));
// console.log(lastday(2014,11));
// Output :
// 31
// 28
// 31
function lastday(_year, _month) {
    return new Date(_year, _month + 1, 0).getDate();
}
console.log(lastday(2014, 0));
console.log(lastday(2014, 1));
console.log(lastday(2014, 11));
// 5.Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).

// Test Data:
// dt = new Date(2015, 10, 1);
// console.log(short_Days(dt));
// "Sun"

function short_Days(_date) {
    let dayNames;
    dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return dayNames[_date.getDay()];
}
console.log(short_Days(new Date(2015, 10, 1)));