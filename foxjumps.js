function climb_stairs_tabulation(n, jumps) {
	let ways = Array(n + 1).fill(0);
	ways[0] = 1; //ways=[1,0,0,0,0,0,0,0,0,0,0]

	for (let method = 0; method < jumps.length; method++) {
		//for each method of taking 2,3, or 5 ways
		for (let step = jumps[method]; step <= n; step++) {
			//from 2-10, 3-10, 5-10
			let ways_sum = 0;
			for (k = 0; k < method + 1; k++) {
				//method=0,1,2, k=0-0, k=0-1, k=0-2
				ways_sum += ways[step - jumps[k]]; //1. ways_sum= ways_sum+ ways[minus 2 ways]
				//2. ways_sum= ways_sum+ ways[minus 2 ways and minus 3 ways]
				//3. ways_sum= ways_sum+ ways[minus 2, 3, and 5 ways]
			}
			ways[step] = ways_sum;
		}
	}
	console.log(ways);
	return ways[n];
}

console.log(climb_stairs_tabulation(15, [2, 3, 5]));
