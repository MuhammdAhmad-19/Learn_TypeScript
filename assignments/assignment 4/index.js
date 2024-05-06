"use strict";
// Q1
console.log("Hello World");
// Q2
let temperature = 15;
if (temperature < 20) {
    console.log("It's cold");
}
else {
    console.log("It's not cold outside");
}
// Q3
let apples = 10;
let applesgiven = 3;
let applesleft = apples - applesgiven;
console.log(`your left apples are ${applesleft}`);
// Q4
let firstname = "M.Ahmad";
let secondname = "Ishaq";
let fullname = `${firstname} ${secondname}`;
console.log(fullname);
// Q5
let num = 5;
if (num > 3) {
    console.log("Yes");
}
//                                    {MEDIUM}
// Q6
function calculateArea(radius) {
    const pi = 3.142;
    const area = pi * radius * radius;
    console.log(`Area of radius ${radius} is ${area}`);
}
calculateArea(5);
// Q7
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
