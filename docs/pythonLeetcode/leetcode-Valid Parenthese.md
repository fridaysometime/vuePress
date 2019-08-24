---
title: Valid Parenthese
date: 2019-03-18
tags: 
- 算法题
- Python
---

# leetcode-Valid Parenthese

Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

**Example 1:**

```
Input: "()"
Output: true
```

**Example 2:**

```
Input: "()[]{}"
Output: true
```

**Example 3:**

```
Input: "(]"
Output: false
```

**Example 4:**

```
Input: "([)]"
Output: false
```

**Example 5:**

```
Input: "{[]}"
Output: true
```



**Solution:**

```python
class Solution:
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        if not s or len(s) == 0:
            return True

        brackets = {'}': '{', ')': '(', ']': '['}
        stack = []
        for char in s:
            if stack and char in brackets and brackets[char] == stack[-1]:
                stack.pop()
            else:
                stack.append(char)

        if stack:
            return False

        return True
               
```

