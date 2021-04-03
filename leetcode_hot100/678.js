/**
 * 
 * 给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：

任何左括号 ( 必须有相应的右括号 )。
任何右括号 ) 必须有相应的左括号 ( 。
左括号 ( 必须在对应的右括号之前 )。
* 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
一个空字符串也被视为有效字符串。
示例 1:

输入: "()"
输出: True
示例 2:

输入: "(*)"
输出: True
示例 3:

输入: "(*))"
输出: True
注意:

字符串大小将在 [1，100] 范围内。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parenthesis-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * @param {string} s
 * @return {boolean}
 */
 var checkValidString = function(str) {
    let stack = [];
    // 第一轮不管*，先把匹配的左括号和右括号干掉，不匹配的都入栈
    for (const i of str) {
      if (i === ')' && stack.includes('(')) {
        stack.splice(stack.lastIndexOf('('), 1);
      } else {
        stack.push(i);
      }
    }
  
    // 第二轮，这里要清楚栈中的状况，如果存在左括号，那么左括号的右边肯定没有右括号了，存在右括号的话，左边肯定没有左括号了
    // process * and (
    while (stack.includes('(')) {
      // if exists (, but not exist * from index of first (, then unmatched
      if (stack.indexOf('*', stack.indexOf('(')) === -1) {
        return false;
      }
      let temp = stack.indexOf('(');
      for (let i = temp; i < stack.length; i++) {
        if (stack[i] === '*') {
          stack.splice(i, 1);
          stack.splice(temp, 1);
          break;
        } else {
          temp = i;
        }
      }
    }
    // 如果能走到这里，那说明栈里面只剩右括号和*了
    // process * and )
    while (stack.includes(')')) {
      if (stack[0] === ')') {
        return false;
      }
      stack.splice(0, 1);
      stack.splice(stack.indexOf(')'), 1);
    }
  
    return true;
  };