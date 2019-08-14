---
title: Pascal's Triangle II    
date: 2019-03-29
tags: 
- 算法题
- Python
---

# leetcode-Pascal's Triangle II

Given a non-negative index *k* where *k* ≤ 33, return the *k*th index row of the Pascal's triangle.

Note that the row index starts from 0.

![img](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)
In Pascal's triangle, each number is the sum of the two numbers directly above it.

**Example:**

```
Input: 3
Output: [1,3,3,1]
```

**Follow up:**

Could you optimize your algorithm to use only *O*(*k*) extra space?

## solution:

```python
class Solution:
    def getRow(self, rowIndex):
        """
        :type rowIndex: int
        :rtype: List[int]
        """
        if rowIndex==0:
            return [1]
        elif rowIndex==1:
            return [1,1]
        elif rowIndex==2:
            return [1,2,1]
        else:
            res=[[1],[1,1]]
            for i in range(2,rowIndex+1):
                res.append([1 if j==0 or j==i else res[i-1][j]+res[i-1][j-1] for j in range(i+1)])
            return res[rowIndex]
```

