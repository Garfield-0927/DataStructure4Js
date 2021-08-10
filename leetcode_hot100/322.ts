// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

// 你可以认为每种硬币的数量是无限的。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/coin-change
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// function coinChange(coins: number[], amount: number): number {
//   if (!amount) {
//     return 0;
//   }
//   coins.sort((a, b) => a - b);
//   console.log(coins);

//   const dfs = (left: any, ans: any, i: any): any => {
//     console.log(left,ans,i);

//     if (!left) {
//       return ans;
//     }

//     if (left >= coins[i]) {
//       return dfs(left - coins[i], ans + 1, i);
//     } else {
//       if (i === 0) {
//         return -1;
//       }
//       return dfs(left, ans, i - 1);
//     }
//   };

//   return dfs(amount, 0, coins.length - 1);
// }

function coinChange(coins: number[], amount: number): number {
  const f = new Array(amount + 1).fill(Infinity); // 初始化一个都是无穷的数组，对无穷进行运算还是无穷
  f[0] = 0; // 题目案例中amount为0时返回0
  coins.sort((a, b) => a - b);  // 进行ascending排序

  // 考虑到比最小面值的coin还小的amount肯定返回-1，这里就直接从最小面值的coin开始循环
  for (let i = coins[0]; i <= amount; i++) {

    
    /**
     * 精华部分在这里：
     * 假设一个amount，那么我们求f[amount]的最优解有以下几种可能：
     * f[amount - coins[i]] + 1 , i < coins.length
     * 
     * 假设 coins = [2,5,7] amount = 17;
     * 那么f[amount]的可能最优解有这么几种可能：
     * f[17 - 2] + 1; 就是amount = 17-2 时的最优解 再加上一枚面值为2的硬币
     * f[17 - 5] + 1
     * f[17 - 7] + 1
     * 接着只要从上面这三项中去最小项即可。
     */
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] > i) continue;
      f[i] = Math.min(f[i], f[i - coins[j]] + 1);
    }
  }
  return f[amount] === Infinity ? -1 : f[amount];
}
console.log(coinChange([278, 274, 153, 490], 8633));
console.log(coinChange([2], 3));
