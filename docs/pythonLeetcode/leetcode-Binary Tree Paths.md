---
title: Binary Tree Paths 
date: 2019-03-18
tags: 
- 算法题
- Python
---

# leetcode-Binary Tree Paths

Given a binary tree, return all root-to-leaf paths.

**Note:** A leaf is a node with no children.

**Example:**

```
Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
```

## 思路

给定一个二叉树，返回所有从根到叶子的路径。

递归实现深度优先遍历。注意要记录途中访问过的节点，遇到叶子节点时可以生成一条路径字符串。关于记录路径，一般的方法（后面几种思路的方法）是直接将目前为止的路径字符串记录下来，而下面的代码采用先保存在数组里需要生成路径时再生成的方法;其实可以直接用原函数做递归

**solution:**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def binaryTreePaths(self, root: TreeNode) -> List[str]:
        res=[]
        if not root:
            return res
        if not root.left and not root.right:
            res.append(str(root.val))

        for i in self.binaryTreePaths(root.left):
            res.append(str(root.val) + '->' + i)
        print (res)
        for i in self.binaryTreePaths(root.right):
            res.append(str(root.val) + '->' + i)
        print (res)
        return res
        
```



