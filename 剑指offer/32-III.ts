import { TreeNode } from '../leetcode_hot100/common';

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const res: number[][] = [];

  const queue: TreeNode[] = [root];

  while (queue.length) {
    const tmp: TreeNode[] = [];
    const tmpVal: number[] = [];
    while (queue.length) {
      const node = queue.shift()!;
      tmpVal.push(node.val);
      node.left && tmp.push(node.left);
      node.right && tmp.push(node.right);
    }
    tmp.length && queue.push(...tmp);
    res.push(tmpVal);
  }

  return res.map((arr, i) => (i % 2 ? arr.reverse() : arr));
}
