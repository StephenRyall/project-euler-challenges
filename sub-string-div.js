function permut(string) {
  if (string.length < 2) return string; // This is our break condition

  var permutations = []; // This array will hold our permutations

  for (var i = 0; i < string.length; i++) {
    var char = string[i];

    // Cause we don't want any duplicates:
    if (string.indexOf(char) != i)
      // if char was used already
      continue; // skip it this time

    var remainingString =
      string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS

    for (var subPermutation of permut(remainingString))
      permutations.push(char + subPermutation);
  }
  return permutations;
}

function searchPerms() {
  let permArray = permut("1234567890");
  let newPerms = permArray.filter(function(x) {
    let d1 = parseInt(x.slice(1, 4));
    let d2 = parseInt(x.slice(2, 5));
    let d3 = parseInt(x.slice(3, 6));
    let d4 = parseInt(x.slice(4, 7));
    let d5 = parseInt(x.slice(5, 8));
    let d6 = parseInt(x.slice(6, 9));
    let d7 = parseInt(x.slice(7, 10));
    // console.log(x);
    if (
      d1 % 2 == 0 &&
      d2 % 3 == 0 &&
      d3 % 5 == 0 &&
      d4 % 7 == 0 &&
      d5 % 11 == 0 &&
      d6 % 13 == 0 &&
      d7 % 17 == 0
    ) {
      return true;
    }
  });

  return newPerms;
}

function addUp() {
  let filterArray = searchPerms();
  let middleArray = filterArray.map(x => parseInt(x));
  let finalArray = middleArray.reduce((a, b) => a + b);

  return finalArray;
}

console.log(addUp());
