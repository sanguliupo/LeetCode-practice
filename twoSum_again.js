var twoSum = function(nums, target) {
    let map={}; 
    for (let i=0; i<nums.length; i++){
        map[target-nums[i]]=i
    }

    for (let i=0; i<nums.length; i++){
        if (map[nums[i]] && (map[nums[i]]!==i)){
        	return [i, map[nums[i]]]
        }
    }
    
    
    
};

console.log(twoSum([2,7,11,15],9))