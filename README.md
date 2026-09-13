# Opus 的个人空间

网站：https://opus39tjy-netizen.github.io/
后台：https://opus39tjy-netizen.github.io/admin/

这是一个用 [Astro](https://astro.build) 构建的静态个人网站，所有内容都以文件形式存放在本仓库里。**媒体资源按板块分开存放。**

## 内容在这里

### 课程

- 课程内容：[`src/content/course`](src/content/course)
- 课程图片：[`public/course/images`](public/course/images)
- 讲义文件（PDF / PPT 等）：[`public/course/files`](public/course/files)

### 文章

- 文章内容：[`src/content/writing`](src/content/writing)
- 文章图片：[`public/writing/images`](public/writing/images)

### 音乐

- 音乐内容：[`src/content/music`](src/content/music)
- 音乐图片：[`public/music/images`](public/music/images)
- 音频：[`public/music/audio`](public/music/audio)
- 小视频：[`public/music/videos`](public/music/videos)

### 关于

- 关于页：[`src/content/pages/about.md`](src/content/pages/about.md)

### 站点素材

- 首页背景图等全局素材：[`public/images`](public/images)

### 设置

- 站点设置（名字、标语、社交链接等）：[`src/data/site.json`](src/data/site.json)
- 评论设置：[`src/data/giscus.json`](src/data/giscus.json)
- 内容管理后台配置：[`public/admin/config.yml`](public/admin/config.yml)

## 如何修改内容

- 打开 https://opus39tjy-netizen.github.io/admin/
- 用 GitHub 令牌（Token）登录
- 在左侧选择「课程 / 文章 / 音乐」进行新建、编辑、删除、上传文件
- 上传的图片/文件会自动归入对应板块的目录（见上）
- 保存后会自动提交并重新部署，约 1 分钟上线

## 说明

- 内容按 Markdown 文件保存，日期会自动填入，无需手填。
- 大视频建议上传到 B 站 / YouTube，在内容里填「外部链接」，避免仓库过大。
- 单个文件请控制在 100 MB 以内（GitHub 限制），后台上传上限为 25 MB。
