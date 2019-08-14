---
title: Best Time to Buy and Sell Stock    
date: 2019-03-29
tags: 
- 算法题
- Python
---

# leetcode-Best Time to Buy and Sell Stock

Say you have an array for which the *i*th element is the price of a given stock on day *i*.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

**Example 1:**

```
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
```

**Example 2:**

```
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

## solution:

扫描一遍数组，使用low来标记最低价位，如果有更低的价位，置换掉。

```python
class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        if len(prices)<=0:
            return 0
        small=prices[0]
        max_p=0
        for i in range(len(prices)):
            if prices[i]<small:
                small=prices[i]
            max_p=max(max_p,prices[i]-small)
        return max_p
```

