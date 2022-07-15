// Postorder   [  leftNode, rightNode, root  ]

function verifyPostorder(postorder: number[]): boolean {
  if (postorder.length <= 2) return true;
  if (postorder.length === 3)
    return !(postorder[1] < postorder[2] && postorder[2] < postorder[0]);

  const root = postorder.pop()!;
  if (postorder[0] > root) return false;
  let i = 0;
  let j = postorder.length - 1;
  while (postorder[i] < root) i++;
  while (postorder[j] > root) j--;

  return (
    j + 1 === i &&
    verifyPostorder(postorder.slice(0, i)) &&
    verifyPostorder(postorder.slice(j + 1))
  );
}

verifyPostorder([1, 2, 5, 10, 6, 9, 4, 3]);
