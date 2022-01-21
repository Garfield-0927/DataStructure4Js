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

function rob(root: TreeNode | null): number {
  const selectedMap = new Map<TreeNode | null, number>();
  const unSelectedMap = new Map<TreeNode | null, number>();

  const dfs = (node: TreeNode | null) => {
    if (!node) {
      return;
    }

    dfs(node.left);
    dfs(node.right);

    // 子节点都不选的和
    let childNodeUnSelectedSum =
      (unSelectedMap.get(node.right) || 0) +
      (unSelectedMap.get(node.left) || 0);

    // 子节点都选的和
    let childNodeSelectedSum =
      (selectedMap.get(node.left) || 0) + (selectedMap.get(node.right) || 0);

    // 选左不选右
    let leftSelecetedRightUnselected =
      (selectedMap.get(node.left) || 0) + (unSelectedMap.get(node.right) || 0);

    let rightSelecetedLeftUnselected =
      (unSelectedMap.get(node.left) || 0) + (selectedMap.get(node.right) || 0);
    selectedMap.set(node, node.val + childNodeUnSelectedSum);

    unSelectedMap.set(
      node,
      Math.max(
        childNodeSelectedSum,
        childNodeUnSelectedSum,
        leftSelecetedRightUnselected,
        rightSelecetedLeftUnselected
      )
    );

    console.log(unSelectedMap);
  };

  dfs(root);

  return Math.max(selectedMap.get(root)!, unSelectedMap.get(root)!);
}

const root = new TreeNode(2, null, null);
root.left = new TreeNode(1, null, new TreeNode(4, null, null));
root.right = new TreeNode(3, null, null);

let res = rob(root);
console.log(res);
