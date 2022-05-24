import { testTree, TreeNode } from './common';

function flatten(root: TreeNode | null): void {
  if (!root) return;

  const vals = [];

  const s = [];
  let node = root;
  s.push(node);

  while (s.length) {
    node = s.pop()!;
    vals.push(node.val);

    if (node.right) {
      s.push(node.right);
    }

    if (node.left) {
      s.push(node.left);
    }
  }

  node = root;
  while (vals.length) {
    let v = vals.shift();
    node.val = v;
    node.left = null;
    if (node.right) {
      node = node.right;
    } else {
      if(vals.length) {
        return;
      }
      node.right = new TreeNode(0, null, null);
      node = node.right;
    }
  }
}

flatten(testTree);
