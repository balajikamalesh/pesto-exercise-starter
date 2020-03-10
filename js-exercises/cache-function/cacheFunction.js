function cacheFunction(callback) {
  let resultCache = {};
  return function(...args){
  let argumentsKey = args.join(',');
    if(argumentsKey in resultCache){
      return resultCache[argumentsKey];
    } else {
      resultCache[argumentsKey] = callback(args);
      return resultCache[argumentsKey];
    }
  }
}

export {
  cacheFunction,
};
