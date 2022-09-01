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
    const x = input.splice(0, 1)[0];
    const y = input.splice(0, 1)[0];
    const z = input.splice(0, 1)[0];
    console.log(x * 4 + y * 2);
  }
  process.exit();
}

process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", cacheInput).on("end", main);
