import { TreeNode } from "./common";

function isValidBST(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }

  return midTraverseTree(root);
}

const midTraverseTree = (root: TreeNode): boolean => {
  const stack: TreeNode[] = [];
  let last = -Infinity;
  let node = root;

  while (stack.length || node) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      if (node.val <= last) {
        return false;
      }
      last = node.val;
      node = node.right;
    }
  }

  return true;
};
