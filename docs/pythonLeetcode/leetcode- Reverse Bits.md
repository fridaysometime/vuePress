### leetcode- Reverse Bits

```python
class Solution:
    # @param n, an integer
    # @return an integer
    
    def reverseBits(self, n):
        s=bin(n)
        print(s)
        b=s[:1:-1]
        print(b)
        
        return int(b + '0'*(32-len(b)), 2)
        
```

