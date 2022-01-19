function minWindow(s: string, t: string): string {
  let i = 0,
    j = 0;
  let res = [-Infinity, +Infinity];
  const map = new Map<string, number>();
  for (const char of t) {
    if (!map.get(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char)! + 1);
    }
  }

  const isWindow = (): boolean => {
    for (const val of map.values()) {
      if (val > 0) {
        return false;
      }
    }
    return true;
  };

  while (i < s.length) {
    let chari = s[i];
    console.log('right char:' + chari);

    if (map.get(chari)!=undefined) {
      map.set(chari, map.get(chari)! - 1);
    }
    console.log(map);

    while (isWindow()) {
      let charj = s[j];
      console.log('left char:' + charj);

      if (map.get(charj) != undefined) {
        map.set(charj, map.get(charj)! + 1);
      }
      console.log(map);

      if (res[1] - res[0] > i - j) {
        res = [j, i];
      }

      j++;
    }

    i++;
  }

  return s.slice(j-1, i);
}

// console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('A', 'AA'));
