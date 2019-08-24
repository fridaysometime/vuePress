---
title: Implement strStr()
date: 2019-03-18
tags: 
- 算法题
- Python
---

# leetcode-Implement strStr()

Implement [strStr()](http://www.cplusplus.com/reference/cstring/strstr/).

Return the index of the first occurrence of needle in haystack, or **-1** if needle is not part of haystack.

**Example 1:**

```
Input: haystack = "hello", needle = "ll"
Output: 2
```

**Example 2:**

```
Input: haystack = "aaaaa", needle = "bba"
Output: -1
```

**Solution:**

```python
class Solution:
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        result=haystack.find(needle)
        print(result)
        if result!=-1:
            return result
        else:
            return -1
        
```



