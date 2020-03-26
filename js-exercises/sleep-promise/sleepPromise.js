const sleep = ms => {
  const promise = new Promise(res => setTimeout(res, ms));
  const func = (value) => {
    return promise.then(() => value);
  };
  func.then = promise.then.bind(promise);
  func.catch = promise.catch.bind(promise);
  return func;
};

export { sleep };
