const powerDigit = num => {
  let numOfDigits =
    parseInt(
      num
        .toExponential()
        .toString()
        .split("+")[1]
    ) + 1;
  return numOfDigits;
};

const searchForAns = () => {
  let sum = 0;
  for (let x = 1; x <= 1000; x++) {
    for (let n = 1; n <= 50; n++) {
      let ans = x ** n;
      if (n == powerDigit(ans)) {
        sum++;
        // console.log(sum);
      }
      if (powerDigit(ans) > n) {
        break;
      }
    }
  }
  console.log(sum);
};

searchForAns();
