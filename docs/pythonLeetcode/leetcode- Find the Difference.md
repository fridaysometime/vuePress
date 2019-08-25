### leetcode- Find the Difference

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

