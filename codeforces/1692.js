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
  const T = readline()
  for (let i = 0; i < T; i++) {
    const arr = readline().split(' ').map(Number)
    let result = 0
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[0]) result++
    }
    console.log(result)
  }
}
