/**
 * @param pushed
 * @param popped
 */

function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const s: number[] = [];
  let j = 0;
  for (let i = 0; i < pushed.length; i++) {
    if (pushed[i] === popped[j]) {
      j++;
      while (s.length > 0 && s[s.length - 1] === popped[j]) {
        j++;
        s.pop();
      }
    } else {
      s.push(pushed[i]);
    }
  }
  return j === popped.length && !s.length
}
