import { ListNode, testLinkedList, traverseLinkedList } from './common';

function insertionSortList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;

  let curNode: ListNode | null = head.next;
  let lastSortedNode = head;
  let startSortedNode = head;
  head.next = null;

  while (curNode) {
    // 保存下一个节点，因为可能更改next指针
    const nextNode: ListNode | null = curNode.next;
    if (curNode.val >= lastSortedNode.val) {
      // 如果目前的节点的值大于最后一个有序节点的值，那么更新最后一个有序节点
      lastSortedNode.next = curNode;
      lastSortedNode = curNode;
      lastSortedNode.next = null;
    } else if (curNode.val <= startSortedNode.val) {
      // 小于任何一个有序节点
      curNode.next = startSortedNode;
      startSortedNode = curNode;
    } else {
      let tmpNode = startSortedNode;
      while (tmpNode !== lastSortedNode && tmpNode.next) {
        if (tmpNode.next.val < curNode.val) {
          tmpNode = tmpNode.next;
        } else {
          break;
        }
      }
      let tmpNext = tmpNode.next;
      curNode.next = tmpNext;
      tmpNode.next = curNode;
    }
    curNode = nextNode;
  }

  return startSortedNode;
}

const node = insertionSortList(testLinkedList);

traverseLinkedList(node);
