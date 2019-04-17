var longestCommonPrefix = function(strs) {
    let longestPre =strs[0]; //"flower"
    // console.log(longestPre[0]);
    for (let i=1; i<strs.length; i++){
        let j=longestPre.length-1; //j=5
        // console.log(j);
        while (j>=0){
            if (strs[i][j] !== longestPre[j]){
                // console.log(strs[i][j], longestPre[j]);
                longestPre = longestPre.substring(0,j);
                // console.log(longestPre);
            }
            j--;
        }
    }
    return longestPre || "";
};

console.log(longestCommonPrefix([]));