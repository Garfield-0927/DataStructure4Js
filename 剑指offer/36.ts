import { bst, TreeNode } from '../leetcode_hot100/common';

function treeToDoublyList(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const inOrder: TreeNode[] = [];
  const stack: TreeNode[] = [];
  let node: TreeNode | null = root;

  while (node || stack.length) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      const left = stack.pop()!;
      inOrder.push(left);
      node = left.right;
    }
  }
  const head = inOrder[0];
  const length = inOrder.length;
  for (let i = 0; i < length; i++) {
    inOrder[i].left = inOrder[(i - 1 + length) % length];
    inOrder[i].right = inOrder[(i + 1) % length];
  }

  return head;
}

treeToDoublyList(bst);
