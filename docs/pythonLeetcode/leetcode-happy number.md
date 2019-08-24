---
title: happy number
date: 2019-03-18
tags: 
- 算法题
- Python
---

# leetcode-happy number

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

**Example:** 

```
Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

**思路**

题目分析：首先，本题需要判定输入的整数其各位数平方求和最终值是否为1 ？输入整数位整型，返回值为布尔型。

* 需要利用到循环实现每一次求和后判定是否为1 。

* 需要排除有可能出现死循环的状况，经过几次平方求和后，结果为某一个出现过的值

**solution:**

```python
class Solution(object):
    def isHappy(self, n):
        """
        :type n: int
        :rtype: bool
        """
        result=set()
        while n!=1:
            n=sum([int(i)**2 for i in str(n)])
            if n not in result:
                result.add(n)
            else:
                return False
            
        return True
```

