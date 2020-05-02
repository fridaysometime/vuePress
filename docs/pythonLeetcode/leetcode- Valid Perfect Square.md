### leetcode- Valid Perfect Square

​        题目描述：给出一个正整数，不使用内置函数，如sqrt()，判断这个数是不是一个数的平方。

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

