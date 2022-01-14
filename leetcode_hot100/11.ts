function maxArea(height: number[]): number {
  if (height.length <= 1) {
    return 0;
  }


  let left = 0,
    right = height.length - 1;
  let capacity = 0;
  while (left < right) {
    let tempCapacity = (right - left) * Math.min(height[right], height[left]);
    capacity = Math.max(capacity, tempCapacity);

    if (height[right] < height[left]) {
      right--;
    } else {
      left++;
    }
  }

  return capacity;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

