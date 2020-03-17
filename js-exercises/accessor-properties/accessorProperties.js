
function accessorProperties(obj) {
  Object.defineProperty(obj, 'number', {
    configurable: true,
    enumerable: true,
    get: function() {
      if(!isNaN(this.value)){
        return this.value.toString(2);
      }
      return this.value;
    },
    set: function(_val) {
      this.value = _val;
    }
  });
  return obj;
}

export {
  accessorProperties,
};
