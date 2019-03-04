# leetcode-move zeros

Given an array `nums`, write a function to move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Example:**

```
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```

## 思路

可以先将所有的非零数移动到前面，再一次性将后面所有数置为0。这样需要用到两个循环。(还可以用快慢指针)

当然，用Python写代码，还可以用一些比较tricky的方法，比如用自带的sort函数也可以AC。但我并不确定sort函数会不会申请一个临时数组，所以该方法不一定满足题意，但仍然可供我们学习。

**solution1**

最慢的

```python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
         for i in nums:
             if i==0:
                 nums.remove(i)
                 nums.append(i)
```

**solution2**

```python
#tricky one
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        nums.sort(key = lambda x: 1 if x == 0 else 0)
```

**solution3**

```python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
         t=0
        for i in nums:
            if i!=0:
                nums[t]=i
                t+=1
        for j in range(t,len(nums)):
            nums[j]=0
```

