function reconstructQueue(people: [number, number][]): number[][] {
  const firstSort = people.sort((a: [number, number], b: [number, number]) => {
    return b[0] - a[0] || a[1] - b[1];
  });
  console.log(firstSort);

  for (let i = 1; i < firstSort.length; i++) {
    let eh = 0;
    for (let j = 0; j < i; j++) {
      if (firstSort[j][0] >= firstSort[i][0]) eh++;
    }
    if (eh === firstSort[i][1]) {
      continue;
    } else {
      let curIdx = i;

      while (curIdx > 0) {
        [firstSort[curIdx], firstSort[curIdx - 1]] = [
          firstSort[curIdx - 1],
          firstSort[curIdx],
        ];
        curIdx--;
        let eh2 = 0;
        for (let j = 0; j < curIdx; j++) {
          if (firstSort[j][0] >= firstSort[curIdx][0]) eh2++;
        }
        if (eh2 === firstSort[curIdx][1]) {
          break;
        }
      }
    }
  }

  return firstSort;
}

reconstructQueue([
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 0],
  [6, 1],
  [5, 2],
]);
reconstructQueue([
  [6, 0],
  [5, 0],
  [4, 0],
  [3, 2],
  [2, 2],
  [1, 4],
]);
