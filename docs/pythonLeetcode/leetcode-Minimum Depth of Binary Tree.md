---
title: Minimum Depth of Binary Tree
date: 2019-03-12
tags: 
- 算法题
- Python
---

# leetcode-Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

**Note:** A leaf is a node with no children.

**Example:**

Given binary tree `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

return its minimum depth = 2.



# solution:

分几种情况考虑：1，树为空，则为0。 2，根节点如果只存在左子树或者只存在右子树，则返回值应为左子树或者右子树的（最小深度+1）。 3，如果根节点的左子树和右子树都存在，则返回值为（左右子树的最小深度的较小值+1）。

```
class TreeNode:
    def init(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def minDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if root is None:
            return 0
        elif root.left is not None and root.right is None:
            return self.minDepth(root.left)+1
        elif root.right is not None and root.left is None:
            return self.minDepth(root.right)+1
        else:
            return min(self.minDepth(root.right),self.minDepth(root.left))+1
```



class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

​        