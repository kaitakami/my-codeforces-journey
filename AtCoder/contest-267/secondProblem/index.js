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
  let [one, two, three, four, five, six, seven, eight, nine, ten] = readline()
    .split("")
    .map(Number);
  if (one === 0) {
    let columns = [
      [seven],
      [four],
      [eight, two],
      [five, one],
      [nine, three],
      [six],
      [ten],
    ];
    const bool = columns.map((column) => column.some((n) => n === 1));

    let firstFull;
    let lastFull;

    for (let i = 0; i < bool.length; i++) {
      if (bool[i] === true) {
        if (firstFull === undefined) {
          firstFull = i + 1;
        }
        lastFull = i + 1;
      }
    }
    let betweenFalseValue;
    for (let i = firstFull; i < lastFull; i++) {
      if (bool[i] === false) {
        betweenFalseValue = i;
      }
    }
    if (firstFull < betweenFalseValue && betweenFalseValue < lastFull) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  } else {
    console.log("No");
  }
}
