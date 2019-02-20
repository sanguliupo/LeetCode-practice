// ["John", "Mary", "John", "Zoe"]


function highestCount(arr){
	const record={};
	
	arr.forEach(name=>{
		if (record[name] == undefined){
			record[name]=1;
		}else {
			record[name]+=1;
		}	
	})

	let sortedNames=Object.keys(record).sort();
	let winner; 
	let winnerCount=0;
	//winner is the one with the highest number of votes in the object
	sortedNames.forEach(name=>{
		if (record[name]>=winnerCount){
			winnerCount=record[name];
			winner=name;
		}
		
	})

	return winner; 
}


console.log(highestCount(["John", "Mary", "John", "Zoe", "Mary", "John", "Zoe", "Zoe"]));