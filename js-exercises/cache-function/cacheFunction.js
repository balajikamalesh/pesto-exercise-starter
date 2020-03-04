function cacheFunction(callback) {
  let functionArgumentsMap = {};
  return function(...args){
    if(!functionArgumentsMap[args[0]]){
      functionArgumentsMap[args[0]] = true;
      return callback(...args);
    }
  }
}

export {
  cacheFunction,
};
