function isPrime(num) {
  if (num === 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
  return true;
}

function sortNumbers(a, b) {
  return a - b;
}

function slicedArray() {
  let keyObj = Object.keys(distinctPrimeFactors());
  let parsedKeys = keyObj.map(x => parseInt(x));
  return parsedKeys;
}

function distinctPrimeFactors(x, acc = {}) {
  for (let i = 2; i <= x; i++) {
    if (x % i == 0) {
      return distinctPrimeFactors(x / i, { ...acc, [i]: 1 });
    }
  }
  return acc;
}

const finalArray = maxCount => {
  let num = 0;
  while (true) {
    num++;
    let lengthObj = Object.keys(distinctPrimeFactors(num)).length;
    if (lengthObj != maxCount) {
      continue;
    }
    let firstNum = num;
    let differ = 1;
    loop: while (true) {
      num++;
      let lengthObj = Object.keys(distinctPrimeFactors(num)).length;
      if (lengthObj != maxCount) {
        break loop;
      }
      differ++;
      if (differ == maxCount) {
        return firstNum;
      }
    }
  }
};

console.log(finalArray(4));
