### leetcode- Find the Difference

> （给两个小写字符串s和t，t是由s打乱顺序后再在随机位置添加一个字母产生的，请输出添加的字母）

```python
class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        result=0
        for i in s:
            result^=ord(i)
            
        for j in t:
            result^=ord(j)

        
        return chr(result)
```

