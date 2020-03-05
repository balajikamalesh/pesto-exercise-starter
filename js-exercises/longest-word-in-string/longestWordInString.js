function longestWordInString(...args) {
  let sentence = args[0];
  let words = sentence.split(' ');
  let longestWordLength = words[0].length;
  for (let i = 1; i < words.length; i++) {
    let currentWordLength = words[i].length;
    longestWordLength = Math.max(longestWordLength, currentWordLength);
  }
  return longestWordLength;
}

export { longestWordInString };
