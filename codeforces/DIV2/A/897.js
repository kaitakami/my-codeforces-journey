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
  let [n, m] = readline().split(' ').map(Number);
  let str = readline().split('')
  for (let i = 0; i < m; i++) {
    let [l, r, c1, c2] = readline().split(' ')
    for (let j = l - 1; j < r; j++) {
      if (str[j] === c1) {
        str[j] = c2
      }
    }
  }
  console.log(str.join(''))
}
