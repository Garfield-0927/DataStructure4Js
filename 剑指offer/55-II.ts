import { TreeNode } from '../leetcode_hot100/common';

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;

  const dfs = (node: TreeNode | null) => {
    if (!node) {
      return 0;
    }
    const leftHeight = dfs(node.left);
    const rightHeight = dfs(node.right);

    if (
      leftHeight < 0 ||
      rightHeight < 0 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    }

    return 1 + Math.max(leftHeight, rightHeight);
  };
  return dfs(root) > 0;
}
