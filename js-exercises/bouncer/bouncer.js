function bouncer(array) {
  if (!Array.isArray(array)) {
    throw TypeError('Input should be an array');
  }
  return array.filter(Boolean);
}

export { bouncer };
