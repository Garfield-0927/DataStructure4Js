import { TreeNode } from '../leetcode_hot100/common';

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  const isSameStruct = (A: TreeNode | null, B: TreeNode | null): boolean => {
    if (!B) return true;
    if (!A) return false;
    if (A.val !== B.val) return false;
    return isSameStruct(A.left, B.left) && isSameStruct(A.right, B.right);
  };

  if(!B) return false;
  const q = [A];

  while (q.length) {
    const node = q.shift()!;
    if (isSameStruct(node, B)) return true;
    node.left && q.push(node.left);
    node.right && q.push(node.right);
  }

  return false;
}
