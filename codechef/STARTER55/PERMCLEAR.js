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
    const A = readline().split(" ");
    const k = readline();
    const B = readline().split(" ");
    console.log(A.filter((number) => B.indexOf(number) === -1).join(' '));
  }
}
