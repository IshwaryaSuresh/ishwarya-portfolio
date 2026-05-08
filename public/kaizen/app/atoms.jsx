/* global React */
// Shared atoms used across marketing + product

const { useState, useEffect, useRef, useMemo } = React;

/* ========== Wordmark ========== */
function Wordmark({ size = 22, variant = "kanji", color }) {
  const style = {
    fontSize: size,
    color: color || "var(--ink)",
    letterSpacing: "-0.02em",
    fontFamily: "var(--f-display)",
    fontStyle: "normal",
    fontWeight: "var(--display-weight)",
    display: "inline-flex",
    alignItems: "baseline",
    gap: "0.16em",
    lineHeight: 1,
  };
  if (variant === "kanji") {
    return (
      <span style={style}>
        <span>kaizen</span>
        <span style={{
          fontFamily: '"Noto Serif SC","Songti SC",serif',
          fontStyle: "normal",
          fontWeight: 500,
          color: "var(--accent)",
          fontSize: "0.74em",
          position: "relative",
          top: "-0.04em",
        }}>改</span>
      </span>
    );
  }
  if (variant === "slash") {
    return (
      <span style={{ ...style, fontStyle: "normal", fontFamily: "var(--f-text)", fontWeight: 600 }}>
        <span>ka</span>
        <span style={{
          display: "inline-block",
          position: "relative",
          color: "var(--accent)",
        }}>i<span style={{
          position: "absolute",
          inset: 0,
          borderTop: `${Math.max(2, size * 0.06)}px solid var(--accent)`,
          transform: "rotate(-22deg)",
          transformOrigin: "center",
          top: "50%",
        }}/></span>
        <span>zen</span>
      </span>
    );
  }
  return <span style={style}>kaizen</span>;
}

/* ========== Animated number counter ========== */
function useCount(target, opts = {}) {
  const { duration = 800, decimals = 0 } = opts;
  const [v, setV] = useState(target);
  const startRef = useRef({ from: target, to: target, t: performance.now() });
  useEffect(() => {
    const from = v;
    const to = target;
    const t0 = performance.now();
    let raf;
    const step = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(from + (to - from) * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line
  }, [target]);
  return Number(v).toFixed(decimals);
}

/* ========== Money ========== */
function Money({ value, large = false, sign = false, decimals = 2, prefix = "$" }) {
  const negative = value < 0;
  const v = Math.abs(value);
  const counted = useCount(v, { decimals, duration: 600 });
  const [whole, frac] = String(counted).split(".");
  const wholeFmt = Number(whole).toLocaleString();
  return (
    <span className="display tnum" style={{ fontSize: large ? "1em" : "inherit", fontStyle: "normal", letterSpacing: "-0.025em" }}>
      {sign && (negative ? "−" : "+")}
      <span style={{ fontSize: "0.65em", verticalAlign: "0.35em", marginRight: "0.05em", opacity: 0.7 }}>{prefix}</span>
      {wholeFmt}
      {decimals > 0 && (
        <span style={{ fontSize: "0.55em", verticalAlign: "0.35em", opacity: 0.55, marginLeft: "0.05em" }}>.{frac || "00".slice(0, decimals)}</span>
      )}
    </span>
  );
}

/* ========== Sparkline ========== */
function Sparkline({ data, w = 120, h = 32, stroke = "currentColor", fill, smooth = true }) {
  const path = useMemo(() => {
    if (!data || !data.length) return "";
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const step = w / (data.length - 1);
    const points = data.map((v, i) => [i * step, h - ((v - min) / range) * h * 0.85 - h * 0.075]);
    if (!smooth) return "M " + points.map(p => p.join(",")).join(" L ");
    let d = `M ${points[0][0]},${points[0][1]}`;
    for (let i = 1; i < points.length; i++) {
      const [px, py] = points[i - 1];
      const [x, y] = points[i];
      const cx = (px + x) / 2;
      d += ` Q ${cx},${py} ${cx},${(py + y) / 2} T ${x},${y}`;
    }
    return d;
  }, [data, w, h, smooth]);
  const fillPath = path && `${path} L ${w},${h} L 0,${h} Z`;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: "block", overflow: "visible" }}>
      {fill && <path d={fillPath} fill={fill} />}
      <path d={path} stroke={stroke} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ========== Donut ========== */
function Donut({ segments, size = 160, thickness = 18, label, sublabel }) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let acc = 0;
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--line)" strokeWidth={thickness} opacity="0.4"/>
        {segments.map((s, i) => {
          const len = (s.value / total) * c;
          const off = c - acc;
          acc += len;
          return (
            <circle key={i}
              cx={size/2} cy={size/2} r={r}
              fill="none"
              stroke={s.color}
              strokeWidth={thickness}
              strokeDasharray={`${len} ${c - len}`}
              strokeDashoffset={off}
              strokeLinecap="butt"
            />
          );
        })}
      </svg>
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center",
      }}>
        <div className="display" style={{ fontSize: size * 0.18, lineHeight: 1, fontStyle: "normal" }}>{label}</div>
        {sublabel && <div className="label" style={{ marginTop: 4 }}>{sublabel}</div>}
      </div>
    </div>
  );
}

/* ========== Bar chart (months) ========== */
function BarChart({ data, height = 140, accent }) {
  const max = Math.max(...data.map(d => d.v));
  return (
    <div style={{ display: "flex", alignItems: "end", gap: 8, height, paddingTop: 8 }}>
      {data.map((d, i) => (
        <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, height: "100%" }}>
          <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "end", justifyContent: "center" }}>
            <div style={{
              width: "100%",
              height: `${(d.v / max) * 100}%`,
              background: d.highlight ? (accent || "var(--accent)") : "var(--line-2)",
              borderRadius: "4px 4px 0 0",
              minHeight: 2,
              transition: "height .6s var(--ease)",
            }}/>
          </div>
          <div className="label" style={{ fontSize: 10, color: d.highlight ? "var(--ink)" : "var(--ink-3)" }}>{d.l}</div>
        </div>
      ))}
    </div>
  );
}

/* ========== Stacked area chart ========== */
function AreaChart({ series, w = 600, h = 220, showAxis = true }) {
  // series: [{ data:[..], color, name }]
  const data = series[0].data;
  const min = 0;
  const max = Math.max(...series.flatMap(s => s.data)) * 1.15;
  const step = w / (data.length - 1);
  const buildPath = (arr) => {
    let d = `M 0,${h - ((arr[0] - min) / (max - min)) * h}`;
    for (let i = 1; i < arr.length; i++) {
      const x = i * step;
      const y = h - ((arr[i] - min) / (max - min)) * h;
      const px = (i - 1) * step;
      const py = h - ((arr[i - 1] - min) / (max - min)) * h;
      const cx = (px + x) / 2;
      d += ` Q ${cx},${py} ${cx},${(py + y) / 2} T ${x},${y}`;
    }
    return d;
  };
  return (
    <svg width="100%" height={h + (showAxis ? 24 : 0)} viewBox={`0 0 ${w} ${h + (showAxis ? 24 : 0)}`} preserveAspectRatio="none" style={{ display: "block" }}>
      <defs>
        {series.map((s, i) => (
          <linearGradient key={i} id={`grad-${i}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={s.color} stopOpacity="0.25"/>
            <stop offset="100%" stopColor={s.color} stopOpacity="0"/>
          </linearGradient>
        ))}
      </defs>
      {/* baseline grid */}
      {[0.25, 0.5, 0.75].map((g, i) => (
        <line key={i} x1="0" x2={w} y1={h*g} y2={h*g} stroke="var(--line)" strokeDasharray="2 4" opacity="0.5"/>
      ))}
      {series.map((s, i) => {
        const path = buildPath(s.data);
        const area = `${path} L ${w},${h} L 0,${h} Z`;
        return (
          <g key={i}>
            <path d={area} fill={`url(#grad-${i})`}/>
            <path d={path} stroke={s.color} strokeWidth="2" fill="none"/>
          </g>
        );
      })}
      {showAxis && (
        <g>
          {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].slice(0, data.length).map((m, i) => (
            <text key={i} x={i * step} y={h + 18} fontSize="10" fontFamily="var(--f-mono)" fill="var(--ink-3)" textAnchor="middle" style={{ letterSpacing: "0.08em" }}>{m.toUpperCase()}</text>
          ))}
        </g>
      )}
    </svg>
  );
}

/* ========== Progress bar ========== */
function Progress({ value, max = 100, color, height = 6, animate = true }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div style={{ width: "100%", height, background: "var(--line)", borderRadius: 999, overflow: "hidden" }}>
      <div style={{
        width: `${pct}%`,
        height: "100%",
        background: color || "var(--accent)",
        borderRadius: 999,
        transition: animate ? "width .8s var(--ease)" : "none",
      }}/>
    </div>
  );
}

/* ========== Avatar ========== */
function Avatar({ name = "User", size = 32, color }) {
  const initials = name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase();
  const hue = name.split("").reduce((s, c) => s + c.charCodeAt(0), 0) % 360;
  return (
    <div style={{
      width: size, height: size,
      borderRadius: "50%",
      background: color || `oklch(0.7 0.12 ${hue})`,
      color: "#1a1612",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--f-mono)",
      fontSize: size * 0.36,
      fontWeight: 600,
      letterSpacing: "0.02em",
      flexShrink: 0,
    }}>{initials}</div>
  );
}

/* ========== Icon (minimal stroke set) ========== */
function Icon({ name, size = 18, color = "currentColor", strokeWidth = 1.6 }) {
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6"/>,
    arrowUp: <path d="M12 19V5M5 12l7-7 7 7"/>,
    arrowDown: <path d="M12 5v14M5 12l7 7 7-7"/>,
    plus: <path d="M12 5v14M5 12h14"/>,
    check: <path d="M5 13l4 4L19 7"/>,
    close: <path d="M6 6l12 12M6 18L18 6"/>,
    home: <path d="M3 12l9-9 9 9M5 10v10h14V10"/>,
    pie: <><circle cx="12" cy="12" r="9"/><path d="M12 3v9l8 4"/></>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></>,
    seed: <path d="M12 21c0-6 4-9 9-9 0 6-4 9-9 9zM12 21c0-6-4-9-9-9 0 6 4 9 9 9zM12 21V9"/>,
    list: <><path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6" r="1" fill="currentColor"/><circle cx="3.5" cy="12" r="1" fill="currentColor"/><circle cx="3.5" cy="18" r="1" fill="currentColor"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.5-2.4.9a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.5a7 7 0 0 0-2 1.2l-2.4-.9-2 3.5 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.5 2.4-.9a7 7 0 0 0 2 1.2L10 21h4l.5-2.5a7 7 0 0 0 2-1.2l2.4.9 2-3.5-2-1.5c.1-.4.1-.8.1-1.2z"/></>,
    bell: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9z"/><path d="M10 21a2 2 0 0 0 4 0"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></>,
    sparkle: <path d="M12 3l1.5 5L18 9.5 13.5 11 12 16l-1.5-5L6 9.5 10.5 8 12 3z"/>,
    bank: <><path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M3 10l9-7 9 7"/></>,
    card: <><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/></>,
    bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>,
    leaf: <path d="M5 19c8 0 14-6 14-14-7 0-14 4-14 14zM5 19l8-8"/>,
    lock: <><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></>,
    shield: <path d="M12 3l8 3v6c0 5-3 8-8 9-5-1-8-4-8-9V6l8-3z"/>,
    chevron: <path d="M9 6l6 6-6 6"/>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></>,
    upload: <path d="M12 16V4M6 10l6-6 6 6M4 20h16"/>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></>,
    car: <><path d="M5 17h14M5 17v-4l2-5h10l2 5v4M5 17v2M19 17v2"/><circle cx="8" cy="14" r="1.5" fill="currentColor"/><circle cx="16" cy="14" r="1.5" fill="currentColor"/></>,
    plane: <path d="M21 12l-7-2V4l-2 1v6L3 14l1 2 8-1v5l-2 1v1l3-1 3 1v-1l-2-1v-5l8 1z"/>,
    house: <path d="M3 12l9-8 9 8v9h-7v-6h-4v6H3z"/>,
    grad: <path d="M3 9l9-4 9 4-9 4-9-4zM6 11v5c0 1 3 2 6 2s6-1 6-2v-5"/>,
    coffee: <><path d="M4 8h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zM16 10h2a3 3 0 0 1 0 6h-2"/><path d="M7 4v2M11 4v2"/></>,
    cart: <><circle cx="9" cy="20" r="1.5" fill="currentColor"/><circle cx="17" cy="20" r="1.5" fill="currentColor"/><path d="M3 4h2l3 12h11l2-8H6"/></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      {paths[name] || paths.sparkle}
    </svg>
  );
}

/* Export to window */
Object.assign(window, {
  Wordmark, Money, Sparkline, Donut, BarChart, AreaChart, Progress, Avatar, Icon, useCount,
});
