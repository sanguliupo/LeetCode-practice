// bitsortArray(bits) -- Take as input an array of bits (0s and 1s), and return the sorted array
// [0, 1, 0, 1, 0, 1, 0] -> [0, 0, 0, 0, 1, 1, 1]

// Time: O(N) Space: O(1) / O(N)

//        j  i
// [0, 0, 0, 1, 1, 1, 1]
// let ones = 3
//array.length=7
//let zeros =6-3=4
//let

function bitSort(arr) {
  let ones = 0;
  let zeros = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      ones++;
    } else {
      zeros++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (i < zeros) {
      arr[i] = 0;
    } else {
      arr[i] = 1;
    }
  }
  return arr;
}

console.log(bitSort([0, 1, 0, 1, 0, 1, 0]));
