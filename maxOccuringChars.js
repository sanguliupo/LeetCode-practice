function maximumOccurringCharacter(text) {
	// Write your code here

	let letterToCount = {};
	// letterToCount[text[0]] = 1;

	for (let i = 0; i < text.length; i++) {
		if (!letterToCount[text[i]]) {
			letterToCount[text[i]] = 1;
		} else {
			letterToCount[text[i]] += 1;
		}
	}

	let countToLetter = {}; {'1': ['h', 'e'], '2': ['l', 'o']}
	let maxCount = -1;
	for (let i = 0; i < text.length; i++) {
		const count = letterToCount[text[i]];
		if (!countToLetter[count]) {
			countToLetter[count] = [];
		}

		countToLetter[count].push(text[i]);
		if (count > maxCount) {
			maxCount = count;
		}
	}

	return countToLetter[maxCount][0];

	// let howManyTimes = [];
	// for (let key in chars) {
	// 	howManyTimes.push(chars[key]);
	// }
	// howManyTimes = howManyTimes.sort((a, b) => a - b);
	// let maxNumOfTimes = howManyTimes[howManyTimes.length - 1];

	// let candidates = [];
	// for (let key in chars) {
	// 	if (chars[key] === maxNumOfTimes) {
	// 		candidates.push(key);
	// 	}
	// }

	// for (let i = 0; i < text.length; i++) {
	// 	if (candidates.includes(text[i])) {
	// 		return text[i];
	// 	}
	// }
}

console.log(maximumOccurringCharacter('helloo'));
