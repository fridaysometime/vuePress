### leetcode- Single Number

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

