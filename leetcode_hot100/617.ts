class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1 || !root2) {
    return root1 === null ? root2 : root1;
  }

  const dfs = (
    root1: TreeNode | null,
    root2: TreeNode | null
  ): TreeNode | null => {
    if (!root1 || !root2) {
      return root1 === null ? root2 : root1;
    }

    root1.val += root2.val;

    root1.left = dfs(root1.left, root2.left);
    root1.right = dfs(root1.right, root2.right);

    return root1;
  };

  dfs(root1, root2);

  return root1;
}
