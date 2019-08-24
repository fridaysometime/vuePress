---
title: Isomorphic String
date: 2019-03-18
tags: 
- 算法题
- Python
---

# leetcode-Isomorphic String

Given two strings **s** and **t**, determine if they are isomorphic.

Two strings are isomorphic if the characters in **s** can be replaced to get **t**.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

**Example 1:**

```
Input: s = "egg", t = "add"
Output: true
```

**Example 2:**

```
Input: s = "foo", t = "bar"
Output: false
```

**Example 3:**

```
Input: s = "paper", t = "title"
Output: true
```

## 思路

给定两个字符串，判断它们是否是同构的。如果一个字符串s中的字符可以替换成别的字符，从而得到另一个字符串t，那么两个字符串同构。 
字符串中所有的一样的字符都要替换，并且要保持原顺序。两个不同的字符不能替换成相同的字符，一个字符可以替换成它自己。

先遍历一遍s和t，将s到t的字符映射存放在dict中，遍历过程中如果发现某个位置的映射与已经确定的映射冲突则可以直接返回false。在遍历s和t的时候将已经经过映射的值保存在b这个dict中，这样在中途发现重复时也可以及时返回false。

**solution:**

```python
class Solution(object):
    def isIsomorphic(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        a,b={},{}
        for i in range(len(s)):
            if s[i] in a:
                if a[s[i]]!=t[i]:
                    return False
            elif t[i] in b:
                return False
            else:
                a[s[i]]=t[i]
                b[t[i]]=True
        return True
```

