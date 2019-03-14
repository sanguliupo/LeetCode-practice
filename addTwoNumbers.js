/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let l1 = new ListNode(2);
let l12 = new ListNode(4);
let l13 = new ListNode(3);
l1.next = l12;
l12.next = l13;

let l2 = new ListNode(5);
let l22 = new ListNode(6);
let l23 = new ListNode(4);
l2.next = l22;
l22.next = l23;

var addTwoNumbers = function(l1, l2) {
    let dummy1 = new ListNode(0);
    let dummy2 = dummy1;
    let carryOver = 0;
    while (l1 || l2){    
        let val1 = l1? l1.val : 0;
        let val2 = l2? l2.val : 0;
        
        let sum = val1 + val2 + carryOver;
        
        if (sum >= 10){
            sum = sum - 10;
            carryOver = 1;     
        }else {
            carryOver = 0;
        }
        
        dummy1.next = new ListNode(sum);
        
        l1 = l1? l1.next : null;
        l2 = l2? l2.next : null;
        dummy1 = dummy1.next;
    }
    
    if(carryOver === 1) {
        dummy1.next = new ListNode(carryOver);
    }
    return dummy2.next;
};