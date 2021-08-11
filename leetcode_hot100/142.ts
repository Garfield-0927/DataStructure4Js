/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function detectCycle(head: ListNode | null): ListNode | null {
  const visited = new Set();
  while (head !== null) {
    if (visited.has(head)) {
      return head;
    } else {
      visited.add(head);
    }
    head = head.next;
  }
  return null;
}
