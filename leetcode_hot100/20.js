/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
示例 4：

输入：s = "([)]"
输出：false
示例 5：

输入：s = "{[]}"
输出：true
 

提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 解题思路：
// 利用栈的方法
// 如果和栈顶匹配，栈顶出栈，继续往下遍历字符串
// 如果不匹配，入栈

var isValid = function(s) {
  if(s.length % 2){
    return false;
  }
  let stack = [];
  for (const item of s) {
    switch(item){
      case ')':{
        if(stack[stack.length-1]==='('){
          stack.pop();
        } else {
          stack.push(item)
        }
        break;
      }
      case ']':{
        if(stack[stack.length-1]==='['){
          stack.pop();
        } else {
          stack.push(item)
        }
        break;
      }
      case '}':{
        if(stack[stack.length-1]==='{'){
          stack.pop();
        } else {
          stack.push(item)
        }
        break;
      }
      default :{
        stack.push(item)
        break;
      }
    }
  }

  return stack.length === 0;
};

isValid('(]')