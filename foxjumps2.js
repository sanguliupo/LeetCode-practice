//    0 1 2 3 4 5 6 7 8 9 10
// 2  1 0 1 0 1 0 1 0 1 0 1
// 3  1 0 1 1 1 2 2 3 4 7 7
// 5  1 0 1 1 1 3 2 5 6 8 14

function waysToReach(n, arr) {
	//initialize array of ways to reach each step
	let waysToReachXStep = [];
	for (let i = 0; i <= 10; i++) {
		waysToReachXStep[i] = 0;
	}
	waysToReachXStep[0] = 1; //because to reach step 0, there is one way to do it, which is don't move
	//waysToReachXStep =[1,0,0,0,0,0,0,0,0,0,0,]
	for (let methodIndex = 0; methodIndex < arr.length; methodIndex++) {
		for (let step = arr[methodIndex]; step <= n; step++) {
			let totalWays = 0;
			for (let k = 0; k < methodIndex + 1; k++) {
				totalWays += waysToReachXStep[step - arr[k]];
			}
			waysToReachXStep[step] = totalWays;
		}
	}
	console.log(waysToReachXStep);
	return waysToReachXStep[n];
}

console.log(waysToReach(11, [2, 3, 5]));
