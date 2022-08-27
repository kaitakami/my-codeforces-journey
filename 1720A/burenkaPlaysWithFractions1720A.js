// Problem link https://codeforces.com/problemset/problem/1720/A

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString = "",
  currentLine = 0;
process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => string.trim());
  main();
});
function readLine() {
  return inputString[currentLine++];
}

// code here

function main() {
  const testCases = +readLine(); // convert t in number
  for (let i = 0; i < testCases; i++) {
    // iterate in each case
    // const n = +readLine();
    const arr = readLine()
      .split(" ")
      .map((number) => +number); // convert p in number
    let a = BigInt(arr[0]);
    let b = BigInt(arr[1]);
    let c = BigInt(arr[2]);
    let d = BigInt(arr[3]);
    let x = BigInt(a * d);
    let y = BigInt(b * c);
    if (x == y) {
      console.log(0);
    } else if (a == 0 || c == 0) {
      console.log(1);
    } else if (x % y == 0 || y % x == 0) {
      console.log(1);
    } else {
      console.log(2)
    }
  }
}
