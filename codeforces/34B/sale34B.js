process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => string.trim());

  main();
});

function readline() {
  return inputString[currentLine++];
}

// Main Function, write code here

function main() {
  let [n, m] = readline()
    .split(' ')
    .map((num) => +num);
  const arr = readline()
    .split(' ')
    .map((num) => +num);
  arr.sort((a, b) => a - b);
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    if (m > 0) {
      if (arr[i] <= 0) {
        maxSum += arr[i];
      }
    }
    m--;
  }
  if (maxSum) {
    console.log(-1 * maxSum);
  } else {
    console.log(maxSum);
  }
}
