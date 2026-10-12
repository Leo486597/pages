# SCTCM 学习页面索引

在线：https://leo486597.github.io/pages/sctcm/

一页列出我为 SCTCM（中医学校）学习做的所有在线页面，按科目分组：内科、针灸、方剂·中药、推拿·儿科、课表，
外加一组「不确定是否属于中医学习」。同一个站的不同版本（第一版 / staging / v2、主线 / 分支）放在同一条目下。
这只是索引，不移动、不改名任何已有页面。

## 怎么收集的（2026-10-12）

- **GitHub Pages**：本 repo 根 `README.md` 的 topic 表，保留中医相关的 `neike-midterm/`（含 `staging/`、`v2/`）和 `xiaoer-tuina-kechuan/`。
- **Cloudflare Pages**：用 Cloudflare REST API 只读列出账号下全部 Pages 项目、自定义域名，以及每个项目部署记录里的分支别名（如 `sctcm-leo.zhenjiu1.pages.dev`）。
- **验活**：每个地址 `curl -L` 一次，页面上只放返回 200 的。

## Cloudflare 项目

| 项目 | 收录的地址 | 处理 |
|---|---|---|
| `zhenjiu1` | zhenjiu1.pages.dev、sctcm-leo.zhenjiu1.pages.dev | 针灸 |
| `zhenjiu-clips` | zhenjiu-clips.pages.dev | 针灸 |
| `herbcards` | fangyao.app、staging.herbcards.pages.dev、sctcm-leo.herbcards.pages.dev | 方剂·中药 |
| `fangji1` | fangji1.pages.dev、sctcm-leo.fangji1.pages.dev | 方剂·中药 |
| `sctcm-leo` | sctcm-leo.pages.dev/static/calendar/2026-night-grade-3/ | 课表 |
| `haolangzhong` | haolangzhong.nodebook.space | 不确定（页面看不出内容） |
| `nodesbook`、`nodesbook-staging` | — | 不收（笔记产品，非中医） |
| `auto-invest-prod`、`auto-invest-staging` | — | 不收（投资，非中医） |

`herbcards.pages.dev`、`www.fangyao.app` 与 `fangyao.app` 是同一个站，只列 `fangyao.app`。

## 源

页面是手写的单个 `index.html`，没有构建步骤；数据来自上面的 API 查询和各页面自己的 `<title>` / README。
