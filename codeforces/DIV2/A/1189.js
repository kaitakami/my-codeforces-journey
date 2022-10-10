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
  const n = readline();
  const s = readline();
  const sArr = s.split("");
  let zeros = 0;
  let ones = 0;
  sArr.filter((letter) => {
    if (letter === "0") {
      zeros++;
    } else {
      ones++;
    }
  });
  if (zeros === ones) {
    console.log(2)
    console.log(`${s[0]} ${s.substring(1)}`);
  } else {
    console.log(1)
    console.log(s);
  }
}
