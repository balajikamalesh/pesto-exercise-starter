/**
 * @param {*[]} permutationOptions
 * @permuteArrayurn {*[]}
 */
function permutateWithoutRepetitions(permutationOptions) {
  let permuteArray = [];

  for (let i = 0; i < permutationOptions.length; i++) {
    let rest = permutateWithoutRepetitions(permutationOptions.slice(0, i).concat(permutationOptions.slice(i + 1)));

    if(!rest.length) {
      permuteArray.push([permutationOptions[i]]);
    } else {
      for(let j = 0; j < rest.length; j++) {
        permuteArray.push([permutationOptions[i]].concat(rest[j]));
      }
    }
  }
  return permuteArray;
}

export { permutateWithoutRepetitions };
