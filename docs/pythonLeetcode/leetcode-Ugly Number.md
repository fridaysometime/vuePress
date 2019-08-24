---
title: Ugly Number
date: 2019-03-18
tags: 
- 算法题
- Python
---

# leetcode-Ugly Number

Write a program to check whether a given number is an ugly number.

Ugly numbers are **positive numbers** whose prime factors only include `2, 3, 5`.

**Example 1:**

```
Input: 6
Output: true
Explanation: 6 = 2 × 3
```

**Example 2:**

```
Input: 8
Output: true
Explanation: 8 = 2 × 2 × 2
```

**Example 3:**

```
Input: 14
Output: false 
Explanation: 14 is not ugly since it includes another prime factor 7.
```

## 思路

编程判断一个给定的数是否是“ugly number”。

所谓“ugly number”是指质因数仅包含在 2，3，5 中的正数。比如，6和8都是“ugly number”，而14不是，因为14包含7这个质因数。

注意，1 也被认为是”ugly number”。

根据定义，依次将所给的数除以 2，3，5 直至无法除尽，如果这时得到1则说明所给的数的质因子不超出2，3，5三个数，否则说明有其他质因数。不用迭代法而用递归也可以实现

**solution:**

```python
class Solution:
    def isUgly(self, num: int) -> bool:
        if num<=0:
            return False
        elif num==1:
            return True
        elif num%2==0:
            return self.isUgly(num/2)
        elif num%3==0:
            return self.isUgly(num/3)
        elif num%5==0:
            return self.isUgly(num/5)
        else:
            return False
        
```



