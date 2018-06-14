function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num !== 1;
}

function oddComp() {
  let compArray = [];
  for (let i = 0; i < 10000; i++) {
    if (!isPrime(i) && i % 2 != 0) {
      compArray.push(i);
    }
  }
  return compArray;
}

function primes() {
  let primeArray = [];
  for (let i = 0; i < 10000; i++) {
    if (isPrime(i)) {
      primeArray.push(i);
    }
  }
  return primeArray;
}

function squareObject() {
  let squareObj = {};
  for (let i = 0; i < 100; i++) {
    let key = 2 * i ** 2;
    if (squareObj[key] == undefined) {
      squareObj[key] = 1;
    }
  }
  return squareObj;
}

const smallestOddComp = () => {
  let compArray = oddComp();
  let primeArray = primes();
  let squareObj = squareObject();
  for (let i = 0; i <= compArray.length; i++) {
    for (let j = 0; j < primeArray.length; j++) {
      if (primeArray[j] > compArray[i]) {
        console.log(compArray[i]);
        break;
      }
      let differ = compArray[i] - primeArray[j];
      if (squareObj[differ] == 1) {
        break;
      }
    }
  }
};

smallestOddComp();
