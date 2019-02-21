var twoSum = function(arr, target) {    
    
   let comp={};
    for (var i=0; i<arr.length; i++){
    	if(comp[target-arr[i]] !==undefined){
    		return [comp[target-arr[i]],i];
    	}else{
    	comp[arr[i]] = i;
    	}
    	// console.log("i", i);
    	// console.log("comp[target-arr[i]]", comp[target-arr[i]]);
    	// console.log("comp", comp);

    }
  
}

console.log(twoSum([2,7,11,15], 9));