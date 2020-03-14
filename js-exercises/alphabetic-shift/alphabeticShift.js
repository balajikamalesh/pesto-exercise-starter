const alphabeticShift = input => {
  return input.split('').map((element) => element = shiftCharacter(element, 1)).join('');
};

function shiftCharacter (character, shiftBy) {
  return String.fromCharCode(character.charCodeAt(0) + shiftBy);
}

export { alphabeticShift };
