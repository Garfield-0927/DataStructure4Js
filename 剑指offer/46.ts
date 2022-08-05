function translateNum(num: number): number {
  const arr = String(num).split('').map(Number);
  const res: number[][] = [[arr[0]]];

  for(let i = 1; i< arr.length; i++) {
    const len = res.length;
    const curNum = arr[i]
    for(let j = 0; j < len; j++) {
      const curLen = res[j].length;
      const lastNum = res[j][curLen - 1];
      if (lastNum === 1 || (lastNum === 2 && curNum < 6)) {
        const newLastNum = Number(`${lastNum}${curNum}`)
        res.push([...res[j].slice(0, curLen - 1), newLastNum])
      }
      res[j].push(curNum); // 本身作为一个字母
    }
  }

  console.log(res);
  return res.length;
};

translateNum(12258);