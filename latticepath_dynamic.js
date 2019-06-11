function lattice(x, y) {
	let cache = {};
	let key = x + '_' + y;
	if (key in cache) {
		return cache[key];
	}
	if (x === 0 && y === 0) {
		return 1;
	}
	if (x < 0 || y < 0) {
		return 0;
	}
	cache[key] = lattice(x - 1, y) + lattice(x, y - 1);

	return cache[key];
}

console.log(lattice(3, 2));
