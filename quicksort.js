const quickSort = function(array) {
    if (array.length <= 1) return array;

    // Pick a swap position about in the middle of the array
    let swapIndex = Math.floor((array.length - 1) / 2),
        lessArray = [],
        moreArray = [];

    // Get the value of the swap index for comparison
    let swapValue = array[swapIndex];

    // Remove the swap value from the array we will be sorting
    array.splice(swapIndex, 1);

    // If the value is less than swapValue, put in a "less than" array
    // If the value is more than swapValue, put in a "more than" array
    for (let i = 0; i < array.length; i++) {
        if (array[i] < swapValue) {
            lessArray.push(array[i]);
        } else {
            moreArray.push(array[i]);
        }
    }

    // Combine the sorted arrays with the original pivot value and return
    return quickSort(lessArray).concat([swapValue], quickSort(moreArray));
};

const array = [90, 7, 5, 11, 12, 2];
console.log('Array after sorting: ' + quickSort(array));
