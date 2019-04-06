

var countPrimes = function(n) {
    let primeNumbers =[2];
    let i=3;
    while (i<n){
        if (isPrime(i)){
            primeNumbers.push(i);
        }
        i++;
    }
    return primeNumbers.length;    
};


function isPrime(i){
  for (var j=2; j<i; j++){
    if (i%j===0){
      return false;
    }
  }
  return true;    
}

countPrimes(20);