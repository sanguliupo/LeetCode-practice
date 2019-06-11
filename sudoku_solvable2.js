const test02 = [
    ['.', '8', '9', '.', '4', '.', '6', '.', '5'],
    ['.', '7', '.', '.', '.', '8', '.', '4', '1'],
    ['5', '6', '.', '9', '.', '.', '.', '.', '8'],
    ['.', '.', '.', '7', '.', '5', '.', '9', '.'],
    ['.', '9', '.', '4', '.', '1', '.', '5', '.'],
    ['.', '3', '.', '9', '.', '6', '.', '1', '.'],
    ['8', '.', '.', '.', '.', '.', '.', '.', '7'],
    ['.', '2', '.', '8', '.', '.', '.', '6', '.'],
    ['.', '.', '6', '.', '7', '.', '.', '8', '.']
];

const test03 = [
    ['.', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['1', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.']
]; //false

function getCandidates(board, row, col) {
    // # For some empty cell board[row][col], what possible
    // # characters can be placed into this cell
    // # that aren't already placed in the same row,
    // # column, and sub-board?
    const candidates = [];

    // For each character add it to the candidate list only if there's no collision, i.e. that character
    // # doesn't already exist in the same row, column and sub-board.
    // Notice the top-left corner of (row, col)'s sub-board is (row - row%3, col - col%3).
    // for chr from '1' to '9':
    for (let chr = 1; chr <= 9; chr++) {
        let collision = false;
        for (let i = 0; i < 9; i++) {
            if (
                board[row][i] == chr ||
                board[i][col] == chr ||
                board[row - (row % 3) + Math.floor(i / 3)][
                    col - (col % 3) + Math.floor(i / 3)
                ] == chr
            ) {
                collision = true;
                break;
            }
        }

        if (!collision) {
            candidates.push(chr);
        }
    }
    return candidates;
}

function sudokuSolve(board) {
    // # For each empty cell, consider 'newCandidates', the
    // # set of possible candidate values that can
    // # be placed into that cell.

    let row = -1;
    let col = -1;
    let candidates = [];

    let allSquaresFilled = true;

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === '.') {
                newCandidates = getCandidates(board, r, c);
                allSquaresFilled = false;

                // # Then, we want to keep the smallest
                // # sized 'newCandidates', plus remember the
                // # position where it was found
                if (
                    candidates.length === 0 ||
                    newCandidates.length < candidates.length
                ) {
                    candidates = newCandidates;
                    row = r;
                    col = c;
                }
            }
        }
    }
    // console.log('row', row, 'col', col);
    // console.log('candidates', candidates);
    // # If we have not found any empty cell, then
    // # the whole board is filled already
    if (allSquaresFilled) {
        return true;
    } else {
        // For each possible value that can be placed in position (row, col), let's
        // place that value and then recursively query
        // whether the board can be solved.  If it can, we are done.
        let solvable = false;
        candidates.forEach(val => {
            board[row][col] = val;
            if (sudokuSolve(board)) {
                solvable = true;
            } else {
                // # The tried value val didn't work so restore
                // # the (row, col) cell back to '.'
                board[row][col] = '.';
            }

            // # Otherwise, there is no value that can be placed
            // # into position (row, col) to make the
            // # board solved
        });
        return solvable;
    }
}
console.log(sudokuSolve(test03));
