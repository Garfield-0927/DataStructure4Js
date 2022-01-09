const pArr = [0.15, 0.1, 0.05, 0.1, 0.2];
const qArr = [0.05, 0.1, 0.05, 0.05, 0.05, 0.1];
class CalTree {
  constructor(pArr, qArr) {
    this.arr = this.combineArray(pArr, qArr);
    this.middleWalk = [];
  }
  combineArray(pArr, qArr) {
    return [].concat(pArr, qArr).map((item, index) => {
      const ind = parseInt(index / 2);
      const inc = ind + 1;
      return index % 2 === 0 ? { value: qArr[ind], name: "qArr" + ind } :
        { value: pArr[ind], name: "pArr" + inc};
    });
  }
  getTreeRecursive() {
    const result = this.getArr(this.arr, 1);
    this.walkTree(result.child);
    console.log("最优二叉树的中序遍历结果是：",this.middleWalk.join(","));
  }
  walkTree(tree) {
    this.middleWalk.push(tree.root);
    if (typeof tree.left === "string") {
      this.middleWalk.push(tree.left);
    } else {
      this.walkTree(tree.left);
    }
    if (typeof tree.right === "string") {
      this.middleWalk.push(tree.right);
    } else {
      this.walkTree(tree.right);
    }
  }
  getArr(arr, depth) {
    let mini = { value: 999999999999, child: null };
    for (let i = 1; i < arr.length;){
      const leftArr = arr.slice(0, i);
      const rightArr = arr.slice(i+1);
      let leftCost, leftTree;
      if (leftArr.length === 1) {
        leftCost = leftArr[0].value * (depth + 1);
        leftTree = leftArr[0].name;
      } else {
        const obj = this.getArr(leftArr, depth + 1);
        leftCost = obj.value;
        leftTree = obj.child;
      }
      let rightCost, rightTree;
      if (rightArr.length === 1) {
        rightCost = rightArr[0].value * (depth + 1);
        rightTree = rightArr[0].name;
      } else {
        const obj = this.getArr(rightArr, depth + 1);
        rightCost = obj.value;
        rightTree = obj.child;
      }
      const treeCost = arr[i].value * depth + leftCost + rightCost;
      if (treeCost < mini.value) {
        mini = {
          value: treeCost,
          child: {
            root: arr[i].name,
            left: leftTree,
            right: rightTree
          }
        };
      }
      i += 2;
    }
    console.log(mini);
    return mini;
  }

}
new CalTree(pArr, qArr).getTreeRecursive();