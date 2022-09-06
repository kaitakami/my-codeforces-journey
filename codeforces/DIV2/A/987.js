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
  let gems = ["Power", "Time", "Space", "Soul", "Reality", "Mind"];
  for (let i = 0; i < n; i++) {
    let newGems;
    const color = readline();
    if (color === "red") {
      newGems = gems.filter((gem) => gem !== "Reality");
    }
    if (color === "blue") {
      newGems = gems.filter((gem) => gem !== "Space");
    }
    if (color === "orange") {
      newGems = gems.filter((gem) => gem !== "Soul");
    }
    if (color === "purple") {
      newGems = gems.filter((gem) => gem !== "Power");
    }
    if (color === "green") {
      newGems = gems.filter((gem) => gem !== "Time");
    }
    if (color === "yellow") {
      newGems = gems.filter((gem) => gem !== "Mind");
    }
    gems = [...newGems];
  }
  console.log(`${6 - n}\n${gems.join("\n")}`);
}
