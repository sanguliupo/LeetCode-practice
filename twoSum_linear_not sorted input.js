//Two sum linear solution, assuming input arr is sorted;
//arr=[1,2,6,5,13,4]  target=9

var twoSum = function(arr, target) {    
    let comp=[];
    for (var i=0; i<arr.length; i++){
    	if(comp.includes(arr[i])){
    		return [arr.indexOf(target-arr[i]),i];
    	}else{
    	comp.push(target-arr[i]);
    	}
    }
    return false;

};


//comp=[8,7,3,4,-4]

// [{1: 0}]
// 
console.log(twoSum([1,2,6,13,4,18,-20,-4,20,21], 9));

