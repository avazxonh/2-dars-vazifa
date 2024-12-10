let number = Number(prompt("Uch xonali sonni kiriting:"));

let a = Math.floor(number / 100); 
let b = Math.floor((number % 100) / 10);
let c = number % 10; 

if (a !== b && a !== c && b !== c) {
  alert("Jumla rost");
} else {
  alert("Jumla yolg'on");
}
