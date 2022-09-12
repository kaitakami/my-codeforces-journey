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
    const t = readline();
    const students = readline().split("");
    let angry = false;
    let maxCount = 0;
    let count = 0;
    for (let i = 0; i < students.length; i++) {
      if (count > maxCount) maxCount = count;
      if (students[i] === "A") {
        angry = true;
        students[i + 1] === "P" ? count++ : (count = 0);
      } else if (students[i] === "P" && angry) {
        students[i + 1] === "P" ? count++ : (count = 0);
      }
    }
    console.log(maxCount);
  }
}
