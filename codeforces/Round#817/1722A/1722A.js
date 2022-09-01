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

// Main Function, write code here

function main() {
  let T = readline();
  for (let i = 0; i < T; i++) {
    const n = readline();
    const str = readline();
    let timur = "Timur".split("").sort().join("");
    const strSorted = str.split("").sort().join("");
    console.log(timur === strSorted ? 'Yes' : 'No');
  }
}
