---
title: sqrtx
date: 2019-03-18
tags: 
- 算法题
- Python
---

# leetcode-sqrtx

Implement `int sqrt(int x)`.

Compute and return the square root of *x*, where *x* is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

**Example 1:**

```
Input: 4
Output: 2
```

**Example 2:**

```
Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.
```



**solution:**

```python
class Solution:
    def mySqrt(self, x):
        """
        :type x: int
        :rtype: int
        """
        l=0
        r=x
        while l<r:
            m=int((l+r)/2)
            if x<m**2:
                r=m
            else:
                l=m+1
        if l>1:
            return l-1
        else:
            return l
```

