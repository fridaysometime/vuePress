### python之装饰器

#### 1. 概念

**python装饰器就是用于拓展原来函数功能的一种函数，这个函数的特殊之处在于它的返回值也是一个函数，使用python装饰器的好处就是在不用更改原函**数*的代码前提下给函数*增加新的功能

简单来说，装饰器就是实现了一个通用的功能，然后将这个通用的功能应用到不同的、需要使用这个功能的函数上，从而避免每次都在不同函数上反复写相同的功能代码。

装饰器的本质是一个函数，他接受被装饰的函数作为位置参数，装饰器通过使用该参数来执行某些操作，然后返回一个函数引用，这个函数可以是原始函数，或者是另外一个函数。

### 2. 分类

装饰器是可装饰其他对象的工具，这个工具本质上是一个可调用的对象，所以装饰器一般可以由函数，类实现；装饰器本身接受一个被装饰的对象作为参数，该参数可以是函数，方法或类；

### 3. 作用

Python装饰器的应用比较广泛，大部分场景的公共处理逻辑都可以使用装饰器去简化。（使用上类似于JAVA中的注解）。一般场景，日志记录，权限验证，单例模式



```python
'''
    Created by
    xulin6
    on
    2018 / 11 / 21.
'''
import time
def f1():
    print(time.time())
    print('this is a function')
f1()
#
# #如果需要有很多的函数来实现打印时间的功能，那就有多个类似f1的函数，每次重复写很麻烦，装饰器就可以很好的解决这个问题
# #Python在语法上遵循，对修改是封闭的，对扩展是开放的原则，所以强行将打印时间的功能加进函数是不够友好的

import time
def decorator(func):
    def wrapper():
        print(time.time())
        func()
    return wrapper()
#以上内容就是一个装饰器，即wrapper被decorator包裹起来，像一个装饰器
def f1():
    print('this is a function')
f=decorator(f1)
#
# #装饰器的核心部门---语法糖
# #调用时简单，可以实现写一次装饰器而实现多个函数的调用
import time
def decorator(func):
    def wrapper():
        print(time.time())
        func()
    return wrapper()
#这个就是所谓的语法糖，有了它，我们就可以通过直接调用f1来实现调用装饰器
@decorator
def f1():
    print('this is a function')

##有参数的装饰器---带一个参数的装饰器
import time
def decorator(func):
    def wrapper(func_name):
        print(time.time())
        func(func_name)
    return wrapper

@decorator
def f1(func_name):
    print('this is a function  '+func_name)
f1('test_function')

##有参数的装饰器---带多个参数的装饰器:如果一个装饰器只能完成一个函数的使用，那将失去意义，所以
##我们要实现未知函数参数个数的调用
import time
def decorator(func):
    def wrapper(*args):
        print(time.time())
        func(*args)
    return wrapper

@decorator
def f1(func_name):
    print('this is a function  '+func_name)

@decorator
def f2(func_name1,func_name2):
    print('this is a function  '+func_name1)
    print('this is a function  ' + func_name2)

f1('test1')
f2('test2','test3')


##用**kw实现了任意参数形式的函数的调用，是一个比较完整地装饰器使用方法
##kw为关键字参数（可任意命名），以字典的形式输出
import time
def decorator(func):
    def wrapper(*args,**kw):
        print(time.time())
        func(*args,**kw)
    return wrapper

@decorator
def f1(func_name):
    print('this is a function  '+func_name)

@decorator
def f2(func_name1,func_name2,**kw):
    print('this is a function  '+func_name1)
    print('this is a function  ' + func_name2)
    print(kw)
f1('test1')
f2('test2','test3',a=1,b=2,c='3')
```



