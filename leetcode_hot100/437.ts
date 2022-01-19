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

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0;
  }

  let ans = 0;

  const stack: Array<TreeNode | null> = [];
  const dfs = (node: TreeNode | null, curSum: number) => {
    if (!node) {
      return;
    }

    curSum += node.val;

    console.log(node.val, curSum);
    if (curSum === targetSum) {
      ans++;
    }

    dfs(node.left, curSum);
    dfs(node.right, curSum);
  };

  stack.push(root);
  while (stack.length) {
    let node = stack.shift();
    node!.left && stack.push(node!.left);
    node!.right && stack.push(node!.right);
    dfs(node!, 0);
  }
  return ans;
}
const root: TreeNode | null = new TreeNode(1, null, null);
root.right = new TreeNode(2, null, null);
root.right.right = new TreeNode(3, null, null);
root.right.right.right = new TreeNode(4, null, null);
root.right.right.right.right = new TreeNode(5, null, null);

pathSum(root, 3);
