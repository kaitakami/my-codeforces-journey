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
  const n = +readline()
  const operations = readline().split('')
  let result = 0
  for (let i = 0; i < n; i++) {
    operations[i] === '+' ? result++ : result--
    if (result < 0) result = 0
  }
  console.log(result)
}
