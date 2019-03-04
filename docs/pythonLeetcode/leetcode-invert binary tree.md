# leetcode-invert binary tree

Invert a binary tree.

**Example:**

Input:

```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

Output:

```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

## 思路

（DFS）递归算法，每次递归交换当前节点的左右子树，同时对左右子树做同样的处理。

**solution:**

```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def invertTree(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        if root==None:
            return root
        t=root.left
        root.left=self.invertTree(root.right)
        root.right=self.invertTree(t)
        return root
        
```

