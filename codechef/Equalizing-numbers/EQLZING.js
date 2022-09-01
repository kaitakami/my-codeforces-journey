let input = "";

function cacheInput(data) {
  input += data;
}

function prepareInput() {
  input = input.split(/\s+/).map(Number);
}

function main() {
  prepareInput();
  const T = input.splice(0, 1)[0];
  for (let i = 0; i < T; ++i) {
    const a = input.splice(0, 1)[0];
    const b = input.splice(0, 1)[0];
    const diff = Math.abs(a - b);

    if (a === b) {
      process.stdout.write(`Yes\n`);
    } else if (diff % 2 === 0) {
      process.stdout.write(`Yes\n`);
    } else {
      process.stdout.write(`No\n`);
    }
  }
  process.exit();
}

process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", cacheInput).on("end", main);
