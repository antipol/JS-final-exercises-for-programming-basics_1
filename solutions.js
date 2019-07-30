//Question 1

const caesarCipher = (plaintext, shiftNum) => {

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const cipherText = [];

  for (let i = 0; i < plaintext.length; i++) {

    //find the new index after having shifted n letters
    let newIndexInAlphabet = [...alphabet].indexOf(plaintext[i]) + shiftNum;

    //if new index is 26 or more (outside alphabet range), find remainder of length (26), which starts from beginning in the alphabet (from a)
    newIndexInAlphabet > 25 ? cipherText.push(alphabet[newIndexInAlphabet % 26]) : cipherText.push(alphabet[newIndexInAlphabet]);
  }

  return cipherText.join('');
}

console.log(caesarCipher('stringz', 1));
//tusjoha



//Question 2
const digitalRoot = num => {
  if (num < 10) {
    return num;
  } else {
    const toNumArr = String(num).split('').map(num => Number(num));
    const sum = toNumArr.reduce((acc, cur) => acc + cur);
    return digitalRoot(sum)
  }
}

console.log(digitalRoot(6598));
//1



//Question 3
const highThree = numArr => {
  const sortNums = numArr.sort((x, y) => y - x);
  const reduceLargest3 = sortNums.slice(0, 3).reduce((acc, cur) => acc * cur);
  return reduceLargest3;
}

console.log(highThree([2, 4, 1, 6, 7]));
//168



//Question 4

const makeMonies = stockArr => {
  let minIndex = 0;
  let maxIndex = 1;

  let currentMin = 0;
  let maxProfit = 0;

  for (let i = 1; i < stockArr.length; i++) {

    //create new current minimum
    //compare first element (currentMin = 0) with next arr element (i = 1)
    if (stockArr[i] < stockArr[currentMin]) {
      //update currentMin if number is less than number preceding it
      currentMin = i;
    }

    //calculate best profit in each iteration
    //in first check, maxIndex is 1, min is 0.
    if (stockArr[maxIndex] - stockArr[minIndex] < stockArr[i] - stockArr[currentMin]) {
      // If in one iteration there is a higher profit (difference between current i and currentMin), update maxIndex and currentMin
      maxIndex = i;
      minIndex = currentMin;
    }
  }

  //calculate difference/max profit
  maxProfit = stockArr[maxIndex] - stockArr[minIndex];
  return maxProfit;

}

console.log(makeMonies([1, 20, 14, 10, 16, 22, 18]));
//21
//22 - 1 = 21



//Question 5

const largestSum = arr => {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

console.log(largestSum([6, 4, -8, 7, 5]));
//14

console.log(largestSum([6, 1, -8, 9, 10, -2, 3]));
//20



//Question 6

const foldCipher = str => {

  //convert str to lower case
  const strToLower = str.toLowerCase();

  // list the alphabet (normal and reverse)
  const alphabet2 = 'abcdefghijklmnopqrstuvwxyz';
  const reverseAlphabet = [...alphabet2].reverse().join('');

  //find the alphabet index of the each letter in the string
  const indexOfLetters = [...strToLower].map(letter => alphabet2.indexOf(letter));

  //return the letters based on the same index numbers but in reverse alphabet
  const foldedCode = indexOfLetters.map(index => reverseAlphabet[index]);

  return foldedCode.join('');

}


console.log(foldCipher('abc'));
//zyx

console.log(foldCipher('Trine'));
// girmv
