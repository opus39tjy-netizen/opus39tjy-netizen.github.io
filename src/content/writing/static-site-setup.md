---
title: 一个我能真正看懂的静态网站方案
description: 选择朴素、可读的工具，让构建过程尽量贴近纯 HTML。
date: 2026-07-29
category: 技术
tags: [技术, Astro]
cover: /images/static-site-setup.png
---

我想要一个几年后打开还看得懂的网站。所以技术选型的第一原则不是"先进"，而是"朴素"。

## 选择的逻辑

- 输出是静态 HTML，几乎没有运行时。
- 内容用 Markdown 写，和排版分开。
- 组件只是可复用的 HTML 片段，不需要前端框架。

Astro 恰好满足这些。`.astro` 文件读起来像 HTML，学习成本很低；默认零 JavaScript，对速度和心态都友好。

## 关于设计

颜色、间距、圆角都收进 CSS 变量里。想调整气质时，改几个值就够了，而不用翻遍每个组件。

```css
--bg: #fafbfc;
--text: #2b2f36;
--accent: #7d9cc1;
```

## 小结

工具应该让人更愿意写作，而不是把注意力吸走。这个方案做到了。
