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
  const A = readline()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const m = readline();
  const B = readline()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  console.log(`${A[n - 1]} ${B[m - 1]}`);
}
