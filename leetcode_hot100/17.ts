function letterCombinations(digits: string): string[] {
  if (!digits) {
    return [];
  }

  const map = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];
  const len = digits.length;
  const res = [];
  const dfs = (curStr: string, curIdx: number) => {
    if (curIdx === len) {
      res.push(curStr);
      return;
    }

    let n = parseInt(digits[curIdx]);
    for (let i = 0; i < map[n].length; i++) {
      dfs(curStr + map[n][i], curIdx + 1);
    }
  };

  dfs('', 0);

  return res;
}
