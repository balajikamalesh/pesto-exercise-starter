
function freqSort(string) {
  var characterFrequency = Object.create(null);

  string.forEach(function(letter) {
    letter = letter.toLowerCase();
    characterFrequency[letter] = (characterFrequency[letter] || 0) + 1;
  });

  return (Object.keys(characterFrequency).map(function(key) {
    return [characterFrequency[key], key];
  }).sort(function(a, b) {
    return b[0] - a[0];
  }).map(function(t) {
    return t[1];
  }));
}

export {
  freqSort,
};
