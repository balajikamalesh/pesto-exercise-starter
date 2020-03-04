function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function map(array, callback) {
  let mappedArray = [];
  for (let i = 0; i < array.length; i++) {
    let newItem = callback(array[i]);
    mappedArray.push(newItem);
  }
  return mappedArray;
}

function filter(array, callback) {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    let isValid = callback(array[i]);
    if(isValid) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

function reduce(array, callback, initialValue) {
  for (let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i]);
  }
  return initialValue;
}

export {
  forEach,
  map,
  filter,
  reduce,
}