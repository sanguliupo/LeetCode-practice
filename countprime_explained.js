// Count the number of prime numbers less than a non-negative number, n.

// Example:
// Input: 20
// Output: 8 
// Explanation: There are  prime numbers less than 20, they are 2, 3, 5, 7, 11, 13, 17, 19


naive:
var countPrimes = function(n) {
    let primeNumbers = [];
    let i = 2;
    while (i<n){
    	if (isPrime(i)){
    		primeNumbers.push(i);
    	}
    	i++;
    }
    return primeNumbers.length;

};


function isPrime(i){
	for (let j=2; j<i; j++){
		if (i%j===0){
			return false;
		}
	}
	return true;
}

console.log(countPrimes(20));



// improved:
var countPrimes2 = function(n) {
    let primeNumbers = [2];
    let i = 3;
    while (i<n){
    	if (isPrime(i)){
    		primeNumbers.push(i);
    	}
    	i+=2;
    }
    return primeNumbers.length;

};


function isPrime(i){
	for (let j=3; j<i; j+=2){
		if (i%j===0){
			return false;
		}
	}
	return true;
};

console.log(countPrimes2(20));






// better
var countPrimes3 = function(n) {
    let flagArray=[];  //[0,0,1,1,0,0]
    let count = 0;
    for (let i=2; i<n; i++){
    	if(flagArray[i] === undefined){
    		flagArray[i]=1; //i is a prime number
    		count++;

    		// removing its multiples
    		let j = 2;
    		while (i * j< n){
    			flagArray[i*j] = 0 //i*j is not a prime number
    			j++;
    		}
    	}
    }

    return count;
};

console.log(countPrimes3(20));


































