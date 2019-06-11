function countOnes(arr) {
	let start = 0;
	let end = arr.length - 1;
	if (arr[end] === 0 || arr.length === 0) {
		return 0;
	}
	if (arr[start] === 1) {
		return arr.length;
	}
	while (end >= start) {
		let midIndex = Math.floor((start + end) / 2);
		let middle = arr[midIndex];

		if (middle === 0 && arr[midIndex + 1] === 1) {
			let firstOneIndex = midIndex + 1;
			return arr.length - firstOneIndex;
		} else if (middle === 0 && arr[midIndex + 1] === 0) {
			start = midIndex + 1;
		} else {
			end = midIndex;
		}
	}
}

console.log(countOnes([0, 0, 0, 1, 1, 1, 1, 1, 1]));
