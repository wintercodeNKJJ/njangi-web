/* The phone shell every Njangi app screen is designed inside: 390×844,
   44px outer radius, cream content area, floating tab bar overlay. */
function PhoneFrame({ children, dark = false, style }) {
  return (
    <div
      style={{
        position: "relative",
        width: 390,
        height: 844,
        flex: "none",
        background: dark ? "var(--cocoa-900)" : "var(--bg-page)",
        borderRadius: "var(--radius-phone)",
        overflow: "hidden",
        boxShadow: "var(--shadow-xl)",
        ...style,
      }}
    >
      <StatusBar dark={dark} />
      {children}
    </div>
  );
}

function StatusBar({ dark }) {
  const c = dark ? "var(--cocoa-50)" : "var(--cocoa-900)";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 44,
        padding: "0 28px",
        color: c,
        font: "var(--weight-semibold) 14px/1 var(--font-body)",
        flex: "none",
      }}
    >
      <span>9:41</span>
      <span style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <Icon name="signal" size={14} />
        <Icon name="wifi" size={14} />
        <Icon name="battery-full" size={17} />
      </span>
    </div>
  );
}

/* Scrollable body with room for the floating tab bar */
function Screen({ children, pad = 20, bottom = 96, style }) {
  return (
    <div
      className="njangi-scroll"
      style={{
        height: 800,
        overflowY: "auto",
        overflowX: "hidden",
        padding: `0 ${pad}px ${bottom}px`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionHead({ children, action, onAction }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
      }}
    >
      <span
        style={{
          font: "var(--type-overline)",
          letterSpacing: "var(--tracking-caps)",
          textTransform: "uppercase",
          color: "var(--text-muted)",
        }}
      >
        {children}
      </span>
      {action && (
        <span
          onClick={onAction}
          style={{
            font: "var(--type-label)",
            fontSize: "var(--text-xs)",
            color: "var(--text-link)",
            cursor: "pointer",
          }}
        >
          {action}
        </span>
      )}
    </div>
  );
}

const PPL =
  "ds/njangi-design-system-00334877-a694-4e80-820e-f39539bf88dc/assets/photos/people/";
const MEMBERS = [
  { name: "Ada Nkeng", src: PPL + "w-01.jpg" },
  { name: "Eyong Tabi", src: PPL + "m-01.jpg" },
  { name: "Mbah Zita", src: PPL + "w-02.jpg" },
  { name: "Sona Bih", src: PPL + "w-03.jpg" },
  { name: "Ju Fomum", src: PPL + "w-04.jpg" },
  { name: "Kwei Ndam", src: PPL + "m-02.jpg" },
];

const GROUPS = [
  {
    id: "ndolo",
    name: "Ndolo Ladies",
    icon: "hand-coins",
    tone: "ochre",
    cycle: "Cycle 3 of 8 · weekly",
    share: "25,000",
    members: 8,
    pot: "480,000",
    progress: 62,
    status: "due",
  },
  {
    id: "bamenda",
    name: "Bamenda Boys FC",
    icon: "piggy-bank",
    tone: "clay",
    cycle: "Cycle 1 of 6 · monthly",
    share: "50,000",
    members: 6,
    pot: "300,000",
    progress: 18,
    status: "paid",
  },
  {
    id: "market",
    name: "Marché Mokolo Traders",
    icon: "store",
    tone: "palm",
    cycle: "Cycle 5 of 10 · weekly",
    share: "10,000",
    members: 10,
    pot: "500,000",
    progress: 48,
    status: "paid",
  },
  {
    id: "school",
    name: "School Fees Njangi",
    icon: "graduation-cap",
    tone: "indigo",
    cycle: "Cycle 2 of 12 · monthly",
    share: "15,000",
    members: 12,
    pot: "360,000",
    progress: 16,
    status: "late",
  },
];

Object.assign(window, {
  PhoneFrame,
  StatusBar,
  Screen,
  SectionHead,
  MEMBERS,
  GROUPS,
});
