import { ListNode } from "./common";

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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists.length) {
    return null;
  }

  let root: ListNode = lists.shift();
  while(lists.length) {
    const nextList = lists.shift();
    root = mergeTwoOrderedList(root, nextList);
  }
  return root;
}
