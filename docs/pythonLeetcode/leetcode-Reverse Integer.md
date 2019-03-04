# leetcode-Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.

**Example 1:**

```
Input: 123
Output: 321
```

**Example 2:**

```
Input: -123
Output: -321
```

**Example 3:**

```
Input: 120
Output: 21
```

**solution:**

```py
class Solution:
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        if x<0:
            x_to_s=str(-x)
            t=x_to_s[::-1]
            result=int(t)
            if result>2147483647:
                return 0
            else:
                return -result
        else:
            x_to_s=str(x)
            t = x_to_s[::-1]
            result = int(t)
            if result>2147483647:
                return 0
            else:
                return result
```



