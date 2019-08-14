##  python3之super

1. super()函数是调用父类（超类）的一个方法

2. super是用来解决多重继承问题的，直接用类名调用父类方法在使用单继承的时候没问题，但如果使用多继承，会涉及到查找顺序MRO，重复调用等问题；

3. MRO：就是类的方法解析顺序表，其实就是继承父类方法的顺序表。

4. 使用super()可以很好的避免构造函数被调用两次

   经典的菱形继承案例，BC 继承 A，然后 D 继承 BC，创造一个 D 的对象。

   ```python
   class A():
       def __init__(self):
           print('enter A')
           print('leave A')
   
   class B(A):
       def __init__(self):
           print('enter B')
           super().__init__()
           print('leave B')
   
   class C(A):
       def __init__(self):
           print('enter C')
           super().__init__()
           print('leave C')
   
   class D(B,C):
       def __init__(self):
           print('enter D')
           super().__init__()
           print('leave D')
   ```



   结果

   ![1563777567492](C:\Users\xulin6\AppData\Roaming\Typora\typora-user-images\1563777567492.png)