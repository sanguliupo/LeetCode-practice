var merge = function (nums1, m, nums2, n) {
    var len = m + n-1;
    m--;
    n--;
    while (len>=0) {
        if (n < 0 || nums1[m] > nums2[n]) {
            nums1[len] = nums1[m];
            m--;
        } else {
            nums1[len] = nums2[n];
            n--;
        }
    len--;
    }
    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));