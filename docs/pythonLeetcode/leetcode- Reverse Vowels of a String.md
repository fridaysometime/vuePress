### leetcode- Reverse Vowels of a String

```python
class Solution:
    def reverseVowels(self, s: str) -> str:
        result=list(s)
        tmp=[]
        for i in range(len(result)):
            if result[i] in ['a','e','i','o','u','A','E','I','O','U']:
                tmp.append((i,result[i]))
        lenofres=int(len(tmp)/2)
   
        for j in range(lenofres):
             result[tmp[j][0]]=tmp[len(tmp)-j-1][1]
             result[tmp[len(tmp)-j-1][0]]=tmp[j][1]
        return ''.join(result)
```

