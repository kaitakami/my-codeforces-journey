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
  const x = Number(readline());
  if (x === 1) {
    console.log(-1);
  } else {
    for (let i = 1; i <= x; i++) {
      let a = i;
      let b = x;
      if (a * b > x) {
        if (a % b === 0 && a / b < x) {
          console.log(a, b);
          break;
        }
      }
    }
  }
}
