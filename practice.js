//insertion sort

function selection(arr){
	let minIndex
	for (let i=0; i<arr.length-1; i++){
		let min=Infinity
		for(let j=i; j<arr.length;j++){
			if (arr[j]<min){
				min=arr[j]
				minIndex=j
			}	
		}
		let temp=arr[i]
		arr[i]=arr[minIndex]
		arr[minIndex]=temp
		console.log("arr",arr)
		
	}
	return arr
}


console.log(selection([3,6,0,0,10,2,-9,7,-100,-1000]))
       

