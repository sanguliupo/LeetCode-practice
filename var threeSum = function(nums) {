var threeSum = function(nums) {
    
    nums=nums.sort(function(a,b){return a-b});
    let result=[];
    for(var i=0; i<nums.length; i++){
        if(i>0 && nums[i]==nums[i-1]){
            continue;
        }
        for (var j=i+1; j<nums.length; j++){
            if(j>i+1 && nums[j]==nums[j-1]){
                continue;
            }
            for(var k=j+1; k<nums.length; k++){
                if(k>j+1 && nums[k]==nums[k-1]){
                   continue;
                }
                if (nums[i]+nums[j]+nums[k]==0){
                    result.push([nums[i], nums[j], nums[k]]);
                    
                }
            }
        }
    }  
    console.log(nums);
    return result;
};

console.log(threeSum([-20,1,2,0,-6,-1, 20,-2,0,1]));