/**
 *
 */

import { TreeNode } from '../leetcode_hot100/common';

function levelOrder(root: TreeNode | null): number[] {
  if (!root) return [];
  const res: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const node = queue.shift()!;
    res.push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }

  return res;
}
