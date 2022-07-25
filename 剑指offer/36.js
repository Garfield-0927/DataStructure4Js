"use strict";
exports.__esModule = true;
var common_1 = require("../leetcode_hot100/common");
function treeToDoublyList(root) {
    if (!root)
        return null;
    var inOrder = [];
    var stack = [];
    var node = root;
    while (node || stack.length) {
        if (node) {
            stack.push(node);
            node = node.left;
        }
        else {
            var left = stack.pop();
            inOrder.push(left);
            node = left.right;
        }
    }
    var head = inOrder[0];
    var length = inOrder.length;
    for (var i = 0; i < length; i++) {
        inOrder[i].left = inOrder[(i - 1 + length) % length];
        inOrder[i].right = inOrder[(i + 1) % length];
    }
    return head;
}
treeToDoublyList(common_1.bst);
