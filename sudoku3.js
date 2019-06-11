const test01 = [
    ['.', '.', '.', '7', '.', '.', '3', '.', '1'],
    ['3', '.', '.', '9', '.', '.', '.', '.', '.'],
    ['.', '4', '.', '3', '1', '.', '2', '.', '.'],
    ['.', '6', '.', '4', '.', '.', '5', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '1', '.', '.', '8', '.', '4', '.'],
    ['.', '.', '6', '.', '2', '1', '.', '5', '.'],
    ['.', '.', '.', '.', '.', '9', '.', '.', '8'],
    ['8', '.', '5', '.', '.', '4', '.', '.', '.']
]; //true

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
]; //false

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

const test04 = [
    ['.', '.', '5', '.', '.', '2', '.', '.', '.'],
    ['.', '.', '9', '.', '4', '7', '.', '2', '.'],
    ['.', '.', '8', '.', '5', '6', '.', '.', '1'],
    ['.', '.', '.', '.', '.', '8', '3', '4', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '6'],
    ['.', '.', '.', '.', '3', '.', '1', '8', '.'],
    ['.', '2', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '9', '.', '.', '8', '.', '6', '7', '.'],
    ['3', '.', '6', '5', '7', '.', '.', '.', '.']
]; //true

const test05 = [
    ['.', '.', '3', '8', '.', '.', '4', '.', '.'],
    ['.', '.', '.', '.', '1', '.', '.', '7', '.'],
    ['.', '6', '.', '.', '.', '5', '.', '.', '9'],
    ['.', '.', '.', '9', '.', '.', '6', '.', '.'],
    ['.', '2', '.', '.', '.', '.', '.', '1', '.'],
    ['.', '.', '4', '.', '.', '3', '.', '.', '2'],
    ['.', '.', '2', '.', '.', '.', '8', '.', '.'],
    ['.', '1', '.', '.', '.', '.', '.', '5', '.'],
    ['9', '.', '.', '.', '.', '7', '.', '.', '3']
]; //true

const test06 = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.']
]; //true

var solveSudoku = function(board) {
    // define rows, cols, triples, visit
    let [rows, cols, triples, visit] = [{}, {}, {}, []];
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            // get the 3 * 3 square t
            let t = [Math.floor(r / 3), Math.floor(c / 3)];
            // using set to store the existence
            rows[r] = rows[r] || new Set();
            cols[c] = cols[c] || new Set();
            triples[t] = triples[t] || new Set();

            // if the item is number, add it to the corresponding sets
            if (board[r][c] != '.') {
                rows[r].add(board[r][c]);
                cols[c].add(board[r][c]);
                triples[t].add(board[r][c]);
            } else {
                // otherwise, push the row and col to visit
                visit.push([r, c]);
            }
        }
    }
    // depth first search (https://en.wikipedia.org/wiki/Depth-first_search)
    function dfs() {
        // if no item in the visit, all board are solved (from this dfs call)
        if (visit[0] == undefined) {
            return true;
        }

        let [r, c] = visit[0];
        let t = [Math.floor(r / 3), Math.floor(c / 3)];
        // try filling the 1~9 number
        for (let dig = 1; dig < 10; dig++) {
            dig = String(dig);
            // make sures rows, cols, and 3 * 3 don't have the number yet (Set is O(1) way to check existence)
            if (
                !rows[r].has(dig) &&
                !cols[c].has(dig) &&
                !triples[t].has(dig)
            ) {
                // assign the digit to that position
                board[r][c] = dig;
                // record the digit
                rows[r].add(dig);
                cols[c].add(dig);
                triples[t].add(dig);

                // remove the [row, col] from the visit
                visit.shift();

                // use recursive to deep search next possible visit
                if (dfs()) {
                    // if this return true, then we found a solution
                    return true;
                } else {
                    // if this is not solvable, then we revert the position to '.'
                    // delete the number in all sets
                    // and put the [row, col] back to the visit for next number try
                    board[r][c] = '.';
                    rows[r].delete(dig);
                    cols[c].delete(dig);
                    triples[t].delete(dig);
                    visit.unshift([r, c]);
                }
            }
        }
        // if all the numbers in for loop trying recursive call and not valid, return false
        return false;
    }
    dfs();
    console.log(board);
    // since this solution is just trying to solve a sudoku, check the final board still has '.' to see if all the positions
    // are filled with number
    return sudokuSolved(board);
};

function sudokuSolved(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] == '.') {
                return false;
            }
        }
    }
    return true;
}

// console.log(solveSudoku(test01)); // true
// console.log(solveSudoku(test02)); // flase
// console.log(solveSudoku(test03)); // false
// console.log(solveSudoku(test04)); // true
// console.log(solveSudoku(test05)); // true
console.log(solveSudoku(test06)); // true
