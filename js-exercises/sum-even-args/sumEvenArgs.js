const sumEvenArgs = (...args) => {
  const add = (a, b) => a + b;
  return args.filter((element) => element % 2 === 0).reduce(add, 0);
};

export { sumEvenArgs };
