# leetcode-First Bad Version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have `n` versions `[1, 2, ..., n]` and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API `bool isBadVersion(version)` which will return whether `version` is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

**Example:**

```
Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version. 
```

## 思路

你是一个产品经理，目前正在带领一个组开发一个新产品。不幸的是，最近的产品版本质量检查失败了。因为每一个版本都是基于前一个版本开发的，所以一个坏版本后面的所有版本也都是坏的。假设有 n 个版本，你想找到第一个坏的版本。给了一个 API 可以检查版本是否是坏的，实施一个函数找到第一个坏的版本，要最小化调用 API 的次数。

二分法Binary Search。好版本和坏版本一定有个边界，用二分法来找这个边界，对mid值调用API函数，如果是坏版本，说明边界在左边，则把mid赋值给right，如果是好版本，则说明边界在右边，则把mid+1赋给left，最后返回left。

**solution:**

```python
# The isBadVersion API is already defined for you.
# @param version, an integer
# @return a bool
# def isBadVersion(version):

class Solution:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        left,right=1,n
        while left<=right:
            mid=int(left+(right-left)/2)
            if isBadVersion(mid):
                right=mid-1
            else:
                left=mid+1
        return left
        
```

