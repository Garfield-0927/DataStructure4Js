"use strict";
exports.__esModule = true;
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
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) {
        return null;
    }
    var nodeA = headA;
    var nodeB = headB;
    var flag1 = true;
    while (nodeA || nodeB) {
        if (nodeA === nodeB) {
            return nodeA;
        }
        if (!nodeA.next) {
            if (!flag1)
                break;
            nodeA = headB;
            flag1 = false;
        }
        else {
            nodeA = nodeA.next;
        }
        if (!nodeB.next) {
            nodeB = headA;
        }
        else {
            nodeB = nodeB.next;
        }
    }
    return null;
};
