### leetcode- House Robber

你要去一条街上偷钱，每一户人家都有一定量的钱，但是你不能偷相邻两家的，因为相邻的两家有安保系统相连，偷了你就被警察叔叔带走了（什么鬼安保系统= =）。 
给定一个非负数组，代表每家有多少钱。求出在不被警察叔叔带走的情况下，你今晚最多能偷多少钱。

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

