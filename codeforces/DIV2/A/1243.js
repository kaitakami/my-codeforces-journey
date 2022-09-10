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
  const T = readline();
  for (let i = 0; i < T; i++) {
    const n = readline();
    const planks = readline()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    const set = new Set(planks);
    let maxSquare = 1;
    for (let i = 0; i < set.size; i++) {
      const actualMaxSize = planks.slice(
        planks.indexOf([...set][i]),
        planks.length
      ).length;
      if (actualMaxSize > maxSquare) {
        if (actualMaxSize > [...set][i]) {
          maxSquare = [...set][i];
        } else {
          maxSquare = actualMaxSize;
        }
      }
    }
    console.log(maxSquare);
  }
}
