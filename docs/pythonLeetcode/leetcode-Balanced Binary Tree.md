---
title: Balanced Binary Tree
date: 2019-03-12
tags: 
- 算法题
- Python
---

# leetcode-Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

> a binary tree in which the depth of the two subtrees of *every* node never differ by more than 1.

**Example 1:**

Given the following tree `[3,9,20,null,null,15,7]`:

```
    3
   / \
  9  20
    /  \
   15   7
```

Return true.

**Example 2:**

Given the following tree `[1,2,2,3,3,null,null,4,4]`:

```
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
```

Return false.

**思路**

在这道题里，平衡二叉树的定义是二叉树的任意节点的两颗子树之间的高度差小于等于1。这实际上是AVL树的定义。首先要写一个计算二叉树高度的函数，二叉树的高度定义为：树为空时，高度为0。然后递归求解：树的高度 = max(左子树高度，右子树高度)+1(根节点要算上)。高度计算函数实现后，递归求解每个节点的左右子树的高度差，如果有大于1的，则return False。如果高度差小于等于1，则继续递归求解;

**solution:**

```python
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def calc_Height(self,root):
        if root is None:
            return 0
        else:
            return max(self.calc_Height(root.left),self.calc_Height(root.right))+1
    
    def isBalanced(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if root is None:
            return True
        elif abs(self.calc_Height(root.left)-self.calc_Height(root.right))<=1:
            return self.isBalanced(root.left) and self.isBalanced(root.right)
        else:
            return False
        
```





