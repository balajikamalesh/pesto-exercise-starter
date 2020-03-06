function diffArray(firstArray, secondArray) {
  var differenceArray = firstArray.concat(secondArray)
    .filter( (el) => firstArray.indexOf(el) == -1 || secondArray.indexOf(el) == -1)
    .filter( (el, index, array) => array.indexOf(el) == index);

  return differenceArray;
}

export {
  diffArray,
};
