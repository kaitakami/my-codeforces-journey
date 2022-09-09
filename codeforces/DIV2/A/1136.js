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

// binary search solution

function getChapterLastPage(arr, cur) {
  if (arr.length === 1) {
    return arr[0];
  }
  const mid = arr[~~(arr.length / 2)];
  const indexOfMid = arr.indexOf(mid);
  if (mid === cur) {
    return mid;
  }
  if (mid < cur) {
    return getChapterLastPage(arr.slice(indexOfMid, arr.length + 1), cur);
  }
  if (mid > cur) {
    return getChapterLastPage(arr.slice(0, indexOfMid), cur);
  }
}

function main() {
  const n = readline();
  const endPages = [];
  for (let i = 0; i < n; i++) {
    const [startPage, endPage] = readline().split(" ").map(Number);
    endPages[i] = endPage;
  }
  const currentPage = Number(readline());

  const chapterIndex = endPages.indexOf(
    getChapterLastPage(endPages, currentPage)
  );
  if (endPages[chapterIndex] < currentPage) {
    console.log(n - chapterIndex - 1);
  } else {
    console.log(n - chapterIndex);
  }
}
