"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readline() {
  return inputString[currentLine++];
}

function main() {
  const n = readline();
  for (let i = 0; i < n; i++) {
    let [a, b] = readline().split(" ").map(Number);
    let steps = 0;
    let total = 0;
    if (a < b) {
      total = b - a;
    } else if (b < a) {
      total = a - b;
    }
    let fiveResult = Math.floor(total / 5);
    let fiveRemainder = total % 5;
    let twoResult = Math.floor(fiveRemainder / 2);
    let twoRemainder = fiveRemainder % 2;
    steps = fiveResult + twoResult + twoRemainder;
    console.log(steps);
  }
}
