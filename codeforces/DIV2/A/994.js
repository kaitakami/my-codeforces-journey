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
  const n = readline();
  const sequence = readline().split(" ");
  const fingerPrints = readline().split(" ");
  const set = new Set(fingerPrints);
  let code = '';
  for (let i = 0; i < sequence.length; i++) {
    if (set.has(sequence[i])) {
      code += sequence[i] + " "
    }
  }
  console.log(code.trim());
}
