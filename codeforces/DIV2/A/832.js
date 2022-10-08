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
  let [n, k] = readline()
    .split(" ")
    .map((num) => BigInt(num));
  if (n / k % BigInt(2) === BigInt(0)) {
    console.log('NO')
  } else {
    console.log('YES')
  }
}
