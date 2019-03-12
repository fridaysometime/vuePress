---
title: Add Digits
date: 2019-03-12
tags: 
- 算法题
- Python
---

# leetcode-Add Digits

Given a non-negative integer `num`, repeatedly add all its digits until the result has only one digit.

**Example:**

```
Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
             Since 2 has only one digit, return it.
```

## 思路

给定一个非负整数，将该整数的所有数字的和作为新的整数，重复直至得到只有一个数的整数。 
比如：给定num=38，上述过程为：3 + 8 = 11, 1 + 1 = 2。因为2只有一个数字，所以返回2。 
进一步：你能不用迭代或循环，在O(1)时间解决该问题吗？

根据提示，当输入从1到100变化时，可以发现，输出在“1，2，3，4，5，6，7，8，9，1，2，3，4，5，6，7，8，9，…”这样循环。于是，就有了下面O(1)的算法。 
dr(n) = 0, if n = 0 
dr(n) = 9, if n != 0 and n mod 9 == 0 
dr(n) = n mod 9, if n mod 9 != 0 
或， 
dr(n) = 1 + (n-1) mod 9

**solution:**

```python
class Solution:
    def addDigits(self, num: int) -> int:
        if num==0:
            return 0
        elif num%9==0:
            return 9
        else:
            return num%9
        
```

