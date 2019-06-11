function binarySearch(arr, num) {
	let start = 0;
	let end = arr.length - 1;
	while (end >= start) {
		let midIndex = Math.floor((start + end) / 2);
		let middle = arr[midIndex];

		if (middle === num) {
			return midIndex;
		} else if (num > middle) {
			start = midIndex + 1;
			console.log('start index', start);
			console.log('end index', end);
		} else {
			end = midIndex - 1;
			console.log('start index', start);
			console.log('end index', end);
		}
	}

	return -1;
}

console.log(binarySearch([1, 3, 18, 20, 22, 27], 1));
