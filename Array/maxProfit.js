/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = Infinity;
  minIndex = 0;
  maxIndex = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      minIndex = i;
    } else {
      if (maxProfit < (prices[i] - minPrice)) {
        maxIndex = i;
      }
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
      maxIndex;
    }
  }
  return {
    maxProfit,
    index: [minIndex, maxIndex],
    days: [prices[minIndex], prices[maxIndex]],
  };
}

const result = maxProfit([7, 5, 3, 2, 1]);
console.log('result: ', result);
