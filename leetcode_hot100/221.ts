function maximalSquare(matrix: string[][]): number {
  const dpMatrix = new Array<Array<number>>(matrix.length);
  const row = matrix.length;
  const col = matrix[0].length;

  for (let i = 0; i < row; i++) {
    dpMatrix[i] = new Array<number>(col);
  }

  let res = 0;
  for (let j = 0; j < col; j++) {
    for (let i = 0; i < row; i++) {
      if (i === 0 || j === 0) {
        dpMatrix[i][j] = parseInt(matrix[i][j]);
      } else {
        if (matrix[i][j] === '1') {
          dpMatrix[i][j] =
            Math.min(
              dpMatrix[i - 1][j],
              dpMatrix[i][j - 1],
              dpMatrix[i - 1][j - 1]
            ) + 1;
        } else {
          dpMatrix[i][j] = 0;
        }
      }
      if (res < dpMatrix[i][j]) {
        res = dpMatrix[i][j];
      }
    }
  }

  return res * res;
}

maximalSquare([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
]);
