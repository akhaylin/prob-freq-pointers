"use strict";

/**Takes in array of keys and array of values
 * creates an object from the keys and values, if there are not enough values, set remaiing keys to null
 * returns the object
 */
function twoArrayObject(keys,values) {
  const result = {};

  for(let i =0; i <keys.length; i++){
    if(i < values.length){
      result[keys[i]] = values[i];
    }else{
      result[keys[i]] = null;
    }
  }

  return result;
}
