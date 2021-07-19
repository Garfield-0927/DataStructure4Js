function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const map = new Map();
  for (let i = 0; i < numCourses; i++) {
    map.set(i, []);
  }

  for (const prereq of prerequisites) {
    if (prereq[0] === prereq[1]) {
      return false;
    }
    map.set(prereq[0], [...map.get(prereq[0]), prereq[1]]);
  }

  const inDegreeMap = calInDegree(map);
  console.log(map);
  console.log('======================');
  console.log(inDegreeMap);
  console.log('======================');

  while (!isEnd(inDegreeMap)) {
    deleteNode(map, inDegreeMap);
  }

  console.log(map);
  console.log('======================');
  console.log(inDegreeMap);
  return inDegreeMap.size === 0;
}

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

function deleteNode(
  map: Map<number, number[]>,
  inDegreeMap: Map<number, number>
): void {
  for (let [key, val] of inDegreeMap) {
    if (val === 0) {
      for (let item of map.get(key) as Array<number>) {
        inDegreeMap.set(item, (inDegreeMap.get(item) as number) - 1);
      }
      inDegreeMap.delete(key);
      map.delete(key);
    }
  }
}

function isEnd(map: Map<number, number>): boolean {
  for (let item of map.values()) {
    if (item === 0) {
      return false;
    }
  }
  return true;
}

console.log(
  canFinish(3, [
    [1, 0],
    [1, 2],
    [0, 1],
  ])
);
