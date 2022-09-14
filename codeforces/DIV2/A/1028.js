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
  let firstBColumn = null;
  let columnCount = 0;
  let columnAlreadyCounted = false;
  let firstBrow = null;
  let rowCount = 0;
  for (let i = 0; i < n; i++) {
    const row = readline().split("");
    for (let j = 0; j < m; j++) {
      if (row[j] === "B" && firstBColumn === null) {
        firstBrow = j + 1;
        firstBColumn = i + 1;
      }
      if (row[j] === "B" && firstBColumn === i) rowCount++;
      if (row[j] === "B" && !columnAlreadyCounted) {
        columnCount++;
        columnAlreadyCounted = true;
      }
    }
    columnAlreadyCounted = false;
  }
  if (rowCount === 1 && columnCount === 1) {
    console.log(firstBColumn, firstBrow);
    return;
  }
  console.log(
    `${(firstBColumn + columnCount) / 2} ${
      (firstBrow + rowCount + rowCount) / 2
    }`
  );
}
