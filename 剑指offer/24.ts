import { ListNode } from '../leetcode_hot100/common';

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let prevNode: ListNode | null = null;
  let curNode: ListNode | null = head;
  while (curNode) {
    const tmp = curNode.next;
    curNode.next = prevNode;
    prevNode = curNode;
    curNode = tmp;
  }
  return prevNode;
}
