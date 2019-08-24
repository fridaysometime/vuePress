---
title: Nim Game
date: 2019-03-18
tags: 
- 算法题
- Python
---

# leetcode-Nim Game

You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.

Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.

**Example:**

```
Input: 4
Output: false 
Explanation: If there are 4 stones in the heap, then you will never win the game;
             No matter 1, 2, or 3 stones you remove, the last stone will always be 
             removed by your friend.
```

## 思路

你在跟朋友玩“Nim游戏“：桌子上有一堆石头，每次你和你的朋友轮流从中拿走1到3个石头。拿走最后一个石头的人获得游戏胜利。每次游戏都由你先拿石头。 
你们俩都非常聪明，都知道这个游戏的最优策略。写一个函数，给定这一堆石头的数目，判断你是否能赢。 
比如，如果这堆有4个石头，那么你肯定不能赢：无论你拿走1个、2个或是3个石头，你的朋友都会拿走最后一个石头。
这道题算一个数学问题，可以找到规律。我们先写一些数据（左边石头个数，右边是否能赢）： 
1，Y 
2，Y 
3，Y 
4，N 
5，Y 
6，Y 
7，Y 
8，N 
9，Y 
…… 
当石头数是5、6、7时，可以分别拿走1、2、3个石头，使局面变成剩4个石头，那么对手一定输；当石头数是8时，无论自己拿走几个石头，对方面临的局面一定是剩下5或6或7个石头，从而对方一定赢。 
以此类推，我们发现，当石头个数为4的倍数时总是输，否则总是赢。 
最终，该问题可以转化为，判断石头数是否能整除4。

**solution**

```python
class Solution:
    def canWinNim(self, n: int) -> bool:
        return n%4!=0
```

