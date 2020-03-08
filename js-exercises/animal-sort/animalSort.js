const animalSort = animals => {
  return animals.sort(function(object, nextObject){
    return (object.numberOfLegs !== nextObject.numberOfLegs) ? 
                      (object.numberOfLegs - nextObject.numberOfLegs) : (object.name.charCodeAt(0) - nextObject.name.charCodeAt(0));
  })
};

export { animalSort };
