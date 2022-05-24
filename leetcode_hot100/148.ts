import { ListNode, testLinkedList, traverseLinkedList } from './common';

const findMidNode = (head: ListNode): ListNode => {
  if (!head.next) {
    return head;
  }

  let slow: ListNode | null = head,
    fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast?.next?.next;
  }
  return slow!;
};

const mergeTwoOrderedList = (
  node1: ListNode | null,
  node2: ListNode | null
) => {
  const dummyNode = new ListNode(0, null);
  let prev = dummyNode;

  while (node1 && node2) {
    if (node1.val >= node2.val) {
      prev.next = node2;
      node2 = node2.next;
    } else {
      prev.next = node1;
      node1 = node1.next;
    }
    prev = prev.next;
  }
  prev.next = node1 ? node1 : node2;
  return dummyNode.next;
};

const mergeSort = (node: ListNode): ListNode => {
  if (!node.next) {
    return node;
  }

  if (!node.next.next) {
    if (node.val > node.next.val) {
      [node.val, node.next.val] = [node.next.val, node.val];
    }
    return node;
  }

  const mid = findMidNode(node);
  const left = node;
  const right = mid.next;
  mid.next = null;
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  let lnode = sortedLeft;
  let rnode = sortedRight;

  return mergeTwoOrderedList(lnode, rnode);
};

function sortList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  if (!head.next) {
    return head;
  }

  return mergeSort(head);
}

const rt = sortList(testLinkedList);
traverseLinkedList(rt);
