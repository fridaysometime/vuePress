### leetcode- Two Sum II - Input array is sorted

**题意:给出一个数组（升序）和一个目标数，求数组中的两个数相加正好等于目标数的两个元素的下标**

```python
class Solution(object):
    def twoSum(self, numbers, target):
        """
        :type numbers: List[int]
        :type target: int
        :rtype: List[int]
        """
        dict={}
        for i in range(len(numbers)):
            if numbers[i] in dict:
                return [dict[numbers[i]]+1,i+1]
            dict[target-numbers[i]]=i
            
```

