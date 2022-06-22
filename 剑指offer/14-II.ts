/**
 * 这一题因为要n扩大了范围，不太适合用dp
 * @param n
 * @returns
 */
function cuttingRope2(n: number): number {
  if (n <= 3) return n - 1;
  const dp = [0n, 1n, 2n, 3n];
  for (let i = 4; i <= n; i++) {
    let max = BigInt(0);
    for (let j = 1; j < i; j++) {
      const tmp = BigInt(dp[i - j] * dp[j]);
      max = max > tmp ? max : tmp;
    }
    dp.push(max);
  }
  return Number(dp[n] % 1000000007n);
}

function cuttingRope2Optmize(n: number): number {
  if (n <= 3) return n - 1;
  let ret = 1;
  if (n % 3 == 1) {
    ret = 4;
    n = n - 4;
  }
  if (n % 3 == 2) {
    ret = 2;
    n = n - 2;
  }
  while (n) {
    ret = (ret * 3) % 1000000007;
    n = n - 3;
  }
  return ret
}
