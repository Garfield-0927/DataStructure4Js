import { TreeNode } from '../leetcode_hot100/common';

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length || !inorder.length) return null;

  const rootVal = preorder[0];
  const root = new TreeNode(rootVal, null, null);
  const rootIdxInOrder = inorder.findIndex(v => v === rootVal);

  const leftTreePreOrder = preorder.slice(1, rootIdxInOrder + 1);
  const leftTreeInOrder = inorder.slice(0, rootIdxInOrder);
  root.left = buildTree(leftTreePreOrder, leftTreeInOrder);

  const rightTreePreOrder = preorder.slice(rootIdxInOrder + 1);
  const rightTreeInOrder = inorder.slice(rootIdxInOrder + 1);
  root.right = buildTree(rightTreePreOrder, rightTreeInOrder);

  return root;
}
