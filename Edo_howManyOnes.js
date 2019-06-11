function howManyOnes(array) {
  let head = 0;
  let tail = array.length - 1;
  let mid;

  while (head <= tail) {
    mid = Math.floor((head + tail) / 2);
    if (array[mid] === 0 && array[mid + 1] === 1) {
      return array.length - mid - 1;
    }
    if (array[mid] === 1) {
      tail = mid - 1;
    }
    if (array[mid] === 0 && array[mid + 1] === 0) {
      head = mid + 1;
    }
    if (array[mid] === 1 && mid === 0) {
      return array.length;
    }
    if (array[mid] === 0 && mid === array.length - 1) {
      return 0;
    }
  }
}

console.log(howManyOnes([0, 0, 0, 0]));
