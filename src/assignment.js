// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================



// let arrayOfNumbers = [1, 2, 3, 4, 5];

function sumOfNumbers(arrayOfNumbers) {
    var sum = 0;

    for(var index = 0; index < arrayOfNumbers.length; index++) {
        sum += arrayOfNumbers[index]
    }
    return sum
}
// sumOfNumbers(arrayOfNumbers);

assignment.sumOfNumbers = sumOfNumbers;


function countEvenNumbers(arrayOfNumbers) {
  let count = 0;

  for(let index= 0; index < arrayOfNumbers.length; index++) {
    if(arrayOfNumbers[index] % 2 === 0) {
      count++
    }
  }
  return count;
}
  
assignment.countEvenNumbers = countEvenNumbers;
// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================