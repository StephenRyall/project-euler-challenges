function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

const quadPrime = () => {
  let sum = 0;
  let result = 0;
  for (let a = -1000; a < 1000; a++) {
    for (let b = -1000; b < 1000; b++) {
      let n = 0;

      while (isPrime(fnAB(a, b, n))) {
        // console.log(fn);
        if (n > sum) {
          sum = n;
          result = a * b;
        }
        n++;
      }
    }
  }
  console.log(result);
};

function fnAB(a, b, n) {
  return n * n + n * a + b;
}

quadPrime();
