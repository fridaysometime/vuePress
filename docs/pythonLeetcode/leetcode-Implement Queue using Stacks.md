# leetcode-Implement Queue using Stacks

Implement the following operations of a queue using stacks.

- push(x) -- Push element x to the back of queue.
- pop() -- Removes the element from in front of queue.
- peek() -- Get the front element.
- empty() -- Return whether the queue is empty.

**Example:**

```
MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);  
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false
```

## 思路

偏爱下面这种方法，比较好记，只要实现对了push函数，后面三个直接调用队列的函数即可。这种方法的原理就是每次把新加入的数插到前头，这样队列保存的顺序和栈的顺序是相反的，它们的取出方式也是反的，那么反反得正，就是我们需要的顺序了。我们需要一个辅助队列s2，把s的元素也逆着顺序存入s2中，此时加入新元素x，再把s2中的元素存回来，这样就是我们要的顺序了，其他三个操作也就直接调用队列的操作即可，

**solution**

```python
class MyQueue:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.stack=[]
        

    def push(self, x: int) -> None:
        """
        Push element x to the back of queue.
        """
        s2=[self.pop() for i in range(len(self.stack))]
        s2.append(x)
        self.stack=[s2.pop() for i in range(len(s2))]
        

    def pop(self) -> int:
        """
        Removes the element from in front of queue and returns that element.
        """
        return self.stack.pop()
        

    def peek(self) -> int:
        """
        Get the front element.
        """
        return self.stack[-1]
        

    def empty(self) -> bool:
        """
        Returns whether the queue is empty.
        """
        return len(self.stack)==0
        


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
```

