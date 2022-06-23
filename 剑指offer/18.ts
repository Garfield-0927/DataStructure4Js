import { ListNode } from '../leetcode_hot100/common';

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  if (!head) return null;

  if (head.val === val) {
    return head.next;
  }

  let prev = head;
  let cur = head.next;
  while (cur) {
    if (cur.val === val) {
      prev.next = cur.next;
      break;
    }

    cur = cur.next;
    prev = prev.next!;
  }

  return head;
}
