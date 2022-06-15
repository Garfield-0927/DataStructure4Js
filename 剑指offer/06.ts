import { ListNode } from "../leetcode_hot100/common";

function reversePrint(node: ListNode | null): number[] {
  if(!node) return [];
  const res = [] as number[];
  while(node) {
    res.push(node.val);
    node = node.next;
  }
  return res.reverse();
};