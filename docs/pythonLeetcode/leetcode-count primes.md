# leetcode-count primes

Count the number of prime numbers less than a non-negative number, **n**.

**Example:**

```
Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
```



**思路**
厄拉多塞筛法

西元前250年，希腊数学家厄拉多塞(Eeatosthese)想到了一个非常美妙的质数筛法，减少了逐一检查每个数的的步骤，可以比较简单的从一大堆数字之中，筛选出质数来，这方法被称作厄拉多塞筛法(Sieve of Eeatosthese)。
具体操作：先将 2~n 的各个数放入表中，然后在2的上面画一个圆圈，然后划去2的其他倍数；第一个既未画圈又没有被划去的数是3，将它画圈，再划去3的其他倍数；现在既未画圈又没有被划去的第一个数 是5，将它画圈，并划去5的其他倍数……依次类推，一直到所有小于或等于 n 的各数都画了圈或划去为止。这时，表中画了圈的以及未划去的那些数正好就是小于 n 的素数。当你要画圈的素数的平方大于 n 时，那么后面没有划去的数都是素数，就不用继续判了。



从上面的厄拉多塞筛法可以看出，我们只需遍历[2,![这里写图片描述](http://latex.codecogs.com/gif.latex?%5Csqrt%20n)],因为超过![这里写图片描述](http://latex.codecogs.com/gif.latex?%5Csqrt%20n)部分如果不是素数，则作为因子在前面的数已经被删除了。同时这里利用了python里list的特性[::i]取i的倍数。



**solution:**

```python
class Solution(object):
    def countPrimes(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n<3:
            return 0
        primes=[True]*n
        primes[0]=primes[1]=False
        for i in range(2,int(n**0.5)+1):
            if primes[i]:
                primes[i*i:n:i]=[False]*len(primes[i*i:n:i])
        return sum(primes)
```



