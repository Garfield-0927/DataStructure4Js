/*
请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let ptr1 = head;
  let ptr2 = head;
  while (ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next == null ? ptr2.next : ptr2.next.next;
  }
  let prePtr = null;
  let ptr3;
  while(ptr1){
    let tempPtr = ptr1.next;
    
    if(tempPtr == null){
      ptr3 = ptr1;
    }
    ptr1.next = prePtr;
    prePtr = ptr1;
    ptr1 = tempPtr;
  }
  ptr2 = head;
  while(ptr2&&ptr3){
    if(ptr2.val !== ptr3.val){
      return false;
    }
    ptr2 = ptr2.next;
    ptr3 = ptr3.next;
  }

  return true;
};


let node1 = new ListNode(1,null);
let node2 = new ListNode(2,null);
let head = node1;
node1.next = node2;
isPalindrome(head)