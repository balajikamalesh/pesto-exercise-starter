
function deepEqual(object1, object2, matchDescriptors) {

  let areObjectsEqual = true;
  let areDescriptorsEqual = true;
  
   if(Object.getOwnPropertyNames(object1).length !== Object.getOwnPropertyNames(object2).length)
    return false; 

  let object1Descriptors = Object.getOwnPropertyDescriptors(object1);
  let object2Descriptors = Object.getOwnPropertyDescriptors(object2);
    
    for(let descriptor in object1Descriptors){
    	let descriptors1 = object1Descriptors[descriptor];
      let descriptors2 = object2Descriptors[descriptor];
    	
      let descriptor1Keys = Object.keys(descriptors1);
      let descriptor2Keys = Object.keys(descriptors2);
      
      if(matchDescriptors === undefined) {
        for (let key of descriptor1Keys.filter((key) => key == "value")) {
          if (descriptors1[key] !== descriptors2[key]) {
            areObjectsEqual = false;
          }
        }
      } else {
        for (let key of descriptor1Keys) {
          if (descriptors1[key] !== descriptors2[key]) {
            areDescriptorsEqual = false;
          }
        }
      }
    }

  return areObjectsEqual && areDescriptorsEqual;
}

export {
  deepEqual,
};
