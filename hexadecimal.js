//convert 30-->1e
//convert 32-->20
//49=>31

function hexadecimal(num){

	let dict="0123456789abcdef";
	if(num<=15){
		return dict[num]
	}else{
		return hexadecimal(Math.floor(num/16))+dict[num%16]	
	}
	

}

console.log(hexadecimal(25600))