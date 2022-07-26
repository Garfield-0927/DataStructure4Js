const majorityNumber = (nums: number[]): number => {
  const getRandom = (min: number, max: number) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const len = nums.length;
  const minNum = len / 2;

  const appearNum = (num: number) => {
    let cnt = 0;
    nums.forEach(n => {
      n === num && cnt++;
    });
    return cnt;
  };
  while (true) {
    const random = getRandom(0, len - 1);
    const cnt = appearNum(nums[random]);
    if (cnt > minNum) {
      return nums[random];
    }
  }
};
