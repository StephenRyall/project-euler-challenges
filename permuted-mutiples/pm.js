for (let j = 1; j < 1000000; j++) {
  let num2 = j * 2;
  let num3 = j * 3;
  let num4 = j * 4;
  let num5 = j * 5;
  let num6 = j * 6;

  let num2A = num2
    .toString()
    .split("")
    .sort()
    .join("");
  let num3A = num3
    .toString()
    .split("")
    .sort()
    .join("");
  let num4A = num4
    .toString()
    .split("")
    .sort()
    .join("");
  let num5A = num5
    .toString()
    .split("")
    .sort()
    .join("");
  let num6A = num6
    .toString()
    .split("")
    .sort()
    .join("");

  if (num2A == num3A && num2A == num4A && num2A == num5A && num2A == num6A) {
    console.log(j);
  }
}
