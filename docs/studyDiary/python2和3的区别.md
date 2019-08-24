### python2和3的区别

1. 打印函数

   在Python2中，print是一个打印语句，将Python后面的内容视为元组对象，直接打印出来，；在Python3中做为函数存在，print函数可以接收多个位置，即print(arg1,arg2...)

2. 编码的改变

   Python2默认ASCII编码方式，但是ASCII编码无法对中文等字符进行有效编码，因此在涉及到中文等其他字符的编码问题时，ASCII不仅无能为力，而且经常带来一些乱七八糟的错误，这也是Python2中经常出现编码错误的原因之一；

   自此以后，编写Python3.0以后的代码时，新手们的第一行代码再也不用因为纠结到底使用#coding = utf-8还是用# -- coding:utf-8 -- 而辗转反侧，彻夜难眠了，因为Python3默认采用了UTF-8编码；

3. 导入方式

   Python3采用的是绝对路径的方式进行import；

   Python2中相对路径的import会导致标准库导入变得困难（想象一下，同一目录下有file.py，如何同时导入这个文件和标准库file）。Python3中这一点将被修改，如果还需要导入同一目录的文件必须使用绝对路径，否则只能使用相关导入的方式来进行导入。

4. Python3中这些方法再不再返回list对象：dictionary关联的keys()、values()、items()，zip()，map()，filter()，但是可以通过list强行转换：

   ```python
   mydict={"a":1,"b":2,"c":3}
   mydict.keys()  #<built-in method keys of dict object at 0x000000000040B4C8>
   list(mydict.keys()) #['a', 'c', 'b']
   ```

5. 迭代器iterator的next()函数被Python3废弃，统一使用next(iterator)

6. apply函数被Python3废弃

7. 异常抛出和捕捉机制区别

   - Python2

   ```
   raise IOError, "file error" #抛出异常
   except NameError, err:  #捕捉异常
   ```

   - Python3

   ```python
   raise IOError("file error") #抛出异常
   except NameError as err: #捕捉异常
   ```

