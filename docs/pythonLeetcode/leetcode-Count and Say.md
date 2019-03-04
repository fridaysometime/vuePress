# leetcode-Count and Say

The count-and-say sequence is the sequence of integers with the first five terms as following:

```
1.     1
2.     11
3.     21
4.     1211
5.     111221
```

`1` is read off as `"one 1"` or `11`.
`11` is read off as `"two 1s"` or `21`.
`21` is read off as `"one 2`, then `one 1"` or `1211`.

Given an integer *n* where 1 ≤ *n* ≤ 30, generate the *n*th term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

 

**Example 1:**

```
Input: 1
Output: "1"
```

**Example 2:**

```
Input: 4
Output: "1211"
```



**Solution:**

```python
class Solution:
    def countAndSay(self, n):
        """
        :type n: int
        :rtype: str
        """
        result='1'
        
        for i in range(n-1):
            count=1
            tmp=''
            for j in range(0,len(result)-1):
                if result[j]==result[j+1]:
                    count+=1
                else:
                    tmp += str(count)+result[j]
                    count=1
            tmp+=str(count)+result[len(result)-1]
            result=tmp      
        return result

```

