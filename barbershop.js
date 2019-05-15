// // You are on line at the barbershop. There are n people before you and i barbers.
// // Each barber cuts at a rate of r which is represented in an array of barber times in units of time.
// // Ie; barber 1 cuts at a pace of 1 unit of time per person, barber 2 cuts at a pace of 3 units of time per person, etc.
// // Write an algorithm that tells you exactly how long it will take before you sit down.

//Brute force

function getWaitTime(peopleWaiting, rate) {
	rate = rate.sort((a, b) => a - b);

	if (peopleWaiting < rate.length) {
		return 0;
	}
	let waitTime = rate[0];
	let peopleServed = 0;

	while (peopleServed < peopleWaiting) {
		peopleServed = 0;
		for (let i = 0; i < rate.length; i++) {
			peopleServed += Math.ceil(waitTime / rate[i]);
		}
		waitTime = isSomeoneAvailable(waitTime, rate);
		if (peopleServed < peopleWaiting) {
			waitTime++;
		}
	}

	return waitTime;
}

function isSomeoneAvailable(waitTime, rate) {
	let available = rate.map(x => waitTime % x === 0).reduce((x, y) => x || y);
	while (available === false) {
		waitTime++;
		available = rate.map(x => waitTime % x === 0).reduce((x, y) => x || y);
	}
	return waitTime;
}

console.log(getWaitTime(5337, [9, 11, 6, 17, 23, 19, 13]));
