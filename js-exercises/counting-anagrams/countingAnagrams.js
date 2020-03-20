const countingAnagrams = str => {
  if (typeof str !== 'string') {
    throw new Error();
  }
  const removeSingleLetters = (element) => element.length > 1;
  const sortWord = (element) => element.split('').sort().join('');
  const wordArray = str.split(' ').filter(removeSingleLetters).map(sortWord);
  const set = new Set(wordArray);
  return (set.size < wordArray.length) ? set.size : 0;
};

export { countingAnagrams };
