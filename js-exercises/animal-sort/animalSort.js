const animalSort = animals => {
  return animals.sort(function(animal1, animal2){
    return (animal1.numberOfLegs !== animal2.numberOfLegs) ? 
                      (animal1.numberOfLegs - animal2.numberOfLegs) : (animal1.name.localeCompare(animal2.name));
  });
};

export { animalSort };
