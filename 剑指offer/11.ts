function minArray(numbers: number[]): number {
  let left = 0;
  let right = numbers.length - 1;
  let mid: number;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (numbers[mid] > numbers[right]) {
      left = mid + 1;
    } else if (numbers[mid] < numbers[right]) {
      right = mid;
    } else {
      right--;
    }
  }
  return numbers[left];
}
minArray([3, 4, 5, 1, 2]);
