const number = +prompt("Raqam kiriting");

if (number % 2 == 0) {
  console.log("bu son juft");
} else {
  console.log("bu son toq");
}

// 2-masala
const numberA = Number(prompt("A sonini kiriting:"));
const numberB = Number(prompt("B sonini kiriting:"));

if (numberA >= 0 || numberB < -2) {
  console.log("Jumla rost");
} else {
  console.log("Jumla yolg'on");
}

// 3-masala
let number3a = Number(prompt("A sonini kiriting:"));
let number3b = Number(prompt("B sonini kiriting:"));
let number3c = Number(prompt("C sonini kiriting:"));

if (
  (number3a <= number3b && number3b <= number3c) ||
  (number3c <= number3b && number3b <= number3a)
) {
  console.log("Jumla rost");
} else {
  console.log("Jumla yolg'on");
}

// 4-masala
let number4a = Number(prompt("A sonini kiriting:"));
let number4b = Number(prompt("B sonini kiriting:"));

if (number4a % 2 !== 0 && number4b % 2 !== 0) {
  console.log("Jumla rost");
} else {
  console.log("Jumla yolg'on");
}

// 5-masala
let number5A = Number(prompt("A sonini kiriting:"));
let number5B = Number(prompt("B sonini kiriting:"));

if (number5A % 2 !== 0 || number5B % 2 !== 0) {
  console.log("Jumla rost");
} else {
  console.log("Jumla yolg'on");
}
// 6-masala
let number6A = Number(prompt("A sonini kiriting:"));
let number6B = Number(prompt("B sonini kiriting:"));

if (
  (number6A % 2 !== 0 && number6B % 2 === 0) ||
  (number6A % 2 === 0 && number6B % 2 !== 0)
) {
  console.log("Jumla rost");
} else {
  console.log("Jumla yolg'on");
}
// 7-masala
let number7 = Number(prompt("Uch xonali sonni kiriting:"));

let a = Math.floor(number7 / 100);
let b = Math.floor((number7 % 100) / 10);
let c = number7 % 10;

if (a !== b && a !== c && b !== c) {
  alert("Jumla rost");
} else {
  alert("Jumla yolg'on");
}

// 8-masala
let number8A = Number(prompt("A sonini kiriting:"));
let number8B = Number(prompt("B sonini kiriting:"));
let number8C = Number(prompt("C sonini kiriting:"));

if (number8A === number8B || number8A === number8C || number8B === number8C) {
  console.log("Jumla rost");
} else {
  console.log("Jumla yolg'on");
}

// 9-masala
let number9 = +prompt("2 xonali son kiriting");
if (number9 % 2 == 0) {
  console.log("jumla rost,juft son");
} else {
  console.log("jumla yolgon,toq son");
}
// 10-masala
let number10 = +prompt("uch xonali son kiriting");
if (number10 % 2 !== 0) {
  console.log("jumla rost");
} else {
  console.log("jumla yolgon");
}
// 11-masala
let number11a = +prompt("A sonni kiriting");
let number11b = +prompt("B sonni kiriting");
let number11c = +prompt("C sonni kiriting");
if (number11a <= number11b <= number11c) {
  console.log("jumla rost");
} else {
  console.log("jumla yolgon");
}
