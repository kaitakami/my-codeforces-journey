let input = '';

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
    //process.stdout.write(Result + "\n");
  }
  process.exit();
}

process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", cacheInput).on("end", main);
