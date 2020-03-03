function sumAll(arr) {
  arr.sort(function(a, b) {return a - b});
  let lb = arr[0] -1;
  let ub = arr[1];

  return ((ub * (ub + 1)) / 2) - ((lb * (lb + 1)) / 2);

}

export {
  sumAll,
};
