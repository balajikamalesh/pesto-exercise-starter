
function greatestCommonDivisor(num1, num2){
  if (num1 == 0) 
        return num2;  
    return greatestCommonDivisor(num2 % num1, num1); 
}

function leastCommonMultiple(...args) {
  if(args.length > 2) {
    throw new RangeError('Enter only 2 numbers');
  }
  let number1 = args[0];
  let number2 = args[1];
  if (typeof number1 !== 'number' || typeof number2 !== 'number') {
    throw TypeError('Inputs should be of type numbers');
  }
  return (number1 * number2) / greatestCommonDivisor(number1, number2);
}

export {
  leastCommonMultiple,
};
