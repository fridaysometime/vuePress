### leetcode- Power of Three

```python
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n==0 or n==2:
            return False
        if n==1:
            return True

        while n%3==0:
            n=n/3
        return True if n==1 else False
```



