//Bubble Sort   O(n^2)  從第一個數字開始，慢慢交換
const unsortedArray = [23, 1, 4, 5, -123, 2, 0, 0, 01, 71, 10, 2];
const sortedArray = bubbleSort(unsortedArray);

console.log(sortedArray);

function bubbleSort(array) {
    // Use an isSorted flag to determine whether or not there
    // is more sorting to do when we are in the while loop
    let isSorted = false;

    while (!isSorted) {
        // Mark is sorted true, then re-mark it false in the loop.
        // If the loop is finished, then isSorted will stay true
        // and we will thus exit the while loop and return
        isSorted = true;

        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                // Swap by holding the first element in a temp variable,
                // then reassigning indexes i and i+1 to each other
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;

                // Mark the isSorted flag false because there is still sorting to do if we are in the loop
                isSorted = false;
            }
        }
    }
    // Return the sorted array!
    return array;
}
