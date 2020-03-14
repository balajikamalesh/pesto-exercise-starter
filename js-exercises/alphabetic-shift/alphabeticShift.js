const alphabeticShift = input => {
  if(typeof input !== 'string'){
    throw Error('Expected a string input');
  }
  return input.split('').map((element) => element = shiftCharacter(element, 1)).join('');
};

function shiftCharacter (character, shiftBy) {
  let charCode = ((character.charCodeAt(0) === 90) || (character.charCodeAt(0) === 122)) ? 
                        (character.charCodeAt(0) - 26) : (character.charCodeAt(0));
  return String.fromCharCode(charCode + shiftBy);
}

export { alphabeticShift };
