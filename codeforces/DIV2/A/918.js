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
  const n = Number(readline());
  let secondLastFib = 1;
  let LastFib = 2;
  let strResult = "OO";
  if (n <= 1) {
    console.log("O");
    return;
  }
  if (n <= 2) {
    console.log("OO");
    return;
  }
  for (let i = 3; i <= n; i++) {
    if (i === secondLastFib + LastFib) {
      strResult += "O";
      secondLastFib = LastFib;
      LastFib = i;
    } else {
      strResult += "o";
    }
  }
  console.log(strResult);
}
