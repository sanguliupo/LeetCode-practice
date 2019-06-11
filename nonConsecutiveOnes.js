//if N=0, print []
//if N=1, print [0, 1]
//if N=2, print out [00,11, 01, 10]


function NonConsecutiveOnes(n) {
  let result = [];
  helper("", n, result);
  return result;
}

function helper(substr,n, result) {
    if(substr.length === n) {
      result.push(substr);
      return;
    }

    helper(substr + 0 , n, result);
    if(substr[substr.length - 1] !== "1") {
      helper(substr + 1, n, result)
    }
  }


console.log(NonConsecutiveOnes(1));
