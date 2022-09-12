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
  const [n, m] = readline().split(" ");
  const a = readline().split(" ");
  const b = readline().split(" ");
  const evenChests = a.filter((number) => number % 2 === 1).length;
  const evenKeys = b.filter((number) => number % 2 === 1).length;
  console.log(
    Math.min(evenChests, m - evenKeys) + Math.min(n - evenChests, evenKeys)
  );
}
