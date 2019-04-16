// 算task和pretask輸出task by level的那題. Just calculate indegree, bfs
// 是像這樣
// input = [
// {"cook", "eat"},   // do "cook" before "eat"
// {"study", "eat"},
// {"sleep", "study"}]

// output (steps of a workflow):
// [{"sleep", "cook"},
// {"study"},
// {"eat"}]

// Intuit 网上coding competition的一道题给一个矩阵，矩阵里的每个元素是1，但是其中分布着一些长方形区域， 这些长方形区域中的元素为0. 要求输出每个长方形的位置（用长方形的左上角元素坐标和右下角元素坐标表示）。
// example：
// input:
// [
// [1,1,1,1,1,1],
// [0,0,1,0,1,1],
// [0,0,1,0,1,0],
// [1,1,1,0,1,0],
// [1,0,0,1,1,1]
// ]
// output:.
// [
// [1,0,2,1],
// [1,3,3,3],
// [2,5,3,5],
// [4,1,4,2]
// ]



// 第二题：给每个user访问历史记录，找出两个user之间longest continuous common history
// 输入： [
//              ["3234.html", "xys.html", "7hsaa.html"], // user1
//              ["3234.html", ''sdhsfjdsh.html", "xys.html", "7hsaa.html"] // user2
//            ], user1 and user2 （指定两个user求intersect）

// 输出：["xys.html", "7hsaa.html"]

// 第一题：类似meeting rooms，输入是一个int[][] meetings, int start, int end, 每个数都是时间，13：00 =》 1300， 9：30 =》 18930， 看新的meeting 能不能安排到meetings
// ex: {[1300, 1500], [930, 1200],[830, 845]}, 新的meeting[820, 830], return true; [1450, 1500] return false;


