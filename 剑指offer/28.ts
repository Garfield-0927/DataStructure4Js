import { TreeNode } from '../leetcode_hot100/common';

function isSymmetric(root: TreeNode | null): boolean {
  const isSymmetricFn = (
    node1: TreeNode | null,
    node2: TreeNode | null
  ): boolean => {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;

    if (node1.val !== node2.val) return false;

    return (
      isSymmetricFn(node1.left, node2.right) &&
      isSymmetricFn(node1.right, node2.left)
    );
  };

  return isSymmetricFn(root, root);
}
