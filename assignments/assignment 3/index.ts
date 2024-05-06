// 1. Hello Variable

let greetings: string; //declare a variable
greetings = "hello world"; //assign a value to variable
console.log(greetings); // print the variable

// ---------------------------------------------------------------------------------------------------

// 2. Basic Math

let num1: number = 1; // initialize two variabls with integer values
let num2: number = 2;

// perform arithmetic operations
console.log(`the addition of ${num1} and ${num2} is ${num1 + num2}`); // plus
console.log(`the subtraction of ${num1} and ${num2} is ${num1 - num2}`); // minus
console.log(`the multiplication of ${num1} and ${num2} is ${num1 * num2}`); // multiply
console.log(`the quotient of ${num1} and ${num2} is ${num1 / num2}`); // divide

// ---------------------------------------------------------------------------------------------------

// 3. Swapping Values

let a = 1; //initialize two variables
let b = 2;

// building the logic
a = a * b; // a=2
b = a / b; // b=1
a = a / b; // a=2

// ---------------------------------------------------------------------------------------------------

// 4. Type Annotation (TypeScript)

let message: string; // trying to assigning a number to stirng
// message=5
// error : "Cant assign a number to string"

// ---------------------------------------------------------------------------------------------------

// 5. Modulus Operator

console.log(`the modulus of ${num1} and ${num2} is ${num1 % num2}`); // % = 1
// num1 and num2 is already declared

// ---------------------------------------------------------------------------------------------------

//6. Increment Challenge

let counter = 0;
counter = counter + 1; // increment value by 1
counter += 1;
counter++;

// ---------------------------------------------------------------------------------------------------

// 7. Logical Gates

let aa = true,
  bb = false,
  cc = true; // a , b are already declared
aa && bb && cc; // And Gate : False
aa || bb || cc; // Or Gate : True
aa!;
bb!;
cc!; //Not Gate

// ---------------------------------------------------------------------------------------------------

// 8. Compound Assignment

let num = 10;
num += 1; // num = 11
num -= 1; // num = 10
num *= 1; // num = 10
num /= 1; // num = 10

// ---------------------------------------------------------------------------------------------------

// 9. Even or Odd

let numX = 12; // num is already declared
if (numX % 2 == 0) {
  console.log(`${numX} is an even number`);
} else {
  console.log(`${numX} is an odd number`);
}

// ---------------------------------------------------------------------------------------------------

// 10. Voting Eligibility

let age: number; // declare a variable
let currentYear = 2024;
let birthYear = 2005;
age = currentYear - birthYear; // assign value to variabke
if (age >= 18) {
  console.log("Yes! You are eligible for voting");
} else {
  console.log("You are not eligiible for voting yet");
}

// ---------------------------------------------------------------------------------------------------

// 11. Grading System

let score: number = 88; // number type annotation
let grade: string; // string type annotation
grade =
  score >= 90
    ? "Your grade is 'A'"
    : score >= 80
    ? "Your grade is 'B'"
    : score >= 70
    ? "Your grade is 'C'"
    : score >= 60
    ? "Your grade is 'D'"
    : "Your grade is 'F'";
console.log(grade);

// ---------------------------------------------------------------------------------------------------

// 12. Max of Three

let x = 24; // let first variable
let y = 14; // let second variable
let z = 6; // let third variable
if (x > y && x > z) {
  console.log(`${x} is the greater`);
} else if (y > x && y > z) {
  console.log(`${y} is the greater`);
} else {
  console.log(`${z} is the greater`);
}

// ---------------------------------------------------------------------------------------------------

// 13. Leap Year Checker

let leapYear: boolean; // declare a variable
let year = 2020;
leapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
if (leapYear == true) {
  console.log(`{year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

// ---------------------------------------------------------------------------------------------------

// 14. Fahrenheit to Celsius Converter

let tempCelcius;
let tempFahrenheit = 68;
tempCelcius = ((tempFahrenheit - 32) * 5) / 2;
console.log(`the fahrenheit temperatur in celsius is ${tempCelcius}`);

// ---------------------------------------------------------------------------------------------------

// 15. Positive, Negative, or Zero

let numberX = 0;
if (numberX > 0) {
  console.log(`${numberX} is positive number`);
} else if (numberX < 0) {
  console.log(`${numberX} is a negative nuber`);
} else {
  console.log("The number is 0");
}

// ---------------------------------------------------------------------------------------------------

// 16. Multiplication Table

let numY = 4; // initialize a variable
console.log(`${numY} x1 = ${numY * 1}`);
console.log(`${numY} x2 = ${numY * 2}`);
console.log(`${numY} x3 = ${numY * 3}`);
console.log(`${numY} x4 = ${numY * 4}`);
console.log(`${numY} x5 = ${numY * 5}`);
console.log(`${numY} x6 = ${numY * 6}`);
console.log(`${numY} x7 = ${numY * 7}`);
console.log(`${numY} x8 = ${numY * 8}`);
console.log(`${numY} x9 = ${numY * 9}`);
console.log(`${numY} x10 = ${numY * 10}`);

// ---------------------------------------------------------------------------------------------------
