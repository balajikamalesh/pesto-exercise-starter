const limitFunctionCallCount = (callback,n) => {
  let callCount = 0;
  return function(...args){
    if(callCount < n){
        callCount++;
      return callback(...args);
    } else {
      return null;
    }
  }
};

export {
  limitFunctionCallCount,
};
