### leetcode-  Intersection of Two Arrays II

## 题目翻译

给定两个数组，写一个函数计算它们的交。 
比如：给定 nums1 = [1, 2, 2, 1]， nums2 = [2, 2]，返回 [2, 2]。 
注意：结果中每个元素出现的次数应该与它同时出现在两个数组中的次数相同；结果的顺序没有要求。

```python
class Solution(object):
    def intersect(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        return list((collections.Counter(nums1) & collections.Counter(nums2)).elements())
```

