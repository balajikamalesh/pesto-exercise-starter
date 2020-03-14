var flattenedObject = {};

function pathSatisfies(...args) {
  let predicate = args[0];
  let path = args[1].join('_');
  let object = args[2];
  if (path.length === 0) return false;
  
  flattenedObject = {};

  flattenObject(object, '');

  let allPossiblePaths = Object.keys(flattenedObject);

  return allPossiblePaths.some((element) => element.includes(path) && predicate(flattenedObject[element]));
}

var flattenObject = (obj,parent) => {
  
  for(let key in obj){
      if(typeof(obj[key]) === "object" && !Array.isArray(obj[key])){
        let flattenedKey = parent + '_' +key;
        flattenObject(obj[key],flattenedKey);
    	} else if(Array.isArray(obj[key])) {
      		let array = obj[key];
          for(let i=0;i<array.length;i++){
          	let flattenedKey = parent + '_' + key + '_' + i ;
            flattenObject(array[i], flattenedKey);
          }
      } else{
      	var flattenedKey = parent + '_' +key;
        flattenedObject[flattenedKey] = obj[key];
    }
   }
}

export {
  pathSatisfies,
};
