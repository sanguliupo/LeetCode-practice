//return the largest number of consecutive single letters in each string. If two letters tie, return the letter 
//that comes first in the alphabet
function maxRepeating(lines) {
  let n = lines.length; 
    
  for (let j=0; j<n; j++){
    let map={};
    let count = 0; 
    let cur_count = 1; 
    // Traverse string except last character 
    for (let i=0; i<lines[j].length; i++) { 
        // If current character matches with next 
        if (i < lines[j].length-1 && lines[j][i] == lines[j][i+1]){ 
            cur_count++; 
  
        // If doesn't match, update result 
        // (if required) and reset count 
        }else{ 
            if (cur_count >= count){ 
                count = cur_count; 
                map[lines[j][i]]=count;            
            } 
            cur_count = 1; 
        } 
    } 
    let arr = Object.values(map); //array of values in map
    let max = Math.max(...arr); //return largest number in arr
    let keyArr=[];
    for (key in map){
      if (map[key]===max){
        keyArr.push(key);//array of keys which value equals max
        keyArr.sort();//sort alphabetically
      }
    }
    console.log(keyArr[0], max);//return index 0 in keyArr cause we want the first alphabetically


  }

} 


maxRepeating(["geeeeek", "hoopoppppe", "joaoyyyyyyaaaaaabbbabbb"]); //a and y both repeat 6 times, but answer is a cause it comes first 