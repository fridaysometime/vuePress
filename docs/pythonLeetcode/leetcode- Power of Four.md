### leetcode- Power of Four

```python
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        #return n>0 and bin(n).count('1')==1
        if n==0 or n==2 or n==3:
            return False
        if n==1:
            return True
        while n%4==0:
            n=n/4
        return True if n==1 else False
```

