### leetcode- Single Number

#### 解释下题目：

> 给定一个非空数组，其中每个数组都是有两个的，只有一个数字只有一个，找出那个数字

```python
class Solution:
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """      
        print(sum(set(nums)))
        print (2*sum(set(nums)))
        print (2 * sum(set(nums)) - sum(nums))
        return 2 * sum(set(nums)) - sum(nums)
        
```

