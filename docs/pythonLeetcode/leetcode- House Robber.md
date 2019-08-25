### leetcode- House Robber

```python
class Solution(object):
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        last,now=0,0
        for i in nums:
            last,now=now,max(i+last,now)
        return now
```

