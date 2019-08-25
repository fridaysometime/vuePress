### leetcode-Valid Palindrome

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



