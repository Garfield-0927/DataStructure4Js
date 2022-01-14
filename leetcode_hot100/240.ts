const binarySearch = (arr: number[], target: number): boolean => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};

function searchMatrix(matrix: number[][], target: number): boolean {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);

    if (binarySearch(matrix[i], target)) {
      return true;
    }
  }

  return false;
}

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
    ],
    5
  )
);
