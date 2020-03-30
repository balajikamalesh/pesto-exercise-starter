function privateProps(obj, isPrivate) {
  
  let handler = {
    get: function(target, prop){
      if(isPrivate(prop)){
        throw new TypeError('Cannot get a private property');
      } else {
        let value = target[prop];
        return (typeof value === 'function') ? value.bind(target) : value;
      }
    },
    set: function(target, prop, value){
      if(isPrivate(prop)){
        throw new TypeError('Cannot set a private property')
      }
      else{
        Reflect.set(target, prop, value);
      }
    },
    has: function(target, prop){
      return (prop in target) && !isPrivate(prop);
    },
    ownKeys: function(target) {
      return Reflect.ownKeys(target).filter((key) => !isPrivate(key));
    }
  }

  return new Proxy(obj, handler);
}

export { privateProps };