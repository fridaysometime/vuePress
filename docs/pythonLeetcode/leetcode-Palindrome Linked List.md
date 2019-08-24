---
title: Palindrome Linked List
date: 2019-03-18
tags: 
- 算法题
- Python
---

# leetcode-Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

**Example 1:**

```
Input: 1->2
Output: false
```

**Example 2:**

```
Input: 1->2->2->1
Output: true
```

## 思路

考虑到单链表缺失从后向前的信息，如果能得到双向信息将很容易判断回文。故考虑将单链表的节点值记录到一个数组中，判断数组是否回文；或通过一次遍历将单链表拓展成双向链表，再判断是否回文。 
下面的代码用的数组判断。

（思路2：判断回文主要是前半部分和后半部分的比较，若能将前半部分压栈，再依次出栈与后半部分比较，则可判断是否回文。

思路3：类似思路二，判断回文主要是前半部分和后半部分的比较，若能将后半部分反转（仍然是单链表），则可以方便的判断回文。 
该思路在实现上有多种方法，效率上也有差异。若能不借助多余的空间实现反转单链表后半部分，则可以实现空间复杂度 O(1) 的要求。快慢指针）

**solution：**

```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def isPalindrome(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        if not head or not head.next:
            return True
        
        tmp=[]
        while head:
            tmp.append(head.val)
            head=head.next
        
        length=len(tmp)
        for i in range(0,length/2):
            if tmp[i]!=tmp[length-i-1]:
                return False
        return True
        
```

