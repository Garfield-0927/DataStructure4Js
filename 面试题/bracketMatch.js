/**
 * 括号匹配问题
 * 给定一个字符串，字符串中只有3中字符：（）*
 * 其中*既可以是空，也可以当作是（，也可以当作是）
 * 最后要求实现一个函数，接收参数为一个字符串，返回结果true false
 */

function bracketMatch(str) {
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
    console.log(stack.join(""));
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
  console.log(stack.join(''));
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
}
