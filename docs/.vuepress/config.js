module.exports = {
  title: "我的小天地",
  description: "here is mysite",
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: "/", // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  theme: 'reco',
  themeConfig: {
    lastUpdated: "Last Updated",
    serviceWorker: {
      updatePopup: true // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是:
      // updatePopup: {
      //    message: "New content is available.",
      //    buttonText: "Refresh"
      // }
    },
    sidebar: {
      "/guide/": [
        {
          title: "Titanium Guides",
          collapsable: false,
          children: ["prerequisites", "getting-started", "first-app"]
        }
      ],
      "/react/": [
        {
          title: "React学习总结",
          collapsable: true,
          children: [
            "classnames",
            "propTypes",
            "react16-hooks",
            "react生命周期",
            "react_comp"
          ]
        }
      ],
	  "/studyDiary/": [
        {
          title: "统计学习总结",
          collapsable: true,
          children: [
            "boxplot",
            "data_cleaning",
            "data_distribution",
            "Summaries",
            "anaconda 基础",
            "github_basic",
            "SQL基础",
            "大数据基础",
            "分布式抢锁设计",
            "feature engineer"

          ]
        }
      ],
      "/pythonLeetcode/": [
        {
          title: "Python_leetcode",
          collapsable: true,
          children: [
            "leetcode-two sum",
            "leetcode-Roman to Integer",
            "leetcode-Reverse Integer",
            "leetcode-Palindrome Number",
            "leetcode-Longest Common Prefix",
            "leetcode-Merge Two Sorted Lists",
            "leetcode-Remove Duplicates from sorted Array",
            "leetcode-Valid Parenthese",
            "leetcode Remove Element",
            "leetcode-Implement strStr()",
            "leetcode-Search Insert Position",
            "leetcode-Count and Say",
            "leetcode-maximan substring",
            "leetcode- length of last word",
            "leetcode-Plus One",
            "leetcode-Add Binary",
            "leetcode-sqrtx",
            "leetcode-climbing stairs",
            "leetcode-Remove Duplicates from Sorted List",
            "leetcode-Merge Sorted Array",
            "leetcode-Same Tree",
            "leetcode-sysmmetric tree",
            "leetcode-Maximum Depth of Binary Tree",
            "leetcode-Binary Tree Level Order Traversal II",
            "leetcode-Convert Sorted Array to Binary Search Tree",
            "leetcode-Balanced Binary Tree",
            "leetcode-happy number",
            "leetcode-count primes",
            "leetcode-Isomorphic String",
            "leetcode-Contains Duplicate II",
            "leetcode- Implement Stack using Queues",
            "leetcode-invert binary tree",
            "leetcode-power of two",
            "leetcode-Palindrome Linked List",
            "leetcode-Lowest Common Ancestor of a Binary Search Tree",
            "leetcode-Delete Node in a Linked List",
            "leetcode-Implement Queue using Stacks",
            "leetcode-Add Digits",
            "leetcode-Binary Tree Paths",
            "leetcode-Ugly Number",
            "leetcode-move zeros",
            "leetcode-First Bad Version",
            "leetcode-Missing Number",
            "leetcode-Word Pattern",
            "leetcode-Nim Game",
            "leetcode-Range Sum Query - Immutable"
          ]
        }
      ],
      "/about/": [
        ["", "README"],
        ["GithubPages", "GithubPages"],
        ["VuePress", "VuePress"]
      ]
    },
    nav: [
      {
        text: "blogs",
        items: [
          {
            text: "React学习汇总",
            link: "/react/"
          },
          {
            text: "使用 GitHub Pages 和 VuePress 搭建网站",
            link: "/vuePress/"
          },
		  {
            text: "统计学习总结",
            link: "/studyDiary/"
          },
          {
            text: "Python_leetcode",
            link: "/pythonLeetcode/"
          }
        ]
      },
      {
        text: "关于",
        link: "/about/"
      },
      {
        text: "GitHub",
        items: [{ text: "GitHub地址", link: "https://github.com/fridaysometime" ,icon: 'reco-github'}]
      }
      {text:"Tags",link:"/tags/",icon:"reco-tag"}
    ]
  },
  plugins: ["@vuepress/back-to-top"]
};
