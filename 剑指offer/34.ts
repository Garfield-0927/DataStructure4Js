import { TreeNode } from '../leetcode_hot100/common';

function pathSum(root: TreeNode | null, target: number): number[][] {
  if (!root) return [];

  const res: number[][] = [];

  const findPath = (curNode: TreeNode, curSum: number, curPath: number[]) => {
    if (curSum + curNode.val === target && !curNode.left && !curNode.right) {
      res.push([...curPath, curNode.val]);
    }

    curPath.push(curNode.val);
    if (curNode.left) {
      findPath(curNode.left, curSum + curNode.val, curPath);
      curPath.pop();
    }

    if (curNode.right) {
      findPath(curNode.right, curSum + curNode.val, curPath);
      curPath.pop();
    }
  };

  findPath(root, 0, []);
  return res;
}
