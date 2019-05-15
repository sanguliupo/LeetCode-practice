//Selection Sort
const array = [4, 3, -2, 0, 1];
selectionSort(array);
console.log('Array after sorting:  ' + array);

// Function to swap two elements by assigning
// the first to a temporary variable then
// reassigning the actual array elements
// This runs directly in the function and
// acts on the array in memory rather than returning
// a swapped array
function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function indexOfMinimum(array, startIndex) {
    let minValue = array[startIndex];
    let minIndex = startIndex;

    // Loop through the "sub array" or array not including
    // the minIndex, because we know that one has already
    // been sorted
    // If the index in the loop is less than the minIndex,
    // make it the minIndex instead
    for (let i = minIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }

    // Return the minIndex so we can use it in the
    // actual sorting function
    return minIndex;
}

function selectionSort(array) {
    let startIndex = 0; // Start at 0
    // Loop through the entire array, reassigning the
    // minIndex as we go
    // Swap the minIndex with i because minIndex will be
    // smaller
    for (let i = 0; i < array.length; i++) {
        startIndex++;
        minIndex = indexOfMinimum(array, i);
        swap(array, minIndex, i);
    }
}
