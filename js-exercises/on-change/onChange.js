const onChange = (obj, onChangeFn) => {
  let handler = {
    get: (target, prop) => {
        const value = target[prop];
        if (typeof value === 'object' || typeof value === 'function') {
          return new Proxy(value, handler);
        } else{
          return target[prop];
        }
    },
    set: (target, prop, value) => {
      if (value && typeof value === 'object') {
        value = new Proxy(value, handler);
        return value;
      } else {
        onChangeFn();
        target[prop] = value;
      }
      return true;
    },
    defineProperty: (target, key, descriptor) => {
      onChangeFn();
      return true;
    },
    deleteProperty: (target, key) => {
      onChangeFn();
      delete target[key];
      return true;
    }

  }

  return new Proxy(obj, handler);
};

export { onChange };
