### leetcode- Excel Sheet Column Number

## 题目翻译

给定一个Excel表格中的列标题，求其对应的列数字。比如： 
A -> 1 
B -> 2 
C -> 3 
… 
Z -> 26 
AA -> 27 
AB -> 28

```python
class Solution(object):
    def titleToNumber(self, s):
        """
        :type s: str
        :rtype: int
        """
        result=0 
        for i in s:
            result=result*26+ord(i)-64
        return result
```

