function sqrt(number) {
  return number ** 0.5;
}

function power(base, exponent) {
  return base ** exponent;
}

function round(n) {
  const number = n + 0.5;
  return Number(String(number).split('.')[0]);
}

// Don't change the export values.
// You can use the function in the Math module

export {
  sqrt,
  power,
  round,
};
