function maxProfit1(prices: number[]): number {
  let profit = 0;
  let minprice = Infinity;
  for (const price of prices) {
    minprice = Math.min(price, minprice);
    profit = Math.max(profit, price - minprice);
  }
  return profit;
}
