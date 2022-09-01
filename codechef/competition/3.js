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

function recursiveFunction(arrOfValues) {

}

function main() {
  let x = readline();
  for (let i = 0; i < x; i++) {
    let n = readline();
    let arrOfValues = []
    for (let j = 0; j < n; j++) {
      let st = readline()
        .split(" ")
        .map((number) => Number(number));
      arrOfValues = [...arrOfValues, st]
    }
    console.log(arrOfValues)
    for (let k = 0; k < n; k++) {
      let result = [...arrOfValues[k], ...arrOfValues[k + 1]]
      result.sort((a, b) => a-b)
      console.log(result)
    }
  }
}


