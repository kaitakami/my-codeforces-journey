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
  let day = readline();
  switch (day) {
    case "Monday":
      console.log(5);
      break;
    case "Tuesday":
      console.log(4);
      break;
    case "Wednesday":
      console.log(3);
      break;
    case "Thursday":
      console.log(2);
      break;
    case "Friday":
      console.log(1);
      break;
  }
}
