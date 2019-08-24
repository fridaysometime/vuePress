---
title: Word Pattern 
date: 2019-03-12
tags: 
- 算法题
- Python
---

# leetcode-Word Pattern

Given a `pattern` and a string `str`, find if `str` follows the same pattern.

Here **follow** means a full match, such that there is a bijection between a letter in `pattern` and a **non-empty** word in `str`.

**Example 1:**

```
Input: pattern = "abba", str = "dog cat cat dog"
Output: true
```

**Example 2:**

```
Input:pattern = "abba", str = "dog cat cat fish"
Output: false
```

**Example 3:**

```
Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
```

**Example 4:**

```
Input: pattern = "abba", str = "dog dog dog dog"
Output: false
```

**Notes:**
You may assume `pattern` contains only lowercase letters, and `str` contains lowercase letters separated by a single space.Given a `pattern` and a string `str`, find if `str` follows the same pattern.

Here **follow** means a full match, such that there is a bijection between a letter in `pattern` and a **non-empty** word in `str`.

**Example 1:**

```
Input: pattern = "abba", str = "dog cat cat dog"
Output: true
```

**Example 2:**

```
Input:pattern = "abba", str = "dog cat cat fish"
Output: false
```

**Example 3:**

```
Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
```

**Example 4:**

```
Input: pattern = "abba", str = "dog dog dog dog"
Output: false
```

**Notes:**
You may assume `pattern` contains only lowercase letters, and `str` contains lowercase letters separated by a single space.

## 思路

1. 对于pattern和str，分别用一个数组记录每个字符或word第一次出现的位置。当同时遍历pattern和str时，如果发现它们在某一位置的字符或word第一次出现的位置不同，则返回false。（py2)
2. 根据题目的描述，pattern有多少种不同的字符，str也有多少种不同的word。如果我们将映射写成字符对的形式，比如 (‘a’,’dog’) 表示pattern中字符’a’映射到str中’dog’，那么映射的个数与pattern中字符的种类数相同。所以该方法本质上也是判断映射是不是双射。(py3) 

 **solution1:**

```python
class Solution(object):
    def wordPattern(self, pattern, str):
        """
        :type pattern: str
        :type str: str
        :rtype: bool
        """
        strlist=str.split(' ')
        if len(strlist)!=len(pattern):
            return False
  
        return map(pattern.find,pattern)==map(strlist.index,strlist)
        
```

**solution2**

```python
class Solution:
    def wordPattern(self, pattern: str, str: str) -> bool:
        words = str.split(' ')
        if len(words) != len(pattern):
            return False
        return len(set(pattern)) == len(set(words)) == len(set(zip(pattern, words)))

        
```



