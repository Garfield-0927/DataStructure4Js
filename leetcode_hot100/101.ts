function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return true;
  }

  if (!root.left || !root.right) {
    return false;
  }

  let leftNode = root.left;
  let rightNode = root.right;

  const compareNode = (l: TreeNode | null, r: TreeNode | null) => {
    if (!l && !r) {
      return true;
    }

    if (!l || !r) {
      return false;
    }

    if (l.val !== r.val) {
      return false;
    }

    return compareNode(l.left, r.right) && compareNode(l.right, r.left);
  };

  return compareNode(leftNode, rightNode);
}
