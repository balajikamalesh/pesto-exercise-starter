const deepCopyObject = objToCopy => {
  var copiedObject;

  if(objToCopy === null || typeof objToCopy !== 'object'){
    return objToCopy;
  }

  if(objToCopy instanceof Object){
    copiedObject = {};

    for(var key in objToCopy){
        copiedObject[key] = deepCopyObject(objToCopy[key]);
    }

    return copiedObject;
  }

};

export { deepCopyObject };
