function combinationSum(candidates: number[], target: number): number[][] {
  const ans: number[][] = [];
  const length = candidates.length;
  const dfs = (cur: number[], curSum: number, index: number) => {
    if (curSum === target) {
      ans.push([...cur]);
      return;
    }

    // 剪枝
    if (curSum > target || index >= length) {
      return;
    }
    cur.push(candidates[index]);
    dfs(cur, curSum + candidates[index], index);
    cur.pop();

    if (index !== length - 1) {
      cur.push(candidates[index + 1]);
      dfs(cur, curSum + candidates[index + 1], index + 1);
      cur.pop();
    }

    dfs(cur, curSum, index + 2);
  };

  dfs([], 0, 0);


  return ans;
}

combinationSum([2, 3, 6, 7], 7);
