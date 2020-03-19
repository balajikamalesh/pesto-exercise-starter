
const betterStringLib = {
  reverse: function (string) {
    return [...string].reduce((reversedString, nextCharacter) => 
        nextCharacter + reversedString
    , '');
  },
  equals: function (string1, string2) {
    return (string1 === string2);
  }
}

export {
  betterStringLib,
};
