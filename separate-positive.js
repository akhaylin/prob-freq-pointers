// add whatever parameters you deem necessary & write docstring
function separatePositive(numArray) {
  let left = 0;
  let right = numArray.length -1;

  while(left < right){
    if(numArray[left] < 0 && numArray[right] >= 0){
      [numArray[left], numArray[right]] = [numArray[right], numArray[left]];
      left++;
      right--;


    }else{
      if(numArray[left] >= 0) left ++;
      if(numArray[right] < 0) right--;

    }
  }
  return numArray;
}



