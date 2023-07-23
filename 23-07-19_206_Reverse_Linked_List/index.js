/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


/**
 *
 * @param {ListNode} head
 * @return {ListNode}
 */


var reverseList = function (head) {
    return true;

    let prev = null
    let curr = head
    let next = null

    while(curr!== null){
        // save next
        next = curr.next

        if(next) {
            console.log(next)
        }

        // reverse
        curr.next = prev
        // advance prev and curr
        prev = curr
        curr = next
    }
    return prev;
};

export default reverseList
