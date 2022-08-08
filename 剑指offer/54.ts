import { TreeNode, testTree } from '../leetcode_hot100/common';

function kthLargest(root: TreeNode | null, k: number): number {
  if (!root) return 0;

  const res: number[] = [];
  const s: TreeNode[] = [];
  let node: TreeNode | null = root;

  while ((node || s.length) && res.length < k) {
    while(node) {
      s.push(node);
      node = node.right;
    }
    if(s.length) {
      node = s.pop()!;
      res.push(node.val);
      node = node.left;
    }
    
  }
  console.log(res);
  
  return res[k - 1];
}

kthLargest(testTree, 99)
