### leetcode- Excel Sheet Column Title

Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

1 -> A
2 -> B
3 -> C
...
26 -> Z
27 -> AA
28 -> AB 
... 
1
2
3
4
5
6
7
8
Example 1:

Input: 1 
Output: "A" 
1
2
Example 2:

Input: 28 
Output: "AB" 
1
2
Example 3:

Input: 701 
Output: "ZY"


类似题目：[171. Excel Sheet Column Number（python+cpp）](https://blog.csdn.net/qq_21275321/article/details/83047253)其实就是十进制转26进制，注意在每次循环的时候n要-1，因为在转换成26进制的时候乘法之前+1了。

```python
class Solution(object):
    def convertToTitle(self, n):
        """
        :type n: int
        :rtype: str
        """
        result=''
        while n:
            result=chr((n-1)%26+65)+result
            n=(n-1)/26
        return result
```

