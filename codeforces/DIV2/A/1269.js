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
  let n = +readline();
  let firstNum;
  let secondNum;
  if (n % 2 === 0) {
    firstNum = n + 4;
    secondNum = 4;
  } else {
    firstNum = n + 9;
    secondNum = 9;
  }
  console.log(firstNum, secondNum);
}
