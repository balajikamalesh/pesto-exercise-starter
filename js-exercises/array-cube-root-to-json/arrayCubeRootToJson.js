const arrayCubeRootToJson = arr => {
  if (!Array.isArray(arr)) {
    throw Error('Input should be an array');
  }

  arr = castArrayToNumberType(arr);

  if (Array.isArray(arr) && (arr.filter(Boolean).length !== arr.length)) {
    throw Error('Input should be an array');
  }

  var result = {};

  for (let i = 0;i < arr.length; i++) {
    result[arr[i]] = Math.cbrt(arr[i]);
  }

  return result;
};

const castArrayToNumberType = (array) => {
  return array.map((element) => Number(element));
};

export { arrayCubeRootToJson };
