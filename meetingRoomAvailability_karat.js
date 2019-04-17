// 第一题：类似meeting rooms，输入是一个int[][] meetings, int start, int end, 
// 每个数都是时间，13：00 =》 1300， 9：30 =》 2130， 看新的meeting 能不能安排到meetings
// ex: [[1300, 1500], [930, 1200],[830, 845]], 新的meeting[820, 830], return true; [1450, 1500] return false;



var meetingRoomAvailability = function(arr1, arr2){
	let start = arr2[0];
	let end = arr2[1];
	arr1= arr1.concat([arr2]).sort((a, b)=> a[0]-b[0]);
	console.log(arr1);
	let j = arr1.indexOf(arr2);
	for (let i=j; i<arr1.length; i++){
		if((j === arr1.length-1 || arr1[j][1] <= arr1[j+1][0]) && (j===0 || arr1[j][0] >= arr1[j-1][1])){
			return true;
		}else{
			return false;
		}
		
	}

}

console.log(meetingRoomAvailability([[1300, 1500], [930, 1200],[830, 845]], [0, 010]))

