const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
const string = 'Vanessa';
// const object = { happy: 'birthday' };

var mySet = new Set(numbers);
var Set2 = new Set(string);
// var Set3 = new Set(object);

console.log([...mySet]);
console.log(...Set2);

// [2, 3, 4, 5, 6, 7, 32]
