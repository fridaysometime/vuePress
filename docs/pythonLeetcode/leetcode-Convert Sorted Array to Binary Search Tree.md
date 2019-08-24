---
title: Convert Sorted Array to Binary Search Tree
date: 2019-03-18
tags: 
- 算法题
- Python
---

# leetcode-Convert Sorted Array to Binary Search Tree

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of *every* node never differ by more than 1.

**Example:**

```
Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
```



**思路**

由于要求二叉查找树是平衡的。所以我们可以选在数组的中间那个数当树根root，然后这个数左边的数组为左子树，右边的数组为右子树，分别递归产生左右子树就可以了

**solution:**

```python
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def sortedArrayToBST(self, nums):
        """
        :type nums: List[int]
        :rtype: TreeNode
        """
        size = len(nums)
        if size == 0:
            return None
        if size == 1:
            return TreeNode(nums[0])
        size //= 2
        root = TreeNode(nums[size])
        root.left = self.sortedArrayToBST(nums[:size])
        root.right = self.sortedArrayToBST(nums[size + 1:])
        return root
```

