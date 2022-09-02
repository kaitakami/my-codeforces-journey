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
    let [n, r, b] = readline()
      .split(" ")
      .map((number) => Number(number));
    const diff = r / (b + 1);
    let bigFloat;
    console.log(diff, Number.isInteger(diff), Math.round(diff));
    if (Math.round(diff) >= diff) {
      bigFloat = true;
    } else {
      bigFloat = false;
    }
    for (let j = 0; j < T; j++) {}
  }
}
