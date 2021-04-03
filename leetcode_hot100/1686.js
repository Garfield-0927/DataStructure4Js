/**

Alice 和 Bob 轮流玩一个游戏，Alice 先手。

一堆石子里总共有 n 个石子，轮到某个玩家时，他可以 移出 一个石子并得到这个石子的价值。Alice 和 Bob 对石子价值有 不一样的的评判标准 。双方都知道对方的评判标准。

给你两个长度为 n 的整数数组 aliceValues 和 bobValues 。aliceValues[i] 和 bobValues[i] 分别表示 Alice 和 Bob 认为第 i 个石子的价值。

所有石子都被取完后，得分较高的人为胜者。如果两个玩家得分相同，那么为平局。两位玩家都会采用 最优策略 进行游戏。

请你推断游戏的结果，用如下的方式表示：

如果 Alice 赢，返回 1 。
如果 Bob 赢，返回 -1 。
如果游戏平局，返回 0 。
 

示例 1：

输入：aliceValues = [1,3], bobValues = [2,1]
输出：1
解释：
如果 Alice 拿石子 1 （下标从 0开始），那么 Alice 可以得到 3 分。
Bob 只能选择石子 0 ，得到 2 分。
Alice 获胜。
示例 2：

输入：aliceValues = [1,2], bobValues = [3,1]
输出：0
解释：
Alice 拿石子 0 ， Bob 拿石子 1 ，他们得分都为 1 分。
打平。
示例 3：

输入：aliceValues = [2,4,3], bobValues = [1,6,7]
输出：-1
解释：
不管 Alice 怎么操作，Bob 都可以得到比 Alice 更高的得分。
比方说，Alice 拿石子 1 ，Bob 拿石子 2 ， Alice 拿石子 0 ，Alice 会得到 6 分而 Bob 得分为 7 分。
Bob 会获胜。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/stone-game-vi
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */




/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
function findMax(arr) {
  let max = arr[0];
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      index = i;
    }
  }
  return {max,index}
}

var stoneGameVI = function (aliceValues, bobValues) {
  let PA = aliceValues.reduce((pre, cur) => pre + cur);
  let PB = bobValues.reduce((pre, cur) => pre + cur);
  let Amax,Bmax;
  for (let i = 0; aliceValues.length || bobValues.length; i++) {

    Amax = findMax(aliceValues);
    Bmax = findMax(bobValues);
    if (i % 2) {
      // bob

      if (Bmax.max < Amax.max) {
        PA -= aliceValues.splice(Amax.index,1)[0];
        bobValues.splice(Amax.index,1);
      } else {
        PA -= aliceValues.splice(Bmax.index,1)[0];
        bobValues.splice(Bmax.index,1)
      }
    } else {

      // alice
      if (Amax.max < Bmax.max){
        PB -= bobValues.splice(Bmax.index,1)[0];
        aliceValues.splice(Bmax.index,1)[0];
      } else {
        PB -= bobValues.splice(Amax.index,1)[0];
        aliceValues.splice(Amax.index,1)[0];
      }
    }
  }

  if (PA > PB) {
    return 1;
  } else if (PA < PB) {
    return -1;
  } else {
    return 0;
  }
};
console.log(stoneGameVI([1,3],[2,1]));
