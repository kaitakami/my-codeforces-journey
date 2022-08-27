// Problem link https://codeforces.com/problemset/problem/1720/B

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

// Main Function, code here

function main() {
  const testCases = readline();
  for (let i = 0; i < testCases; i++) {
    const length = readline();
    const arr = readline().split(" ");
    arr.sort((a, b) => a - b);
    const result =
      parseInt(arr[length - 1] - arr[0]) + parseInt(arr[length - 2] - arr[1]);
    console.log(result);
  }
}
