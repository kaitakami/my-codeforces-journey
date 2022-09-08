process.stdin.resume();
process.stdin.setEncoding("utf8");

// your code goes here
process.stdin.on("data", (data) => {
  data = data.replace(/\n$/, "");
  arr = data.split("\n");
  const [T] = arr.splice(0, 1);
  for (let i = 0; i < T; i++) {
    const [X, Y] = `${arr.splice(0, 1)}`.split(" ");
    main(X, Number(Y));
  }
});

function main(X, Y) {
  let A = Y;
  let B = Y;
  let C = Y;
  while ((A + B + C) / 3 !== Number(X)) {
    if ((A + B + C) / 3 > X) {
      A--;
    } else if ((A + B + C) / 3 < X) {
      C++;
    }
  }
  process.stdout.write(`${A} ${B} ${C}\n`);
}
