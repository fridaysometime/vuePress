### leetcode- Excel Sheet Column Title

```python
class Solution(object):
    def convertToTitle(self, n):
        """
        :type n: int
        :rtype: str
        """
        result=''
        while n:
            result=chr((n-1)%26+65)+result
            n=(n-1)/26
        return result
```

