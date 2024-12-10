let numberA = Number(prompt("A sonini kiriting:"));
let numberB = Number(prompt("B sonini kiriting:"));
let numberC = Number(prompt("C sonini kiriting:"));

if (
  (numberA <= numberB && numberB <= numberC) ||
  (numberC <= numberB && numberB <= numberA)
) {
  alert("Jumla rost");
} else {
  alert("Jumla yolg'on");
}
