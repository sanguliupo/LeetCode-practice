// [1,3,4,2] [5,6,2]
//return true/false

// function commonItems(array1, array2){
	
// 	for (var i=0; i<array1.length; i++){
// 		if (array2.includes(array1[i])){			
// 			return true;
// 		} 
// 	}

// 	return false;
// }

// console.log(commonItems( [1,2,3,4], [2,5,6]));


//hashTable={1:true, 2:true, 3:true, 4:true,}
function commonItems2(array1, array2){
	
	var hashTable={};

	for (var i=0; i< array1.length; i++){
		hashTable[array1[i]]=true;
	}

	for (var j=0; j<array2.length; j++){
		if (hashTable[array2[j]]){
			return true;
		}
	}
	return false;
}

console.log(commonItems2( [1,2,3,4], [-1,20, 5,6]));