function dropElements(elements, predicate) {
  return elements.filter(function(element){
    return predicate(element);
  });
}

export { dropElements };
