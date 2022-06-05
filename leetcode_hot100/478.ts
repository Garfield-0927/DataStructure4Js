const generateRandom = (min: number, max: number) => {
  return min + Math.random() * (max - min);
};
// const getDistance = (
//   cor1: [number, number],
//   cor2: [number, number]
// ): number => {
//   return Math.sqrt(
//     Math.pow(cor2[0] - cor1[0], 2) + Math.pow(cor2[1] - cor1[1], 2)
//   );
// };
class Solution {
  private radius: number;
  private x_center: number;
  private y_center: number;
  constructor(radius: number, x_center: number, y_center: number) {
    this.radius = radius;
    this.x_center = x_center;
    this.y_center = y_center;
  }

  randPoint(): number[] {
    // 随机生成x，再限制y，随机生成y
    while (true) {
      const x = Math.random() * (2 * this.radius) - this.radius;
      const y = Math.random() * (2 * this.radius) - this.radius;
      if (x * x + y * y <= this.radius * this.radius) {
        return [this.x_center + x, this.y_center + y];
      }
    }
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
const solution = new Solution(1.0, 0.0, 0.0);
solution.randPoint(); //返回[-0.02493，-0.38077]
solution.randPoint(); //返回[0.82314,0.38945]
solution.randPoint(); //返回[0.36572,0.17248]
