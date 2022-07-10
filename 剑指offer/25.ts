import { ListNode } from '../leetcode_hot100/common';

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;

  let head = new ListNode(0, null);
  let cur = head;
  let p1: ListNode | null = l1;
  let p2: ListNode | null = l2;

  while (p1 && p2) {
    if (p1.val >= p2.val) {
      cur.next = p2;
      p2 = p2.next;
    } else {
      cur.next = p1;
      p1 = p1.next;
    }
    cur = cur.next;
  }

  if (p1) {
    cur.next = p1;
  } else {
    cur.next = p2;
  }

  return head.next;
}
