---
title: sysmmetric tree
date: 2019-03-18
tags: 
- 算法题
- Python
---

# leetcode-sysmmetric tree

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree `[1,2,2,3,4,4,3]` is symmetric:

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```



But the following `[1,2,2,null,3,null,3]` is not:

```
    1
   / \
  2   2
   \   \
   3    3
```

**思路**

需要用一个辅助的函数，当然也是递归的。当存在左右子树时，判断左右子树的根节点值是否相等，如果想等继续递归判断左子树根的右子树根节点和右子树根的左子树根节点以及左子树根的左子树根节点和右子树根的右子树根节点的值是否相等。然后一直递归判断下去就可以了

**solution:**

```python
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def equal(self,a,b):
        if a is None and b is None:
            return True
        if a and b and a.val==b.val:
            return self.equal(a.left,b.right) and self.equal(a.right,b.left)
        else:
            return False
        
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if root:
            return self.equal(root.left,root.right)
        return True
        
```

