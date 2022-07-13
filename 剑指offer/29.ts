function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = [];

  while (matrix.length) {
    // top
    res.push(...matrix.shift()!);
    if (!matrix.length) break;
    if (!matrix[0].length) break;

    // right
    let row = matrix.length;
    for (let i = 0; i < row; i++) {
      res.push(matrix[i].pop()!);
    }

    // bottom
    res.push(...matrix.pop()!.reverse());

    // left
    if (!matrix.length || !matrix[0].length) break;
    for (let i = matrix.length - 1; i >= 0; i--) {
      res.push(matrix[i].shift()!);
    }
  }

  return res;
}
