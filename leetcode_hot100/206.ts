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

function reverseList(head: ListNode | null): ListNode | null {
  if (head == null){
    return head;
  }
  let p1 = head;
  let p2 = head.next;
  p1.next = null;
  while (p2 !== null) {
    let temp = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = temp;
  }
  return p1;
}
