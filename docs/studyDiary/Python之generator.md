## Python之generator

普通函数在return执行后便会完全退出，其内部的临时变量也会被销毁，然而在Python中，生成器函数允许自身“暂时”退出，在下一次调用它自己的时候，会从上次退出之处接着执行相应语句。而要实现这一功能，需要用到yield关键字。一旦函数中使用了yield，该函数则自动变为生成器函数。

生成器函数是一类特殊的迭代器，实际上它与普通函数区别并不大，以下将介绍生成器的特殊使用及其方法：

生成器的使用
yield
yield相当于return，后面可接多种类型的返回值。生成器函数在执行到yield后会暂时退出，回到调用它的函数，然而生成器函数内的临时变量、执行程度都会保留，下次调用该函数时，会从yield的下一句开始继续执行，直到生成器函数的最后。

生成器函数可以有多个yield，也可以将yield写入循环反复执行。

generator使用场景：

　　1  当我们需要一个公用的，按需生成的数据

　　2  某个事情执行一部分，另一部分在某个事件发生后再执行下一部分，实现异步。

注意事项：

    1  yield from generator_obj 本质上类似于 for item in generator_obj: yield item
    
    2  generator函数中允许使用return，但是return 后不允许有返回值

generator基础
　　

在python的函数（function）定义中，只要出现了yield表达式（Yield expression），那么事实上定义的是一个generator function， 调用这个generator function返回值是一个generator。这根普通的函数调用有所区别，For example：

```python
def gen_generator():
    yield 1

def gen_value():
    return 1
    
if __name__ == '__main__':
    ret = gen_generator()
    print (ret, type(ret))    #<generator object gen_generator at 0x02645648> <type 'generator'>
    ret = gen_value()
    print (ret, type(ret))    # 1 <type 'int'>
```
　　从上面的代码可以看出，gen_generator函数返回的是一个generator实例，generator有以下特别：

遵循迭代器（iterator）协议，迭代器协议需要实现__iter__、next接口能过多次进入、多次返回，能够暂停函数体中代码的执行
　　下面看一下测试代码：





```python
def gen_example():
    print ('before any yield')

    yield 'first yield'

    print ('between yields')

    yield 'second yield'

    print ('no yield anymore')
    
gen = gen_example()

gen.next()　　　　＃ 第一次调用next

#before any yield

#'first yield'

gen.next()　　　　＃ 第二次调用next

#between yields

#'second yield'

gen.next()　　　　＃ 第三次调用next

#no yield anymore

#Traceback (most recent call last):

  #File "<stdin>", line 1, in <module>

#StopIteratio
```


　　调用gen example方法并没有输出任何内容，说明函数体的代码尚未开始执行。当调用generator的next方法，generator会执行到yield 表达式处，返回yield表达式的内容，然后暂停（挂起）在这个地方，所以第一次调用next打印第一句并返回“first yield”。 暂停意味着方法的局部变量，指针信息，运行环境都保存起来，直到下一次调用next方法恢复。第二次调用next之后就暂停在最后一个yield，再次调用next()方法，则会抛出StopIteration异常。　

　　因为for语句能自动捕获StopIteration异常，所以generator（本质上是任何iterator）较为常用的方法是在循环中使用：

```python
def generator_example():
    yield 1
    yield 2

if __name__ == '__main__':
    for e in generator_example():
        print (e)
        # output 1 2　
```


　　generator function产生的generator与普通的function有什么区别呢

　　（1）function每次都是从第一行开始运行，而generator从上一次yield开始的地方运行

　　（2）function调用一次返回一个（一组）值，而generator可以多次返回

　　（3）function可以被无数次重复调用，而一个generator实例在yield最后一个值 或者return之后就不能继续调用了

 

　　在函数中使用Yield，然后调用该函数是生成generator的一种方式。另一种常见的方式是使用generator expression，For example：
　　

 gen = (x * x for x in xrange(5))
　  print (gen)
　　#<generator object <genexpr> at 0x02655710>

　　

generator应用
generator基础应用　　
　　为什么使用generator呢，最重要的原因是可以按需生成并“返回”结果，而不是一次性产生所有的返回值，况且有时候根本就不知道“所有的返回值”。比如对于下面的代码　　

 

RANGE_NUM = 100
for i in [x*x for x in range(RANGE_NUM)]: # 第一种方法：对列表进行迭代
  # do sth for example
  print(i)
for i in (x*x for x in range(RANGE_NUM)): # 第二种方法：对generator进行迭代
  # do sth for example
  print (i)


　　在上面的代码中，两个for语句输出是一样的，代码字面上看来也就是中括号与小括号的区别。但这点区别差异是很大的，第一种方法返回值是一个列表，第二个方法返回的是一个generator对象。随着RANGE_NUM的变大，第一种方法返回的列表也越大，占用的内存也越大；但是对于第二种方法没有任何区别。

　　我们再来看一个可以“返回”无穷多次的例子：

def fib():
    a, b = 1, 1
    while True:
        yield a
        a, b = b, a+b 
这个generator拥有生成无数多“返回值”的能力，使用者可以自己决定什么时候停止迭代

 

generator高级应用
使用场景一：　　

　　Generator可用于产生数据流， generator并不立刻产生返回值，而是等到被需要的时候才会产生返回值，相当于一个主动拉取的过程(pull)，比如现在有一个日志文件，每行产生一条记录，对于每一条记录，不同部门的人可能处理方式不同，但是我们可以提供一个公用的、按需生成的数据流。

 

 def gen_data_from_file(file_name):
   for line in file(file_name):
     yield line

 def gen_words(line):
   for word in (w for w in line.split() if w.strip()):
      yield word

 def count_words(file_name):
    word_map = {}
    for line in gen_data_from_file(file_name):
       for word in gen_words(line):
           if word not in word_map:
               word_map[word] = 0
           word_map[word] += 1
   return word_map

def count_total_chars(file_name):
    total = 0
    for line in gen_data_from_file(file_name):
        total += len(line)
    return total
    
if __name__ == '__main__':
    print count_words('test.txt'), count_total_chars('test.txt')


 　　上面的例子来自08年的PyCon一个讲座。gen_words gen_data_from_file是数据生产者，而count_words count_total_chars是数据的消费者。可以看到，数据只有在需要的时候去拉取的，而不是提前准备好。另外gen_words中 (w for w in line.split() if w.strip()) 也是产生了一个generator

 

使用场景二：

　　一些编程场景中，一件事情可能需要执行一部分逻辑，然后等待一段时间、或者等待某个异步的结果、或者等待某个状态，然后继续执行另一部分逻辑。比如微服务架构中，服务A执行了一段逻辑之后，去服务B请求一些数据，然后在服务A上继续执行。或者在游戏编程中，一个技能分成分多段，先执行一部分动作（效果），然后等待一段时间，然后再继续。对于这种需要等待、而又不希望阻塞的情况，我们一般使用回调（callback）的方式。下面举一个简单的例子：

def do(a):
    print ('do', a)
    CallBackMgr.callback(5, lambda a = a: post_do(a))

def post_do(a):
    print ('post_do', a)
　　这里的CallBackMgr注册了一个5s后的时间，5s之后再调用lambda函数，可见一段逻辑被分裂到两个函数，而且还需要上下文的传递（如这里的参数a）。我们用yield来修改一下这个例子，yield返回值代表等待的时间。

@yield_dec
def do(a):
    print ('do', a)
    yield 5
    print ('post_do', a)
　　这里需要实现一个YieldManager， 通过yield_dec这个decrator将do这个generator注册到YieldManager，并在5s后调用next方法。Yield版本实现了和回调一样的功能，但是看起来要清晰许多。下面给出一个简单的实现以供参考：

 　　

 

# -*- coding:utf-8 -*-
import sys
# import Timer
import types
import time

class YieldManager(object):
    def __init__(self, tick_delta = 0.01):
        self.generator_dict = {}
        # self._tick_timer = Timer.addRepeatTimer(tick_delta, lambda: self.tick())

    def tick(self):
        cur = time.time()
        for gene, t in self.generator_dict.items():
            if cur >= t:
                self._do_resume_genetator(gene,cur)
     
    def _do_resume_genetator(self,gene, cur ):
        try:
            self.on_generator_excute(gene, cur)
        except StopIteration,e:
            self.remove_generator(gene)
        except Exception, e:
            print 'unexcepet error', type(e)
            self.remove_generator(gene)
     
    def add_generator(self, gen, deadline):
        self.generator_dict[gen] = deadline
     
    def remove_generator(self, gene):
        del self.generator_dict[gene]
     
    def on_generator_excute(self, gen, cur_time = None):
        t = gen.next()
        cur_time = cur_time or time.time()
        self.add_generator(gen, t + cur_time)

g_yield_mgr = YieldManager()

def yield_dec(func):
    def _inner_func(*args, **kwargs):
        gen = func(*args, **kwargs)
        if type(gen) is types.GeneratorType:
            g_yield_mgr.on_generator_excute(gen)

        return gen
    return _inner_func

@yield_dec
def do(a):
    print 'do', a
    yield 2.5
    print 'post_do', a
    yield 3
    print 'post_do again', a

if __name__ == '__main__':
    do(1)
    for i in range(1, 10):
        print 'simulate a timer, %s seconds passed' % i
        time.sleep(1)
        g_yield_mgr.tick()

 


注意事项：
（1）Yield是不能嵌套的！

 

 def visit(data):
     for elem in data:
         if isinstance(elem, tuple) or isinstance(elem, list):
            visit(elem) # here value retuened is generator
         else:
            yield elem
             
 if __name__ == '__main__':
     for e in visit([1, 2, (3, 4), 5]):
        print e


　　上面的代码访问嵌套序列里面的每一个元素，我们期望的输出是1 2 3 4 5，而实际输出是1  2  5 。为什么呢，如注释所示，visit是一个generator function，所以第4行返回的是generator object，而代码也没这个generator实例迭代。那么改改代码，对这个临时的generator 进行迭代就行了。

 

def visit(data):
    for elem in data:
        if isinstance(elem, tuple) or isinstance(elem, list):
            for e in visit(elem):
                yield e
        else:
            yield elem


或者在python3.3中 可以使用yield from，这个语法是在pep380加入的

def visit(data):
    for elem in data:
        if isinstance(elem, tuple) or isinstance(elem, list):
            yield from visit(elem)
        else:
            yield elem


（2）generator function中使用return

　　在python doc中，明确提到是可以使用return的，当generator执行到这里的时候抛出StopIteration异常。

 

 def gen_with_return(range_num):
     if range_num < 0:
         return
     else:
         for i in xrange(range_num):
            yield i

 if __name__ == '__main__':
     print list(gen_with_return(-1))
     print list(gen_with_return(1))


　　但是，generator function中的return是不能带任何返回值的

def gen_with_return(range_num):
    if range_num < 0:
        return 0
    else:
        for i in xrange(range_num):
            yield i
　　上面的代码会报错：SyntaxError: 'return' with argument inside generator

```

```