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
    const arr = readline().split(" ").map(Number);
    let ans = Math.max(
      arr[n - 1] - Math.min(...arr),
      Math.max(...arr) - arr[0]
    );
    for (let i = 0; i < n; i++) {
      ans = Math.max(ans, arr[i - 1] - a[i]);
    }
    console.log(ans);
  }
}
