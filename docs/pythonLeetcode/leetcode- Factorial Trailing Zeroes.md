### leetcode- Factorial Trailing Zeroes

> 题目描述：给定一个整数n，返回n!（n的阶乘）数字中的后缀0的个数。
>
> 在n!中，若想在结果的结尾产生0，只能是5乘以双数、或者某个乘数结尾为0，如10，但10可视为5***2，20可以视为5***4.
>
> 综上要想找n!中有几个0，其实就是寻求在1到n这n个数中有几个5.
>
> 其中25=5*5,这需要视为2个5
>
> 代码目的就变成了寻找1到n这n个数中5的个数

```python
class Solution(object):
    def trailingZeroes(self, n):
        """
        :type n: int
        :rtype: int
        """
        result=0
        while n:
            n=n/5
            result+=n
        return result
        
```

