import { ListNode } from '../leetcode_hot100/common';

// const getIntersectionNode = function (A: ListNode, B: ListNode): ListNode | null{
//   const s = new Set<ListNode>();
//   let nodeA: ListNode | null = A;
//   let nodeB: ListNode | null = B;

//   while (nodeA) {
//     s.add(nodeA);
//     nodeA = nodeA.next;
//   }

//   while (nodeB) {
//     if (s.has(nodeB)) return nodeB;

//     nodeB = nodeB.next;
//   }

//   return null;
// };

const getIntersectionNode = function (
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if(!headA || !headB) {
    return null;
  }

  let nodeA: ListNode | null = headA;
  let nodeB: ListNode | null = headB;
  let flag1 = true;
  while (nodeA || nodeB) {
    if (nodeA === nodeB) {
      return nodeA;
    }

    if (!nodeA.next) {
      if (!flag1) break;
      nodeA = headB;
      flag1 = false;
    } else {
      nodeA = nodeA.next;
    }

    if (!nodeB.next) {
      nodeB = headA;
    } else {
      nodeB = nodeB.next;
    }
  }

  return null;
};
