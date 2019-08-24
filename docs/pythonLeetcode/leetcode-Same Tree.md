---
title: Same Tree
date: 2019-03-18
tags: 
- 算法题
- Python
---

# leetcode-Same Tree

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

**Example 1:**

```
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
```

**Example 2:**

```
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
```

**Example 3:**

```
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
```

**思路**

用递归来做。首先判断两个根节点的值是否相同，如果相同，递归判断根的左右子树。

**solution:**

```python
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def isSameTree(self, p, q):
        """
        :type p: TreeNode
        :type q: TreeNode
        :rtype: bool
        """
        if p is None and q is None:
            return True
        if p and q and p.val==q.val:
            result=self.isSameTree(p.left,q.left) and self.isSameTree(p.right,q.right)
            return result
        else:
            return False
```



