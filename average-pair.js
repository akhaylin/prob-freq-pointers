'use strict';
/** Takes an array of sorted numbers. Searchs for pair from array thats average equals traget average
 * returns ture or false
  */
function averagePair(numbers, targetavg) {
  if (numbers.length < 2) return false;

  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const pairAverage = (numbers[left] + numbers[right]) / 2;

    if (pairAverage === targetavg) {
      return true;
    } else if (pairAverage < targetavg) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

