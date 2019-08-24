---
title: maximan substring
date: 2019-03-18
tags: 
- 算法题
- Python
---

# leetcode-maximan substring

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

**Example:**

```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```



**solution:**

```python
class Solution:
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        s=0
        large=max(nums)
        for i in nums:
            s+=i
            if s<=0:
                s=0
            if s>0 and s>large:
                large=s
        return large
```

