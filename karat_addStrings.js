// 第一面：
// 1. 給輸入為string，例如 “2+3-999”，之包含+-操作，返回計算結果
// 2. 加上parenthesis， 例如 “2+((8+2)+(3-999))”，返回計算結果 (LEET 415)

var addStrings = function(num1, num2) {
	let result = '';
	let i = num1.length - 1;
	let j = num2.length - 1;
	let carryover = 0;

	while (num1[i] || num2[j] || carryover === 1) {
		let digitSum = Number(num1[i] || 0) + Number(num2[j] || 0) + carryover;
		if (digitSum >= 10) {
			result += digitSum - 10;
			carryover = 1;
		} else {
			result += digitSum;
			carryover = 0;
		}
		i--;
		j--;
	}

	return result
		.split('')
		.reverse()
		.join('');
};

console.log(addStrings('99', '9'));
