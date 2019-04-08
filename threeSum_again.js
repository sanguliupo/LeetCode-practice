var threeSum = function(nums) {
    nums = nums.sort((a,b)=>a-b);
    let result = [];
    let len = nums.length;
    
  
    for (let i=0; i<len-2; i++){
        let j = i+1;
        let k = len-1;
        while(j<k){
            if (nums[i] + nums[j] + nums[k] === 0){
                // console.log("0",[nums[i], nums[j], nums[k]]);
                result.push([nums[i], nums[j], nums[k]]);
                while (nums[k]===nums[k-1]){
                    k--;
                }
                while (nums[j]===nums[j+1]){
                    j++;
                }
                j++;
                k--;
                
            }else if (nums[i] + nums[j] + nums[k] > 0){
                // console.log(">0",[nums[i], nums[j], nums[k]]);
                while (nums[k]===nums[k-1]){
                    k--;
                }
                k--;
                
            }else{
                // console.log("<0",[nums[i], nums[j], nums[k]]);
                while (nums[j]===nums[j+1]){
                    j++;
                }
                j++;
               
            }
        }
        while (nums[i]===nums[i+1]){
            i++;
        }
    }
    
    return result;
};

console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));