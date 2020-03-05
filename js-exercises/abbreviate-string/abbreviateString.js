import { isString } from "util";

function abbreviateString(str) {
  if(isString(str)){
    let words = str.split(' ');
    let firstWord = words[0];
    let lastWordAbbreviated = (words[words.length-1][0]).toUpperCase(); 
    return firstWord + ' ' + lastWordAbbreviated +  '.';
  } else {
    throw Error('Input should be a string');
  }
}

export { abbreviateString };
