// Count the number of prime numbers less than a non-negative number, n.

// Example:
// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.


var countPrimes = function(n) {
    let primeNumbers =[2];
    let i=3;
    while (i<n){
        if (isPrime(i)){
            primeNumbers.push(i);
        }
        i+=2;
    }
    return primeNumbers.length;    
};


function isPrime(i){
  for (var j=3; j<i; j+=2){
    if (i%j===0){
      return false;
    }
  }
  return true;    
}

countPrimes(100)