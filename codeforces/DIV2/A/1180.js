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

const recursive = (cur, total) => {
  if (cur !== 1) {
    const value = (cur - 1) * 4 + total;
    return recursive(cur - 1, value);
  }
  return 1 + total;
};

function main() {
  const n = Number(readline());
  console.log(recursive(n, 0));
}
