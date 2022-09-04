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
  let n = readline();
  let arr = readline().split("");
  let StoF = 0;
  let FtoS = 0;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[i] === "S" ? StoF++ : FtoS++;
    }
  }
  console.log(StoF > FtoS ? "Yes" : "No");
}
