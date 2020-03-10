
const curry = (callback, ...args) =>
((callback.length <= args.length) ? callback(...args) : (...more) => curry(callback, ...args, ...more));

export {
  curry,
};
