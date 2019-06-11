// Problem:  Coin Sum
//  *
//  *            Given an array of coins and a target total, return how many
//  *            unique ways there are to use the coins to make up that total.
//  *
//  *  Input:    coins {Integer Array}, total {Integer}
//  *  Output:   {Integer}
//  *
//  *
//  *  Example:  Input:  [1,2,3], 4
//  *
//  *                    1+1+1+1
//  *                    1+3
//  *                    1+1+2
//  *                    2+2
//  *
//  *            Output: 4
//  *
//  *
//  *            Input:  [2,5,3,6], 10
//  *
//  *                    2+3+5
//  *                    5+5
//  *                    2+3+2+3
//  *                    2+2+6
//  *                    2+2+2+2+2
//  *
//  *
//  *            Output: 5
//  *
//  *    Note:   You have an unlimited number of each coin type. All coins in the
//  *            coin array will be unique
//  *            Order does not matter. Ex: One penny and one nickel to create six
//  *            cents is equivalent to one nickel and one penny
//  *
//  */

//    0 1 2 3 4 5 6 7 8 9 10
// 2  1 0 1 0 1 0 1 0 1 0 1
// 5  1 0 1 0 1 1 1 1 1 1 2
// 3  1 0 1 1 1 2 2 2 3 3 4
// 6  1 0 1 1 1 2 3 2 4 4 5

// Time Complexity:
// Auxiliary Space Complexity:
// function coinSum(coins, total) {
// 	let ways = [];
// 	for (let i = 0; i <= total; i++) {
// 		ways[i] = 0;
// 	}
// 	ways[0] = 1;
// 	for (let coinIndex = 0; coinIndex < coins.length; coinIndex++) {
// 		for (let value = coins[coinIndex]; value <= total; value++) {
// 			ways[value] += ways[value - coins[coinIndex]];
// 		}
// 	}
// 	console.log(ways);
// 	return ways[total];
// }

// console.log(coinSum([2, 5, 3], 10));

function coin_sum(coins, total) {
	let index = coins.length;
	let trace = '';
	return helper_coin_rec(coins, index, total, trace);
}

function helper_coin_rec(coins, index, total, trace) {
	trace = trace + '->' + total.toString() + '(' + index.toString() + ')';
	console.log(trace);
	if (total == 0) {
		return 1;
	}
	if (total < 0) {
		return 0;
	}
	if (index <= 0 && total >= 1) {
		return 0;
	}
	return (
		helper_coin_rec(coins, index - 1, total, trace) +
		helper_coin_rec(coins, index, total - coins[index - 1], trace)
	);
}

console.log(coin_sum([2, 5, 3], 10));


