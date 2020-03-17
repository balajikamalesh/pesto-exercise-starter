// Start your implementation here
function bizarreStringIncrementer(bizarreString) {
  if(isNaN(bizarreString[bizarreString.length - 1]))
    return bizarreString + '1';
  
  let lastNumStartIndex = -1; 	
  
  for (let i = bizarreString.length - 1;i > 0; i--){
    if(!isNaN(bizarreString[i])){
    	lastNumStartIndex = i;
    } else {
    	break;
    }
  }
  
  let lastNum = bizarreString.slice(lastNumStartIndex, bizarreString.length);
  let lastNumOriginalLength = lastNum.length;

  let leadingzeroslength = lastNum.length - Number(lastNum).toString().length;
  
  lastNum = Number(lastNum) + 1;
  
  let isNumberLengthIncreased = (leadingzeroslength + lastNum.toString().length) > lastNumOriginalLength;
  
  return bizarreString.slice(0, lastNumStartIndex) + '0'.repeat((isNumberLengthIncreased && (leadingzeroslength > 0)) ? (leadingzeroslength - 1) : leadingzeroslength) + lastNum;
}

export {
  bizarreStringIncrementer,
}