function flipArgs(callback) {
  return function(...args){
    return callback(args.reverse());
  } 
}

export {
  flipArgs,
};