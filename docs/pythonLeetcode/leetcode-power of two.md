# leetcode-power of two

Given an integer, write a function to determine if it is a power of two.

**Example 1:**

```
Input: 1
Output: true 
Explanation: 20 = 1
```

**Example 2:**

```
Input: 16
Output: true
Explanation: 24 = 16
```

**Example 3:**

```
Input: 218
Output: false
```

## 思路

比较直观暴力的想法是，如果每次将这个数除以2没有余数，直到得到数字1，那么这个数就是2的若干次幂。

或：注意到2的幂次 `x` 表示成二进制一定是一个1后面若干个0，那么只要计算输入数的二进制表示是否只有一个1即可



**solution：**

```python
class Solution(object):
    def isPowerOfTwo(self, n):
        """
        :type n: int
        :rtype: bool
        """
        #思路1#
        # if n<1:
        #     return False
        # while n%2==0:
        #     n=n/2
        # return True if n==1 else False
        
        #思路2#
        return n>0 and bin(n).count('1')==1
    
```

