/* Vanessa Wang's solution_ Mar 8, 2019 
Please write a JavaScript function that takes an array of objects and returns a unique-ified version of the same array.
To be clear, the goal is just to remove any duplicate objects that reference the same object in memory. The result can have multiple objects with the same properties as long as they are different objects in memory.
There are multiple ways to solve this, but the goal is to create an algorithm that is as fast as possible. You may use whatever resources you want without directly consuming a third party library.  */

//Sample input:
let record1 = {
  name: 'Brian',
  age: 1
};

let record2 = {
  name: 'Vanessa',
  age: 2
};

// same values but different reference in memory
let record3 = {
  name: 'Brian',
  age: 1
};

let record4 = {
  name: 'Zoe',
  age: 3
};

let people = [record1, record2, record3, record4, record1, record1, record2];
// target output should be: [record1, record2, record3, record4]


//First Solution (brute force with 2 for loops):
// Time complexity O(n^2) (not the most ideal solution as takes too much time)
// Space complexity O(1)
function removeDup(arr){
	for (let i=0; i<arr.length; i++){
    for (let j=i+1; j<arr.length; j++){
    //compare every single object with one another:
      if (arr[i]===arr[j]){
        delete arr[j];
      }
    }
  }
  //filter out the deleted items that are now "undefined"
  return arr.filter(Boolean);
}

// Solution 2: Using Sets from ES2015
// the requirement wants the fastest!
// that means we could use space as trade off for time. This is the ideal solution for this problem.
// Time complexity O(n)
// Space complexity O(n)
function removeDup2(arr) {
  // using the data structure Set to remove the duplicate in input array. This is Set's default behavior
  let arrSets = new Set(arr);
  // convert the Set back to array
  return Array.from(arrSets);
}





console.log(removeDup(arr));