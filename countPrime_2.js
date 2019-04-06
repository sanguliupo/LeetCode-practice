var countPrimes = function(n) {
    let flagArray = [],
        result = 0;
    for(let i = 2; i < n; i++){ //O(n)
        if(flagArray[i] === undefined){
            flagArray[i] = 1; //i is a prime number
            result++;
            // rm its multiples
            let j = 2;
            while(i * j < n){
                flagArray[i * j] = 0; //i*j is not a Prime number
                j++;
            }
        }
    }
    return result;
}

console.log(countPrimes(20));