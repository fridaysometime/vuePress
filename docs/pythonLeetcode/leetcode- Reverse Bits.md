### leetcode- Reverse Bits

翻转一个给定的32位无符号数的位。比如，给定输入整数43261596（二进制表示为00000010100101000001111010011100），返回964176192（二进制表示为00111001011110000010100101000000）。 
进一步：如果该函数被多次调用，你该如何优化它？

### **思路一**

先将输入转换成2进制字符串，再翻转并扩充到32位，再将此32位的二进制转为无符号整数即可。利用Python的bin()函数很方便。

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

