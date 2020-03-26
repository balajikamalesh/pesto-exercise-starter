function rangeIter(lb, ub) {
  if(lb === undefined || ub === undefined || typeof lb !== 'number' || typeof ub !== 'number')
    throw new TypeError();

  const myIterable = {
      *[Symbol.iterator]() {
          for(let i = lb; i <= ub;i++){
            yield i;
          }
      }
  }

  return myIterable;
}

export { rangeIter };
