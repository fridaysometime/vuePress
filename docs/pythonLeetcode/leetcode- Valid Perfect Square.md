### leetcode- Valid Perfect Square

```python
class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        left,right=0,num
        while left<=right:
            mid=int((left+right)/2)
            if mid**2==num:
                return True
            elif mid**2<num:
                left=mid+1
            else:
                right=mid-1
        return False
```

