// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

//

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/palindromic-substrings
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// function countingSubstrings(s: string): number {
//   let res = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = 1; (i + j) <= s.length; j++) {
//       let s1 = s.split('').splice(i, j).join('');
//       let s2 = s.split('').splice(i, j).reverse().join('');
//       console.log('s1:' + s1 + '=====s2:' + s2);
//       console.log('=============');
//       if (s1 === s2) {
//         res++;
//       }
//     }
//   }
//   return res;
// }

// let s1 = 'abc'.split('').splice(0, 3).join('');
// console.log(s1);

// console.log(countingSubstrings('aba'));

function countSubstrings(s: string): number {
  let res = 0;
  for (let mid = 0; mid < s.length; mid++) {
    let left: number, right: number;
    left = right = mid;
    while (
      left >= 0 &&
      right < s.length &&
      s.charAt(left) === s.charAt(right)
    ) {
      left--;
      right++;
      res++;
    }
    left = mid - 1;
    right = mid;
    while (
      left >= 0 &&
      right < s.length &&
      s.charAt(left) === s.charAt(right)
    ) {
      left--;
      right++;
      res++;
    }
  }

  return res;
}

console.log(countSubstrings("aba"));
