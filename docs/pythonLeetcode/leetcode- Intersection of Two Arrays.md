### leetcode- Intersection of Two Arrays

## 题目翻译

给定两个数组，写一个函数求它们的交。 
比如：给定数组nums1 = [1, 2, 2, 1]， nums2 = [2, 2]，应该返回[2]。 
注意：结果中每个元素是唯一的；结果的顺序没有要求。

```python
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        #return list(set(nums1).intersection(set(nums2)))
    
        tmp = [val for val in nums1 if val in nums2]
        return list(set(tmp))
```

