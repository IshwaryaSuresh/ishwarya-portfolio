/* global React, Wordmark, Money, Sparkline, Donut, BarChart, AreaChart, Progress, Avatar, Icon */

const { useState: useStateApp, useMemo: useMemoApp } = React;

/* ============================================================
   PRODUCT APP — shared shell + screens
   ============================================================ */

function AppShell({ goTo, view, theme, wordmark, children }) {
  const nav = [
    ["dashboard", "Overview", "home"],
    ["budget", "Budget", "pie"],
    ["goals", "Goals", "target"],
    ["invest", "Invest", "seed"],
    ["transactions", "Activity", "list"],
    ["settings", "Settings", "settings"],
  ];
  return (
    <div className="app-shell" data-theme={theme}>
      <aside className="app-side">
        <div className="app-side__brand">
          <Wordmark size={22} variant={wordmark}/>
        </div>
        <nav className="app-side__nav">
          {nav.map(([k, l, ic]) => (
            <button key={k} className={`app-side__item ${view === k ? "is-active" : ""}`} onClick={() => goTo(k)}>
              <Icon name={ic} size={16}/>
              <span>{l}</span>
            </button>
          ))}
        </nav>
        <div className="app-side__foot">
          <div className="app-side__user">
            <Avatar name="Alex Morgan" size={32}/>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Alex Morgan</div>
              <div className="label" style={{ fontSize: 10 }}>Premium · 0.25%</div>
            </div>
          </div>
          <button className="btn btn--ghost btn--sm" onClick={() => goTo("marketing")} style={{ width: "100%", justifyContent: "flex-start", marginTop: 12 }}>
            <Icon name="arrowDown" size={14}/>
            <span style={{ transform: "rotate(180deg)", display: "inline-block", marginRight: 6 }}>↑</span>
            Back to site
          </button>
        </div>
      </aside>
      <main className="app-main">
        <div className="app-topbar">
          <div className="app-topbar__greet">
            <div className="label">{new Date().toLocaleDateString("en-US",{ weekday: "long", month: "long", day: "numeric" })}</div>
            <div className="display" style={{ fontSize: 22, fontStyle: "normal", marginTop: 2 }}>
              Good morning, <span style={{ color: "var(--accent)" }}>Alex</span>.
            </div>
          </div>
          <div className="app-topbar__tools">
            <button className="btn btn--sm"><Icon name="search" size={14}/></button>
            <button className="btn btn--sm"><Icon name="bell" size={14}/></button>
            <button className="btn btn--accent btn--sm"><Icon name="plus" size={14}/> Move money</button>
          </div>
        </div>
        <div className="app-content">{children}</div>
      </main>
    </div>
  );
}

/* ===== DASHBOARD ===== */
function Dashboard() {
  return (
    <div className="dash">
      <div className="dash__hero card">
        <div className="dash__hero-head">
          <div>
            <div className="eyebrow">Net worth</div>
            <div className="display" style={{ fontSize: 72, lineHeight: 1, fontStyle: "normal", margin: "8px 0" }}>
              <Money value={284732.18}/>
            </div>
            <div className="mono" style={{ fontSize: 13, color: "var(--positive)" }}>↑ $1,284.42 today · +12.3% YTD</div>
          </div>
          <div className="dash__hero-controls">
            {["1W","1M","3M","1Y","All"].map((t, i) => (
              <button key={i} className={`dash__chip ${i === 3 ? "is-active" : ""}`}>{t}</button>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 32 }}>
          <AreaChart series={[
            { data: [240,248,256,252,260,264,268,272,278,280,282,284], color: "var(--accent)" },
            { data: [180,184,190,188,196,200,204,208,212,216,218,224], color: "var(--accent-2)" },
          ]} h={220} />
        </div>
        <div className="dash__hero-legend">
          <Legend swatch="var(--accent)" label="Index portfolio" v="$196,420.91"/>
          <Legend swatch="var(--accent-2)" label="Cash + savings" v="$64,321.55"/>
          <Legend swatch="var(--ink-3)" label="Goal reserves" v="$23,989.72"/>
        </div>
      </div>

      <div className="dash__grid">
        <div className="card dash__card">
          <div className="dash__card-head">
            <div className="eyebrow">May spending</div>
            <span className="tag dot">on track</span>
          </div>
          <div className="display" style={{ fontSize: 38, fontStyle: "normal", margin: "8px 0 4px" }}>
            $3,006 <span style={{ color: "var(--ink-3)", fontSize: 18 }}>/ $3,500</span>
          </div>
          <Progress value={86} color="var(--accent)" height={6}/>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 8 }}>14 DAYS LEFT · PACE −$120/DAY</div>
        </div>

        <div className="card dash__card">
          <div className="dash__card-head">
            <div className="eyebrow">Auto-invest</div>
            <span className="tag">Weekly</span>
          </div>
          <div className="display" style={{ fontSize: 38, fontStyle: "normal", margin: "8px 0 4px" }}>$1,200<span style={{ fontSize: 16, color: "var(--ink-3)" }}>/wk</span></div>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>NEXT · TUE, MAY 13 · INDEX 80/20</div>
          <div style={{ marginTop: 10 }}>
            <Sparkline data={[8,9,10,11,12,13,12,14,15,16,17,18]} w={240} h={36} stroke="var(--accent-2)" fill="var(--accent-2)" />
          </div>
        </div>

        <div className="card dash__card">
          <div className="dash__card-head">
            <div className="eyebrow">Cash savings</div>
            <span className="tag" style={{ color: "var(--positive)" }}>4.50% APY</span>
          </div>
          <div className="display" style={{ fontSize: 38, fontStyle: "normal", margin: "8px 0 4px" }}>$64,321<span style={{ fontSize: 18, color: "var(--ink-3)" }}>.55</span></div>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>+$241.18 INTEREST IN APRIL</div>
        </div>

        <div className="card dash__card dash__card--wide">
          <div className="dash__card-head">
            <div className="eyebrow">Recent activity</div>
            <button className="btn btn--ghost btn--sm">See all <Icon name="arrow" size={12}/></button>
          </div>
          <div style={{ marginTop: 12, display: "flex", flexDirection: "column" }}>
            {[
              ["Trader Joe's", "Groceries", -42.18, "Today", "cart"],
              ["Auto-invest deposit", "Invest", -300, "Today", "seed"],
              ["Stripe — Salary", "Income", 5840, "Yesterday", "arrowDown"],
              ["Verve Coffee", "Dining", -7.25, "Yesterday", "coffee"],
              ["Vacation goal", "Tokyo", -120, "Mon", "plane"],
            ].map((t, i) => (
              <div key={i} className="dash__tx">
                <div className="dash__tx-icon"><Icon name={t[4]} size={14}/></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{t[0]}</div>
                  <div className="label">{t[1]}</div>
                </div>
                <span className="label" style={{ width: 60, textAlign: "right" }}>{t[3]}</span>
                <span className="mono tnum" style={{ width: 90, textAlign: "right", color: t[2] > 0 ? "var(--positive)" : "var(--ink)", fontSize: 13 }}>
                  {t[2] > 0 ? "+" : "−"}${Math.abs(t[2]).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card dash__card dash__card--insight">
          <div className="eyebrow" style={{ color: "var(--accent-ink)", opacity: 0.75 }}>Kaizen insight</div>
          <div className="display" style={{ fontSize: 22, lineHeight: 1.2, margin: "8px 0 16px", color: "var(--accent-ink)" }}>
            "You'd hit your Tokyo goal six weeks earlier by raising auto-invest from $240 to $300/wk."
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn btn--sm" style={{ background: "var(--accent-ink)", color: "var(--accent)", borderColor: "var(--accent-ink)" }}>Apply</button>
            <button className="btn btn--ghost btn--sm" style={{ color: "var(--accent-ink)" }}>Dismiss</button>
          </div>
        </div>

        <div className="card dash__card">
          <div className="dash__card-head">
            <div className="eyebrow">Goals · 4 active</div>
            <button className="btn btn--ghost btn--sm">Add</button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 8 }}>
            {[
              ["Tokyo trip", 4280, 6000, "var(--accent)", "plane"],
              ["Down payment", 18420, 60000, "var(--accent-2)", "house"],
              ["New bike", 1240, 2200, "#c47a08", "car"],
            ].map((g, i) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, display: "flex", alignItems: "center", gap: 8 }}><Icon name={g[4]} size={14}/>{g[0]}</span>
                  <span className="mono tnum" style={{ fontSize: 12 }}>${g[1].toLocaleString()} <span style={{ color: "var(--ink-3)" }}>/ ${g[2].toLocaleString()}</span></span>
                </div>
                <Progress value={(g[1]/g[2])*100} color={g[3]} height={4}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  function Legend({ swatch, label, v }) {
    return (
      <div className="dash__legend">
        <span className="dash__legend-swatch" style={{ background: swatch }}/>
        <span className="label" style={{ flex: 1 }}>{label}</span>
        <span className="mono tnum" style={{ fontSize: 12 }}>{v}</span>
      </div>
    );
  }
}

/* ===== BUDGET ===== */
function BudgetView() {
  const cats = [
    { name: "Rent", v: 1850, max: 1850, color: "var(--ink)", icon: "house" },
    { name: "Groceries", v: 412, max: 600, color: "var(--accent)", icon: "cart" },
    { name: "Transit", v: 88, max: 150, color: "var(--accent-2)", icon: "car" },
    { name: "Dining", v: 246, max: 300, color: "#c47a08", icon: "coffee" },
    { name: "Subscriptions", v: 92, max: 100, color: "var(--ink-2)", icon: "card" },
    { name: "Discretionary", v: 318, max: 500, color: "var(--negative)", icon: "sparkle" },
  ];
  return (
    <div className="budget">
      <div className="budget__top card">
        <div>
          <div className="eyebrow">May · week 2 of 4</div>
          <div className="display" style={{ fontSize: 64, fontStyle: "normal", margin: "8px 0 4px" }}>
            <Money value={3006} decimals={0}/> <span style={{ color: "var(--ink-3)", fontSize: 24 }}>of $3,500</span>
          </div>
          <Progress value={86} color="var(--accent)" height={8}/>
          <div className="mono" style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 10 }}>14 DAYS LEFT · PACE −$120/DAY · YOU'LL FINISH AT $3,180</div>
        </div>
        <Donut size={180} thickness={22} segments={cats.map(c => ({ value: c.v, color: c.color }))} label="86%" sublabel="of plan"/>
      </div>

      <div className="budget__cats">
        <div className="eyebrow" style={{ marginBottom: 16 }}>Categories</div>
        <div className="budget__cats-grid">
          {cats.map((c, i) => {
            const pct = (c.v / c.max) * 100;
            return (
              <div key={i} className="card budget__cat">
                <div className="budget__cat-head">
                  <div className="budget__cat-icon" style={{ background: c.color }}>
                    <Icon name={c.icon} size={16} color="white"/>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{c.name}</div>
                    <div className="label">{Math.round(pct)}% used</div>
                  </div>
                </div>
                <div className="display" style={{ fontSize: 26, fontStyle: "normal", margin: "12px 0 4px" }}>
                  ${c.v} <span style={{ color: "var(--ink-3)", fontSize: 14 }}>/ ${c.max}</span>
                </div>
                <Progress value={pct} color={c.color} height={4}/>
              </div>
            );
          })}
        </div>
      </div>

      <div className="budget__bottom">
        <div className="card">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Trend · last 6 months</div>
          <BarChart height={160} data={[
            { l: "DEC", v: 82 }, { l: "JAN", v: 91 }, { l: "FEB", v: 76 },
            { l: "MAR", v: 88 }, { l: "APR", v: 73 }, { l: "MAY", v: 86, highlight: true },
          ]}/>
        </div>
        <div className="card budget__insight">
          <div className="eyebrow" style={{ color: "var(--accent-ink)", opacity: 0.75 }}>Pattern detected</div>
          <h3 className="display" style={{ margin: "8px 0", fontSize: 22, color: "var(--accent-ink)" }}>
            Dining out spikes on Fridays.
          </h3>
          <p style={{ fontSize: 13, color: "var(--accent-ink)", opacity: 0.85, margin: "0 0 16px", lineHeight: 1.5 }}>
            Six of your last seven Fridays exceeded $40. Want to set a Friday cap of $25?
          </p>
          <button className="btn btn--sm" style={{ background: "var(--accent-ink)", color: "var(--accent)" }}>Try it for a week</button>
        </div>
      </div>
    </div>
  );
}

/* ===== GOALS ===== */
function GoalsView() {
  const goals = [
    { name: "Tokyo trip", icon: "plane", saved: 4280, target: 6000, eta: "Oct 2026", weekly: 240, color: "var(--accent)", note: "October peak season — book flights early" },
    { name: "Down payment", icon: "house", saved: 18420, target: 60000, eta: "Mar 2028", weekly: 380, color: "var(--accent-2)", note: "Auto-invested in conservative portfolio" },
    { name: "New bike", icon: "car", saved: 1240, target: 2200, eta: "Aug 2026", weekly: 60, color: "#c47a08", note: "Almost there — 56% complete" },
    { name: "Emergency fund", icon: "shield", saved: 9600, target: 12000, eta: "On schedule", weekly: 80, color: "var(--ink)", note: "6 months of expenses" },
    { name: "Wedding", icon: "sparkle", saved: 3100, target: 25000, eta: "Sep 2027", weekly: 280, color: "var(--negative)", note: "Just started saving" },
    { name: "Tuition", icon: "grad", saved: 8400, target: 18000, eta: "Aug 2026", weekly: 200, color: "var(--warn)", note: "On track for fall semester" },
  ];
  return (
    <div className="goals">
      <div className="goals__head">
        <div>
          <div className="eyebrow">Saving for</div>
          <div className="display" style={{ fontSize: 56, fontStyle: "normal", margin: "8px 0" }}>
            <Money value={45040} decimals={0}/> <span style={{ color: "var(--ink-3)", fontSize: 24 }}>across 6 goals</span>
          </div>
          <div className="mono" style={{ fontSize: 13, color: "var(--ink-3)" }}>$1,240/WK AUTO-ALLOCATED · ALL ON TRACK</div>
        </div>
        <button className="btn btn--accent btn--lg"><Icon name="plus" size={14}/> New goal</button>
      </div>
      <div className="goals__grid">
        {goals.map((g, i) => {
          const pct = (g.saved / g.target) * 100;
          return (
            <div key={i} className="card goal-card">
              <div className="goal-card__top">
                <div className="goal-card__icon" style={{ background: g.color }}>
                  <Icon name={g.icon} size={20} color="white"/>
                </div>
                <span className="tag">{g.eta}</span>
              </div>
              <h3 className="display goal-card__title">{g.name}</h3>
              <div className="display" style={{ fontSize: 38, fontStyle: "normal", margin: "12px 0 0" }}>
                <Money value={g.saved} decimals={0}/>
              </div>
              <div className="mono" style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 12 }}>of ${g.target.toLocaleString()}</div>
              <Progress value={pct} color={g.color} height={6}/>
              <div className="goal-card__meta">
                <span className="label">{Math.round(pct)}% saved</span>
                <span className="label">${g.weekly}/wk auto</span>
              </div>
              <p className="goal-card__note">{g.note}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ===== INVEST ===== */
function InvestView() {
  const holdings = [
    { sym: "VTI", name: "Total US Stock", v: 110023.7, alloc: 56, day: 1.2, color: "var(--accent)" },
    { sym: "VXUS", name: "Total Intl Stock", v: 47140.9, alloc: 24, day: 0.4, color: "var(--accent-2)" },
    { sym: "BND", name: "Total Bond", v: 31427.3, alloc: 16, day: -0.1, color: "#c47a08" },
    { sym: "CASH", name: "Cash buffer", v: 7829.0, alloc: 4, day: 0.0, color: "var(--ink-3)" },
  ];
  return (
    <div className="invest">
      <div className="invest__top">
        <div className="card invest__hero">
          <div className="eyebrow">Index portfolio</div>
          <div className="display" style={{ fontSize: 72, fontStyle: "normal", margin: "8px 0", lineHeight: 1 }}>
            <Money value={196420.91}/>
          </div>
          <div className="mono" style={{ fontSize: 13, color: "var(--positive)" }}>↑ +$24,103 (+14.0%) all-time · +$1,284 today</div>
          <div style={{ marginTop: 28 }}>
            <AreaChart series={[{ data: [120,128,140,152,160,166,172,178,184,188,192,196], color: "var(--accent-2)" }]} h={200}/>
          </div>
          <div className="invest__perf">
            {[["1D","+0.66%"],["1W","+1.4%"],["1M","+2.1%"],["1Y","+12.4%"],["3Y","+38.2%"],["All","+14.0%"]].map((p, i) => (
              <div key={i} className="invest__perf-cell">
                <div className="label">{p[0]}</div>
                <div className="mono" style={{ color: "var(--positive)", fontWeight: 500 }}>{p[1]}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="invest__side">
          <div className="card">
            <div className="eyebrow" style={{ marginBottom: 16 }}>Allocation · 80/20</div>
            <Donut size={180} thickness={20} segments={holdings.map(h => ({ value: h.alloc, color: h.color }))} label="80/20" sublabel="stocks/bonds"/>
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
              {holdings.map((h, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: h.color }}/>
                  <span className="label" style={{ flex: 1 }}>{h.sym}</span>
                  <span className="mono tnum" style={{ fontSize: 12 }}>{h.alloc}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card invest__tlh">
            <Icon name="leaf" size={24}/>
            <div className="eyebrow" style={{ color: "var(--accent-ink)", opacity: 0.7, marginTop: 12 }}>Tax-loss harvesting</div>
            <div className="display" style={{ fontSize: 32, fontStyle: "normal", margin: "4px 0" }}>$1,284</div>
            <p style={{ margin: 0, fontSize: 13, opacity: 0.85, lineHeight: 1.5 }}>Saved this year. Automatic, daily, in the background.</p>
          </div>
        </div>
      </div>

      <div className="card invest__holdings">
        <div className="eyebrow" style={{ marginBottom: 16 }}>Holdings</div>
        <table className="invest__table">
          <thead>
            <tr>
              <th>Symbol</th><th>Name</th><th style={{ textAlign: "right" }}>Allocation</th><th style={{ textAlign: "right" }}>Value</th><th style={{ textAlign: "right" }}>Day</th><th style={{ textAlign: "right" }}>Trend</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((h, i) => (
              <tr key={i}>
                <td><span className="invest__sym" style={{ background: h.color }}>{h.sym}</span></td>
                <td>{h.name}</td>
                <td style={{ textAlign: "right" }} className="mono tnum">{h.alloc}%</td>
                <td style={{ textAlign: "right" }} className="mono tnum">${h.v.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
                <td style={{ textAlign: "right" }} className="mono tnum" >
                  <span style={{ color: h.day > 0 ? "var(--positive)" : h.day < 0 ? "var(--negative)" : "var(--ink-3)" }}>
                    {h.day > 0 ? "+" : ""}{h.day.toFixed(1)}%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <Sparkline data={[10,11,10.5,12,11.5,13,12.8,14,13.5,15,14.5,16].map(v => v + (h.day < 0 ? -2 : 0))} stroke={h.color} w={80} h={24}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ===== TRANSACTIONS ===== */
function TransactionsView() {
  const tx = [
    { d: "Today", items: [
      ["Trader Joe's", "Groceries", -42.18, "Chase ••4421", "cart"],
      ["Auto-invest deposit", "Invest · weekly", -300, "Kaizen Brokerage", "seed"],
      ["Spotify", "Subscriptions", -10.99, "Chase ••4421", "card"],
    ]},
    { d: "Yesterday", items: [
      ["Stripe — Payroll", "Income", 5840.00, "Chase ••4421", "arrowDown"],
      ["Verve Coffee", "Dining", -7.25, "Chase ••4421", "coffee"],
      ["Lyft", "Transit", -14.20, "Chase ••4421", "car"],
      ["Vacation goal — Tokyo", "Goal transfer", -120.00, "Goals reserve", "plane"],
    ]},
    { d: "Mon, May 5", items: [
      ["Whole Foods", "Groceries", -88.40, "Chase ••4421", "cart"],
      ["Dividend — VTI", "Income", 142.31, "Kaizen Brokerage", "arrowDown"],
      ["Comcast", "Subscriptions", -65.00, "Chase ••4421", "card"],
    ]},
    { d: "Sat, May 3", items: [
      ["Olive Garden", "Dining", -64.22, "Chase ••4421", "coffee"],
      ["Uniqlo", "Shopping", -118.50, "Chase ••4421", "cart"],
    ]},
  ];
  return (
    <div className="tx-view">
      <div className="tx-view__head">
        <div>
          <div className="eyebrow">Activity</div>
          <div className="display" style={{ fontSize: 48, fontStyle: "normal", margin: "8px 0" }}>Last 7 days</div>
        </div>
        <div className="tx-view__filters">
          <button className="btn btn--sm">All accounts <Icon name="chevron" size={12}/></button>
          <button className="btn btn--sm">All categories <Icon name="chevron" size={12}/></button>
          <button className="btn btn--sm"><Icon name="search" size={12}/></button>
          <button className="btn btn--sm"><Icon name="upload" size={12}/></button>
        </div>
      </div>

      <div className="tx-view__summary">
        <SumCell label="Money in" value={5982.31} positive/>
        <SumCell label="Money out" value={-810.74}/>
        <SumCell label="Net" value={5171.57} large/>
        <SumCell label="Transactions" value={14} prefix="" decimals={0}/>
      </div>

      {tx.map((day, i) => (
        <div key={i} className="tx-view__day">
          <div className="tx-view__day-head">
            <span className="display" style={{ fontSize: 22, letterSpacing: "-0.01em" }}>{day.d}</span>
            <span className="hairline" style={{ flex: 1, marginLeft: 16, marginRight: 16 }}/>
            <span className="label">{day.items.length} items · ${day.items.reduce((s, it) => s + it[2], 0).toFixed(2)}</span>
          </div>
          <div className="tx-view__list">
            {day.items.map((t, j) => (
              <div key={j} className="tx-view__row">
                <div className="tx-view__icon"><Icon name={t[4]} size={16}/></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{t[0]}</div>
                  <div className="label">{t[1]}</div>
                </div>
                <div className="label" style={{ minWidth: 140, textAlign: "left" }}>{t[3]}</div>
                <div className="mono tnum" style={{ minWidth: 110, textAlign: "right", fontSize: 14, color: t[2] > 0 ? "var(--positive)" : "var(--ink)" }}>
                  {t[2] > 0 ? "+" : "−"}${Math.abs(t[2]).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  function SumCell({ label, value, positive, large, prefix = "$", decimals = 2 }) {
    return (
      <div className="card" style={{ padding: 20 }}>
        <div className="label">{label}</div>
        <div className="display tnum" style={{ fontSize: large ? 36 : 26, fontStyle: "normal", margin: "4px 0", color: positive ? "var(--positive)" : value < 0 ? "var(--negative)" : "var(--ink)" }}>
          {value < 0 ? "−" : ""}{prefix}{Math.abs(value).toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
        </div>
      </div>
    );
  }
}

/* ===== ONBOARDING ===== */
function OnboardingView({ goTo, wordmark = "slash" }) {
  const [step, setStep] = useStateApp(0);
  const steps = ["Welcome","Connect bank","Pick goals","Set auto-invest","Review"];
  return (
    <div className="onb">
      <div className="onb__head">
        <Wordmark size={26} variant={wordmark}/>
        <div className="onb__steps">
          {steps.map((s, i) => (
            <div key={i} className={`onb__step ${i === step ? "is-active" : ""} ${i < step ? "is-done" : ""}`}>
              <span className="onb__step-n">{String(i + 1).padStart(2, "0")}</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
        <button className="btn btn--ghost btn--sm" onClick={() => goTo("marketing")}>Exit</button>
      </div>
      <div className="onb__body">
        {step === 0 && <OnbWelcome onNext={() => setStep(1)} />}
        {step === 1 && <OnbBank onNext={() => setStep(2)} />}
        {step === 2 && <OnbGoals onNext={() => setStep(3)} />}
        {step === 3 && <OnbInvest onNext={() => setStep(4)} />}
        {step === 4 && <OnbReview onDone={() => goTo("dashboard")} />}
      </div>
    </div>
  );
}

function OnbWelcome({ onNext }) {
  return (
    <div className="onb__pane">
      <div className="eyebrow">Welcome</div>
      <h2 className="display" style={{ fontSize: 88, fontStyle: "normal", margin: "16px 0 32px", letterSpacing: "-0.04em", lineHeight: 1.05, paddingBottom: 8 }}>
        Money is a <span style={{ color: "var(--accent)" }}>practice.</span>
      </h2>
      <p style={{ fontSize: 18, color: "var(--ink-2)", maxWidth: "50ch", lineHeight: 1.5, marginTop: 0 }}>
        Setup takes 4 minutes. We'll connect your bank, set up two or three goals,
        and turn on auto-invest. You can change anything, any time.
      </p>
      <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
        <button className="btn btn--accent btn--lg" onClick={onNext}>Begin → </button>
        <button className="btn btn--lg">I have an account</button>
      </div>
    </div>
  );
}

function OnbBank({ onNext }) {
  const banks = [
    { name: "Chase", logo: "C", color: "#117ACA" },
    { name: "Bank of America", logo: "B", color: "#E31837" },
    { name: "Wells Fargo", logo: "W", color: "#D71E28" },
    { name: "Citi", logo: "Ci", color: "#003D7A" },
    { name: "Capital One", logo: "C1", color: "#D03027" },
    { name: "Ally", logo: "A", color: "#7F2487" },
    { name: "SoFi", logo: "S", color: "#00A6E2" },
    { name: "Schwab", logo: "Sc", color: "#0C84B6" },
  ];
  return (
    <div className="onb__pane">
      <div className="eyebrow">Step 02 of 05</div>
      <h2 className="display" style={{ fontSize: 56, fontStyle: "normal", margin: "12px 0 16px", lineHeight: 1.05 }}>
        Connect your <span style={{ color: "var(--accent)" }}>bank</span>.
      </h2>
      <p style={{ color: "var(--ink-2)", marginBottom: 24 }}>Read-only access via Plaid. We never see your password.</p>
      <div className="onb__banks">
        {banks.map((b, i) => (
          <button key={i} className="onb__bank">
            <div className="onb__bank-logo" style={{ background: b.color }}>{b.logo}</div>
            <span>{b.name}</span>
          </button>
        ))}
      </div>
      <div className="card" style={{ display: "flex", gap: 12, alignItems: "center", padding: 16, marginTop: 24 }}>
        <Icon name="lock" size={20} color="var(--accent)"/>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 500, fontSize: 14 }}>Read-only by default</div>
          <div className="label">We can see balances and transactions, never move money without permission.</div>
        </div>
      </div>
      <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
        <button className="btn btn--accent btn--lg" onClick={onNext}>Continue → </button>
        <button className="btn btn--lg">Skip — connect later</button>
      </div>
    </div>
  );
}

function OnbGoals({ onNext }) {
  const presets = [
    { name: "Vacation", icon: "plane", color: "var(--accent)" },
    { name: "Down payment", icon: "house", color: "var(--accent-2)" },
    { name: "New car", icon: "car", color: "#c47a08" },
    { name: "Emergency fund", icon: "shield", color: "var(--ink)" },
    { name: "Wedding", icon: "sparkle", color: "var(--negative)" },
    { name: "Tuition", icon: "grad", color: "var(--warn)" },
  ];
  const [picked, setPicked] = useStateApp(["Vacation", "Emergency fund"]);
  const toggle = (n) => setPicked(p => p.includes(n) ? p.filter(x => x !== n) : [...p, n]);
  return (
    <div className="onb__pane">
      <div className="eyebrow">Step 03 of 05</div>
      <h2 className="display" style={{ fontSize: 56, fontStyle: "normal", margin: "12px 0 16px", lineHeight: 1.05 }}>
        What are you <span style={{ color: "var(--accent)" }}>saving for</span>?
      </h2>
      <p style={{ color: "var(--ink-2)", marginBottom: 24 }}>Pick one or many. We'll figure out the math.</p>
      <div className="onb__presets">
        {presets.map((p, i) => {
          const on = picked.includes(p.name);
          return (
            <button key={i} className={`onb__preset ${on ? "is-on" : ""}`} onClick={() => toggle(p.name)}>
              <div className="onb__preset-icon" style={{ background: p.color }}>
                <Icon name={p.icon} size={20} color="white"/>
              </div>
              <span style={{ fontSize: 15, fontWeight: 500 }}>{p.name}</span>
              <span className="onb__preset-check">{on && <Icon name="check" size={14}/>}</span>
            </button>
          );
        })}
      </div>
      <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
        <button className="btn btn--accent btn--lg" onClick={onNext} disabled={picked.length === 0}>Continue → </button>
        <button className="btn btn--ghost btn--lg">Add custom</button>
      </div>
    </div>
  );
}

function OnbInvest({ onNext }) {
  const [risk, setRisk] = useStateApp(2);
  const profiles = [
    { name: "Conservative", split: "30/70", desc: "Bond-heavy. Lower swings, lower upside.", color: "var(--ink-3)" },
    { name: "Balanced", split: "60/40", desc: "Classic mix. Smooth ride.", color: "#c47a08" },
    { name: "Growth", split: "80/20", desc: "Stock-heavy. Recommended for your horizon.", color: "var(--accent)" },
    { name: "Aggressive", split: "100/0", desc: "All stocks. For long timelines and steady stomachs.", color: "var(--negative)" },
  ];
  return (
    <div className="onb__pane">
      <div className="eyebrow">Step 04 of 05</div>
      <h2 className="display" style={{ fontSize: 56, fontStyle: "normal", margin: "12px 0 16px", lineHeight: 1.05 }}>
        Pick your <span style={{ color: "var(--accent)" }}>portfolio</span>.
      </h2>
      <p style={{ color: "var(--ink-2)", marginBottom: 24 }}>Index funds. We'll rebalance automatically.</p>
      <div className="onb__risks">
        {profiles.map((p, i) => (
          <button key={i} className={`onb__risk ${risk === i ? "is-on" : ""}`} onClick={() => setRisk(i)}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span className="display" style={{ fontSize: 22, fontStyle: "normal" }}>{p.name}</span>
              <span className="mono" style={{ fontSize: 13, color: p.color }}>{p.split}</span>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: 13, color: "var(--ink-2)" }}>{p.desc}</p>
            <div style={{ marginTop: 12, height: 6, borderRadius: 4, background: "var(--line)", overflow: "hidden", display: "flex" }}>
              <span style={{ background: p.color, width: `${[30,60,80,100][i]}%` }}/>
              <span style={{ background: "var(--line-2)", flex: 1 }}/>
            </div>
          </button>
        ))}
      </div>
      <div style={{ marginTop: 32, display: "flex", gap: 12, alignItems: "center" }}>
        <span className="label">Auto-invest</span>
        <input type="number" defaultValue={300} className="onb__num"/>
        <span className="label">/ week</span>
        <button className="btn btn--accent btn--lg" style={{ marginLeft: "auto" }} onClick={onNext}>Continue → </button>
      </div>
    </div>
  );
}

function OnbReview({ onDone }) {
  return (
    <div className="onb__pane">
      <div className="eyebrow">Step 05 of 05</div>
      <h2 className="display" style={{ fontSize: 64, fontStyle: "normal", margin: "12px 0 16px", lineHeight: 1.05 }}>
        You're <span style={{ color: "var(--accent)" }}>ready</span>.
      </h2>
      <p style={{ color: "var(--ink-2)", marginBottom: 24 }}>Here's what we'll do. Change anything any time.</p>
      <div className="card" style={{ padding: 28 }}>
        <ReviewRow label="Bank connected" v="Chase ••4421" tone="positive"/>
        <ReviewRow label="Goals" v="Vacation, Emergency fund"/>
        <ReviewRow label="Portfolio" v="Growth · 80/20"/>
        <ReviewRow label="Auto-invest" v="$300/wk · Tuesdays"/>
        <ReviewRow label="Estimated annual fee" v="$0 first year, then 0.25%"/>
      </div>
      <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
        <button className="btn btn--accent btn--lg" onClick={onDone}>Open my account →</button>
      </div>
    </div>
  );
  function ReviewRow({ label, v, tone }) {
    return (
      <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid var(--line)" }}>
        <span className="label">{label}</span>
        <span style={{ fontSize: 15, color: tone === "positive" ? "var(--positive)" : "var(--ink)" }}>{v}</span>
      </div>
    );
  }
}

/* ===== SETTINGS ===== */
function SettingsView() {
  return (
    <div className="settings">
      <div className="settings__head">
        <div className="eyebrow">Account</div>
        <div className="display" style={{ fontSize: 56, fontStyle: "normal", margin: "8px 0" }}>Settings</div>
      </div>
      <div className="settings__grid">
        <div className="card">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Profile</div>
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 24 }}>
            <Avatar name="Alex Morgan" size={64}/>
            <div>
              <div className="display" style={{ fontSize: 22, fontStyle: "normal" }}>Alex Morgan</div>
              <div className="label">alex@morgan.io · Member since Mar 2024</div>
            </div>
          </div>
          <SetRow label="Legal name" v="Alex Morgan"/>
          <SetRow label="Tax ID" v="•••-••-4321"/>
          <SetRow label="Date of birth" v="•••• 1992"/>
          <SetRow label="Address" v="San Francisco, CA"/>
        </div>

        <div className="card">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Security</div>
          <SetRow label="Two-factor auth" v="On · Authenticator app" pos/>
          <SetRow label="Login alerts" v="Email + SMS" pos/>
          <SetRow label="Trusted devices" v="2 devices"/>
          <SetRow label="Last login" v="Today, 8:14am · SF"/>
          <button className="btn btn--sm" style={{ marginTop: 12 }}>Sign out everywhere</button>
        </div>

        <div className="card">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Linked accounts</div>
          <SetRow label="Chase ••4421" v="Checking + savings"/>
          <SetRow label="Kaizen Brokerage" v="Apex Clearing"/>
          <SetRow label="Cash Reserve" v="HMBradley · 4.5% APY"/>
          <button className="btn btn--sm" style={{ marginTop: 12 }}><Icon name="plus" size={12}/> Connect another</button>
        </div>

        <div className="card">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Documents</div>
          <SetRow label="2025 1099-DIV" v="Available · Feb 14" download/>
          <SetRow label="2025 1099-B" v="Available · Feb 14" download/>
          <SetRow label="Tax-loss summary" v="$1,284 saved" download/>
          <SetRow label="Form ADV" v="View"/>
        </div>

        <div className="card settings__danger">
          <div className="eyebrow" style={{ color: "var(--negative)", marginBottom: 16 }}>Danger zone</div>
          <p style={{ margin: "0 0 16px", color: "var(--ink-2)", fontSize: 14 }}>Pause auto-invest, withdraw funds, or close your account. No exit fees.</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button className="btn btn--sm" style={{ whiteSpace: "nowrap" }}>Pause auto-invest</button>
            <button className="btn btn--sm" style={{ whiteSpace: "nowrap" }}>Withdraw all</button>
            <button className="btn btn--sm" style={{ borderColor: "var(--negative)", color: "var(--negative)", whiteSpace: "nowrap" }}>Close account</button>
          </div>
        </div>

        <div className="card">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Preferences</div>
          <SetRow label="Email digest" v="Weekly · Mondays" toggle/>
          <SetRow label="Push notifications" v="Bills + plan exceeded only" toggle/>
          <SetRow label="Theme" v="System"/>
          <SetRow label="Currency" v="USD ($)"/>
        </div>
      </div>
    </div>
  );
}

function SetRow({ label, v, pos, download, toggle }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, padding: "14px 0", borderBottom: "1px solid var(--line)" }}>
      <span style={{ fontSize: 14, color: "var(--ink-2)", fontFamily: "var(--f-text)", flexShrink: 0 }}>{label}</span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14, color: pos ? "var(--positive)" : "var(--ink)", textAlign: "right", minWidth: 0 }}>
        <span>{v}</span>
        {download && <Icon name="upload" size={14}/>}
        {toggle && <span style={{ width: 32, height: 18, background: "var(--accent)", borderRadius: 999, position: "relative", flexShrink: 0 }}>
          <span style={{ position: "absolute", right: 2, top: 2, width: 14, height: 14, background: "white", borderRadius: "50%" }}/>
        </span>}
      </span>
    </div>
  );
}

/* Export */
Object.assign(window, {
  AppShell, Dashboard, BudgetView, GoalsView, InvestView, TransactionsView, OnboardingView, SettingsView,
});
