import { TreeNode } from './common';

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || !p || !q) return null;
  if (q === root || p === root) return root;
  let ans: TreeNode;
  const dfs = (node: TreeNode): boolean => {
    if (!node) return false;
    const left = dfs(node.left);
    const right = dfs(node.right);
    if ((left && right) || ((node === p || node === q) && (left || right))) {
      ans = node;
    }
    return left || right || node === p || node === q;
  };
  dfs(root);
  return ans;
}
