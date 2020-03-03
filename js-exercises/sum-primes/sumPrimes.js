function sumPrimes(num) {
  var sum = 0;

  for(var i=2;i<=num;i++){
    if(isPrime(i) || i == 2)
      sum += i;
  }
  return sum;
}

function isPrime(n){
  for (var i = 2; i <= Math.sqrt(n); i++) { 
    if (n % i == 0) { 
        return false;
    } 
  }

  return true;

}

export {
  sumPrimes,
};
