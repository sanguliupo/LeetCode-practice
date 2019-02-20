//Two sum linear solution, assuming input arr is sorted;
//arr=[1,2,4,4]  target=8

function twoSum(arr, target){

	
	let start=0;
	let end=arr.length-1;
	
	
	while(end>start){
		let current=arr[start]+arr[end];
		if (current==target){
			return [arr[start], arr[end]];
		}else if (current>target){
			end-=1;
		}else if (current<target){
			start+=1;
		}
		
	}return "values not found";
}

console.log(twoSum([1,2,4,4,5,9,20], 9));

