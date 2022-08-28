let input = "";

function cacheInput(data) {
  input += data;
}

function prepareInput() {
  input = input.split(/\s+/).map(Number);
}

function main() {
  prepareInput();
  const T = Number(input.splice(0, 1)[0]);
  for (let i = 0; i < T; i++) {
    const km = Number(input.splice(0, 1)[0]);
    let cost;
    if (km < 301) {
      cost = 3000;
    } else {
      cost = km * 10;
    }
    process.stdout.write(`${cost}\n`);
  }
  process.exit();
}

process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", cacheInput).on("end", main);
