var romanToInt = function(s) {
    let map={
    	'M': 1000,
    	'D': 500,
    	'C': 100,
    	'L': 50,
    	'X': 10,
    	'V': 5,
    	'I': 1
    }

    let count = 0;
    for (let i=0; i<s.length-1; i++){
    	if (map[s[i]] >= map[s[i+1]]){
    		count += map[s[i]];
    	} else{
    		count -= map[s[i]];
    	}
    }
    return count+map[s[s.length-1]];

}

console.log(romanToInt('LVIII'));