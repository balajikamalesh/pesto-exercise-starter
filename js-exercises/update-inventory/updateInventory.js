function updateInventory(...args) {
  let currentInv = args[0];
  let newInv = args[1];
  let updatedInv = {};

  for(let i = 0;i < currentInv.length;i++){
    updatedInv[currentInv[i][1]] = currentInv[i][0];
  }

  for(let i = 0;i < newInv.length;i++){
    if(updatedInv[newInv[i][1]])
      updatedInv[newInv[i][1]] += newInv[i][0];
     else
      updatedInv[newInv[i][1]] = newInv[i][0];
  } 

  let updatedInvArray = Object.keys(updatedInv).map(function (key) {
    return Array.from([updatedInv[key],key]);
  });

  let sortedUpdatedInvArray =  updatedInvArray.sort(function(array1,array2){
  	return (array1[1].charCodeAt(0) - array2[1].charCodeAt(0));
  });

  return sortedUpdatedInvArray;
}

export {
  updateInventory,
};
