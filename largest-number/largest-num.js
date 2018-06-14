const _ = require("lodash");

let bigNum =
  "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111585238630507156932909632952274430435576689664895044524452316173185640309871112172238311362229893423380308135336276614282806444486645238749303589072962904915604407723907138105158593079608667017242712188399879790879227492190169972088809377665727333001053367881220235421809751254540594752243525849077116705560136048395864467063244157221553975369781797784617406495514929086256932197846862248283972241375657056057490261407972968652414535100474821663704844031998900088952434506585412275886668811642717147992444292823086346567481391912316282458617866458359124566529476545682848912883142607690042242190226710556263211111093705442175069416589604080719840385096245544436298123098787992724428490918845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";

function findLargestSum(num, sizeOfStep) {
  let bigNumArray = num.split("").map(x => parseInt(x));
  let lengthArray = num.length;
  let endOfArray = lengthArray - sizeOfStep;
  let largestNum = 0;
  for (let i = 0; i <= endOfArray + 12; i++) {
    let product = bigNumArray.slice(i, i + sizeOfStep).reduce((a, b) => a * b);
    if (product > largestNum) {
      largestNum = product;
    }
  }
  return largestNum;
}

console.log(findLargestSum(bigNum, 13));
