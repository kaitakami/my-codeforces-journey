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
  let strLength = readline();
  let str = readline();
  let e = 0,
    o = 0,
    z = 0,
    r = 0,
    n = 0;
  const result = [];
  for (let i = 0; i < strLength; i++) {
    switch (str[i]) {
      case "e":
        e++;
        break;
      case "o":
        o++;
        break;
      case "z":
        z++;
        break;
      case "r":
        r++;
        break;
      case "n":
        n++;
        break;
    }
    if (o >= 1 && n >= 1 && e >= 1) {
      result.push(1);
      o--;
      n--;
      e--;
    }
    if (z >= 1 && e >= 1 && r >= 1 && o >= 1 && n === 0) {
      result.push(0);
      z--;
      e--;
      r--;
      o--;
    }
  }
  console.log(result.sort((a, b) => b - a).join(" "));
}
