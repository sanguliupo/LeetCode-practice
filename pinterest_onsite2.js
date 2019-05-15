// Mergesort
var mergeSort = function(arr1, arr2) {
	return arr1.concat(arr2).sort((a, b) => a - b);
};
// console.log(mergeSort([1, 2, 5, 6], [3, 4, 5, 7]));

var mergeSort2 = function(arr1, arr2) {
	let result = [];

	while (arr1.length > 0 && arr2.length > 0) {
		if (arr1[arr1.length - 1] >= arr2[arr2.length - 1]) {
			result.unshift(arr1[arr1.length - 1]);
			arr1.pop();
		} else {
			result.unshift(arr2[arr2.length - 1]);
			arr2.pop();
		}
	}
	console.log(arr1);
	console.log(arr2);
	if (arr1.length > 0) {
		result = arr1.concat(result);
	}

	if (arr2.length > 0) {
		result = arr2.concat(result);
	}

	return result;
};
// console.log(mergeSort2([5, 6], [-1, 2, 5, 7, 9, 20, 100]));

// Quicksort
var sort = function(arr) {
	let result = [];
	while (arr.length > 0) {
		let min = Infinity;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < min) {
				min = arr[i];
			}
		}
		result.push(min);
		let i = arr.indexOf(min);
		arr.splice(i, 1);
	}
	return result;
};
// console.log(sort([1, 2, 5, 6, -3, 0, 12]));
//O(n^2)

// Recursion (Don’t stress it thooooo)
var fibonacci = function(n) {
	if (n === 2) {
		return 1;
	} else if (n === 1) {
		return 1;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
};
// console.log(fibonacci(11)); //1,1,2,3,5,8,13,21, 34, 55, 89
// O(n^2)

var fibonacci2 = function(n) {
	let arr = [0, 1, 1];
	for (let i = 3; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}
	return arr[10];
};
// console.log(fibonacci2(11)); //1,1,2,3,5,8,13,21, 34, 55, 89
// O(n)

// Write a function that takes in a file containing a number per line and returns the sum. O(n)
var numberPerLine = function(file) {
	let oneLine = file.replace(/\n/g, ' ');

	console.log(oneLine);
	let arr = [];
	// for (let i = 0; i < oneLine.length; i++) {
	// 	if (oneLine[i] === ',') {
	// 		let j = 1;
	// 		while (oneLine[i + j] !== ',') {
	// 			arr.push(Number(oneLine[i + j]));
	// 			j++;
	// 		}
	// 	}
	// }

	console.log(arr);
};
console.log(numberPerLine(3 + '\n' + 5 + '\n' + 10));

// Given a linked list, a starting index, and an ending index. How would you shift the index so that
// the data at the ending index ends up at the starting index? [Find Two Ways]

// How do you determine if the parenthesis in a String are both balanced and valid?
// IE; True: (), (()), ()(), (()()) ________ False: )(, ))(, ()), ()))((
var validParentheses = function(str) {
	let helper = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '(') {
			helper.push(')');
		} else {
			if (helper.length === 0) {
				return false;
			} else {
				helper.pop();
			}
		}
	}
	return helper.length === 0;
};
// O(n)
// console.log(validParentheses('(())'));
