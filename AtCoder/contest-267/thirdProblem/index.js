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
  let [N, M] = readline().split(" ").map(Number);
  let arr = readline().split(" ").map(Number);
  let max_ending_here = 0,
    max_so_far = Number.MIN_VALUE;
  for (let i = 0; i < N; i++) {
    // include current element to previous subarray only
    // when it can add to a bigger number than itself.
    if (arr[i] <= max_ending_here + arr[i]) {
      console.log(arr[i]);
      max_ending_here += arr[i];
    }

    // Else start the max subarray from current element
    else {
      max_ending_here = arr[i];
    }
    if (max_ending_here > max_so_far) {
      max_so_far = max_ending_here;
    }
  }
  console.log(max_so_far);
}
