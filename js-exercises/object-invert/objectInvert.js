
function objectInvert(object) {
  var invertedObject = {};
  for(var key in object){
    invertedObject[object[key]] = key;
  }
  return invertedObject;
}

export {
  objectInvert,
};
