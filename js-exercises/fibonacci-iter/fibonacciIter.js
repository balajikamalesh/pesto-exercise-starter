var fibonacciIter = {
  [Symbol.iterator]() {
    let n1 = 1, n2 = 1, x;

    return {
        next() {
          [x, n1, n2] = [n1, n2, n1 + n2];
            return { value: x, done: false };
        }
    };
  }
  
};

export { fibonacciIter };
