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
  const T = readline();
  for (let i = 0; i < T; i++) {
    const [N, K] = readline().split(" ");
    if (N >= K) {
      let ratio = ~~(N / K);
      let arr = [];
      let sum = 0;
      let lastElement;
      for (let i = 1; i <= K; i++) {
        if (i == K) {
          lastElement = N - sum;
          sum += lastElement;
        } else {
          arr.push(ratio + i - 1);
          sum += ratio + i - 1;
        }
      }

      if (arr.some((num) => num === lastElement) || sum !== Number(N)) {
        process.stdout.write("NO\n");
      } else {
        process.stdout.write("YES\n");
      }
    } else {
      process.stdout.write("NO\n");
    }
  }
}
