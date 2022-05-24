/**
 *
 * @param preorder
 * @param inorder
 * @returns
 *
 * preOrder: [ root, [root.left], [root.right] ]
 * inOrder:  [ [root.left], root, [root.right] ]
 */

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length || !inorder.length) {
    return null;
  }

  const root = new TreeNode(preorder[0], null, null);
  const rtIdx = inorder.indexOf(preorder[0]); // 1

  const leftLength = rtIdx; // 1

  const preOrderLeft = preorder.slice(1, 1 + leftLength); // (1,2)
  const inOrderLeft = inorder.slice(0, rtIdx); // (0,1)

  const preOrderRight = preorder.slice(1 + leftLength); // (2)
  const inOrderRight = inorder.slice(rtIdx + 1); // (2)

  root.left = buildTree(preOrderLeft, inOrderLeft);
  root.right = buildTree(preOrderRight, inOrderRight);
  return root;
}
