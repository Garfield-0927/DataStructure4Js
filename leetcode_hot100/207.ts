function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const map = new Map();
  for (let i = 0; i < numCourses; i++) {
    map.set(i, []);
  }

  for (const prereq of prerequisites) {
    if (prereq[0] === prereq[1]) {
      return false;
    }
    map.set(prereq[0], [prereq[1]]);
  }

  const inDegreeMap = calInDegree(map);

  while (isEnd(inDegreeMap)) {
    deleteNode(map, inDegreeMap);
  }

  return true;
}



/**
 * 计算每个点的入度
 * @param map 邻接表
 * @returns 入度的map
 */
function calInDegree(map: Map<number, number[]>): Map<number, number> {
  const inDegreeMap = new Map<number, number>();
  for (let i = 0; i < map.size; i++) {
    inDegreeMap.set(i, 0);
  }
  for (let val of map.values()) {
    for (const v of val) {
      inDegreeMap.set(v, (inDegreeMap.get(v) as number) + 1);
    }
  }

  return inDegreeMap;
}


/**
 * 删除入度为0的节点
 * @param map 邻接表
 * @param inDegreeMap 入度表
 */
function deleteNode(
  map: Map<number, number[]>,
  inDegreeMap: Map<number, number>
): void {
  for (let [key, val] of inDegreeMap) {
    if (val === 0) {
      for (let item of map.get(key)) {
        inDegreeMap.set(item, (inDegreeMap.get(item) as number) - 1);
      }
      map.delete(key);
    }
  }
}

/**
 * 判断是否还存在入度为0的节点
 * @param map 
 * @returns 
 */
function isEnd(map: Map<number, number>): boolean {
  for (let item of map.values()) {
    if (item === 0) {
      return true;
    }
  }
  return false;
}

console.log(
  canFinish(20, [
    [0, 10],
    [3, 18],
    [6, 11],
    [11, 14],
    [13, 1],
    [15, 1],
    [17, 4],
  ])
);
