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

function turnTable(plates, i, max) {
  let happyPeople = 0;
  if (plates.length === i) {
    return max;
  }
  // implementation
  for (let i = 0; i < plates.length; i++) {
    let minus;
    if ((i - 1) % 4 < 0) {
      minus = plates[plates.length - 1];
    } else {
      minus = plates[(i - 1) % 4];
    }
    if (plates[i] === i) {
      happyPeople++;
    } else if (minus === plates.indexOf(i)) {
      happyPeople++;
    } else if (plates[(i + 1) % 4] === plates.indexOf(i)) {
      happyPeople++;
    }
  }
  plates.unshift(plates[plates.length - 1]);
  plates.pop();
  if (happyPeople > max) {
    max = happyPeople;
  }
  if (max === plates.length) {
    return max;
  }

  return turnTable(plates, ++i, max);
}

function main() {
  const N = readline();
  const plates = readline().split(" ").map(Number);
  console.log(turnTable(plates, 0, 0));
}
