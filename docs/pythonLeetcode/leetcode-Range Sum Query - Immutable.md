# leetcode-Range Sum Query - Immutable

Given an integer array *nums*, find the sum of the elements between indices *i* and *j* (*i* ≤ *j*), inclusive.

**Example:**

```
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
```



**Note:**

1. You may assume that the array does not change.
2. There are many calls to *sumRange* function.

## 思路

给定一个整数数组nums，求其下标i到j（i≤j，包括i和j）之间的所有元素的和。 
比如，给定 nums = [-2, 0, 3, -5, 2, -1]： 
sumRange(0, 2) -> 1 
sumRange(2, 5) -> -1 
sumRange(0, 5) -> -3 
注意：假设数组不会变化；sumRange函数会被调用非常多次。

在初始化的时候，将从第一个元素开始到当前位置的所有元素的和求出来，存放到数组[sums](https://www.baidu.com/s?wd=sums&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd)中。那么每次求一个范围的和时，只要计算两个下标处和的差即可

**solution**

```python
class NumArray:

    def __init__(self, c: List[int]):
        self.sum=[0]*(len(c)+1)
        for i in range(len(c)):
            self.sum[i+1]=self.sum[i]+c[i]
        print(self.sum)
        

    def sumRange(self, i: int, j: int) -> int:
        return self.sum[j+1]-self.sum[i]
        


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(i,j)
```



