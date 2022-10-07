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
  const input = +readline();
  let firstNum = 1;
  let secondNum = 1;
  let thirdNum = input - 2;
  if ((input - 2) % 3 === 0) {
    thirdNum = input - 3;
    secondNum = 2;
  }
  console.log(firstNum, secondNum, thirdNum);
}
