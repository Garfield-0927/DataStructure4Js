function cuttingRope(n: number): number {
  if (n <= 3) return n - 1;
  const dp = [0, 1, 2, 3];
  for (let i = 4; i <= n; i++) {
    let max = 0;
    for (let j = 1; j < i; j++) {
      max = Math.max(max, dp[i - j] * dp[j]);
    }
    dp.push(max);
  }
  return dp[n];
}

console.log(cuttingRope(2));
console.log(cuttingRope(10));
