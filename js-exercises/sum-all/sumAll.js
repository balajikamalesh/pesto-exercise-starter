function sumAll(arr) {
  arr.sort(function(a, b) {return a - b});
  let lowerBound = arr[0] - 1;
  let upperBound = arr[1];

  return ((upperBound * (upperBound + 1)) / 2) - ((lowerBound * (lowerBound + 1)) / 2);

}

export {
  sumAll,
};
