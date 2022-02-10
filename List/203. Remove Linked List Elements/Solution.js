/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
	let dummy = new ListNode();
	dummy.next = head;
	let pointer = dummy;

	while (pointer !== null && pointer.next !== null) {
		if (pointer.next.val === val) {
			pointer.next = pointer.next.next;
		} else {
			pointer = pointer.next;
		}
	}
	return dummy.next;
};
