"use strict";
/**takes string
 * returns object which maps frequency of letters of the string
  */
function getFrequencyCounter(items){
  const freqs = {};
  for(const item of items){
    let curr = freqs[item] || 0;
    curr = curr +1;

  }
  return freqs;
}
/**Takes a word and a sring of letters
 * Determines weather the word can be constructed using the string of letters
 * returns true if word can be constructed, false otherwise
 */
function canConstructWord(word, letters){
  if(letters.length === 0) return false;
  if(word.length === 0) return true;

  const freqs1 = getFrequencyCounter(word)
  const freqs2 = getFrequencyCounter(letters)

  for(let letter in freqs2){

    if(freqs1[letter] >= freqs2[letter] || freqs2[letter] !== true){
      return false;
    }
  }

  return true;
}
//make frequency counter for word and letters
//check if letters string is empty; return false
//check if words string is empty; return true
//get frequencies object for word and letters



