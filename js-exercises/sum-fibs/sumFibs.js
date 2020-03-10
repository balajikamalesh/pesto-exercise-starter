function sumFibs(num) {
  let sum = 0;
  let i=1;

  while(nthFib(i) <= num) {
    if(nthFib(i)%2 == 1)
      sum += nthFib(i);
    
    i++;
  }

  return sum;

}

function nthFib(n) {
  var phi = (1 + Math.sqrt(5)) / 2; 
      var x = Math.round(Math.pow(phi, n) / Math.sqrt(5));  
      return x;
}

export {
  sumFibs,
};
