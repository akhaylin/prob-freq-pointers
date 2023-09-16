"use strict";
/**takes integers
 * returns object which maps frequency of numbers of the string
  */
function getFrequencyCounter(items) {
  const freqs = {};

  for (const item of items) {
    freqs[item] = (freqs[item] || 0) + 1;
  }

  return freqs;
}

/**Takes 2 numbers
 * calculates frequency digits in each number and compares to check if they have the same frequency of digits
 * returns true if the two numbers have same frequency of digits
 */
function sameFrequency(num1, num2) {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  if(strNum1.length !== strNum2.length) return false;

  const num1Frequency = getFrequencyCounter(strNum1);
  const num2Frequency = getFrequencyCounter(strNum2);

  for(const digit in num1Frequency){
    if(num1Frequency[digit] !== num2Frequency[digit]){
      return false
    }
  }

  return true;

}
