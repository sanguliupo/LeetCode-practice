var random = function() {
	let songs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	let playlist = [];

	while (songs.length > 0) {
		let chosen = getRandomInt(songs.length);
		playlist.push(songs[chosen]);
		songs.splice(chosen, 1);
	}
	return playlist;
};

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

console.log(random());
