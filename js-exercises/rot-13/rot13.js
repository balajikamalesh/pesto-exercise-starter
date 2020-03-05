function rot13(...args) {
  let sentence = args[0];
  let decodedSentence = '';
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ' || sentence[i] === '.' || sentence[i] === '?' || sentence[i] === '!')
      decodedSentence += sentence[i];
    else
      decodedSentence += rot13Util(sentence[i]);
  }
  return decodedSentence;
}

function rot13Util(letter) {
  const charCode = letter.charCodeAt(0);
  const encodedCharCode = (charCode - 13 < 65) ? (91 - (65 - (charCode - 13))) : (charCode - 13);
  return String.fromCharCode(encodedCharCode);
}

export {
  rot13,
};
