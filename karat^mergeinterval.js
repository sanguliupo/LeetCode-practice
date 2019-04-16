function merge(intervals) {
		function Interval(start, end) {
    	this.start = start;
    	this.end = end;
    }
    var res = [];
    intervals
        .sort((a, b) => a.start - b.start)
        .concat(new Interval(Number.MAX_VALUE, 0))
        .reduce((curr, next) => {
            if (next.start <= curr.end) {
                curr.end = Math.max(curr.end, next.end);
                return curr;
            } else {
                res.push(curr);
                return next;
            }
        });
    return res;
}
console.log(merge([[1,4],[4,5]]));