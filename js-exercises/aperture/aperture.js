function aperture(n, array) {
  if (n > array.length)
    return [];

  let returnList = [];

  if (n === 1) {
    for (let i = 0;i < array.length; i++) {
      returnList.push(array.slice(i, i + 1));
    }
  } else {
    let count = array.length + 1 - n;
    for (let i = 0;i < count; i++) {
      returnList.push(array.slice(i, i + n));
    }
  }

  return returnList;
}

export { aperture };
