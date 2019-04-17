// 第二题：给每个user访问历史记录，找出两个user之间longest continuous common history
// 输入： [
//              ["3234.html", "xys.html", "7hsaa.html"], // user1
//              ["3234.html", ''sdhsfjdsh.html", "xys.html", "7hsaa.html"] // user2
//            ], user1 and user2 （指定两个user求intersect）

// 输出：["xys.html", "7hsaa.html"]


function longestCommonHistory(arr1, arr2){
	let allCommonHistory = [];
	let helper = [];

	for (let i = 0; i<arr1.length; i++){
		let j = arr2.indexOf(arr1[i]);
		let k = i;

		while(j>=0 && j < arr2.length && arr1[k] === arr2[j]) {//若不設上限會因為 undefined === undefined無限迴圈
			helper.push(arr2[j]);
			j++;
			k++;
		} 
		allCommonHistory.push(helper);
		helper = [];
	}
	
	let longestArr = [];
	for (let i = 0; i<allCommonHistory.length; i++){
		if (allCommonHistory[i].length> longestArr.length){
			longestArr = allCommonHistory[i];	
		}
	}
	
	return longestArr;
}


console.log(longestCommonHistory(["3234.html", "xys.html", "7hsaa.html"], ["3234.html", "sdhsfjdsh.html", "xys.html", "7hsaa.html"]))


