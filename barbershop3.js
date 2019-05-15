function getWaitTime(people, rate) {
	const numberOfBarbers = rate.length;

	// to track each barber's usage of time. If the barber has spent the least amount of time,
	// then that barber will serve the next person
	const barbersSpentTime = [];

	//initialize array as [0,0,0....]
	for (let i = 0; i < numberOfBarbers; i++) {
		barbersSpentTime[i] = 0;
	}

	let barberIndex = 0;
	while (people > 0) {
		barbersSpentTime[barberIndex] += rate[barberIndex];
		people--;
		barberIndex = getBarberIndex(barbersSpentTime);
	}

	// after all barbers serve the people in line, the wait time will be
	// the minimum among all barbers
	let availableBarberIndex = getBarberIndex(barbersSpentTime);
	return barbersSpentTime[availableBarberIndex];
}

//get index of barber who has spent the least amount of time cutting hair, and therefore next in line to
//greet customer
function getBarberIndex(barbersSpentTime) {
	let minTime = Infinity;
	for (let i = 0; i < barbersSpentTime.length; i++) {
		if (barbersSpentTime[i] < minTime) {
			minTime = barbersSpentTime[i];
		}
	}
	return barbersSpentTime.indexOf(minTime);
}

console.log(getWaitTime(533, [9, 11, 6, 17, 23]));
