## Python的filter方法

> filter() 函数用于过滤序列，过滤掉不符合条件的元素，返回由符合条件元素组成的新列表。
> 该接收两个参数，第一个为函数，第二个为序列，序列的每个元素作为参数传递给函数进行判，然后返回 True 或 False，最后将返回 True 的元素放到新列表中。
> 以下是 filter() 方法的语法:
> filter(function, iterable)

需要强调的是python3中filter返回的是一个filter对象。
下面一个例子是去除列表里面的偶数，其实map和reduce就可以实现这件事了。

```python
def is_odd(n):
  return n % 2 == 1
filter(is_odd, [1, 2, 4, 5, 6, 9, 10, 15])
#结果: [1, 5, 9, 15]
```