### leetcode- Intersection of Two Arrays

```python
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        #return list(set(nums1).intersection(set(nums2)))
    
        tmp = [val for val in nums1 if val in nums2]
        return list(set(tmp))
```

