//[2,3,5]
//how many ways to 10 steps?
//answer is 14

//smaller problem: 1 or 2 steps or 3 steps
//going to step 0: 1 way
//going to step 1: 1 way
//if going to step 2: (1,1) or 2 =>2 ways
//going to step 3: (1,1,1) or (1,2) or (2,1) or 3 =>4 ways
//going to step 4: 1,1,1,1  2,2  1,1,2  2,1,1  1,2,1 or 1,3 or 3,1   7ways
//step(n)= step (n-1) +step(n-2) + step(n-3)

function jumps(n, arr) {
	let ways = [1];
	for (let i = 1; i <= n; i++) {
		let first = ways[i - 2] !== undefined ? ways[i - 2] : 0;
		let second = ways[i - 3] !== undefined ? ways[i - 3] : 0;
		let third = ways[i - 5] !== undefined ? ways[i - 5] : 0;
		ways[i] = first + second + third;
	}
	// console.log(ways);
	return ways[n];
}

function jumps2(n, arr) {
	if (n === 0) {
		return 1;
	} else if (n < 0) {
		return 0;
	} else {
		return jumps(n - 2, arr) + jumps(n - 3, arr) + jumps(n - 5, arr);
	}
}

console.log(jumps2(10, [2, 3, 5]));
