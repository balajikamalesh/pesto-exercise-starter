
function lastIndexOf(...args) {
  let searchElement = args[0];
  let array = args[1];
  for(var i = array.length - 1;i >= 0;i--){
    if(array[i] === searchElement)
      return i;
  }
  return -1;
}

export {
  lastIndexOf,
};
