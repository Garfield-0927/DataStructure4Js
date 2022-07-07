/**
 * s = "mississippi"
 * p = "mis*is*p*."
 *
 * undone, cannot solve it...
 */

function isMatch(s: string, p: string): boolean {
  console.log(s, p);

  if (!s.length) {
    while (p.match(/([.a-z]\*)/)) {
      p = p.replace(/([.a-z]\*)/, '');
    }
    return !p.length;
  }

  let idx4s = 0;
  let idx4p = 0;
  let isStarMatch = '';

  while (idx4s < s.length && idx4p < p.length) {

    const ch_s = s.charAt(idx4s);
    const ch_p = p.charAt(idx4p);
    const ch_p_post = p.charAt(idx4p + 1);
    // console.log(ch_s, ch_p, ch_p_post);
    if (ch_p_post !== '*') {
      if (ch_s !== ch_p && ch_p !== '.') {
        return false;
      }
      idx4s++;
      idx4p++;
      isStarMatch = '';
    } else {
      if (ch_p !== '.') {
        while (idx4s < s.length && s.charAt(idx4s) === ch_p) {
          isStarMatch = ch_p;
          idx4s++;
        }
        idx4p += 2;
        while (p.charAt(idx4p) === ch_p) {
          if (p.charAt(idx4p + 1) === '*') {
            idx4p += 2;
          } else {
            idx4p++;
          }
        }
      } else {
        for (let i = idx4s; i <= s.length; i++) {          
          if (isMatch(s.slice(i), p.slice(idx4p + 2))) return true;
        }
        return false;
      }
    }
  }

  // 都匹配完
  if (idx4p === p.length && idx4s === s.length) return true;
  if (idx4s !== s.length) return false;
  let pLeft = p.slice(idx4p);

  while (pLeft.match(/([.a-z]\*)/)) {
    pLeft = pLeft.replace(/([.a-z]\*)/, '');
  }
  pLeft = pLeft[0] === isStarMatch ? pLeft.slice(1) : pLeft;
  return !pLeft.length;
}

// console.log(isMatch('mississippi', 'mis*is*ip*.')); // true
// console.log(isMatch('aa', 'a')); // false
// console.log(isMatch('aa', 'a*')); // true
// console.log(isMatch('', 'c*')); // true
// console.log(isMatch('', 'c*.')); // false
// console.log(isMatch('aab', 'c*a*.')); // true
// console.log(isMatch('aab', '.*')); // true
// console.log(isMatch('aaa', 'ab*a*c*a')); // true
// console.log(isMatch('aaaaaaaaaaaaab', 'a*a*a*a*a*a*a*a*a*a*a*a*b')); // true
console.log(isMatch('baba', 'b*.*')); // true
