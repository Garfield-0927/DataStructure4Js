import { ListNode, testLinkedList } from './common';

function sortList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  if (!head.next) {
    return head;
  }

  let node1 = head;

  while (node1) {
    let node2 = node1;
    while (node2.next) {
      if (node2.next.val < node2.val) {
        [node2.next.val, node2.val] = [node2.val, node2.next.val];
      }
      node2 = node2.next;
    }
    node1 = node1.next;
  }

  return head;
}
