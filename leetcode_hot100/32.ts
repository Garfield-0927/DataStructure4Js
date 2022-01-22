function longestValidParentheses(s: string): number {
  const dp = new Array<number>(s.length).fill(0);
  let ans = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === '(') {
      continue;
    } else if (s[i - 1] === '(') {
      dp[i] = i === 1 ? 2 : dp[i - 2] + 2;
    } else if (s[i - 1] === ')') {
      if (s[i - dp[i - 1] - 1] === '(') {
        let preVaild = dp[i - dp[i - 1] - 2] || 0;
        dp[i] = dp[i - 1] + 2 + preVaild;
      }
    }
    ans = Math.max(ans, dp[i]);
  }

  return ans;
}

longestValidParentheses(')()())');
