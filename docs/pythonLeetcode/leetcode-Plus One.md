---
title: Plus One
date: 2019-03-18
tags: 
- 算法题
- Python
---

# leetcode-Plus One

Given a **non-empty** array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

**Example 1:**

```
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
```

**Example 2:**

```
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
```



**Solution:**

```python
class Solution:
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        l2=[str(i) for i in digits]
        l3=''.join(l2)
        l4=int(l3)+1
        l4=str(l4)
        l4=list(l4)        
        new=[int(i) for i in l4]
        return new
```

