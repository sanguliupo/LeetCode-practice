function pivotIndex(numbers) {
	const totalSum = numbers.reduce((accum, current) => accum + current, 0);

	console.log(totalSum);

	let leftSum = 0;
	for (let i = 0; i < numbers.length; i++) {
		const rightSum = totalSum - leftSum - numbers[i];
		if (leftSum === rightSum) {
			return i;
		} else {
			leftSum += numbers[i];
		}
	}
	return -1;
}

console.log(pivotIndex([1, 7, 3, 20, 6, 5]));
