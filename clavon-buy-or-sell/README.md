# 换大公寓，还是组屋 + 60 万？— Clavon 换房案例研究

在线：https://leo486597.github.io/pages/clavon-buy-or-sell/

一对在新加坡十年的夫妇，Clavon 两房两卫（764 sqft，2020-12 买入 ~S$1.25M，2026 同户型成交 ~S$1.70M）要换四房。
A：卖了买 S$3.1M 四房公寓（75% 杠杆，每十年换）；B：卖了买金文泰转售组屋（~S$1.0M）+ 60 万投稳健全球组合。

**结论：建议 B。** 同一住房月预算 S$10k、共同随机路径跑 20 年：B 净资产中位 S$6.19M vs A S$4.79M，B 领先 79% 路径；
A 需私宅年化 ≥4.2% 才追平（URA 非有地指数 2010Q1–2026Q2 年化 3.3%；2005 后所有 10 年窗口中位 2.8%）。
「每十年换一次」作为收益策略不成立（一次 S$3.1M 级换房摩擦 ≈8.4% 房价）。2026-07-28 HDB 取消私宅业主买转售组屋的 15 个月等待期。
60 万入场：按 152 个真实起点 + 1,100 条自助抽样历史搜规则 → 越早买完越好、每月固定定投、比例偏离 >10pp 才再平衡；股票层分 6 个月是买安心的保险（10 年 CE 约 −0.5%）。

## 页面

| 页面 | 给谁 | 内容 |
|---|---|---|
| `index.html` | — | 目录 |
| `report.html` | 客户 | 建议书（可打印）：结论、处境、两条路同一把尺、为什么 B、60 万怎么进（含试试看小部件）、20 年后、下一步、15 条问答、附录 |
| `strategy-lab.html` | 客户 / 分析 | 进场规则实验室：改规则即时在真实起点 + 替代历史上打分；543 条规则网格结果 |
| `entry-plan.html` | 客户 | 60 万入场七步向导（日历、触发器演练、再平衡计算器、契约、打卡） |
| `simulator.html` | 分析 | 换房沙盘（A/B/C/D、蒙特卡洛、追平点、真实指数滚动 10 年、资产说明书） |
| `backtest.html` | 分析 | 2004–2026 真实数据按起点回溯 |
| `analysis.html` / `entry-plan-doc.html` / `backtest-doc.html` / `strategy-doc.html` | 分析 | 四份文字报告（由 .md 生成） |

## 口径与来源

- 房产：EdgeProp / Homejourney / PropertyGuru（Clavon 成交）、Homejourney（金文泰组屋中位）、HDB 官网（等待期取消）、IRAS 措施（BSD/ABSD/SSD）、URA & HDB 快报；指数原始季度数据 data.gov.sg。
- 回溯：Yahoo Finance 复权月末价（VTSMX/VGTSX/VBMFX/ES3.SI/^STI/GC=F/SGD=X），2004-01–2026-08，新元计价；新加坡短期利率为近似年表（MAS API 抓取时维护中）。
- 组合预期收益为规划假设（全球股 7%、债 3.5%、黄金 4%…），不是预测；沙盘可改。
- 未核的客户输入：公民/PR 身份、Clavon 未偿贷款与 CPF 已用额、家庭月收入、目标组屋剩余地契。

## 源文件（本机）

`/Users/leo/Documents/finantial-analysi/case-study-clavon-buy-or-sell/`
- 报告：`analysis.md` `entry-plan.md` `backtest.md` `strategy.md`；页面模板 `sim/*.html`；构建 `python3 sim/build.py`（`sim/md2html.py` 生成文字报告页）
- 引擎：`sim/engine.js`（沙盘）、`backtest/bt.js`（回溯与规则搜索）、`backtest/optimize.js` `optimize2.js`（网格搜索）、`backtest/report.js`
- 数据：`data/ura_ppi_quarterly.json` `data/hdb_rpi_quarterly.json` `data/history/monthly.json`（`backtest/fetch_history.py`）
- 自动执行：`strategy/rules.json` `strategy/agent.py`（每月 cron：拉价 → 算信号 → 动作清单 → 记账）

不构成投资建议。

## 2026-08-17 追加：能不能全自动？老虎证券模拟盘实测

`tiger-automation.html` —— 原方案在老虎只有 15% 能自动（伦交所 ETF 是合约壳、SSB 非券商产品）；一个账户管全部的老虎篮子（VT / BNDW / IAU / A35 + ES3 / CLR）已在模拟盘 21839889713464356 从换汇到成交全自动跑通，含逐条 API 证据、每一张单、幂等复跑。本机源：`case-study-clavon-buy-or-sell/strategy/{execute.py,brokers/,report.py,log/}`；老虎 API 能力探测：`auto-buy-O39/.claude/skills/tiger-api/`。
