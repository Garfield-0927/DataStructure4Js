const arrMove2 = arr => {
  let i, j;
  i = j = 0;
  let length = arr.length;
  for (; i < length; i++) {
    let curNum = arr[i];
    if (curNum === 0) {
      for (j = i + 1; j < length; j++) {
        if (arr[j] !== 0) {
          break;
        }
      }
      if (j !== length) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};

console.log(arrMove2([0, 1, 0, 3, 12]));
