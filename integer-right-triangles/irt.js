console.time("Time");
const findSolutions = () => {
  let x = 0;
  let p = 0;
  let obj = {};
  for (let a = 20; a <= 800; a++) {
    for (let b = a; b <= 800; b++) {
      let aSq = a * a;
      let bSq = b * b;
      let cSq = b * b + a * a;
      let c = Math.sqrt(cSq);
      p = a + b + c;
      if (p > 1000) {
        break;
      }
      if (Number.isInteger(c)) {
        if (obj[p] == undefined) {
          obj[p] = 1;
        } else {
          obj[p] += 1;
        }
      }
    }
  }
  console.log(obj);
};

console.log(findSolutions());
console.timeEnd("Time");
