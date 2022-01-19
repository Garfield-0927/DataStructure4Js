function dailyTemperatures(temperatures: number[]): number[] {
  const arr: number[] = new Array(temperatures.length);
  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        arr[i] = j - i;
        break;
      }
    }
    if (!arr[i]) {
      arr[i] = 0
    }
  }
  
  return arr;
}

dailyTemperatures([73,74,75,71,69,72,76,73])



