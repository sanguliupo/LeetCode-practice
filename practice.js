let arr = [
	1,
	2,
	3,
	4,
	11,
	12,
	1,
	2,
	3,
	4,
	11,
	12,
	1,
	2,
	3,
	4,
	11,
	12,
	1,
	2,
	3,
	4,
	11,
	12
];

let result = [];
arr.map(x => {
	if (arr.indexOf(x) % 5 === 0) {
		result.push(x);
	}
});

console.log(result);
