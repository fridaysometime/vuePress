---
title: Pascal's Triangle    
date: 2019-03-29
tags: 
- 算法题
- Python
---

# leetcode-Pascal's Triangle

Given a non-negative integer *numRows*, generate the first *numRows* of Pascal's triangle.

![img](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)
In Pascal's triangle, each number is the sum of the two numbers directly above it.

**Example:**

```
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

## solution:

```python
class Solution:
    def generate(self, numRows):
        """
        :type numRows: int
        :rtype: List[List[int]]
        """
        if numRows==0:
            return []
        elif numRows==1:
            return [[1]]
        elif numRows==2:
            return [[1],[1,1]]
        else:
            res=[[1],[1,1]]
            for i in range(2,numRows):
                res.append([1 if j==0 or j==i else res[i-1][j]+res[i-1][j-1] for j in range(i+1)])
            return res
        
```

