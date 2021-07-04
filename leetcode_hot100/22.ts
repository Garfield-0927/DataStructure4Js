// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 示例 1：
// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

// 示例 2：
// 输入：n = 1
// 输出：["()"]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/generate-parentheses
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function generateParenthesis(n: number): string[] {
  let res: string[] = [];

  function dfs(s: string, l: number, r: number, n: number, res: string[]) {
    // 递归结束，即符合的结果
    if (l == n && r == n) {
      res.push(s);
      return;
    }

    // 减枝，左括号的使用个数小于右括号的使用个数的时候，显然不成立
    if (l < r) {
      return;
    }

    
    if (l < n) {
      dfs(s + '(', l + 1, r, n, res);
    }
    if (r < n) {
      dfs(s + ')', l, r + 1, n, res);
    }
  }

  dfs("(",1,0,n,res);
  return res;
}

console.log(generateParenthesis(3));


