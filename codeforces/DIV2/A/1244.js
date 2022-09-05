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
    const [a, b, c, d, k] = readline().split(" ").map(Number);
    const pensNeeded = Number.isInteger(a / c) ? a / c : ~~(a / c) + 1;
    const pencilsNeeded = Number.isInteger(b / d) ? b / d : ~~(b / d) + 1;
    if (pensNeeded + pencilsNeeded > k) {
      console.log(-1);
    } else {
      console.log(`${pensNeeded}  ${pencilsNeeded}`);
    }
  }
}
