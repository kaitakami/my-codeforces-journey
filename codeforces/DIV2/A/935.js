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
  let n = Number(readline());
  let waysCount = 0;
  for (let l = 1; l <= n / 2; l++) {
    (n - l) % l === 0 ? waysCount++ : null;
  }
  console.log(waysCount);
}
