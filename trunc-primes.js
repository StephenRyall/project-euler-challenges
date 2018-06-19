function isPrime(num) {
  if (num === 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
  return true;
}

function rightLeft(num) {
  let stringValue = num.toString().split("");
  if (!isPrime(num)) {
    return false;
  }
  for (let i = 1; i < stringValue.length; i++) {
    let sliceForward = stringValue.slice(i, stringValue.length);
    let sliceBack = stringValue.slice(0, stringValue.length - i);
    if (
      !(
        isPrime(parseInt(sliceForward.join(""))) &&
        isPrime(parseInt(sliceBack.join("")))
      )
    ) {
      return false;
    }
  }
  return true;
}

function searchTrunc() {
  let truncArray = [];
  let num = 11;
  while (truncArray.length < 11) {
    if (rightLeft(num)) {
      truncArray.push(num);
    }
    num++;
  }
  let addUp = truncArray.reduce((a, b) => a + b);
  return addUp;
}

console.log(searchTrunc());
