import { ListNode } from '../leetcode_hot100/common';

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  if (!head) return head;

  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  while (fast && k > 0) {
    k--;
    fast = fast.next;
  }

  while(fast) {
    fast = fast.next;
    slow = slow!.next
  }

  return slow;

}
