//input abc
//output a,b,c,ab,ac,bc,abc,""
//use recursion and helper


function powerSets(str){
	let result=[""]
	helper(0, result, str)
	return result;
}


function helper(depth, result, str){
	if(depth === str.length){
		return;
	}
	const currentResultLength = result.length;
	for(let i=0; i<currentResultLength; i++){
		result.push(result[i]+ str[depth]);
		console.log('result after push', result);
	}
	helper(depth+1, result, str);
}


console.log("powerSets", powerSets("abc"))

