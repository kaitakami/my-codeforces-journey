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
  const S = readline();
  const T = readline();

  if (S.length > T.length) {
    console.log("No");
    return;
  }
  const TSubstr = T.substring(0, S.length);
  if (TSubstr === S) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
