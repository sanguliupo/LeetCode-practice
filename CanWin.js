// Can Win，给一个数字数组和一个starting index， 判断能不能跳到数值为0的index，返回true/false
// 数组中每一个数字代表了能往左和右跳的格子数，可以跳的步数等于所在位置的数值，不是小于，并且不能超出数组的范围
// Example: [3, 1, 0, 2, 5]
// starting index = 1, return true 因为在index 1的数字是1，所以可以往右跳一格，到达数值为0的index
// starting index = 4，return false，因为左右跳5格都出界了
// 这题用recursion就可以，很简单


