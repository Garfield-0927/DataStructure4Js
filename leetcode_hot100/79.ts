function exist(board: string[][], word: string): boolean {
  // 记录踪迹以及深度优先遍历
  const trace: [number, number][] = [];
  const dfs = (i: number, j: number, target: string): boolean => {
    console.log(`targetStr: ${target}`);

    trace.push([i, j]);
    console.log(trace);

    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
      trace.pop();
      return false;
    }

    const word = target[0];
    if (board[i][j] !== word) {
      trace.pop();
      return false;
    }

    const notInTrace = (x: number, y: number) => {
      for (let i = 0; i < trace.length - 1; i++) {
        const item = trace[i];
        if (x === item[0] && y === item[1]) {
          return false;
        }
      }
      return true;
    };

    const next = target.slice(1);
    if (!next.length) return true;
    const checkDown = notInTrace(i + 1, j) && dfs(i + 1, j, next);
    const checkRight = notInTrace(i, j + 1) && dfs(i, j + 1, next);
    const checkUp = notInTrace(i - 1, j) && dfs(i - 1, j, next);
    const checkLeft = notInTrace(i, j - 1) && dfs(i, j - 1, next);
    const curTrace = trace.pop();
    console.log(curTrace, checkDown, checkLeft, checkRight, checkUp);

    return checkDown || checkRight || checkLeft || checkUp;
  };

  // 遍历board找到第一个字母的所在
  const coordinate = [];
  const firstWord = word[0];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === firstWord) {
        coordinate.push([i, j]);
      }
    }
  }

  // 对符合的字母坐标进行深度优先遍历
  if (!coordinate.length) return false;
  for (let i = 0; i < coordinate.length; i++) {
    const cor = coordinate[i];
    trace.length = 0;
    if (dfs(cor[0], cor[1], word)) {
      return true;
    }
  }
  return false;
}
// const ans = exist(
//   [
//     ['A', 'B', 'C', 'E'],
//     ['S', 'F', 'C', 'S'],
//     ['A', 'D', 'E', 'E'],
//   ],
//   'ABCCED'
// );
// console.log(ans);
console.log(
  exist(
    [
      ['a', 'a', 'a'],
      ['A', 'A', 'A'],
      ['a', 'a', 'a'],
    ],
    'aAaaaAaaA'
  )
);
