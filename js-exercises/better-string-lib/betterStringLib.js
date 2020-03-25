
const betterStringLib = {
  reverse: function (string) {
    return Array.from(string.normalize('NFC')).reverse().join('');
  },
  equals: function (string1, string2) {
    return (string1.normalize('NFC') === string2.normalize('NFC'));
  }
}

export {
  betterStringLib,
};
