"use strict";
exports.__esModule = true;
exports.bst = exports.traverseLinkedList = exports.testLinkedList = exports.testTree = exports.ListNode = exports.TreeNode = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val == undefined ? 0 : val;
        this.left = left == undefined ? null : left;
        this.right = right == undefined ? null : right;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
var testTree = new TreeNode(1, null, null);
exports.testTree = testTree;
testTree.left = new TreeNode(2, new TreeNode(3, null, null), new TreeNode(4, null, null));
testTree.right = new TreeNode(5, null, new TreeNode(6, null, null));
var testLinkedList = new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0, null)))));
exports.testLinkedList = testLinkedList;
var traverseLinkedList = function (node) {
    if (!node)
        return;
    while (node) {
        console.log(node.val);
        node = node.next;
    }
};
exports.traverseLinkedList = traverseLinkedList;
var traverseTreeByLevel = function (node) {
    var q = [];
    q.push(node);
    var res = [];
    var curNum = 1;
    var nodeNum = 0;
    while (q.length) {
        var tmp = [];
        while (curNum) {
            var node_1 = q.shift();
            tmp.push(node_1.val);
            if (node_1.left) {
                q.push(node_1.left);
                nodeNum++;
            }
            if (node_1.right) {
                q.push(node_1.right);
                nodeNum++;
            }
            curNum--;
        }
        curNum = nodeNum;
        nodeNum = 0;
        res.push(tmp);
    }
    console.log(res);
    return res;
};
// traverseTreeByLevel(testTree);
var bst = new TreeNode(4, new TreeNode(2, new TreeNode(1, null, null), new TreeNode(3, null, null)), new TreeNode(5, null, null));
exports.bst = bst;
