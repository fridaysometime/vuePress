# leetcode-Contains Duplicate II

Given an array of integers and an integer *k*, find out whether there are two distinct indices *i*and *j* in the array such that **nums[i] = nums[j]** and the **absolute** difference between *i* and *j* is at most *k*.

**Example 1:**

```
Input: nums = [1,2,3,1], k = 3
Output: true
```

**Example 2:**

```
Input: nums = [1,0,1,1], k = 1
Output: true
```

**Example 3:**

```
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```

## 思路

题意：判断是否唯一存在两个数相同且两者坐标相差最多k 
思路：采用hash表，{元素值：索引}通过两次判断，第一次判断是否存在相同的元素，第二次判断二者坐标差是否<=k。需要注意，第二次判断为False,即两相同元素坐标差>k，可能后续还存在元素与该元素相同，因此需要更新字典中该元素索引为新的索引 

**solution:**

```python
class Solution(object):
    def containsNearbyDuplicate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
        dict={}
        for i in range(len(nums)):            
            if nums[i] in dict:
                j=dict.get(nums[i])
                if i-j<=k:
                    return True                
            dict[nums[i]]=i
        return False
```

