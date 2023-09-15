"use strict";
/**takes string
 * returns object which maps frequency of letters of the string
  */
function getFrequencyCounter(items) {
  const freqs = {};

  for (const item of items) {
    freqs[item] = (freqs[item] || 0) + 1;
  }

  return freqs;
}

/**Takes a word and a sring of letters
 * Determines weather the word can be constructed using the string of letters
 * returns true if word can be constructed, false otherwise
 */
function canConstructWord(word, letters) {
  if (!letters.length) return false;
  if (word.length === 0) return true;

  const wordFreq = getFrequencyCounter(word);
  const letterFreq = getFrequencyCounter(letters);

  for (let char in wordFreq) {
    const value = letterFreq[char] || 0;
    if (wordFreq[char] > value) {

      return false;
    }
  }

  return true;
}


