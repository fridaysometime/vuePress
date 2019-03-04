# leetcode-Missing Number

Given an array containing *n* distinct numbers taken from `0, 1, 2, ..., n`, find the one that is missing from the array.

**Example 1:**

```
Input: [3,0,1]
Output: 2
```

**Example 2:**

```
Input: [9,6,4,2,3,5,7,0,1]
Output: 8
```

## 思路

给出从0到n的n+1个数字中的n个数，找到缺失的那个数字。

第一想法就遍历就可以了,但是注意不要被它给的例子所迷惑，数组不一定是排好序的，所以需要先排序；

但是很明显有排序在，时间复杂度为O（nlogn），leetcode给的提示是math和bit计算，继续再考虑。 
math是说用数学方法，由于是0-n个数字，我们可以轻易的用等差数列求和公式求出和，那么减去给定数组的和，得到的结果就是缺失的数字。

**solution:**

```python
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        nums_sum=sum(nums)
        tmp=len(nums)*(len(nums)+1)/2
        return int(tmp)-nums_sum
```

