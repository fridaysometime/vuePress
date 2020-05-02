### leetcode- Reverse Vowels of a String

写一个函数，输入一个字符串，仅将其中的元音字母逆序。 
例子1：输入”hello”，输出”holle”；例子2：输入”leetcode”，输出”leotcede”。

## 思路方法

首先，要知道哪些是元音字母：a, o, e, i, u, A, O, E, I, U.

### **思路一**

一遍扫描所有字符，记录所有元音字母和它们出现的位置到一个数组中；再扫描这个数组，将元音字母逆序填回原来的字符串相应位置。

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

