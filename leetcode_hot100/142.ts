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
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// function detectCycle(head: ListNode | null): ListNode | null {
//   const visited = new Set();
//   while (head !== null) {
//     if (visited.has(head)) {
//       return head;
//     } else {
//       visited.add(head);
//     }
//     head = head.next;
//   }
//   return null;
// }
function detectCycle(head: ListNode | null): ListNode | null {
  let ptr1 = head;
  let ptr2 = ptr1;
  let flag = 0;
  while (ptr1 && ptr2) {
    if (flag === 1 && ptr2 === ptr1) {
      return ptr1;
    }

    ptr1 = ptr1.next;
    ptr2 = flag === 0 ? ptr2.next?.next : ptr2.next;

    if (flag === 0 && ptr1 === ptr2) {
      flag = 1;
      ptr2 = head;
    }
  }

  return null;
}
