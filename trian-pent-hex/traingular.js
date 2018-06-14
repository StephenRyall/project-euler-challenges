const findConst = () => {
  let tK = {};
  for (let k = 285; k < 500000; k++) {
    let t = (k / 2) * (k + 1);
    if (tK[t] == undefined) {
      tK[t] = 1;
    } else {
      tK[t] += 1;
    }
  }
  for (let m = 165; m < 500000; m++) {
    let t = (m / 2) * (3 * m - 1);
    if (tK[t] == undefined) {
      tK[t] = 1;
    } else {
      tK[t] += 1;
    }
  }
  for (let j = 143; j < 500000; j++) {
    let t = j * (2 * j - 1);
    if (tK[t] == undefined) {
      tK[t] = 1;
    } else {
      tK[t] += 1;
    }
  }
  const answer = Object.entries(tK).filter(([key, value]) => {
    return value === 3;
  });

  console.log(answer);
};

console.log(findConst());
