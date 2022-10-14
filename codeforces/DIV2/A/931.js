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
  let a = +readline();
  let b = +readline();
  const totalMoves = Math.abs(a - b);
  let aMoves = Math.floor(totalMoves / 2);
  let bMoves = totalMoves - aMoves;
  let totalEnergy = 0
  for (let i = 1; i <= bMoves; i++) {
    if (aMoves >= i) {
      totalEnergy += i + i
    } else {
      totalEnergy += i
    }
  }
  console.log(totalEnergy)
}
