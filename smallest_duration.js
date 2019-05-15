/*
Given a list of clock times, find the pair which has the smallest duration between them. For instance, if given 03:03, 02:15, 07:42, and 10:23, the smallest duration is 48 minutes between the pair 02:15 and 03:03. Your code should return the number of minutes between the times, as well as the two times in any order. For instance, given the input above, your code should return ”.
*/

// input: ["03:01", '04:01']
//output: '60, "03:01", '04:01''

let list_of_times = [
  '17:21',
  '23:50',
  '04:01',
  '07:07',
  '03:03',
  '00:01',
  '12:42',
  '16:03'
];
// [ '00:01',
//   '03:03',
//   '04:01',
//   '07:07',
//   '12:42',
//   '16:03',
//   '17:21',
//   '23:50' ]

//1. sort list by hour=> 00:01, 03:03....23:50
//2. iterate through list and produce another list of durations between neighboring times
//2.b. for special cases might have to convert times 03:03=>02:63
//3. sort through list of durations and return smallest duration

function smallest_dur(array) {
  array = array.sort();
  let helper = [];
  let result = [];
  for (let i = 0; i < array.length; i++) {
    helper.push(Number(array[i].slice(0, 2)));
    helper.push(Number(array[i].slice(3, 5)));
    result.push(helper);
    helper = [];
  }
  console.log(result);
  let duration = [];
  for (let i = 0; i < result.length - 1; i++) {
    duration.push(
      (result[i + 1][0] - result[i][0]) * 60 + result[i + 1][1] - result[i][1]
    );
  }
  console.log(duration);

  // let duration=[];
  // for (let i=0; i<array.length-1; i++){
  //   duration.push(array[i+1]-array[i])
  // }
  // return duration;
  // return array;
}

console.log(smallest_dur(list_of_times));
