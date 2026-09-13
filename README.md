# Opus 的个人空间

网站：https://opus39tjy-netizen.github.io/
后台：https://opus39tjy-netizen.github.io/admin/

这是一个用 [Astro](https://astro.build) 构建的静态个人网站，所有内容都以文件形式存放在本仓库里。

## 内容在哪里

按网站板块整理，顺序与网站一致：

### 课程

- 课程内容：[`src/content/course`](src/content/course)
- 讲义文件（PDF / PPT 等）：[`public/files`](public/files)

### 文章

- 文章内容：[`src/content/writing`](src/content/writing)

### 音乐

- 音乐内容：[`src/content/music`](src/content/music)
- 音频：[`public/audio`](public/audio)
- 小视频：[`public/videos`](public/videos)

### 关于

- 关于页：[`src/content/pages/about.md`](src/content/pages/about.md)

### 图片素材

- 封面与正文插图（各板块共用）：[`public/images`](public/images)

### 设置

- 站点设置（名字、标语、社交链接等）：[`src/data/site.json`](src/data/site.json)
- 评论设置：[`src/data/giscus.json`](src/data/giscus.json)
- 内容管理后台配置：[`public/admin/config.yml`](public/admin/config.yml)

## 日常怎么改内容

平时**不用改代码**，直接进后台：

- 打开 https://opus39tjy-netizen.github.io/admin/
- 用 GitHub 令牌（Token）登录
- 在左侧选择「课程 / 文章 / 音乐」进行新建、编辑、删除、上传文件
- 保存后会自动提交并重新部署，约 1 分钟上线

## 说明

- 内容按 Markdown 文件保存，日期会自动填入，无需手填。
- 图片、音频、文件通过后台上传后会自动归入上面的对应目录。
- 大视频建议上传到 B 站 / YouTube，在内容里填「外部链接」，避免仓库过大。
- 单个文件请控制在 100 MB 以内（GitHub 限制），后台上传上限为 25 MB。
