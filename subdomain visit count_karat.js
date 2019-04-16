// 第一题：给广告在每个domain上被click的次数.// LEET 811
//              要求返回domain及其所有sub domain 被click的总次数
// 输入：[
//            ["google.com", "60"],
//            ["yahoo.com", "50"],
//            ["sports.yahoo.com", "80"]
//          ]
// 输出：[
//             ["com", "190"], (60+50+80)
//             ["google.com", "60"],
//             ["yahoo.com", "130"] (50+80)
//             ["sports.yahoo.com", "80"]
//          ]


var subdomainVisits = function(cpdomains) {
	let obj = {};
	let result = [];
	let i = 0;
	while (cpdomains[i]) {
		let temp = cpdomains[i].split(' ');
		console.log(temp);
		let clicks = Number(temp[0]);
		let domains = temp[1].split('.');
		// console.log(domains);

		let currentDomain = domains.pop();
		obj[currentDomain] ? (obj[currentDomain] += clicks) : (obj[currentDomain] = clicks);

		while (domains.length > 0) {
			currentDomain = domains.pop() + '.' + currentDomain;
			obj[currentDomain] ? (obj[currentDomain] += clicks) : (obj[currentDomain] = clicks);
		}
		i++;
	}

	for (let i in obj) {
		result.push(obj[i] + ' ' + i);
	}
	return result;
};
console.log(
	subdomainVisits([
		'9001 discuss.leetcode.com',
		'90 leetcode.com',
		'100 yahoo.com'
	])
);
