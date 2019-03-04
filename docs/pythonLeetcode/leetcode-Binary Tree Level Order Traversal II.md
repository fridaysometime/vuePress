# leetcode-Binary Tree Level Order Traversal II

Given a binary tree, return the *bottom-up level order* traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```



return its bottom-up level order traversal as:

```
[
  [15,7],
  [9,20],
  [3]
]
```



**solution:**

```python
# Definition for a binary tree node.
#二叉树的层序遍历的实现#
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def order(self,root,level,res):
        if root:
            if len(res)<level+1:
                res.append([])
            res[level].append(root.val)
            self.order(root.left,level+1,res)
            self.order(root.right,level+1,res)
            
    def levelOrderBottom(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        res=[]
        self.order(root,0,res)
        res.reverse()
        return res
```

