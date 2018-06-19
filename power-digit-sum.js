const bigInt = require("big-integer");

const sumDigits = () => {
  let sum = 0;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      let finNum = bigInt(i)
        .pow(j)
        .toString()
        .split("")
        .map(x => parseInt(x))
        .reduce((a, b) => a + b);
      if (finNum > sum) {
        sum = finNum;
      }
    }
  }
  console.log(sum);
};

sumDigits();
