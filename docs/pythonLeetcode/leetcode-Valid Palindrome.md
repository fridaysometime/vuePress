### leetcode-Valid Palindrome

判断题目给出的字符串是不是回文，仅考虑字符串中的字母字符和数字字符，并且忽略大小写

例如："A man, a plan, a canal: Panama"是回文

"race a car"不是回文

```python
class Solution:
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        if not s:
            return True
        else:
            s=s.lower()
            t=list(filter(lambda a:a.isalpha() or a.isdigit(),s))
            return t==t[::-1]
```



