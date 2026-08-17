# pages

Leo 的个人 artifact 发布站。**一个 folder = 一个 topic**，每个 topic 一个自包含的
`index.html`（无外部依赖，可直接双击打开，也由 GitHub Pages 托管）。

站点根： https://leo486597.github.io/pages/

---

## Topics

| Topic | 内容 | 发布 | 在线 |
|---|---|---|---|
| [`clavon-buy-or-sell/`](clavon-buy-or-sell/) | 换大公寓，还是组屋 + 60 万？— Clavon 换房案例研究 —— 新加坡换房决策全套：建议书、换房沙盘、60 万入场向导、真实数据回溯、进场规则实验室、深度分析与策略卡（含自动执行代理说明） | 2026-08-17 | [打开](https://leo486597.github.io/pages/clavon-buy-or-sell/) |
| [`us-mega10-value-checklist/`](us-mega10-value-checklist/) | 美股市值前十 · 价值投资体检 —— 巴菲特买入前 Checklist 六道闸门跑完市值前 10。0 家通过、2 家灰色、8 家未通过——外加三个单看一家发现不了的跨公司事实。 | 2026-08-16 | [打开](https://leo486597.github.io/pages/us-mega10-value-checklist/) |

---

## 这个 repo 放什么 / 不放什么

| ✅ 放 | ❌ 不放 |
|---|---|
| 自包含的 `index.html`（成品、可展示） | 源数据、中间产物、脚本 |
| 展示所必需的静态资源（内联优先） | 原始 `.md` 报告 |
| 每个 topic 的 `README.md`（说明 + 回链源目录） | 任何私密内容 —— **本 repo 是 public** |

**原则**：这里只放"给人看的成品"。真正的工作目录、原始报告、数据脚本留在本机，
由每个 topic 的 `README.md` 回链过去。

## 约定

- Topic 文件夹名：小写 kebab-case ASCII，不用中文（URL 不必转义，好分享）
- 入口文件必须叫 `index.html`（GitHub Pages 才会在目录 URL 直接渲染）
- 根目录 `.nojekyll` 空文件：关掉 Jekyll，避免下划线开头的文件/目录被吞掉
- HTML 自包含：内联 CSS/JS，不引外部 CDN（离线可看，也不受第三方失效影响）
- 每个 topic 的 `README.md` 必须写清**源文件在哪**——这个 repo 是产物，不是源

## 发布方式

由 skill `my-skills-leo-gh-pushlish` 自动完成（建 topic 目录 → 拷贝 artifact →
生成/更新两处 README 与根索引 → commit → push → 验活）。
