### leetcode- Majority Element

这里题目要求找出出现次数超过n/2的元素。

```python
class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # nums.sort()
        # return nums[len(nums)/2]
        dict={}
        for i in range(len(nums)):
            if nums[i] not in dict:
                dict[nums[i]]=1
            else:
                dict[nums[i]]+=1
            if dict[nums[i]]>len(nums)/2:
                return nums[i]
```

