---
title: Remove Duplicates from Sorted List
date: 2019-03-18
tags: 
- 算法题
- Python
---

# leetcode-Remove Duplicates from Sorted List

Given a sorted linked list, delete all duplicates such that each element appear only *once*.

**Example 1:**

```
Input: 1->1->2
Output: 1->2
```

**Example 2:**

```
Input: 1->1->2->3->3
Output: 1->2->3
```



**solution:**

```python
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        t=ListNode(-1)
        t.next=head
        while t.next!=None:
            if t.val==t.next.val:
                t.next=t.next.next
            else:
                t=t.next
        return head
        
```

