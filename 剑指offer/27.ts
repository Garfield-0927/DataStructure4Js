import { TreeNode } from '../leetcode_hot100/common';

function mirrorTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  [root.right, root.left] = [root.left, root.right];

  mirrorTree(root.left);
  mirrorTree(root.right);

  return root;
}
