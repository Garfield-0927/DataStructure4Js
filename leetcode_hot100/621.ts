interface ITaskInfo {
  num: number;
  defer: number;
}

function leastInterval(tasks: string[], n: number): number {
  const map = new Map<string, ITaskInfo>();
  for (const item of tasks) {
    if (map.has(item)) {
      map.set(item, { num: map.get(item)!.num + 1, defer: 0 });
    } else {
      map.set(item, { num: 1, defer: 0 });
    }
  }

  let time = 0;

  while (map.size) {
    let curTask: string | undefined = undefined;

    for (const item of map.entries()) {
      if (!curTask) {
        curTask = item[0];
      } else {
        if (item[1].defer < map.get(curTask)!.defer) {
          curTask = item[0];
        } else if (
          item[1].defer === map.get(curTask)!.defer &&
          item[1].num > map.get(curTask)!.num
        ) {
          curTask = item[0];
        }
      }
    }

    if (map.get(curTask!)!.defer === 0) {
      if (map.get(curTask!)!.num === 1) {
        map.delete(curTask!);
      } else {
        map.set(curTask!, { num: map.get(curTask!)!.num - 1, defer: n });
      }
    } else {
      curTask = undefined;
    }

    for (const item of map.entries()) {
      if (item[0] !== curTask) {
        if (item[1].defer > 0) {
          item[1].defer--;
        }
      }
    }

    time++;
  }

  return time;
}

// leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2);
leastInterval(['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'E'], 2);
