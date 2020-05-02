### leetcode- First Unique Character in a String

题目原文：

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

（输入一个字符串，给出此串中非重复的字符，并返回其下标，若不存在则返回-1）


```python
class Solution:
    def firstUniqChar(self, s: str) -> int:
        result=-1
        dict1=collections.Counter(s)
        for i,j in enumerate(s):
            if dict1[j]==1:
                result=i
                break
        return result
        
```

