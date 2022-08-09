import { TreeNode } from '../leetcode_hot100/common';

function maxDepth(root: TreeNode | null): number {
  const getDepth = (node: TreeNode | null) => {
    if (!node) return 0;
    return 1 + Math.max(getDepth(node.left), getDepth(node.right));
  };

  return getDepth(root);
}
