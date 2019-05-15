// Write a function that takes in a list of numbers and returns the sum. O(n)
var getSum = function(arr) {
	return arr.reduce((x, y) => x + y);
};
// console.log('getSum', getSum([1, 2, 3, 4, 5]));
//O(n)

// Write a function that takes in a list of numbers and returns the sum of all the odd numbers in the list. O(n)
var getOddSum = function(arr) {
	arr = arr.filter(x => x % 2 === 1);
	console.log(arr);
	return arr.reduce((x, y) => x + y);
};
// console.log('getOddSum', getOddSum([1, 2, 3, 4, 5, 77, 99]));
//O(n)

// Write a function that takes in a list of numbers and returns the sum of only the largest and smallest number in the list. O(n)
var getMaxMinSum = function(arr) {
	arr = arr.sort((a, b) => a - b);
	return arr[0] + arr[arr.length - 1];
};
// console.log('getMaxMinSum', getMaxMinSum([11, 2, 0, -36, 4, 556]));
//O(n)

// Write a function that takes in a String and returns the reversed String. O(n)
var strReverse = function(str) {
	return str
		.split('')
		.reverse()
		.join('');
};
// console.log('strReverse', strReverse('happY'));
//O(n)

// Write a recursive function that takes in a list of numbers and returns the sum.
var getSumRecursive = function(arr) {
	if (arr.length === 1) {
		return arr[0];
	} else {
		return arr.pop() + getSumRecursive(arr);
	}
};
// console.log('getSumRecursive', getSumRecursive([1, 2, 3, 4, 5, -3, -10]));
//O(n)

// Given two strings, how do you find out if they are anagrams?
var isAnagram = function(str1, str2) {
	str1 = str1.toLowerCase().replace(/\s/g, '');
	str2 = str2.toLowerCase().replace(/\s/g, '');
	console.log(str1, str2);
	if (
		str1
			.split('')
			.reverse()
			.join('') === str2
	) {
		return true;
	} else {
		return false;
	}
};
// console.log('isAnagram', isAnagram('hA p py', 'Yp pah'));
//O(n)

// I give you a sorted array of ints and want you to return an array of Strings with the ranges so:
// I give you: 1, 2, 3, 5, 6,  9, 12, 13, 14, 15
// You return: [" 1-3 ", " 5-6 ", " 9 ", " 12-15 "]
var getRanges = function(arr) {
	let temp = [];
	for (let i = 0; i < arr.length; i++) {
		let helper = [arr[i]];
		while (arr[i + 1] === arr[i] + 1) {
			helper.push(arr[i + 1]);
			i++;
		}
		temp.push(helper);
	}
	console.log(temp);
	let result = [];
	for (let i = 0; i < temp.length; i++) {
		if (temp[i].length === 1) {
			result.push(temp[i][0].toString());
		} else {
			result.push(temp[i][0] + '-' + temp[i][temp[i].length - 1]);
		}
	}
	return result;
};
// console.log('getRanges', getRanges([-30, 1, 2, 3, 4, 5, 9, 10, 11, 15, 20]));
//O(n)

// I give you a String, return a String without duplicate characters.
var strUnique = function(str) {
	let helper = {};
	let result = '';
	for (let i = 0; i < str.length; i++) {
		if (!helper[str[i]]) {
			helper[str[i]] = 1;
		}
	}
	console.log(helper);
	for (let i = 0; i < str.length; i++) {
		if (helper[str[i]]) {
			result += str[i];
			delete helper[str[i]];
			console.log(helper);
		}
	}

	return result;
};
// console.log('strUnique', strUnique('happygggAhUyyyy'));
//O(n)

// Step 1: write a function that takes a single argument (a list of names) and returns a string representing a comma­ separated list.
// For example, given these names: ["Alice", "Bob", "Carlos", "Diana"]
// The output would be: "Alice, Bob, Carlos and Diana"
var listOfNames = function(arr) {
	let result = '';
	for (let i = 0; i < arr.length; i++) {
		if (i === arr.length - 1) {
			result += 'and ' + arr[i].toString();
		} else {
			result += arr[i].toString() + ', ';
		}
	}

	return result;
};
// console.log('listOfNames', listOfNames(['Alice', 'Bob', 'Carlos', 'Diana']));
//O(n)

// Step 2: Write a function that takes in the same list of names and a number which represents a limit and returns the list like this:
// I give you:  ["Alice", "Bob", "Carlos", "Diana"] and limit of 2. You return “Alice, Bob and 2 others. Handle all edge cases:
// For just one other, for just one person total and for a case where the limit is equal to or greater than the number of people on the list.
var listOfNames2 = function(arr, limit) {
	let result = '';
	let suffix = '';
	let remaining = arr.length - limit;

	if (remaining === 1) {
		suffix = ' and ' + remaining + ' other';
	} else {
		suffix = ' and ' + remaining + ' others';
	}

	if (arr.length === 1) {
		result = arr[0];
	} else {
		for (let i = 0; i < limit; i++) {
			if (i === limit - 1) {
				result += arr[i] + suffix;
			} else {
				result += arr[i] + ', ';
			}
		}
	}

	return result;
};
// console.log('listOfNames2', listOfNames2(['Alice', 'George'], 5));
//O(n)
