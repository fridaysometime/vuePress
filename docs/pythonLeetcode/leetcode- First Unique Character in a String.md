### leetcode- First Unique Character in a String

```python
class Solution:
    def firstUniqChar(self, s: str) -> int:
        result=-1
        dict1=collections.Counter(s)
        for i,j in enumerate(s):
            if dict1[j]==1:
                result=i
                break
        return result
        
```

