function addBigIntegers(intString) {
  let integerArray = intString.split("\n");
  
  return integerArray.reduce(function (accumulator, currentValue) {
          return BigInt(accumulator) + BigInt(currentValue)
        }, 0).toLocaleString('fullwide', {useGrouping: false});
}

export { addBigIntegers };
