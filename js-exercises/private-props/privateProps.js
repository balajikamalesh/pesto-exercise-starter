function privateProps(obj, isPrivate) {
  let handler = {
    set: function(target,prop,value){
      if(isPrivate(prop)){
        throw new TypeError('Cannot set a private property')
      }
      else{
        target[prop] = value;
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
