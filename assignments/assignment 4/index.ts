// Q1
console.log("Hello World");

// Q2
let temperature: number = 15;
if (temperature < 20) {
  console.log("It's cold");
} else {
  console.log("It's not cold outside");
}

// Q3
let apples: number = 10;
let applesgiven: number = 3;
let applesleft: number = apples - applesgiven;

console.log(`your left apples are ${applesleft}`);

// Q4
let firstname: string = "M.Ahmad";
let secondname: string = "Ishaq";
let fullname: string = `${firstname} ${secondname}`;

console.log(fullname);

// Q5
let num: number = 5;
if (num > 3) {
  console.log("Yes");
}

//                                    {MEDIUM}
// Q6
function calculateArea(radius: number) {
  const pi: number = 3.142;
  const area: number = pi * radius * radius;
  console.log(`Area of radius ${radius} is ${area}`);
}
calculateArea(5);

// Q7
for (let i: number = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Q8
let temp = [15, 10, 5, 20, , 3];
console.log(temp.)
