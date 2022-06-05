function decodeString(s: string): string {
  const findLastBracket = (s: string): [number, number] => {
    const leftBracket = s.lastIndexOf('[');
    const rightBracket = s.indexOf(']', leftBracket);
    return [leftBracket, rightBracket];
  };

  let str = s;
  while (str.indexOf('[') !== -1) {
    const [left, right] = findLastBracket(str);
    let i: number;
    for (i = left - 1; i >= 0; i--) {
      if (!str[i].match(/[0-9]/)) break;
    }
    
    const strLeft = str.slice(0, i + 1);
    const count = str.slice(i + 1, left);
    const repeatStr = str.slice(left + 1, right);
    const midStr = repeatStr.repeat(parseInt(count));
    const strRight = str.slice(right + 1);
    console.log(`left:${strLeft}\tmid:${midStr}\tright:${strRight}\t`);

    str = strLeft + midStr + strRight;
  }
  console.log(str);
  return str;
}

// decodeString('2[abc]3[cd]ef');
// decodeString('3[a2[c]]');
// decodeString('abc3[cd]xyz');
decodeString('100[leetcode]');
