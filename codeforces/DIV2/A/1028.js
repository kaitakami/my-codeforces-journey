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
  const [n, m] = readline().split(" ").map(Number);
  let firstBrow = null;
  let rowCount = 0;
  let columnMid = null;
  for (let i = 0; i < n; i++) {
    const row = readline().split("");
    let rowAlreadyCounted = false;

    for (let j = 0; j < m; j++) {
      if (row[j] === "B" && columnMid === null) {
        firstBrow = i + 1;
        columnMid =
          Math.floor(row.filter((value) => value === "B").length / 2) + j + 1;
      }
      if (row[j] === "B" && !rowAlreadyCounted) {
        rowCount++;
        rowAlreadyCounted = true;
      }
    }
  }
  console.log(firstBrow + Math.floor(rowCount / 2), columnMid);
}
