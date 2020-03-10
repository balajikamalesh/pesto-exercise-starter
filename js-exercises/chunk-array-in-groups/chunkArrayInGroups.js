function chunkArrayInGroups(array, chunkSize) {
  let result = [];
  let arrayCopy = [...array];
  while (arrayCopy.length > 0) {
      result.push(arrayCopy.splice(0, chunkSize));
  }
  return result;
}

export {
  chunkArrayInGroups,
};
