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

function setCategory(remainder) {
  switch (remainder) {
    case 1:
      return "A";
    case 3:
      return "B";
    case 2:
      return "C";
    case 0:
      return "D";
  }
}

function main() {
  let x = Number(readline());
  const category = setCategory(x % 4);
  if (category === "A") {
    console.log(`0 ${category}`);
  } else {
    let category1 = setCategory((x + 1) % 4);
    let category2 = setCategory((x + 2) % 4);
    console.log(category1 < category2 ? `1 ${category1}` : `2 ${category2}`);
  }
}
