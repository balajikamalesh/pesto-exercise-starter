
function duplicateLetters(str) {
  var letterFrequency = {};
  var maxOccurance = 0;

  for(var i=0;i<str.length;i++){
    if(letterFrequency[str[i]])
    letterFrequency[str[i]]++;
    else{
      letterFrequency[str[i]] = 1;
    }
  }

  if(Object.keys(letterFrequency).length === str.length) 
    return false;

  for(let key in letterFrequency){
    maxOccurance = Math.max(maxOccurance,letterFrequency[key])
  }

  return maxOccurance;

}

export {
  duplicateLetters,
};
