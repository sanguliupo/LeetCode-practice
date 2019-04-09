var isPalindrome = function(s) {
    s = s.toLowerCase().match(/[a-z0-9]/g);
    if (s === null){
        return true;
    }else{
        let len = s.length;
        for (let i=0; i<len; i++){
           if(s[i] !== s[len-1-i]){
            return false;
           }
        }
        return true;
    }
        
};

console.log(isPalindrome("0P"));