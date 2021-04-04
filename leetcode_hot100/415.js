/**
 * 
 * 
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

 

提示：

num1 和num2 的长度都小于 5100
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 解题思路：
// 字符串变成数组，然后reverse，然后按位相加即可。


var addStrings = function (num1, num2) {
  let arr1 = num1.split('').reverse();
  let arr2 = num2.split('').reverse();
  let res = arr1.length > arr2.length ? arr1 : arr2;
  let i = 0;
  while (arr1[i] && arr2[i]) {
    let sum = parseInt(arr1[i]) + parseInt(arr2[i]);
    if (sum >= 10) {
      res[i] = sum % 10;
      if (i === res.length - 1) {
        res.push(1);
      } else {
        res[i + 1] = parseInt(res[i + 1]) + 1;
      }
    } else {
      res[i] = sum;
    }
    i++;
  }
  while (i < res.length) {
    if (res[i] >= 10) {
      res[i] %= 10;
      if (i === res.length - 1) {
        res.push(1);
      } else {
        res[i + 1] = res[i + 1] - 0 + 1;
      }
    }
    i++;
  }
  return res.reverse().join('');
};
console.log(addStrings('6994', '36'));
