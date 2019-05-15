function getBarberTime(people, rate) {
	const numberOfBarbers = rate.length;
	// just to make the thinking process easier
	const sortedRate = rate.sort((a, b) => b - a);

	// to track each barber's usage of time. If the barber has spent the least amount of time,
	// then that barber will serve the next person
	const barberAccumulatedTime = [];
	for (let i = 0; i < numberOfBarbers; i++) {
		barberAccumulatedTime[i] = 0;
	}

	let barberIndex = 0;

	while (people > 0) {
		if (
			barberAccumulatedTime[barberIndex] ===
			getCurrentMinTime(barberAccumulatedTime)
		) {
			barberAccumulatedTime[barberIndex] += sortedRate[barberIndex];
			people--;
		}
		barberIndex = (barberIndex + 1) % numberOfBarbers;
	}

	// after all barbers serve the people in line, the wait time will be
	// the min among all barbers
	return getCurrentMinTime(barberAccumulatedTime);
}

function getCurrentMinTime(barberAccumulatedTime) {
	let minTime = Infinity;
	for (let i = 0; i < barberAccumulatedTime.length; i++) {
		if (barberAccumulatedTime[i] < minTime) {
			minTime = barberAccumulatedTime[i];
		}
	}
	return minTime;
}

console.log(getBarberTime(5337, [9, 11, 6, 17, 23, 19, 13]));
