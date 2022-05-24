export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val: number | null,
    left: TreeNode | null,
    right: TreeNode | null
  ) {
    this.val = val == undefined ? 0 : val;
    this.left = left == undefined ? null : left;
    this.right = right == undefined ? null : right;
  }
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const testTree = new TreeNode(1, null, null);
testTree.left = new TreeNode(
  2,
  new TreeNode(3, null, null),
  new TreeNode(4, null, null)
);
testTree.right = new TreeNode(5, null, new TreeNode(6, null, null));

const testLinkedList = new ListNode(
  -1,
  new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0, null))))
);

const traverseLinkedList = (node: ListNode | null) => {
  if (!node) return;

  while (node) {
    console.log(node.val);

    node = node.next;
  }
};

export { testTree, testLinkedList, traverseLinkedList };
