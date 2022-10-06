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
  const str = readline()
    .split("")
    .filter((letter) => letter === "A" || letter === "Q");
  const qCount = str.filter((letter) => letter === "Q").length;
  let count = 0;
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "Q") {
      count++;
    } else if (count > 0) {
      result += count * (qCount - count);
    }
  }
  console.log(result);
}
