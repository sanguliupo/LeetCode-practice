function lattice(x, y) {
	if (x === 0 && y === 0) {
		return 1;
	}
	if (x < 0 || y < 0) {
		return 0;
	}
	return lattice(x - 1, y) + lattice(x, y - 1);
}

console.log(lattice(2, 2));

// lattice(2,2)
// lattice(1,2)+              l(2,1)
// l(0,2)+  l(1,1)           l(1,1)+             l(2,0)
// l(0,1 )  l(0,1)+l(1,0)    l(0,1)+l(1,0)       l(1,0)
// l(0,0)   l(0,0)  l(0,0)   l(0,0)  l(0,0)      l(0,0)
