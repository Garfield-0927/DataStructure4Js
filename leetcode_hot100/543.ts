function diameterOfBinaryTree(root: TreeNode | null): number {
  let ans = 0;

  function maxDepth(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }

    let l = maxDepth(root.left);
    let r = maxDepth(root.right);
    ans = Math.max(ans, l + r + 1);

    return Math.max(l, r) + 1;
  }

  maxDepth(root);
  return ans - 1;
}
