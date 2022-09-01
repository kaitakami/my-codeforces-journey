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

// Main Function, write code here

function main() {
  let T = readline();
  for (let i = 0; i < T; i++) {
    const n = readline();
    const arr = [
      ...readline().split(" "),
      ...readline().split(" "),
      ...readline().split(" "),
    ];
    const person = [0, 0, 0];
    for (let j = 0; j < n * person.length; j++) {
      if (j < n) {
        const filteredValues = arr.filter((word) => word === arr[j]);
        let points = 0;
        if (filteredValues.length <= 2) {
          if (filteredValues.length === 1) {
            points = 3;
          } else {
            points = 1;
          }
        }
        person[0] += points;
      } else if (j < n * 2) {
        const filteredValues = arr.filter((word) => word === arr[j]);
        let points = 0;
        if (filteredValues.length <= 2) {
          if (filteredValues.length === 1) {
            points = 3;
          } else {
            points = 1;
          }
        }
        person[1] += points;
      } else {
        const filteredValues = arr.filter((word) => word === arr[j]);
        let points = 0;
        if (filteredValues.length <= 2) {
          if (filteredValues.length === 1) {
            points = 3;
          } else {
            points = 1;
          }
        }
        person[2] += points;
      }
    }

    console.log(`${person[0]} ${person[1]} ${person[2]}`);
  }
}
