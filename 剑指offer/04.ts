// function findNumberIn2DArray(matrix: number[][], target: number): boolean {
//   const row = matrix.length;
//   if(!row) return false;
//   const col = matrix[0].length;

//   for (let i = 0; i < row; i++) {
//     if (matrix[i][0] > target) {
//       return false;
//     }
//     if (matrix[i][col - 1] < target) {
//       continue;
//     }

//     for (let j = 0; j < col; j++) {
//       if (matrix[i][j] === target) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

// optimize
function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (!matrix.length) return false;

  let i = 0;
  let j = matrix[0].length - 1;
  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    }

    if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }

  return false;
}
