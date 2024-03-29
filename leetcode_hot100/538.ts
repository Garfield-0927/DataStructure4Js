/**
 * Definition for a binary tree node.
 *
 */
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}


function convertBST(root: TreeNode | null): TreeNode | null {
  let sum = 0 ;

  const dfs = (node: TreeNode|null) =>{
    if(!node) {
      dfs(node.right);
      sum += node.val;
      node.val = sum;
      dfs(node.left);
    }
    return node;
  }
  dfs(root);
  return root;
}
