
function updateObject(...args) {
  let index = args[0];
  if(Math.abs(index) > args.length){
    throw new RangeError('Index out of bound');
  }
  
  if (index < 0 && Math.abs(index) <= args.length) {
    index = args.length + index;
  }
  let replaceChar = args[1];
  let array = Array.from(args[2]);

  array[index] = replaceChar;
  return array;
}

export {
  updateObject,
};
