# 美股市值前十 · 价值投资体检

巴菲特买入前 Checklist 六道闸门，跑完美股市值前 10。

**在线**： https://leo486597.github.io/pages/us-mega10-value-checklist/

- 股价基准：2026-08-14 收盘
- 财务基准：各公司最新一期 SEC 申报（XBRL companyfacts 一手数据）
- 估值口径：`tools/financial_rigor.py` 精确十进制
- 报告日：2026-08-16

## 结论

| | |
|---|---|
| 通过 Checklist | **0 家** |
| 灰色地带 | **2 家** — 微软 MSFT、伯克希尔 BRK.B |
| 未通过 | **8 家** |

三个跨公司发现（单看任何一家都发现不了）：

1. **GOOGL / AMZN / NVDA 的 GAAP 利润被同一批 AI 私有股权浮盈灌大** —— 半年合计约 $2,210 亿。
   谷歌表观 PE 17.3x，剔除浮盈后 **34.1x**；亚马逊 21.1x → **37.8x**。
2. **四大厂 2026 资本开支指引合计约 $7,400 亿**，是英伟达 TTM 营收的 2.9 倍。
   Alphabet 单季自由现金流史上首次为负、Amazon TTM 为负、**Meta 上半年回购 = $0**。
3. **Buffett 与 Cook 同年交班** —— Abel 已上任并首次动手，Ternus 2026-09-01 接任。

## 源文件在哪（这个 repo 只是产物）

本机工作目录：

```
/Users/leo/Documents/finantial-analysi/ai-berkshire/reports/
```

| 文件 | 内容 |
|---|---|
| `美股前10-投资报告-20260816.html` | 本页的源文件 |
| `美股前10-checklist-20260816.md` | 总览报告（对比表 + 三个跨公司发现完整版） |
| `英伟达/英伟达-checklist-20260816.md` | 单公司完整报告 |
| `苹果/`、`谷歌/`、`微软/`、`亚马逊/`、`博通/` | 同上 |
| `Meta/`、`特斯拉/`、`伯克希尔/`、`礼来/` | 同上 |

分析框架来自 [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) 的
`/investment-checklist` skill。数据解析脚本：`/tmp/facts/extract.py`
（SEC XBRL companyfacts 解析，TTM = 财年 + 累计 − 去年同期累计）。

## 免责

这是一次框架化的排除法体检，**不是投资建议**。所有"未通过"均指未通过这一套判据
（10 年确定性 + 安全边际），与股价方向无关。页内标为
`⚠ 二手 / 未核 / 估算 / 未知` 的条目请勿当作结论使用。
