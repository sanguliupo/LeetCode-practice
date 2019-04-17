// Intuit 网上coding competition的一道题给一个矩阵，矩阵里的每个元素是1，但是其中分布着一些长方形区域， 这些长方形区域中的元素为0. 
// 要求输出每个长方形的位置（用长方形的左上角元素坐标和右下角元素坐标表示）。
// example：
// input:
// [
// [1,1,1,1,1,1],
// [0,0,1,0,1,1],
// [0,0,1,0,1,0],
// [1,1,1,0,1,0],
// [1,0,0,1,1,1]
// ]
// output:.
// [
// [1,0,2,1],
// [1,3,3,3],
// [2,5,3,5],
// [4,1,4,2]
// ]


 var rectangleCoordinates = function(arr){
 	let result =[];
 	let helper =[];
 	let helper2 =[];
 
 	for (let i=0; i<arr.length; i++){
 		for (let j=0; j<arr[0].length; j++){
 			if (arr[i][j] === 0){
 				if ((j === 0 || arr[i][j-1] ===1) && (i ===0 || arr[i-1][j] === 1)){
 					helper.push([i,j]);
 				} else if ((j === arr[0].length-1 || arr[i][j+1] ===1) && (i === arr.length-1 || arr[i+1][j] === 1)){
 					helper2.push([i,j]);
 				}
 			}
 		}
 	}
 	
 	for (let i=0; i<helper.length; i++){
 		result.push( [helper[i][0], helper[i][1], helper2[i][0], helper2[i][1] ]);
 	}
 	return result;
 }

 console.log(rectangleCoordinates([[1,1,1,1,1,1],[0,0,1,0,1,1], [0,0,1,0,1,0], [1,1,1,0,1,0], [1,0,0,1,1,1]]))