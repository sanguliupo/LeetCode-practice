var subsets = function(nums) {
  let result = [[]];
  for (let i = 0; i < nums.length; i++) {
    let currentResultSize = result.length;
    // console.log('currentResultSize', currentResultSize);
    for (let j = 0; j < currentResultSize; j++) {
      let helper = result[j].slice();
      helper.push(nums[i]);
      console.log('helper', helper);
      result.push(helper);
      console.log('currResult', result);
    }
  }
  return result;
};

console.log(subsets([1, 2, 3]));

// function subsets(inputStr) {
//   let result = [''];
//   for (let strIndex = 0; strIndex < inputStr.length; strIndex++) {
//     //i=0,1,2
//     const currentResultSize = result.length;

//     for (let resultIndex = 0; resultIndex < currentResultSize; resultIndex++) {
//       const existingStr = result[resultIndex];

//       const strToAdd = inputStr[strIndex];

//       const newStr = existingStr + strToAdd;
//       console.log(
//         'strIndex=',
//         strIndex,
//         'resultIndex=',
//         resultIndex,
//         'newStr',
//         newStr
//       );
//       result.push(newStr);
//       console.log('result is now', result);
//     }
//   }
//   return result;
// }

// console.log(subsets('abc'));
