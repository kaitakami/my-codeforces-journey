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
  let johnScore = readline()
    .split(" ")
    .map(Number)
    .reduce((a, b) => a + b, 0);
  let count = 1;
  for (let i = 1; i < n; i++) {
    const scoreSum = readline()
      .split(" ")
      .map(Number)
      .reduce((a, b) => a + b, 0);
    if (scoreSum > johnScore) {
      count++;
    }
  }
  console.log(count);
}
