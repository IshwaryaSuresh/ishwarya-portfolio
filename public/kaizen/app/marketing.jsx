/* global React, Wordmark, Money, Sparkline, Donut, BarChart, AreaChart, Progress, Avatar, Icon */

const { useState, useEffect, useRef } = React;

/* ============================================================
   MARKETING PAGE
   Three visual directions, all share the same content + structure.
   The wrapper sets data-theme; CSS tokens swap colors / fonts.
   ============================================================ */

function MarketingPage({ goTo, theme, setTheme, wordmark, setWordmark }) {
  return (
    <div className="mkt" data-theme={theme}>
      <Nav goTo={goTo} wordmark={wordmark} />
      <Hero theme={theme} />
      <ProductPreview goTo={goTo} theme={theme}/>
      <FeatureGrid theme={theme}/>
      <NumbersBand />
      <PricingBlock />
      <SecurityBlock />
      <TestimonialsRow />
      <FAQ />
      <CTA goTo={goTo} />
      <Footer wordmark={wordmark}/>
    </div>
  );
}

/* ----- NAV ----- */
function Nav({ goTo, wordmark }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`mkt-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="mkt-nav__inner">
        <button className="mkt-nav__brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Wordmark size={26} variant={wordmark}/>
        </button>
        <nav className="mkt-nav__links">
          <a href="#product">Product</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#security">Security</a>
        </nav>
        <div className="mkt-nav__actions">
          <button className="btn btn--ghost btn--sm" onClick={() => goTo("dashboard")}>Sign in</button>
          <button className="btn btn--accent btn--sm" onClick={() => goTo("onboarding")}>Open an account →</button>
        </div>
      </div>
    </header>
  );
}

/* ----- HERO ----- */
function Hero({ theme }) {
  return (
    <section className="hero">
      <div className="hero__bg">
        <span className="hero__bg-mark">改</span>
      </div>

      <div className="hero__grid">
        {/* LEFT — editorial copy */}
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <span className="hero__rule"/>
            <span className="hero__issue mono">No. 001 · The Kaizen Quarterly</span>
          </div>

          <h1 className="hero__title display">
            <span>Money,</span>
            <span className="hero__title-it">quietly</span>
            <span>compounding.</span>
          </h1>

          <p className="hero__lede">
            An automated budget, an index portfolio that rebalances itself, and a goal tracker
            that feels like a diary. Small, daily improvements, for the next forty years.
          </p>

          <div className="hero__cta">
            <button className="btn btn--accent btn--lg">Open an account <Icon name="arrow" size={16}/></button>
            <button className="btn btn--ghost btn--lg">Watch the 90-second tour ↗</button>
          </div>

          <div className="hero__stats">
            <div><div className="hero__stat-n display">$2.5B</div><div className="label">managed</div></div>
            <div className="hero__stat-div"/>
            <div><div className="hero__stat-n display">150K</div><div className="label">members</div></div>
            <div className="hero__stat-div"/>
            <div><div className="hero__stat-n display">0.25%</div><div className="label">all-in fee</div></div>
            <div className="hero__stat-div"/>
            <div><div className="hero__stat-n display">4.8★</div><div className="label">12k reviews</div></div>
          </div>
        </div>

        {/* RIGHT — single dominant artefact */}
        <div className="hero__art">
          <div className="hero__art-frame">
            <div className="hero__art-corner hero__art-corner--tl"/>
            <div className="hero__art-corner hero__art-corner--tr"/>
            <div className="hero__art-corner hero__art-corner--bl"/>
            <div className="hero__art-corner hero__art-corner--br"/>

            <div className="hero__art-head">
              <div>
                <div className="label" style={{ letterSpacing: "0.18em" }}>Net worth · Year to date</div>
                <div className="hero__art-num display">
                  $284,<span>732</span>
                  <span className="hero__art-cents">.18</span>
                </div>
              </div>
              <div className="hero__delta">
                <Icon name="arrowUp" size={14}/>
                <span className="mono">12.3%</span>
              </div>
            </div>

            <div className="hero__art-chart">
              <AreaChart
                series={[
                  { data: [180,188,195,202,210,220,232,244,258,268,276,284], color: "var(--accent)" },
                ]}
                h={240} showAxis={false}
              />
              <span className="hero__art-pin" style={{ left: "84%" }}>
                <span className="hero__art-pin-dot"/>
                <span className="hero__art-pin-label mono">today</span>
              </span>
            </div>

            <div className="hero__art-rows">
              <div className="hero__art-row">
                <span className="hero__art-row-dot" style={{ background: "var(--accent)" }}/>
                <span style={{ flex: 1 }}>Index portfolio</span>
                <span className="mono tnum">$196,420</span>
                <span className="hero__art-row-d">+12.4%</span>
              </div>
              <div className="hero__art-row">
                <span className="hero__art-row-dot" style={{ background: "var(--accent-2)" }}/>
                <span style={{ flex: 1 }}>Cash · 4.5% APY</span>
                <span className="mono tnum">$64,321</span>
                <span className="hero__art-row-d">+4.1%</span>
              </div>
              <div className="hero__art-row">
                <span className="hero__art-row-dot" style={{ background: "var(--ink-3)" }}/>
                <span style={{ flex: 1 }}>Goal reserves</span>
                <span className="mono tnum">$23,989</span>
                <span className="hero__art-row-d">+8.7%</span>
              </div>
            </div>
          </div>

          {/* Trust mark */}
          <div className="hero__trust">
            <Icon name="lock" size={12}/>
            <span>SIPC · FDIC · SOC 2 Type II</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----- MANIFESTO STRIP ----- */
function ManifestoStrip() {
  const items = ["Compound, don't gamble", "Plan, don't predict", "Automate, don't agonize", "Save, don't suffer", "Compound, don't gamble"];
  return (
    <section className="manifesto">
      <div className="manifesto__track">
        {items.concat(items).map((t, i) => (
          <span key={i} className="manifesto__item display">
            <span style={{ color: "var(--accent)", marginRight: 16 }}>✦</span>{t}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ----- PRODUCT PREVIEW (the actual app, in-page) ----- */
function ProductPreview({ goTo, theme }) {
  const [tab, setTab] = useState("dashboard");
  return (
    <section id="product" className="product-preview">
      <div className="product-preview__head">
        <div>
          <div className="eyebrow">The product</div>
          <h2 className="display product-preview__title">
            One ledger.<br/>
            <span style={{ color: "var(--accent)" }}>Every</span> dollar accounted for.
          </h2>
        </div>
        <p className="product-preview__lede">
          Budgeting, goals, investing, and a tax-aware engine. One quiet interface that
          reads like a financial diary, not a casino floor.
        </p>
      </div>
      <div className="product-preview__tabs">
        {[
          ["dashboard","Overview"],
          ["budget","Budget"],
          ["goals","Goals"],
          ["invest","Invest"],
          ["transactions","Activity"],
        ].map(([k, l]) => (
          <button key={k} className={`product-preview__tab ${tab === k ? "is-active" : ""}`} onClick={() => setTab(k)}>{l}</button>
        ))}
        <span style={{ flex: 1 }}/>
        <button className="btn btn--sm" onClick={() => goTo(tab === "dashboard" ? "dashboard" : tab)}>
          Open live <Icon name="arrow" size={14}/>
        </button>
      </div>
      <div className="product-preview__frame">
        <PreviewMock tab={tab}/>
      </div>
    </section>
  );
}

function PreviewMock({ tab }) {
  if (tab === "dashboard") {
    return (
      <div className="pmock">
        <div className="pmock__col">
          <div className="eyebrow">Net worth · today</div>
          <div className="display tnum" style={{ fontSize: 64, fontStyle: "normal", lineHeight: 1, margin: "8px 0 4px" }}>
            $284,732<span style={{ fontSize: 28, color: "var(--ink-3)" }}>.18</span>
          </div>
          <div className="mono" style={{ fontSize: 13, color: "var(--positive)" }}>↑ $1,284 today · +12.3% YTD</div>
          <div style={{ marginTop: 24 }}>
            <AreaChart series={[
              { data: [180,188,195,202,208,215,228,240,252,264,272,284], color: "var(--accent)" },
              { data: [120,124,128,132,136,140,148,156,162,170,176,180], color: "var(--accent-2)" },
            ]} h={200} />
          </div>
        </div>
        <div className="pmock__col pmock__col--side">
          <PmockCard label="This month spending" value="$3,420" sub="−$320 vs plan" tone="positive"/>
          <PmockCard label="Auto-invested" value="$1,200" sub="weekly · index 80/20"/>
          <PmockCard label="Cash runway" value="14 months" sub="based on 6mo avg"/>
        </div>
      </div>
    );
  }
  if (tab === "budget") {
    const cats = [
      { name: "Rent", v: 1850, max: 1850, color: "var(--ink)" },
      { name: "Groceries", v: 412, max: 600, color: "var(--accent)" },
      { name: "Transit", v: 88, max: 150, color: "var(--accent-2)" },
      { name: "Dining", v: 246, max: 300, color: "#c47a08" },
      { name: "Subscriptions", v: 92, max: 100, color: "var(--ink-2)" },
      { name: "Discretionary", v: 318, max: 500, color: "var(--negative)" },
    ];
    return (
      <div className="pmock">
        <div className="pmock__col">
          <div className="eyebrow">May, week 2 of 4</div>
          <div className="display" style={{ fontSize: 48, fontStyle: "normal", lineHeight: 1, margin: "8px 0 16px" }}>
            $3,006 <span style={{ color: "var(--ink-3)", fontSize: 24 }}>of $3,500</span>
          </div>
          <Progress value={86} color="var(--accent)" height={10}/>
          <div className="mono" style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 8 }}>14 days left · pace −$120/day</div>
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 14 }}>
            {cats.map((c, i) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontWeight: 500, fontSize: 14 }}>{c.name}</span>
                  <span className="mono tnum" style={{ fontSize: 13 }}>${c.v} <span style={{ color: "var(--ink-3)" }}>/ ${c.max}</span></span>
                </div>
                <Progress value={(c.v/c.max)*100} color={c.color} height={4}/>
              </div>
            ))}
          </div>
        </div>
        <div className="pmock__col pmock__col--side">
          <Donut size={180} thickness={20} segments={[
            { value: 1850, color: "var(--ink)" },
            { value: 412, color: "var(--accent)" },
            { value: 88, color: "var(--accent-2)" },
            { value: 246, color: "#c47a08" },
            { value: 92, color: "var(--ink-2)" },
            { value: 318, color: "var(--negative)" },
          ]} label="$3,006" sublabel="6 categories"/>
          <div className="card" style={{ padding: 16 }}>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Insight</div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.45 }}>
              Dining is trending +18% vs your six-week average. Want to cap it at $250 next month?
            </p>
            <button className="btn btn--sm" style={{ marginTop: 12 }}>Cap at $250</button>
          </div>
        </div>
      </div>
    );
  }
  if (tab === "goals") {
    return (
      <div className="pmock pmock--goals">
        {[
          { name: "Tokyo trip", icon: "plane", saved: 4280, target: 6000, eta: "Oct 2026", color: "var(--accent)" },
          { name: "Down payment", icon: "house", saved: 18420, target: 60000, eta: "Mar 2028", color: "var(--accent-2)" },
          { name: "New bike", icon: "car", saved: 1240, target: 2200, eta: "Aug 2026", color: "#c47a08" },
          { name: "Emergency fund", icon: "shield", saved: 9600, target: 12000, eta: "On schedule", color: "var(--ink)" },
        ].map((g, i) => (
          <div className="pmock-goal card" key={i}>
            <div className="pmock-goal__head">
              <div className="pmock-goal__icon" style={{ background: g.color }}>
                <Icon name={g.icon} size={18} color="white"/>
              </div>
              <div>
                <div style={{ fontWeight: 500 }}>{g.name}</div>
                <div className="label">ETA · {g.eta}</div>
              </div>
            </div>
            <div className="display" style={{ fontSize: 30, fontStyle: "normal", margin: "16px 0 4px" }}>
              <Money value={g.saved} decimals={0}/>
            </div>
            <div className="mono" style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 10 }}>of ${g.target.toLocaleString()}</div>
            <Progress value={(g.saved/g.target)*100} color={g.color} height={6}/>
          </div>
        ))}
      </div>
    );
  }
  if (tab === "invest") {
    return (
      <div className="pmock">
        <div className="pmock__col">
          <div className="eyebrow">Index portfolio · 80/20</div>
          <div className="display" style={{ fontSize: 56, fontStyle: "normal", lineHeight: 1, margin: "8px 0" }}>
            $196,420<span style={{ fontSize: 24, color: "var(--ink-3)" }}>.91</span>
          </div>
          <div className="mono" style={{ fontSize: 13, color: "var(--positive)" }}>↑ +$24,103 (+14.0%) all-time</div>
          <div style={{ marginTop: 24 }}>
            <AreaChart series={[{ data: [120,128,140,152,160,166,172,178,184,188,192,196], color: "var(--accent-2)" }]} h={180}/>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginTop: 16 }}>
            {[
              ["1M","+2.1%"],["1Y","+12.4%"],["All","+14.0%"],
            ].map(([l, v], i) => (
              <div key={i} className="card" style={{ padding: 12 }}>
                <div className="label">{l}</div>
                <div className="mono" style={{ color: "var(--positive)", fontWeight: 500 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="pmock__col pmock__col--side">
          <div className="card" style={{ padding: 16 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Allocation</div>
            {[
              { name: "Total US Stock (VTI)", v: 56, color: "var(--accent)" },
              { name: "Total Intl Stock (VXUS)", v: 24, color: "var(--accent-2)" },
              { name: "Total Bond (BND)", v: 16, color: "#c47a08" },
              { name: "Cash", v: 4, color: "var(--ink-3)" },
            ].map((a, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 13 }}>{a.name}</span>
                  <span className="mono tnum" style={{ fontSize: 12 }}>{a.v}%</span>
                </div>
                <Progress value={a.v} color={a.color} height={4}/>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding: 16, background: "var(--accent)", color: "var(--accent-ink)", borderColor: "var(--accent)" }}>
            <div className="label" style={{ color: "var(--accent-ink)", opacity: 0.7 }}>Tax-loss harvesting</div>
            <div className="display" style={{ fontSize: 24, fontStyle: "normal", margin: "4px 0" }}>$1,284 saved</div>
            <p style={{ margin: 0, fontSize: 13, opacity: 0.85 }}>This year, automatic. We swap losers for similar funds, you keep the loss.</p>
          </div>
        </div>
      </div>
    );
  }
  // transactions
  const tx = [
    { name: "Trader Joe's", cat: "Groceries", v: -42.18, d: "Today", icon: "cart" },
    { name: "Auto-invest deposit", cat: "Invest", v: -300, d: "Today", icon: "seed" },
    { name: "Stripe: Salary", cat: "Income", v: 5840, d: "Yesterday", icon: "arrowDown" },
    { name: "Verve Coffee", cat: "Dining", v: -7.25, d: "Yesterday", icon: "coffee" },
    { name: "Uber", cat: "Transit", v: -18.40, d: "Mon", icon: "car" },
    { name: "Vacation goal", cat: "Goal", v: -120, d: "Mon", icon: "plane" },
    { name: "Whole Foods", cat: "Groceries", v: -88.40, d: "Sat", icon: "cart" },
  ];
  return (
    <div className="pmock pmock--tx">
      <div className="pmock-tx__head">
        <div className="eyebrow">Activity · last 7 days</div>
        <div style={{ display: "flex", gap: 8 }}>
          <span className="tag">All accounts</span>
          <span className="tag">Filter</span>
        </div>
      </div>
      <div className="pmock-tx__list">
        {tx.map((t, i) => (
          <div className="pmock-tx__row" key={i}>
            <div className="pmock-tx__icon"><Icon name={t.icon} size={16}/></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 500, fontSize: 14 }}>{t.name}</div>
              <div className="label">{t.cat}</div>
            </div>
            <div className="label" style={{ minWidth: 60, textAlign: "right" }}>{t.d}</div>
            <div className="mono tnum" style={{ minWidth: 100, textAlign: "right", color: t.v > 0 ? "var(--positive)" : "var(--ink)" }}>
              {t.v > 0 ? "+" : "−"}${Math.abs(t.v).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PmockCard({ label, value, sub, tone }) {
  return (
    <div className="card" style={{ padding: 16 }}>
      <div className="label">{label}</div>
      <div className="display" style={{ fontSize: 26, fontStyle: "normal", margin: "4px 0" }}>{value}</div>
      <div className="mono" style={{ fontSize: 12, color: tone === "positive" ? "var(--positive)" : "var(--ink-3)" }}>{sub}</div>
    </div>
  );
}

/* ----- FEATURE GRID ----- */
function FeatureGrid({ theme }) {
  return (
    <section id="how" className="features">
      <div className="features__head">
        <div className="eyebrow">Everything you need</div>
        <h2 className="display features__title">No ten-tab dashboards.<br/>No hidden fees.<br/><span style={{ color: "var(--accent)" }}>Just clarity.</span></h2>
      </div>
      <div className="features__grid">
        <FeatureCard
          n="01"
          title="Smart spending categories"
          body="Transactions sort themselves the second they post. See six weeks of every category with one tap."
          icon="pie"
          big
        />
        <FeatureCard n="02" title="Goal-based saving" body="Name a goal, pick a date, we figure out the weekly transfer." icon="target"/>
        <FeatureCard n="03" title="Auto-invest, set & forget" body="Index funds, drip deposits, automatic rebalancing." icon="seed"/>
        <FeatureCard n="04" title="Plain-English risk" body="No jargon. Read what we hold, why, and what could go wrong." icon="shield"/>
        <FeatureCard n="05" title="Tax-aware engine" body="Loss harvesting and asset placement, daily, in the background." icon="bolt"/>
        <FeatureCard n="06" title="Smart alerts" body="Notified only when it matters. Bills due, plan exceeded, dividends paid." icon="bell"/>
      </div>
    </section>
  );
}

function FeatureCard({ n, title, body, icon, big }) {
  return (
    <div className={`feature ${big ? "feature--big" : ""}`}>
      <div className="feature__head">
        <span className="feature__n mono">{n}</span>
        <span className="feature__icon"><Icon name={icon} size={20}/></span>
      </div>
      <h3 className="display feature__title">{title}</h3>
      <p className="feature__body">{body}</p>
    </div>
  );
}

/* ----- NUMBERS BAND ----- */
function NumbersBand() {
  return (
    <section className="numbers">
      {[
        ["$2.5B+", "Managed for members"],
        ["150K+", "Active accounts"],
        ["12.8%", "Avg. annual return"],
        ["0.25%", "All-in fee"],
        ["4.8 ★", "App store rating"],
      ].map(([n, l], i) => (
        <div className="numbers__item" key={i}>
          <div className="display tnum numbers__value">{n}</div>
          <div className="label">{l}</div>
        </div>
      ))}
    </section>
  );
}

/* ----- PRICING ----- */
function PricingBlock() {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing__head">
        <div className="eyebrow">Pricing</div>
        <h2 className="display pricing__title">One fee. <span style={{ color: "var(--accent)" }}>That's it.</span></h2>
      </div>
      <div className="pricing__panel">
        <div className="pricing__big">
          <div className="display tnum" style={{ fontSize: "var(--t-6xl)", fontStyle: "normal", lineHeight: 0.9 }}>0.25<span style={{ fontSize: "0.4em", verticalAlign: "0.5em" }}>%</span></div>
          <div className="label">Annual, on assets managed</div>
        </div>
        <ul className="pricing__list">
          <li><Icon name="check" size={16} color="var(--accent)"/> All features included from day one</li>
          <li><Icon name="check" size={16} color="var(--accent)"/> Auto-invest, budgeting, goals, alerts</li>
          <li><Icon name="check" size={16} color="var(--accent)"/> Tax-loss harvesting, no extra charge</li>
          <li><Icon name="check" size={16} color="var(--accent)"/> Move out anytime, no exit fee</li>
          <li><Icon name="check" size={16} color="var(--accent)"/> Cash savings yields 4.5% APY</li>
        </ul>
        <div className="pricing__compare">
          <div className="label">vs. competition</div>
          <Compare label="Kaizen" v="0.25%" highlight/>
          <Compare label="Traditional advisor" v="1–2%"/>
          <Compare label="Robo-advisor (avg)" v="0.35–0.50%"/>
        </div>
      </div>
    </section>
  );
}

function Compare({ label, v, highlight }) {
  return (
    <div className="pricing__compare-row" style={{ background: highlight ? "var(--accent)" : "transparent", color: highlight ? "var(--accent-ink)" : "inherit" }}>
      <span style={{ fontWeight: highlight ? 600 : 400 }}>{label}</span>
      <span className="mono tnum">{v}</span>
    </div>
  );
}

/* ----- SECURITY ----- */
function SecurityBlock() {
  return (
    <section id="security" className="security">
      <div className="security__head">
        <div className="eyebrow">Custody & security</div>
        <h2 className="display security__title">Your money is <span style={{ color: "var(--accent)" }}>safe.</span><br/>Bank-level. No exceptions.</h2>
      </div>
      <div className="security__grid">
        <SecCard icon="lock" title="256-bit encryption" body="Same standard as banks. Your data is locked down tight."/>
        <SecCard icon="shield" title="FDIC insured up to $250K" body="Cash sits at federally-insured partner banks."/>
        <SecCard icon="user" title="SIPC insured up to $500K" body="Investments protected against custodian failure."/>
        <SecCard icon="settings" title="SOC 2 Type II certified" body="Independently audited every year."/>
      </div>
    </section>
  );
}
function SecCard({ icon, title, body }) {
  return (
    <div className="seccard">
      <div className="seccard__icon"><Icon name={icon} size={22}/></div>
      <h3 className="seccard__title">{title}</h3>
      <p className="seccard__body">{body}</p>
    </div>
  );
}

/* ----- TESTIMONIALS ----- */
function TestimonialsRow() {
  const items = [
    { q: "Finally understood where my money goes. The auto-invest feature means I'm building wealth without thinking about it.", n: "Sarah Chen", r: "Software Engineer" },
    { q: "Less tabs, more clarity. The fact that I can see budget, goals and invest in one ledger is the actual product.", n: "Marcus J.", r: "Marketing Manager" },
    { q: "As a freelancer with irregular income, Kaizen helps me budget, set aside taxes, and still invest for the future.", n: "Emily R.", r: "Freelance Designer" },
    { q: "The 0.25% fee is the lowest I've seen and the platform feels less spammy than every other app.", n: "Daniel K.", r: "Mechanical Eng" },
  ];
  return (
    <section className="testimonials">
      <div className="testimonials__head">
        <div className="eyebrow">From members</div>
        <h2 className="display testimonials__title">Loved by <span style={{ color: "var(--accent)" }}>thousands</span>.</h2>
        <div className="mono" style={{ color: "var(--ink-3)", marginTop: 8 }}>★ 4.8 / 5 from 12k reviews</div>
      </div>
      <div className="testimonials__row">
        {items.map((t, i) => (
          <figure className="testimonial" key={i}>
            <blockquote className="testimonial__q">"{t.q}"</blockquote>
            <figcaption className="testimonial__caption">
              <Avatar name={t.n} size={32}/>
              <div>
                <div style={{ fontWeight: 500, fontSize: 14 }}>{t.n}</div>
                <div className="label">{t.r}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ----- FAQ ----- */
function FAQ() {
  const items = [
    ["How do I connect my bank?", "Plaid integration. Works with 12,000+ US banks and most European institutions. Setup in under 60 seconds."],
    ["Can I use Kaizen without investing?", "Yes. Budgeting and goals are free for the first year. The 0.25% fee only kicks in on managed assets."],
    ["What if I want to stop?", "Withdraw any time. No exit fees, no withdrawal limits. You own your portfolio."],
    ["Is my money insured?", "Cash up to $250K (FDIC). Investments up to $500K (SIPC). We hold custody at Apex Clearing."],
    ["Tax docs?", "Auto-generated 1099s in February. Loss harvesting summary downloadable any time."],
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="faq">
      <div className="faq__head">
        <div className="eyebrow">Common questions</div>
        <h2 className="display faq__title">Things people ask.</h2>
      </div>
      <div className="faq__list">
        {items.map(([q, a], i) => (
          <div className={`faq__item ${open === i ? "is-open" : ""}`} key={i}>
            <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{q}</span>
              <span style={{ transform: open === i ? "rotate(45deg)" : "none", transition: "transform .2s var(--ease)" }}><Icon name="plus" size={20}/></span>
            </button>
            <div className="faq__a">{a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----- CTA ----- */
function CTA({ goTo }) {
  return (
    <section className="cta">
      <div className="cta__inner">
        <h2 className="display cta__title">Start in <span style={{ fontStyle: "normal" }}>four</span> minutes.</h2>
        <p className="cta__lede">Connect a bank, pick a goal, set your weekly auto-invest. We take it from there.</p>
        <div className="cta__row">
          <button className="btn btn--accent btn--lg" onClick={() => goTo("onboarding")}>Open an account →</button>
          <button className="btn btn--lg" onClick={() => goTo("dashboard")}>See the product</button>
        </div>
        <div className="mono" style={{ color: "var(--ink-3)", marginTop: 14, fontSize: 12 }}>No credit card · Free forever for budgeting</div>
      </div>
    </section>
  );
}

/* ----- FOOTER ----- */
function Footer({ wordmark }) {
  return (
    <footer className="mkt-footer">
      <div className="mkt-footer__top">
        <div>
          <Wordmark size={32} variant={wordmark}/>
          <p className="mkt-footer__tag">Continuous improvement, applied to money.</p>
        </div>
        <div className="mkt-footer__cols">
          <FtCol h="Product" links={["Overview","Budget","Goals","Invest","Pricing"]}/>
          <FtCol h="Company" links={["About","Press","Careers","Contact","Manifesto"]}/>
          <FtCol h="Resources" links={["Help","Guides","Glossary","Investor letters","Status"]}/>
          <FtCol h="Legal" links={["Terms","Privacy","Disclosures","Form ADV","SIPC"]}/>
        </div>
      </div>
      <div className="mkt-footer__bottom">
        <span className="mono">© 2026 Kaizen Financial Inc.</span>
        <span className="mono">Made in San Francisco · Berlin</span>
      </div>
    </footer>
  );
}
function FtCol({ h, links }) {
  return (
    <div className="mkt-footer__col">
      <div className="label" style={{ marginBottom: 14 }}>{h}</div>
      <ul>{links.map((l, i) => <li key={i}><a href="#">{l}</a></li>)}</ul>
    </div>
  );
}

/* Export */
Object.assign(window, { MarketingPage });
