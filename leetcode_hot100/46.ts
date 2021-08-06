/**
 * 全排列问题
 * @param nums
 */

function permute(nums: number[]): number[][] {
  const ans: number[][] = []; // 保存结果的数组
  const isVisited: number[] = new Array(nums.length); // 辅助数组。表示有没有访问过这个元素
  isVisited.fill(0); // 初始化为0

  const dfs = (res: number[]) => {
    if (res.length === nums.length) {
      ans.push([...res]);
      return;
    }

    for (let j = 0; j < nums.length; j++) {
      if (!isVisited[j]) {
        res.push(nums[j]);
        isVisited[j] = 1;
        dfs(res);
        res.pop();
        isVisited[j] = 0;
      }
    }
  };

  dfs([]);
  return ans;
}


console.log(permute([1, 2, 3]));

