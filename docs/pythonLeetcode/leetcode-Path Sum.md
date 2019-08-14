---
title: Path Sum
date: 2019-03-12
tags: 
- 算法题
- Python
---

# leetcode-Path Sum

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

**Note:** A leaf is a node with no children.

**Example:**

Given the below binary tree and `sum = 22`,

```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
```

return true, as there exist a root-to-leaf path `5->4->11->2` which sum is 22.

# solution:

使用递归解决

```python
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def hasPathSum(self, root, sum):
        """
        :type root: TreeNode
        :type sum: int
        :rtype: bool
        """
        if root is None:
            return False
        elif root.right is None and root.left is None:
            return root.val==sum
        else:
            return self.hasPathSum(root.right,sum-root.val) or self.hasPathSum(root.left,sum-root.val)
```

