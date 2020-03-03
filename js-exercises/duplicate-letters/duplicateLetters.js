
function duplicateLetters(str) {
  var map = {};
  var maxOccurance = 0;

  for(var i=0;i<str.length;i++){
    if(map[str[i]])
    map[str[i]]++;
    else{
      map[str[i]] = 1;
    }
  }

  if(Object.keys(map).length == str.length) 
    return false;

  for(let key in map){
    maxOccurance = Math.max(maxOccurance,map[key])
  }

  return maxOccurance;

}

export {
  duplicateLetters,
};
