function slotmachine() {
	let data = [[2, 2, 2], [3, 3, 3], [4, 4, 4], [5, 5, 5]];
	let result = [];

	let choices = data.length;
	// console.log(choices);

	result.push(data[getRandomInt(choices)][0]);
	result.push(data[getRandomInt(choices)][1]);
	result.push(data[getRandomInt(choices)][2]);

	console.log(result);
	if (result[0] === result[1] && result[2] === result[1]) {
		return 'win';
	} else {
		return 'lose';
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

console.log(slotmachine());
