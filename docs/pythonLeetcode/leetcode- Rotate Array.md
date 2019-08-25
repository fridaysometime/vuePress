### leetcode- Rotate Array

```python
class Solution(object):
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        t=k%len(nums)
        print(t)
        nums[:]=nums[-t:]+nums[:-t]
```

