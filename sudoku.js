let sud = [
	['.', '2', '3', '4', '5', '6', '7', '8', '9'],
	['1', '.', '.', '.', '.', '.', '.', '.', '.'],
	['.', '.', '.', '.', '.', '.', '.', '.', '.'],
	['.', '.', '.', '.', '.', '.', '.', '.', '.'],
	['.', '.', '.', '.', '.', '.', '.', '.', '.'],
	['.', '.', '.', '.', '.', '.', '.', '.', '.'],
	['.', '.', '.', '.', '.', '.', '.', '.', '.'],
	['.', '.', '.', '.', '.', '.', '.', '.', '.'],
	['.', '.', '.', '.', '.', '.', '.', '.', '.']
];

function sudoku(board) {
	let s = {};

	for (let row = 0; row < 9; row += 1) {
		for (let col = 0; col < 9; col += 1) {
			let val = board[row][col];

			if (val !== '.') {
				let isInRow = val + ' is in row ' + row;
				let isInCol = val + ' is in col ' + col;

				let subBoardRow = Math.floor(row / 3);
				let subBoardCol = Math.floor(col / 3);
				let isInSubBoard =
					val + ' is in ' + subBoardRow + ' and ' + subBoardCol;

				if (s[isInRow] || s[isInCol] || s[isInSubBoard]) {
					return false;
				} else {
					s[isInRow] = true;
					s[isInCol] = true;
					s[isInSubBoard] = true;
				}
			}
		}
	}

	return true;
}

console.log(sudoku(sud));
