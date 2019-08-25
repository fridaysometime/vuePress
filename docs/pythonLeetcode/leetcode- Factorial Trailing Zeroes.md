### leetcode- Factorial Trailing Zeroes

```python
class Solution(object):
    def trailingZeroes(self, n):
        """
        :type n: int
        :rtype: int
        """
        result=0
        while n:
            n=n/5
            result+=n
        return result
        
```

