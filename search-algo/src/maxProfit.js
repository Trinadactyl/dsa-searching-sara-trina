let prices = [121, 123, 97, 128, 98, 97, 105]

function maxProfit(prices) {
  let max = 0
  let day = 0

  for(let i = 0; i < prices.length; i++) {
    let current = prices[i+1] - prices[i] 
    if (current > max) {
      max = current
      day = i
    }
  }
  console.log( `Buy on day ${day + 1} to make max profit of $ ${max}`)
}

maxProfit(prices)

// day 1 = 128
// day 2 = 97
// day 3 = 121

// day 2 - day 1 = -31 === not a profit

// day 3 - day 2 = 24 === profit