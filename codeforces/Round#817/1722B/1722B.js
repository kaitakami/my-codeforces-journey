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
    const row1 = readline()
      .split("")
      .map((color) => color.replace("G", "B"));
    const row2 = readline()
      .split("")
      .map((color) => color.replace("G", "B"));

    const identical = row1.join("") === row2.join("");
    console.log(identical ? "Yes" : "No");
  }
}
