/* @ds-bundle: {"format":4,"namespace":"NjangiDesignSystem_003348","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarStack","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"LogoMark","sourcePath":"components/core/Logo.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"SocialLogo","sourcePath":"components/core/SocialLogo.jsx"},{"name":"SocialLinks","sourcePath":"components/core/SocialLogo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"IconTile","sourcePath":"components/data/IconTile.jsx"},{"name":"ListRow","sourcePath":"components/data/ListRow.jsx"},{"name":"PayLogo","sourcePath":"components/data/PayLogo.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"ProgressRing","sourcePath":"components/data/ProgressRing.jsx"},{"name":"StatTile","sourcePath":"components/data/StatTile.jsx"},{"name":"Timeline","sourcePath":"components/data/Timeline.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Sheet","sourcePath":"components/feedback/Sheet.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"AmountField","sourcePath":"components/forms/AmountField.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"DayStrip","sourcePath":"components/navigation/DayStrip.jsx"},{"name":"SegmentedTabs","sourcePath":"components/navigation/SegmentedTabs.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"a23f3165756a","components/core/Badge.jsx":"65600c5a15d3","components/core/Button.jsx":"2f242dea5a85","components/core/Card.jsx":"d2e642f94910","components/core/Icon.jsx":"5a0a821ce484","components/core/IconButton.jsx":"81408350bc02","components/core/Logo.jsx":"4adc4e66d526","components/core/SocialLogo.jsx":"71b95b0f4853","components/core/Tag.jsx":"4b862bb88d1c","components/data/IconTile.jsx":"bbc3c98b4006","components/data/ListRow.jsx":"6eeb4d83b83e","components/data/PayLogo.jsx":"1f6fd7dbc7a3","components/data/ProgressBar.jsx":"d52e5bb1c866","components/data/ProgressRing.jsx":"6a77532261bc","components/data/StatTile.jsx":"c8e76bfd79f0","components/data/Timeline.jsx":"2092a7eb5f31","components/feedback/EmptyState.jsx":"ea4c77dc500a","components/feedback/Sheet.jsx":"6e1139d0fa45","components/feedback/Toast.jsx":"4810c25c425c","components/forms/AmountField.jsx":"ae9530c5fc3c","components/forms/Checkbox.jsx":"6fe30f9b9d16","components/forms/Input.jsx":"c393edebbfb4","components/forms/Select.jsx":"a93e941d7abb","components/forms/Switch.jsx":"beed82b51557","components/navigation/DayStrip.jsx":"f0503d861b83","components/navigation/SegmentedTabs.jsx":"3607da2bd515","components/navigation/TabBar.jsx":"5d04fdb21d5e","components/navigation/TopBar.jsx":"63d7f51cdb39","ui_kits/njangi_app/ContributeScreen.jsx":"92b51ed59855","ui_kits/njangi_app/Frame.jsx":"d0f7663e88dc","ui_kits/njangi_app/GroupScreen.jsx":"7a151be7f484","ui_kits/njangi_app/HomeScreen.jsx":"3d388372aa3b","ui_kits/njangi_app/ProfileScreen.jsx":"aa1adec621f1","ui_kits/njangi_app/SignInScreen.jsx":"0b3736260e23","ui_kits/njangi_app/WalletScreen.jsx":"403da05a3b0f","ui_kits/njangi_web/Hero.jsx":"7d9657b004de","ui_kits/njangi_web/Sections.jsx":"157c34ba7c38","ui_kits/njangi_web/Site.jsx":"cf396262576a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {
  const __ds_ns = (window.NjangiDesignSystem_003348 =
    window.NjangiDesignSystem_003348 || {});

  const __ds_scope = {};

  __ds_ns.__errors = __ds_ns.__errors || [];

  // components/core/Avatar.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      const SIZES = {
        xs: 24,
        sm: 32,
        md: 40,
        lg: 48,
        xl: 64,
      };
      const RING_TONES = {
        none: null,
        gold: "var(--ochre-300)",
        accent: "var(--clay-500)",
        success: "var(--palm-400)",
      };
      function Avatar({
        name = "",
        src,
        size = "md",
        ring = "none",
        style,
        ...rest
      }) {
        const d = typeof size === "number" ? size : SIZES[size] || SIZES.md;
        const initials = name
          .trim()
          .split(/\s+/)
          .slice(0, 2)
          .map((w) => w[0] || "")
          .join("")
          .toUpperCase();
        const hues = [
          "var(--clay-200)",
          "var(--ochre-200)",
          "var(--palm-200)",
          "var(--hibiscus-200)",
          "var(--indigo-200)",
        ];
        const bg = hues[(name.charCodeAt(0) || 0) % hues.length];
        const ringColor = RING_TONES[ring];
        return /*#__PURE__*/ React.createElement(
          "span",
          _extends(
            {
              style: {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "none",
                width: d,
                height: d,
                borderRadius: "var(--radius-pill)",
                background: src ? `center 25%/cover no-repeat url(${src})` : bg,
                color: "var(--cocoa-800)",
                font: `var(--weight-semibold) ${Math.round(d * 0.36)}px/1 var(--font-display)`,
                border: "2px solid var(--white)",
                boxShadow: ringColor
                  ? `0 0 0 2px ${ringColor}`
                  : "var(--shadow-xs)",
                ...style,
              },
            },
            rest,
          ),
          !src && initials,
        );
      }
      function AvatarStack({
        people = [],
        size = "sm",
        max = 4,
        style,
        ...rest
      }) {
        const d = typeof size === "number" ? size : SIZES[size] || SIZES.sm;
        const shown = people.slice(0, max);
        const extra = people.length - shown.length;
        return /*#__PURE__*/ React.createElement(
          "span",
          _extends(
            {
              style: {
                display: "inline-flex",
                alignItems: "center",
                ...style,
              },
            },
            rest,
          ),
          shown.map((p, i) =>
            /*#__PURE__*/ React.createElement(Avatar, {
              key: i,
              name: p.name,
              src: p.src,
              size: d,
              style: {
                marginLeft: i ? -d * 0.3 : 0,
                zIndex: shown.length - i,
              },
            }),
          ),
          extra > 0 &&
            /*#__PURE__*/ React.createElement(
              "span",
              {
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: d,
                  height: d,
                  marginLeft: -d * 0.3,
                  borderRadius: 999,
                  background: "var(--cocoa-900)",
                  color: "var(--text-on-dark)",
                  border: "2px solid var(--white)",
                  font: `var(--weight-semibold) ${Math.round(d * 0.32)}px/1 var(--font-body)`,
                },
              },
              "+",
              extra,
            ),
        );
      }
      Object.assign(__ds_scope, { Avatar, AvatarStack });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Avatar.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/core/Card.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      const TONES = {
        plain: {
          bg: "var(--surface-card)",
          fg: "var(--text-body)",
          bd: "transparent",
          sh: "var(--shadow-sm)",
        },
        outlined: {
          bg: "var(--surface-card)",
          fg: "var(--text-body)",
          bd: "var(--border-subtle)",
          sh: "none",
        },
        inset: {
          bg: "var(--bg-inset)",
          fg: "var(--text-body)",
          bd: "transparent",
          sh: "none",
        },
        dark: {
          bg: "var(--surface-card-dark)",
          fg: "var(--text-on-dark)",
          bd: "transparent",
          sh: "var(--shadow-lg)",
        },
        accent: {
          bg: "var(--surface-accent)",
          fg: "var(--text-on-accent)",
          bd: "transparent",
          sh: "var(--shadow-accent)",
        },
        gold: {
          bg: "var(--surface-gold)",
          fg: "var(--text-on-gold)",
          bd: "transparent",
          sh: "var(--shadow-sm)",
        },
        peach: {
          bg: "var(--clay-100)",
          fg: "var(--cocoa-800)",
          bd: "transparent",
          sh: "none",
        },
      };
      function Card({
        children,
        tone = "plain",
        radius = "xl",
        pad = 16,
        onClick,
        style,
        ...rest
      }) {
        const t = TONES[tone] || TONES.plain;
        const [hot, setHot] = React.useState(false);
        return /*#__PURE__*/ React.createElement(
          "div",
          _extends(
            {
              onClick: onClick,
              onMouseEnter: () => setHot(true),
              onMouseLeave: () => setHot(false),
              style: {
                background: t.bg,
                color: t.fg,
                border: `1px solid ${t.bd}`,
                borderRadius: `var(--radius-${radius})`,
                padding: pad,
                boxShadow: onClick && hot ? "var(--shadow-md)" : t.sh,
                transform: onClick && hot ? "translateY(-1px)" : "none",
                cursor: onClick ? "pointer" : "default",
                transition:
                  "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)",
                ...style,
              },
            },
            rest,
          ),
          children,
        );
      }
      Object.assign(__ds_scope, { Card });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Card.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/core/Icon.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      const CDN = "https://unpkg.com/lucide-static@0.469.0/icons/";

      /* Njangi uses Lucide (2px stroke, round caps) as its icon set. Glyphs are
   masked so they inherit currentColor instead of being flat images. */
      function Icon({ name, size = 20, strokeWidth, color, style, ...rest }) {
        const url = `url("${CDN}${name}.svg")`;
        return /*#__PURE__*/ React.createElement(
          "span",
          _extends(
            {
              role: "img",
              "aria-label": name,
              style: {
                display: "inline-block",
                flex: "none",
                width: size,
                height: size,
                background: color || "currentColor",
                WebkitMask: url + " center / contain no-repeat",
                mask: url + " center / contain no-repeat",
                ...style,
              },
            },
            rest,
          ),
        );
      }
      Object.assign(__ds_scope, { Icon });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Icon.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/core/Badge.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      const TONES = {
        neutral: ["var(--cocoa-100)", "var(--cocoa-700)"],
        success: ["var(--status-success-soft)", "var(--palm-700)"],
        warning: ["var(--status-warning-soft)", "var(--ochre-700)"],
        danger: ["var(--status-danger-soft)", "var(--hibiscus-600)"],
        info: ["var(--status-info-soft)", "var(--indigo-600)"],
        accent: ["var(--surface-accent-soft)", "var(--clay-700)"],
        gold: ["var(--surface-gold-soft)", "var(--ochre-700)"],
      };
      function Badge({
        children,
        tone = "neutral",
        icon,
        dot = false,
        style,
        ...rest
      }) {
        const [bg, fg] = TONES[tone] || TONES.neutral;
        return /*#__PURE__*/ React.createElement(
          "span",
          _extends(
            {
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                padding: "5px 10px",
                borderRadius: "var(--radius-pill)",
                background: bg,
                color: fg,
                font: "var(--type-label)",
                fontSize: "var(--text-xs)",
                whiteSpace: "nowrap",
                ...style,
              },
            },
            rest,
          ),
          dot &&
            /*#__PURE__*/ React.createElement("span", {
              style: {
                width: 6,
                height: 6,
                borderRadius: 999,
                background: fg,
              },
            }),
          icon &&
            /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
              name: icon,
              size: 12,
            }),
          children,
        );
      }
      Object.assign(__ds_scope, { Badge });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Badge.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/core/Button.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      const SIZES = {
        sm: {
          h: 36,
          px: 14,
          gap: 6,
          font: "var(--text-sm)",
          icon: 16,
        },
        md: {
          h: 44,
          px: 20,
          gap: 8,
          font: "var(--text-base)",
          icon: 18,
        },
        lg: {
          h: 54,
          px: 26,
          gap: 10,
          font: "var(--text-md)",
          icon: 20,
        },
      };
      const VARIANTS = {
        primary: {
          bg: "var(--accent-primary)",
          fg: "var(--text-on-accent)",
          bd: "transparent",
          sh: "var(--shadow-accent)",
          hover: "var(--accent-primary-hover)",
        },
        dark: {
          bg: "var(--cocoa-900)",
          fg: "var(--text-on-dark)",
          bd: "transparent",
          sh: "var(--shadow-md)",
          hover: "var(--cocoa-800)",
        },
        gold: {
          bg: "var(--surface-gold)",
          fg: "var(--text-on-gold)",
          bd: "transparent",
          sh: "var(--shadow-sm)",
          hover: "var(--ochre-400)",
        },
        secondary: {
          bg: "var(--white)",
          fg: "var(--text-heading)",
          bd: "var(--border-default)",
          sh: "var(--shadow-xs)",
          hover: "var(--cocoa-50)",
        },
        soft: {
          bg: "var(--surface-accent-soft)",
          fg: "var(--clay-700)",
          bd: "transparent",
          sh: "none",
          hover: "var(--clay-100)",
        },
        ghost: {
          bg: "transparent",
          fg: "var(--text-body)",
          bd: "transparent",
          sh: "none",
          hover: "var(--cocoa-100)",
        },
      };
      function Button({
        children,
        variant = "primary",
        size = "md",
        icon,
        iconAfter,
        block = false,
        disabled = false,
        loading = false,
        style,
        ...rest
      }) {
        const s = SIZES[size] || SIZES.md;
        const v = VARIANTS[variant] || VARIANTS.primary;
        const [hot, setHot] = React.useState(false);
        const [down, setDown] = React.useState(false);
        return /*#__PURE__*/ React.createElement(
          "button",
          _extends(
            {
              disabled: disabled || loading,
              onMouseEnter: () => setHot(true),
              onMouseLeave: () => {
                setHot(false);
                setDown(false);
              },
              onMouseDown: () => setDown(true),
              onMouseUp: () => setDown(false),
              style: {
                display: block ? "flex" : "inline-flex",
                width: block ? "100%" : undefined,
                alignItems: "center",
                justifyContent: "center",
                gap: s.gap,
                height: s.h,
                padding: `0 ${s.px}px`,
                boxSizing: "border-box",
                borderRadius: "var(--radius-pill)",
                border: `1px solid ${v.bd}`,
                background: hot && !disabled ? v.hover : v.bg,
                color: v.fg,
                font: `var(--weight-semibold) ${s.font}/1 var(--font-body)`,
                letterSpacing: "var(--tracking-snug)",
                boxShadow: down ? "var(--shadow-xs)" : v.sh,
                cursor: disabled || loading ? "not-allowed" : "pointer",
                opacity: disabled ? 0.45 : 1,
                transform: down ? "scale(var(--press-scale))" : "scale(1)",
                transition:
                  "background var(--dur-fast) var(--ease-standard), transform var(--dur-instant) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
                ...style,
              },
            },
            rest,
          ),
          loading
            ? /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
                name: "loader-circle",
                size: s.icon,
                style: {
                  animation: "njangi-spin 900ms linear infinite",
                },
              })
            : icon &&
                (typeof icon === "string"
                  ? /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
                      name: icon,
                      size: s.icon,
                    })
                  : icon),
          children,
          iconAfter &&
            /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
              name: iconAfter,
              size: s.icon,
            }),
        );
      }
      Object.assign(__ds_scope, { Button });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Button.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/core/IconButton.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      const SIZES = {
        sm: 32,
        md: 40,
        lg: 48,
      };
      const TONES = {
        plain: {
          bg: "var(--white)",
          fg: "var(--text-heading)",
          bd: "var(--border-subtle)",
        },
        dark: {
          bg: "var(--cocoa-900)",
          fg: "var(--text-on-dark)",
          bd: "transparent",
        },
        accent: {
          bg: "var(--accent-primary)",
          fg: "var(--text-on-accent)",
          bd: "transparent",
        },
        soft: {
          bg: "var(--cocoa-100)",
          fg: "var(--text-heading)",
          bd: "transparent",
        },
        ghost: {
          bg: "transparent",
          fg: "var(--text-body)",
          bd: "transparent",
        },
      };
      function IconButton({
        icon,
        size = "md",
        tone = "plain",
        label,
        badge,
        style,
        ...rest
      }) {
        const d = SIZES[size] || SIZES.md;
        const t = TONES[tone] || TONES.plain;
        const [down, setDown] = React.useState(false);
        return /*#__PURE__*/ React.createElement(
          "button",
          _extends(
            {
              "aria-label": label || icon,
              onMouseDown: () => setDown(true),
              onMouseUp: () => setDown(false),
              onMouseLeave: () => setDown(false),
              style: {
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: d,
                height: d,
                borderRadius: "var(--radius-pill)",
                border: `1px solid ${t.bd}`,
                background: t.bg,
                color: t.fg,
                boxShadow:
                  tone === "plain"
                    ? "var(--shadow-xs)"
                    : tone === "accent"
                      ? "var(--shadow-accent)"
                      : "none",
                cursor: "pointer",
                transform: down ? "scale(var(--press-scale))" : "scale(1)",
                transition:
                  "transform var(--dur-instant) var(--ease-standard), background var(--dur-fast) var(--ease-standard)",
                ...style,
              },
            },
            rest,
          ),
          /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
            name: icon,
            size: Math.round(d * 0.45),
          }),
          badge &&
            /*#__PURE__*/ React.createElement("span", {
              style: {
                position: "absolute",
                top: 2,
                right: 2,
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "var(--status-danger)",
                border: "2px solid var(--white)",
                boxSizing: "content-box",
              },
            }),
        );
      }
      Object.assign(__ds_scope, { IconButton });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/IconButton.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/core/Logo.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      const OBI_D =
        "M12.4454 178.947C12.4454 178.947 11.3424 173.927 10.6954 170.697C8.82878 161.38 7.22715 156.184 6.69537 146.697C6.42217 141.823 6.4479 139.072 6.69537 134.197C7.2064 124.13 8.09937 118.437 10.6954 108.697C13.0385 101.863 13.8841 97.8525 16.6954 91.1972C20.4005 82.4257 23.2746 77.849 28.1954 69.6972C31.6939 63.9015 33.8083 60.7397 37.6954 55.1972C41.6194 49.6018 43.6651 46.3141 48.1954 41.1972C53.507 35.1978 56.5494 31.6735 63.1954 27.1972C68.6274 23.5384 75.5287 21.1972 78.1954 19.6972C80.862 18.1972 92.1954 12.6972 92.1954 12.6972C92.1954 12.6972 102.831 7.86327 110.117 7.33734C112.29 7.18049 113.517 7.31236 115.695 7.29636M108.695 21.1972L104.195 22.1972C104.195 22.1972 98.0465 23.1823 94.1954 24.1972C87.7424 25.8977 83.2147 25.7995 78.1954 30.1972C76.4269 31.7466 75.8989 33.0765 74.1954 34.6972C70.9386 37.7957 68.342 38.5685 64.6954 41.1972C59.2773 45.1028 55.834 46.8917 51.1954 51.6972C48.3997 54.5934 44.6954 59.6972 44.6954 59.6972L37.6954 67.1972L31.1954 75.6972L28.1954 78.6972L23.6954 83.6972L19.6954 90.1972L15.6954 99.1972C15.6954 99.1972 12.648 104.987 10.6954 108.697M115.695 7.29636C120.967 7.25762 123.923 7.21957 129.195 7.19717C136.42 7.16649 140.64 5.64406 147.695 7.19717C153.255 8.42097 155.846 10.7499 161.195 12.6972C166.592 14.6615 169.784 15.2741 175.195 17.1972C182.131 19.662 186.049 21.0336 192.695 24.1972C200.196 27.7676 204.371 29.9607 211.195 34.6972C216.331 38.2615 219.005 40.5642 223.695 44.6972C229.911 50.1742 233.35 53.368 238.695 59.6972C243.66 65.5761 246.376 69.0169 250.195 75.6972C254.713 83.5992 256.631 88.4635 259.195 97.1972C261.105 103.701 262.695 114.197 262.695 114.197C262.695 114.197 265.695 126.299 265.695 134.197C265.695 142.095 264.303 146.465 262.695 154.197C261.548 159.715 260.36 162.683 259.195 168.197C258.008 173.819 258.159 177.141 256.695 182.697C254.884 189.57 250.195 199.697 250.195 199.697C250.195 199.697 246.206 210.553 242.195 216.697C238.71 222.035 236.15 224.637 231.695 229.197C225.983 235.045 221.205 236.657 215.695 242.697C212.957 245.699 209.195 250.822 209.195 250.822C209.195 250.822 208.295 251.977 207.695 252.697C202.735 258.654 192.695 265.697 192.695 265.697L180.195 276.197C180.195 276.197 172.611 281.218 167.195 283.197C161.944 285.116 158.749 285.549 153.195 286.197C146.407 286.989 142.521 286.532 135.695 286.197C125.874 285.716 120.21 285.679 110.695 283.197C103.221 281.247 99.0715 279.717 92.1954 276.197C83.7087 271.853 79.6601 268.128 72.1954 262.197C62.1364 254.205 56.5512 249.456 48.1954 239.697C39.0374 229.002 35.7925 221.552 28.1954 209.697C22.6116 200.984 17.1771 197.107 14.1954 187.197C13.2464 184.043 12.4454 178.947 12.4454 178.947M180.195 276.197C180.195 276.197 172.247 276.706 167.195 276.197C161.632 275.637 158.467 275.061 153.195 273.197C148.914 271.683 142.695 268.197 142.695 268.197C142.695 268.197 131.805 261.556 125.695 256.197C119.149 250.455 110.695 239.697 110.695 239.697C110.695 239.697 100.471 227.864 94.6954 219.697C90.5359 213.816 84.6954 204.197 84.6954 204.197L74.1954 185.197C74.1954 185.197 71.0249 179.469 69.1954 175.697C66.5996 170.345 65.4832 167.188 63.1954 161.697C59.9599 153.932 58.0675 149.604 55.1954 141.697C52.1806 133.398 51.0155 128.565 48.1954 120.197C46.2824 114.521 45.0768 111.384 43.1954 105.697C40.9452 98.896 39.7405 95.0628 37.6954 88.1972M37.6954 88.1972C37.6954 83.3156 37.6954 75.6972 37.6954 75.6972V67.1972M37.6954 88.1972C36.7191 91.3214 36.4114 93.1583 35.1954 96.1972C33.8977 99.4401 32.8203 101.105 31.1954 104.197C29.325 107.756 27.8261 109.522 26.1954 113.197C24.7677 116.415 24.5338 118.441 23.1954 121.697C21.9664 124.687 20.7752 126.151 19.6954 129.197C18.6195 132.232 18.5144 134.083 17.6954 137.197C16.7676 140.725 15.9255 142.623 15.1954 146.197C14.6813 148.713 14.6383 150.167 14.1954 152.697C13.6802 155.639 12.9541 157.221 12.6954 160.197C12.4924 162.532 12.6954 163.854 12.6954 166.197C12.6954 168.931 12.7606 170.464 12.6954 173.197C12.6418 175.444 12.4454 178.947 12.4454 178.947M108.695 21.1972C108.695 21.1972 109.026 15.6709 110.695 12.6972C112.102 10.1908 113.743 9.40551 115.695 7.29636M108.695 21.1972C108.695 21.1972 116.261 23.0196 120.695 25.1972C125.362 27.4892 131.695 32.6972 131.695 32.6972L144.195 41.1972L157.695 51.6972L166.195 59.6972L176.695 67.1972L189.195 75.6972C189.195 75.6972 195.531 80.2937 199.195 83.6972C202.535 86.7993 203.664 89.3151 207.195 92.1972C211.399 95.6273 214.829 95.9768 219.195 99.1972C224.419 103.05 227.26 105.535 231.195 110.697C234.852 115.493 235.933 118.836 238.695 124.197C241.175 129.011 242.781 131.632 244.695 136.697C246.421 141.263 247.101 143.94 248.195 148.697C249.217 153.14 249.877 155.65 250.195 160.197C250.414 163.314 250.406 165.08 250.195 168.197C249.835 173.547 247.695 181.697 247.695 181.697C247.695 181.697 246.126 187.879 244.695 191.697C242.796 196.768 238.695 204.197 238.695 204.197C238.695 204.197 234.785 212.279 231.195 216.697C228.583 219.912 226.514 221.162 223.695 224.197C221.058 227.037 219.688 228.729 217.195 231.697C214.607 234.78 212.313 236.011 210.695 239.697C209.801 241.736 209.489 242.99 209.195 245.197C208.906 247.375 209.195 250.822 209.195 250.822M114.695 62.6972H120.695C120.695 62.6972 124.097 62.2988 126.195 61.6972C128.635 60.9976 129.753 59.8893 132.195 59.1972C134.481 58.5495 138.195 58.1972 138.195 58.1972C138.195 58.1972 147.431 61.7959 151.695 66.1972C153.733 68.3007 154.206 70.0473 156.195 72.1972C158.929 75.1519 161.006 76.2413 164.195 78.6972C165.742 79.8885 166.462 80.7983 168.195 81.6972C169.84 82.5499 171.304 81.9744 172.695 83.1972C173.429 83.8417 174.195 85.1972 174.195 85.1972L179.695 91.1972C179.695 91.1972 181.748 93.1664 182.695 94.6972C187.645 102.695 158.695 92.6972 158.695 92.6972C158.695 92.6972 144.86 91.9943 138.195 96.6972C132.575 100.663 128.195 111.197 128.195 111.197C128.195 111.197 119.297 112.133 115.695 108.697C113.609 106.707 112.195 102.197 112.195 102.197C112.195 102.197 110.346 98.6625 110.195 96.1972C110.01 93.1716 112.535 91.7093 112.195 88.6972C111.682 84.1509 109.029 78.5305 104.695 79.6972C100.362 80.8638 92.7954 81.3972 97.1954 74.1972C97.1954 74.1972 100.538 65.9079 105.195 63.6972C108.565 62.0974 114.695 62.6972 114.695 62.6972Z";

      /* The obi (kola nut) mark, drawn as one continuous stroke. Inherits currentColor. */
      function LogoMark({ size = 32, strokeWidth = 13, style, ...rest }) {
        return /*#__PURE__*/ React.createElement(
          "svg",
          _extends(
            {
              viewBox: "-8 -8 289 310",
              width: size,
              height: size,
              fill: "none",
              role: "img",
              "aria-label": "Njangi",
              style: {
                display: "block",
                flex: "none",
                ...style,
              },
            },
            rest,
          ),
          /*#__PURE__*/ React.createElement("path", {
            d: OBI_D,
            fill: "none",
            stroke: "currentColor",
            strokeWidth: strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        );
      }
      const TILE_RADIUS = {
        24: 8,
        32: 10,
        40: 12,
        52: 15,
        64: 18,
        72: 20,
        96: 24,
        152: 40,
      };
      function tileRadius(size) {
        const keys = Object.keys(TILE_RADIUS)
          .map(Number)
          .sort((a, b) => a - b);
        const hit = keys.find((k) => k >= size) || keys[keys.length - 1];
        return Math.round(TILE_RADIUS[hit] * (size / hit));
      }
      function Logo({
        variant = "lockup",
        size = 40,
        tile = "gold",
        color,
        dot = true,
        style,
        ...rest
      }) {
        const TILES = {
          gold: ["var(--ochre-300)", "var(--cocoa-900)"],
          dark: ["var(--cocoa-900)", "var(--ochre-300)"],
          clay: ["var(--clay-500)", "var(--white)"],
          none: [null, "currentColor"],
        };
        const [bg, fg] = TILES[tile] || TILES.gold;
        const mark = bg
          ? /*#__PURE__*/ React.createElement(
              "span",
              {
                style: {
                  display: "grid",
                  placeItems: "center",
                  flex: "none",
                  width: size,
                  height: size,
                  borderRadius: tileRadius(size),
                  background: bg,
                  color: color || fg,
                },
              },
              /*#__PURE__*/ React.createElement(LogoMark, {
                size: Math.round(size * 0.68),
              }),
            )
          : /*#__PURE__*/ React.createElement(LogoMark, {
              size: size,
              style: {
                color: color || "currentColor",
              },
            });
        if (variant === "mark")
          return /*#__PURE__*/ React.createElement(
            "span",
            _extends(
              {
                style: {
                  display: "inline-flex",
                  ...style,
                },
              },
              rest,
            ),
            mark,
          );
        const wordSize = Math.round(size * 0.72);
        const word = /*#__PURE__*/ React.createElement(
          "span",
          {
            style: {
              display: "flex",
              alignItems: "baseline",
              gap: Math.max(2, Math.round(wordSize * 0.055)),
            },
          },
          /*#__PURE__*/ React.createElement(
            "span",
            {
              style: {
                font: `800 ${wordSize}px/0.9 var(--font-wordmark)`,
                letterSpacing: "var(--tracking-wordmark)",
                color: color || "var(--text-heading)",
              },
            },
            "Njangi",
          ),
          dot &&
            /*#__PURE__*/ React.createElement("span", {
              style: {
                width: Math.round(wordSize * 0.2),
                height: Math.round(wordSize * 0.2),
                borderRadius: 999,
                background: "var(--clay-500)",
                display: "block",
              },
            }),
        );
        if (variant === "wordmark")
          return /*#__PURE__*/ React.createElement(
            "span",
            _extends(
              {
                style: {
                  display: "inline-flex",
                  ...style,
                },
              },
              rest,
            ),
            word,
          );
        const stacked = variant === "stacked";
        return /*#__PURE__*/ React.createElement(
          "span",
          _extends(
            {
              style: {
                display: "inline-flex",
                alignItems: "center",
                flexDirection: stacked ? "column" : "row",
                gap: stacked ? Math.round(size * 0.28) : Math.round(size * 0.3),
                ...style,
              },
            },
            rest,
          ),
          mark,
          word,
        );
      }
      Object.assign(__ds_scope, { LogoMark, Logo });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Logo.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/core/SocialLogo.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      // Assets live at <project root>/assets/social/. Resolve against the bundle's own URL
      // so the logo works from any page depth (ui_kits/*, guidelines/*, templates/*).
      function assetBase() {
        const s = document.querySelector('script[src$="ds_bundle.js"]');
        return s ? s.src.replace(/ds_bundle\.js.*$/, "") : "./";
      }
      const NETWORKS = {
        whatsapp: {
          file: "whatsapp.jpg",
          label: "WhatsApp",
        },
        facebook: {
          file: "facebook.jpg",
          label: "Facebook",
        },
        instagram: {
          file: "instagram.jpg",
          label: "Instagram",
        },
        google: {
          file: "google.jpg",
          label: "Google",
        },
        apple: {
          file: "apple.jpg",
          label: "Apple",
        },
      };
      function SocialLogo({
        network = "whatsapp",
        size = 36,
        radius = "md",
        style,
        ...rest
      }) {
        const n = NETWORKS[network];
        if (!n) return null;
        return /*#__PURE__*/ React.createElement(
          "span",
          _extends(
            {
              role: "img",
              "aria-label": n.label,
              title: n.label,
              style: {
                display: "inline-block",
                flex: "none",
                width: size,
                height: size,
                borderRadius: `var(--radius-${radius})`,
                background: `center/cover no-repeat url(${assetBase()}assets/social/${n.file})`,
                ...style,
              },
            },
            rest,
          ),
        );
      }
      function SocialLinks({
        networks = ["whatsapp", "facebook", "instagram"],
        size = 36,
        radius = "md",
        gap = 10,
        style,
        ...rest
      }) {
        return /*#__PURE__*/ React.createElement(
          "div",
          _extends(
            {
              style: {
                display: "flex",
                gap,
                ...style,
              },
            },
            rest,
          ),
          networks.map((n) =>
            /*#__PURE__*/ React.createElement(
              "a",
              {
                key: n,
                href: "#",
                "aria-label": NETWORKS[n] ? NETWORKS[n].label : n,
                style: {
                  display: "inline-flex",
                  borderBottom: "none",
                  borderRadius: `var(--radius-${radius})`,
                  boxShadow: "var(--shadow-xs)",
                },
              },
              /*#__PURE__*/ React.createElement(SocialLogo, {
                network: n,
                size: size,
                radius: radius,
              }),
            ),
          ),
        );
      }
      Object.assign(__ds_scope, { SocialLogo, SocialLinks });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/SocialLogo.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/core/Tag.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      function Tag({
        children,
        icon,
        active = false,
        onRemove,
        style,
        ...rest
      }) {
        return /*#__PURE__*/ React.createElement(
          "span",
          _extends(
            {
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                height: 34,
                padding: "0 12px",
                borderRadius: "var(--radius-pill)",
                background: active ? "var(--cocoa-900)" : "var(--white)",
                color: active ? "var(--text-on-dark)" : "var(--text-body)",
                border: `1px solid ${active ? "transparent" : "var(--border-subtle)"}`,
                font: "var(--type-body-sm)",
                fontWeight: "var(--weight-medium)",
                cursor: rest.onClick ? "pointer" : "default",
                transition:
                  "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)",
                ...style,
              },
            },
            rest,
          ),
          icon &&
            /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
              name: icon,
              size: 14,
            }),
          children,
          onRemove &&
            /*#__PURE__*/ React.createElement(
              "span",
              {
                onClick: (ev) => {
                  ev.stopPropagation();
                  onRemove(ev);
                },
                style: {
                  display: "flex",
                  cursor: "pointer",
                  opacity: 0.5,
                },
              },
              /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
                name: "x",
                size: 13,
              }),
            ),
        );
      }
      Object.assign(__ds_scope, { Tag });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Tag.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/data/IconTile.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      const TONES = {
        clay: ["var(--clay-50)", "var(--clay-600)"],
        ochre: ["var(--ochre-50)", "var(--ochre-600)"],
        palm: ["var(--palm-50)", "var(--palm-600)"],
        hibiscus: ["var(--hibiscus-50)", "var(--hibiscus-600)"],
        indigo: ["var(--indigo-50)", "var(--indigo-600)"],
        cocoa: ["var(--cocoa-100)", "var(--cocoa-700)"],
        dark: ["var(--cocoa-900)", "var(--cocoa-50)"],
      };
      function IconTile({
        icon,
        tone = "clay",
        size = 40,
        radius = "md",
        style,
        ...rest
      }) {
        const [bg, fg] = TONES[tone] || TONES.clay;
        return /*#__PURE__*/ React.createElement(
          "span",
          _extends(
            {
              style: {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "none",
                width: size,
                height: size,
                borderRadius: `var(--radius-${radius})`,
                background: bg,
                color: fg,
                ...style,
              },
            },
            rest,
          ),
          /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
            name: icon,
            size: Math.round(size * 0.5),
          }),
        );
      }
      Object.assign(__ds_scope, { IconTile });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/data/IconTile.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/data/ListRow.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      function ListRow({
        icon,
        iconTone,
        avatar,
        title,
        subtitle,
        value,
        valueSub,
        right,
        tone = "plain",
        chevron = false,
        onClick,
        style,
        ...rest
      }) {
        const dark = tone === "dark";
        const [hot, setHot] = React.useState(false);
        return /*#__PURE__*/ React.createElement(
          "div",
          _extends(
            {
              onClick: onClick,
              onMouseEnter: () => setHot(true),
              onMouseLeave: () => setHot(false),
              style: {
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 14px",
                borderRadius: "var(--radius-lg)",
                background: dark
                  ? "var(--cocoa-900)"
                  : tone === "inset"
                    ? "var(--bg-inset)"
                    : tone === "gold"
                      ? "var(--ochre-300)"
                      : "var(--white)",
                color: dark ? "var(--cocoa-50)" : "var(--text-body)",
                boxShadow:
                  tone === "inset"
                    ? "none"
                    : hot && onClick
                      ? "var(--shadow-md)"
                      : "var(--shadow-xs)",
                cursor: onClick ? "pointer" : "default",
                transition: "box-shadow var(--dur-base) var(--ease-standard)",
                ...style,
              },
            },
            rest,
          ),
          avatar,
          icon &&
            !avatar &&
            /*#__PURE__*/ React.createElement(__ds_scope.IconTile, {
              icon: icon,
              tone: iconTone || (dark ? "dark" : "clay"),
              size: 38,
            }),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                flex: 1,
                minWidth: 0,
              },
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  font: "var(--type-body)",
                  fontWeight: "var(--weight-semibold)",
                  color: dark ? "var(--white)" : "var(--text-heading)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                },
              },
              title,
            ),
            subtitle &&
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    font: "var(--type-caption)",
                    marginTop: 2,
                    color: dark ? "var(--cocoa-300)" : "var(--text-muted)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  },
                },
                subtitle,
              ),
          ),
          right,
          value !== undefined &&
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  textAlign: "right",
                },
              },
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    font: "var(--type-label)",
                    fontSize: "var(--text-base)",
                    fontVariantNumeric: "tabular-nums",
                    color: dark ? "var(--white)" : "var(--text-heading)",
                  },
                },
                value,
              ),
              valueSub &&
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      font: "var(--type-caption)",
                      color: dark ? "var(--cocoa-300)" : "var(--text-muted)",
                      marginTop: 2,
                    },
                  },
                  valueSub,
                ),
            ),
          chevron &&
            /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
              name: "chevron-right",
              size: 18,
              style: {
                color: dark ? "var(--cocoa-400)" : "var(--text-faint)",
              },
            }),
        );
      }
      Object.assign(__ds_scope, { ListRow });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/data/ListRow.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/data/PayLogo.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      // Assets live at <project root>/assets/payments/. Resolve against the bundle's own
      // URL so the tile works from any page depth (ui_kits/*, guidelines/*, templates/*).
      function assetBase() {
        const s = document.querySelector('script[src$="ds_bundle.js"]');
        return s ? s.src.replace(/ds_bundle\.js.*$/, "") : "./";
      }
      const PROVIDERS = {
        momo: {
          file: "mtn-momo.jpg",
          label: "MTN MoMo",
        },
        orange: {
          file: "orange-money.jpg",
          label: "Orange Money",
        },
      };
      function PayLogo({
        provider = "momo",
        size = 40,
        radius = "md",
        style,
        ...rest
      }) {
        const p = PROVIDERS[provider];
        if (!p) {
          return /*#__PURE__*/ React.createElement(
            "span",
            _extends(
              {
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "none",
                  width: size,
                  height: size,
                  borderRadius: `var(--radius-${radius})`,
                  background: "var(--indigo-50)",
                  color: "var(--indigo-600)",
                  ...style,
                },
              },
              rest,
            ),
            /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
              name: "landmark",
              size: Math.round(size * 0.5),
            }),
          );
        }
        return /*#__PURE__*/ React.createElement(
          "span",
          _extends(
            {
              role: "img",
              "aria-label": p.label,
              title: p.label,
              style: {
                display: "inline-block",
                flex: "none",
                width: size,
                height: size,
                borderRadius: `var(--radius-${radius})`,
                background: `center/cover no-repeat url(${assetBase()}assets/payments/${p.file})`,
                boxShadow: "inset 0 0 0 1px var(--border-subtle)",
                ...style,
              },
            },
            rest,
          ),
        );
      }
      Object.assign(__ds_scope, { PayLogo });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/data/PayLogo.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/data/ProgressBar.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      const TONES = {
        accent: "var(--accent-primary)",
        gold: "var(--ochre-400)",
        palm: "var(--palm-500)",
        dark: "var(--cocoa-900)",
      };
      function ProgressBar({
        value = 0,
        tone = "accent",
        height = 8,
        label,
        caption,
        style,
        ...rest
      }) {
        const pct = Math.max(0, Math.min(100, value));
        return /*#__PURE__*/ React.createElement(
          "div",
          _extends(
            {
              style: style,
            },
            rest,
          ),
          (label || caption) &&
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                },
              },
              label &&
                /*#__PURE__*/ React.createElement(
                  "span",
                  {
                    style: {
                      font: "var(--type-label)",
                      color: "var(--text-heading)",
                    },
                  },
                  label,
                ),
              caption &&
                /*#__PURE__*/ React.createElement(
                  "span",
                  {
                    style: {
                      font: "var(--type-caption)",
                      color: "var(--text-muted)",
                    },
                  },
                  caption,
                ),
            ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                height,
                borderRadius: 999,
                background: "var(--cocoa-100)",
                overflow: "hidden",
              },
            },
            /*#__PURE__*/ React.createElement("div", {
              style: {
                width: pct + "%",
                height: "100%",
                borderRadius: 999,
                background: TONES[tone] || TONES.accent,
                transition: "width var(--dur-slow) var(--ease-standard)",
              },
            }),
          ),
        );
      }
      Object.assign(__ds_scope, { ProgressBar });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/data/ProgressBar.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/data/ProgressRing.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      const TONES = {
        accent: "var(--accent-primary)",
        gold: "var(--ochre-400)",
        palm: "var(--palm-500)",
        dark: "var(--cocoa-900)",
        light: "var(--ochre-300)",
      };
      function ProgressRing({
        value = 0,
        size = 96,
        thickness = 10,
        tone = "accent",
        track,
        label,
        sublabel,
        style,
        ...rest
      }) {
        const pct = Math.max(0, Math.min(100, value));
        const color = TONES[tone] || TONES.accent;
        return /*#__PURE__*/ React.createElement(
          "div",
          _extends(
            {
              style: {
                position: "relative",
                width: size,
                height: size,
                borderRadius: 999,
                background: `conic-gradient(${color} ${pct * 3.6}deg, ${track || "var(--cocoa-100)"} 0)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background var(--dur-slow) var(--ease-standard)",
                ...style,
              },
            },
            rest,
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                position: "absolute",
                inset: thickness,
                borderRadius: 999,
                background: "var(--surface-card)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              },
            },
            /*#__PURE__*/ React.createElement(
              "span",
              {
                style: {
                  font: `var(--weight-semibold) ${Math.round(size * 0.22)}px/1 var(--font-display)`,
                  color: "var(--text-heading)",
                  fontVariantNumeric: "tabular-nums",
                },
              },
              label ?? pct + "%",
            ),
            sublabel &&
              /*#__PURE__*/ React.createElement(
                "span",
                {
                  style: {
                    font: "var(--type-overline)",
                    color: "var(--text-muted)",
                    letterSpacing: "var(--tracking-wide)",
                  },
                },
                sublabel,
              ),
          ),
        );
      }
      Object.assign(__ds_scope, { ProgressRing });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/data/ProgressRing.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/data/StatTile.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      const TONES = {
        plain: {
          bg: "var(--surface-card)",
          fg: "var(--text-heading)",
          sub: "var(--text-muted)",
          sh: "var(--shadow-sm)",
        },
        inset: {
          bg: "var(--bg-inset)",
          fg: "var(--text-heading)",
          sub: "var(--text-muted)",
          sh: "none",
        },
        dark: {
          bg: "var(--cocoa-900)",
          fg: "var(--cocoa-50)",
          sub: "var(--cocoa-300)",
          sh: "var(--shadow-lg)",
        },
        accent: {
          bg: "var(--clay-500)",
          fg: "var(--white)",
          sub: "color-mix(in oklab, var(--white) 75%, transparent)",
          sh: "var(--shadow-accent)",
        },
        gold: {
          bg: "var(--ochre-300)",
          fg: "var(--cocoa-900)",
          sub: "var(--ochre-800)",
          sh: "var(--shadow-sm)",
        },
      };
      function StatTile({
        label,
        value,
        unit,
        icon,
        iconTone,
        tone = "plain",
        delta,
        style,
        ...rest
      }) {
        const t = TONES[tone] || TONES.plain;
        const up = delta && !String(delta).trim().startsWith("-");
        return /*#__PURE__*/ React.createElement(
          "div",
          _extends(
            {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 12,
                padding: "var(--pad-card)",
                background: t.bg,
                color: t.fg,
                borderRadius: "var(--radius-xl)",
                boxShadow: t.sh,
                ...style,
              },
            },
            rest,
          ),
          icon &&
            /*#__PURE__*/ React.createElement(__ds_scope.IconTile, {
              icon: icon,
              tone:
                iconTone ||
                (tone === "plain" || tone === "inset" ? "clay" : "dark"),
              size: 34,
            }),
          /*#__PURE__*/ React.createElement(
            "div",
            null,
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "baseline",
                  gap: 4,
                },
              },
              /*#__PURE__*/ React.createElement(
                "span",
                {
                  style: {
                    font: "var(--type-amount)",
                    fontSize: "var(--text-xl)",
                    fontVariantNumeric: "tabular-nums",
                  },
                },
                value,
              ),
              unit &&
                /*#__PURE__*/ React.createElement(
                  "span",
                  {
                    style: {
                      font: "var(--type-body-sm)",
                      color: t.sub,
                    },
                  },
                  unit,
                ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  marginTop: 3,
                },
              },
              /*#__PURE__*/ React.createElement(
                "span",
                {
                  style: {
                    font: "var(--type-caption)",
                    color: t.sub,
                  },
                },
                label,
              ),
              delta &&
                /*#__PURE__*/ React.createElement(
                  "span",
                  {
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 2,
                      font: "var(--type-overline)",
                      color: up
                        ? "var(--status-success)"
                        : "var(--status-danger)",
                    },
                  },
                  /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
                    name: up ? "trending-up" : "trending-down",
                    size: 11,
                  }),
                  delta,
                ),
            ),
          ),
        );
      }
      Object.assign(__ds_scope, { StatTile });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/data/StatTile.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/data/Timeline.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      function Timeline({
        steps = [],
        orientation = "vertical",
        style,
        ...rest
      }) {
        if (orientation === "horizontal") {
          return /*#__PURE__*/ React.createElement(
            "div",
            _extends(
              {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  ...style,
                },
              },
              rest,
            ),
            steps.map((s, i) =>
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  key: i,
                  style: {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: 0,
                  },
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    },
                  },
                  /*#__PURE__*/ React.createElement("span", {
                    style: {
                      flex: 1,
                      height: 3,
                      background:
                        i === 0
                          ? "transparent"
                          : s.done
                            ? "var(--cocoa-900)"
                            : "var(--cocoa-200)",
                    },
                  }),
                  /*#__PURE__*/ React.createElement(Dot, {
                    done: s.done,
                    current: s.current,
                  }),
                  /*#__PURE__*/ React.createElement("span", {
                    style: {
                      flex: 1,
                      height: 3,
                      background:
                        i === steps.length - 1
                          ? "transparent"
                          : steps[i + 1] && steps[i + 1].done
                            ? "var(--cocoa-900)"
                            : "var(--cocoa-200)",
                    },
                  }),
                ),
                /*#__PURE__*/ React.createElement(
                  "span",
                  {
                    style: {
                      font: "var(--type-caption)",
                      fontWeight: "var(--weight-semibold)",
                      color:
                        s.done || s.current
                          ? "var(--text-heading)"
                          : "var(--text-faint)",
                      marginTop: 8,
                      textAlign: "center",
                    },
                  },
                  s.title,
                ),
                s.meta &&
                  /*#__PURE__*/ React.createElement(
                    "span",
                    {
                      style: {
                        font: "var(--type-caption)",
                        color: "var(--text-faint)",
                        marginTop: 1,
                      },
                    },
                    s.meta,
                  ),
              ),
            ),
          );
        }
        return /*#__PURE__*/ React.createElement(
          "div",
          _extends(
            {
              style: {
                display: "flex",
                flexDirection: "column",
                ...style,
              },
            },
            rest,
          ),
          steps.map((s, i) =>
            /*#__PURE__*/ React.createElement(
              "div",
              {
                key: i,
                style: {
                  display: "flex",
                  gap: 12,
                },
              },
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flex: "none",
                  },
                },
                /*#__PURE__*/ React.createElement(Dot, {
                  done: s.done,
                  current: s.current,
                }),
                i < steps.length - 1 &&
                  /*#__PURE__*/ React.createElement("span", {
                    style: {
                      flex: 1,
                      width: 2,
                      minHeight: 26,
                      background: "var(--cocoa-200)",
                      margin: "4px 0",
                      borderRadius: 999,
                    },
                  }),
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    paddingBottom: i < steps.length - 1 ? 18 : 0,
                  },
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      gap: 8,
                      alignItems: "baseline",
                    },
                  },
                  /*#__PURE__*/ React.createElement(
                    "span",
                    {
                      style: {
                        font: "var(--type-label)",
                        color: "var(--text-heading)",
                      },
                    },
                    s.title,
                  ),
                  s.meta &&
                    /*#__PURE__*/ React.createElement(
                      "span",
                      {
                        style: {
                          font: "var(--type-caption)",
                          color: "var(--text-faint)",
                        },
                      },
                      s.meta,
                    ),
                ),
                s.body &&
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      style: {
                        font: "var(--type-body-sm)",
                        color: "var(--text-muted)",
                        marginTop: 3,
                      },
                    },
                    s.body,
                  ),
              ),
            ),
          ),
        );
      }
      function Dot({ done, current }) {
        return /*#__PURE__*/ React.createElement(
          "span",
          {
            style: {
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "none",
              width: 22,
              height: 22,
              borderRadius: 999,
              background: done
                ? "var(--cocoa-900)"
                : current
                  ? "var(--accent-primary)"
                  : "var(--white)",
              border: `2px solid ${done ? "var(--cocoa-900)" : current ? "var(--accent-primary)" : "var(--cocoa-200)"}`,
              color: "var(--white)",
              boxSizing: "border-box",
            },
          },
          (done || current) &&
            /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
              name: done ? "check" : "dot",
              size: 13,
            }),
        );
      }
      Object.assign(__ds_scope, { Timeline });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/data/Timeline.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/feedback/EmptyState.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      function EmptyState({
        icon = "inbox",
        tone = "clay",
        title,
        body,
        action,
        style,
        ...rest
      }) {
        return /*#__PURE__*/ React.createElement(
          "div",
          _extends(
            {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 10,
                padding: "32px 24px",
                ...style,
              },
            },
            rest,
          ),
          /*#__PURE__*/ React.createElement(__ds_scope.IconTile, {
            icon: icon,
            tone: tone,
            size: 56,
            radius: "lg",
          }),
          title &&
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  font: "var(--type-h3)",
                  color: "var(--text-heading)",
                  marginTop: 4,
                },
              },
              title,
            ),
          body &&
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  font: "var(--type-body-sm)",
                  color: "var(--text-muted)",
                  maxWidth: 280,
                },
              },
              body,
            ),
          action &&
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  marginTop: 8,
                },
              },
              action,
            ),
        );
      }
      Object.assign(__ds_scope, { EmptyState });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/feedback/EmptyState.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/feedback/Sheet.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      function Sheet({
        open = true,
        title,
        subtitle,
        children,
        footer,
        onClose,
        style,
        ...rest
      }) {
        if (!open) return null;
        return /*#__PURE__*/ React.createElement(
          "div",
          {
            style: {
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              zIndex: 50,
            },
          },
          /*#__PURE__*/ React.createElement("div", {
            onClick: onClose,
            style: {
              position: "absolute",
              inset: 0,
              background:
                "color-mix(in oklab, var(--cocoa-900) 42%, transparent)",
              backdropFilter: "blur(3px)",
              animation:
                "njangi-fade var(--dur-base) var(--ease-standard) both",
            },
          }),
          /*#__PURE__*/ React.createElement(
            "div",
            _extends(
              {
                style: {
                  position: "relative",
                  background: "var(--surface-card)",
                  borderRadius: "var(--radius-2xl) var(--radius-2xl) 0 0",
                  padding: "10px 20px 24px",
                  boxShadow: "var(--shadow-xl)",
                  animation:
                    "njangi-rise var(--dur-slow) var(--ease-entrance) both",
                  ...style,
                },
              },
              rest,
            ),
            /*#__PURE__*/ React.createElement("div", {
              style: {
                width: 44,
                height: 5,
                borderRadius: 999,
                background: "var(--cocoa-200)",
                margin: "0 auto 16px",
              },
            }),
            (title || onClose) &&
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    marginBottom: 16,
                  },
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      flex: 1,
                    },
                  },
                  title &&
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        style: {
                          font: "var(--type-h2)",
                          color: "var(--text-heading)",
                        },
                      },
                      title,
                    ),
                  subtitle &&
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        style: {
                          font: "var(--type-body-sm)",
                          color: "var(--text-muted)",
                          marginTop: 4,
                        },
                      },
                      subtitle,
                    ),
                ),
                onClose &&
                  /*#__PURE__*/ React.createElement(__ds_scope.IconButton, {
                    icon: "x",
                    tone: "soft",
                    onClick: onClose,
                    label: "Close",
                  }),
              ),
            children,
            footer &&
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    marginTop: 20,
                  },
                },
                footer,
              ),
          ),
        );
      }
      Object.assign(__ds_scope, { Sheet });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/feedback/Sheet.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/feedback/Toast.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      const TONES = {
        success: {
          bg: "var(--palm-600)",
          icon: "circle-check",
        },
        danger: {
          bg: "var(--hibiscus-600)",
          icon: "circle-alert",
        },
        info: {
          bg: "var(--cocoa-900)",
          icon: "info",
        },
        accent: {
          bg: "var(--clay-600)",
          icon: "sparkles",
        },
      };
      function Toast({
        children,
        tone = "info",
        icon,
        action,
        onClose,
        style,
        ...rest
      }) {
        const t = TONES[tone] || TONES.info;
        return /*#__PURE__*/ React.createElement(
          "div",
          _extends(
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 14px",
                borderRadius: "var(--radius-pill)",
                background: t.bg,
                color: "var(--white)",
                boxShadow: "var(--shadow-lg)",
                font: "var(--type-body-sm)",
                fontWeight: "var(--weight-medium)",
                animation:
                  "njangi-rise var(--dur-base) var(--ease-entrance) both",
                ...style,
              },
            },
            rest,
          ),
          /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
            name: icon || t.icon,
            size: 18,
          }),
          /*#__PURE__*/ React.createElement(
            "span",
            {
              style: {
                flex: 1,
              },
            },
            children,
          ),
          action,
          onClose &&
            /*#__PURE__*/ React.createElement(
              "span",
              {
                onClick: onClose,
                style: {
                  display: "flex",
                  cursor: "pointer",
                  opacity: 0.7,
                },
              },
              /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
                name: "x",
                size: 15,
              }),
            ),
        );
      }
      Object.assign(__ds_scope, { Toast });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/feedback/Toast.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/forms/AmountField.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      function AmountField({
        value,
        onChange,
        currency = "FCFA",
        label,
        quickAmounts,
        style,
        ...rest
      }) {
        const digits = String(value ?? "").replace(/[^0-9]/g, "");
        const shown = digits ? Number(digits).toLocaleString("en-US") : "";
        const handle = (e) => {
          const raw = e.target.value.replace(/[^0-9]/g, "");
          onChange &&
            onChange({
              target: {
                value: raw,
              },
            });
        };
        return /*#__PURE__*/ React.createElement(
          "div",
          _extends(
            {
              style: style,
            },
            rest,
          ),
          label &&
            /*#__PURE__*/ React.createElement(
              "span",
              {
                style: {
                  display: "block",
                  font: "var(--type-label)",
                  color: "var(--text-heading)",
                  marginBottom: 10,
                },
              },
              label,
            ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
                gap: 8,
                padding: "18px 16px",
                background: "var(--bg-inset)",
                borderRadius: "var(--radius-2xl)",
              },
            },
            /*#__PURE__*/ React.createElement(
              "span",
              {
                style: {
                  font: "var(--type-h3)",
                  color: "var(--text-muted)",
                },
              },
              currency,
            ),
            /*#__PURE__*/ React.createElement("input", {
              value: shown,
              onChange: handle,
              inputMode: "numeric",
              style: {
                width: Math.max(3, shown.length + 1) + "ch",
                border: "none",
                outline: "none",
                background: "transparent",
                textAlign: "center",
                font: `var(--weight-semibold) var(--text-4xl)/1 var(--font-display)`,
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "var(--tracking-tight)",
                color: "var(--text-heading)",
              },
            }),
          ),
          quickAmounts &&
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  gap: 8,
                  marginTop: 12,
                  flexWrap: "wrap",
                },
              },
              quickAmounts.map((a) =>
                /*#__PURE__*/ React.createElement(
                  "button",
                  {
                    key: a,
                    onClick: () =>
                      onChange &&
                      onChange({
                        target: {
                          value: String(a),
                        },
                      }),
                    style: {
                      height: 36,
                      padding: "0 14px",
                      borderRadius: "var(--radius-pill)",
                      border: "1px solid var(--border-subtle)",
                      background: "var(--white)",
                      font: "var(--type-label)",
                      color: "var(--text-body)",
                      cursor: "pointer",
                    },
                  },
                  Number(a).toLocaleString(),
                ),
              ),
            ),
        );
      }
      Object.assign(__ds_scope, { AmountField });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/AmountField.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/forms/Checkbox.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      function Checkbox({
        checked = false,
        onChange,
        label,
        description,
        shape = "circle",
        style,
        ...rest
      }) {
        return /*#__PURE__*/ React.createElement(
          "label",
          _extends(
            {
              style: {
                display: "flex",
                alignItems: description ? "flex-start" : "center",
                gap: 12,
                cursor: "pointer",
                ...style,
              },
            },
            rest,
          ),
          /*#__PURE__*/ React.createElement(
            "span",
            {
              onClick: () => onChange && onChange(!checked),
              style: {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "none",
                width: 22,
                height: 22,
                marginTop: description ? 1 : 0,
                borderRadius: shape === "circle" ? 999 : "var(--radius-xs)",
                background: checked ? "var(--accent-primary)" : "var(--white)",
                border: `1.5px solid ${checked ? "var(--accent-primary)" : "var(--border-strong)"}`,
                color: "var(--white)",
                transition:
                  "background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)",
              },
            },
            checked &&
              /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
                name: "check",
                size: 13,
              }),
          ),
          (label || description) &&
            /*#__PURE__*/ React.createElement(
              "span",
              null,
              label &&
                /*#__PURE__*/ React.createElement(
                  "span",
                  {
                    style: {
                      display: "block",
                      font: "var(--type-body)",
                      color: "var(--text-heading)",
                      fontWeight: "var(--weight-medium)",
                    },
                  },
                  label,
                ),
              description &&
                /*#__PURE__*/ React.createElement(
                  "span",
                  {
                    style: {
                      display: "block",
                      font: "var(--type-caption)",
                      color: "var(--text-muted)",
                      marginTop: 2,
                    },
                  },
                  description,
                ),
            ),
        );
      }
      Object.assign(__ds_scope, { Checkbox });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Checkbox.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/forms/Input.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      function Input({
        label,
        hint,
        error,
        icon,
        iconAfter,
        prefix,
        size = "md",
        tone = "plain",
        style,
        wrapStyle,
        ...rest
      }) {
        const [focus, setFocus] = React.useState(false);
        const h = size === "lg" ? 54 : size === "sm" ? 38 : 46;
        const bd = error
          ? "var(--status-danger)"
          : focus
            ? "var(--border-focus)"
            : "var(--border-default)";
        return /*#__PURE__*/ React.createElement(
          "label",
          {
            style: {
              display: "block",
              ...wrapStyle,
            },
          },
          label &&
            /*#__PURE__*/ React.createElement(
              "span",
              {
                style: {
                  display: "block",
                  font: "var(--type-label)",
                  color: "var(--text-heading)",
                  marginBottom: 8,
                },
              },
              label,
            ),
          /*#__PURE__*/ React.createElement(
            "span",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 10,
                height: h,
                padding: "0 16px",
                background:
                  tone === "inset" ? "var(--bg-inset)" : "var(--white)",
                border: `1.5px solid ${bd}`,
                borderRadius: "var(--radius-md)",
                boxShadow: focus ? "var(--focus-ring)" : "none",
                transition:
                  "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
              },
            },
            icon &&
              /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
                name: icon,
                size: 18,
                style: {
                  color: "var(--text-faint)",
                },
              }),
            prefix &&
              /*#__PURE__*/ React.createElement(
                "span",
                {
                  style: {
                    font: "var(--type-label)",
                    color: "var(--text-muted)",
                  },
                },
                prefix,
              ),
            /*#__PURE__*/ React.createElement(
              "input",
              _extends(
                {
                  onFocus: () => setFocus(true),
                  onBlur: () => setFocus(false),
                  style: {
                    flex: 1,
                    minWidth: 0,
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    font: "var(--type-body)",
                    color: "var(--text-heading)",
                    ...style,
                  },
                },
                rest,
              ),
            ),
            iconAfter &&
              /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
                name: iconAfter,
                size: 18,
                style: {
                  color: "var(--text-faint)",
                },
              }),
          ),
          (error || hint) &&
            /*#__PURE__*/ React.createElement(
              "span",
              {
                style: {
                  display: "block",
                  marginTop: 6,
                  font: "var(--type-caption)",
                  color: error ? "var(--status-danger)" : "var(--text-muted)",
                },
              },
              error || hint,
            ),
        );
      }
      Object.assign(__ds_scope, { Input });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Input.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/forms/Select.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      function Select({
        label,
        options = [],
        value,
        onChange,
        hint,
        size = "md",
        style,
        ...rest
      }) {
        const h = size === "lg" ? 54 : size === "sm" ? 38 : 46;
        return /*#__PURE__*/ React.createElement(
          "label",
          _extends(
            {
              style: {
                display: "block",
                ...style,
              },
            },
            rest,
          ),
          label &&
            /*#__PURE__*/ React.createElement(
              "span",
              {
                style: {
                  display: "block",
                  font: "var(--type-label)",
                  color: "var(--text-heading)",
                  marginBottom: 8,
                },
              },
              label,
            ),
          /*#__PURE__*/ React.createElement(
            "span",
            {
              style: {
                position: "relative",
                display: "block",
              },
            },
            /*#__PURE__*/ React.createElement(
              "select",
              {
                value: value,
                onChange: onChange,
                style: {
                  appearance: "none",
                  width: "100%",
                  height: h,
                  padding: "0 42px 0 16px",
                  background: "var(--white)",
                  border: "1.5px solid var(--border-default)",
                  borderRadius: "var(--radius-md)",
                  font: "var(--type-body)",
                  color: "var(--text-heading)",
                  cursor: "pointer",
                  outline: "none",
                },
              },
              options.map((o) => {
                const v = typeof o === "string" ? o : o.value;
                const l = typeof o === "string" ? o : o.label;
                return /*#__PURE__*/ React.createElement(
                  "option",
                  {
                    key: v,
                    value: v,
                  },
                  l,
                );
              }),
            ),
            /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
              name: "chevron-down",
              size: 18,
              style: {
                position: "absolute",
                right: 14,
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-muted)",
                pointerEvents: "none",
              },
            }),
          ),
          hint &&
            /*#__PURE__*/ React.createElement(
              "span",
              {
                style: {
                  display: "block",
                  marginTop: 6,
                  font: "var(--type-caption)",
                  color: "var(--text-muted)",
                },
              },
              hint,
            ),
        );
      }
      Object.assign(__ds_scope, { Select });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Select.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/forms/Switch.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      function Switch({
        checked = false,
        onChange,
        label,
        description,
        style,
        ...rest
      }) {
        return /*#__PURE__*/ React.createElement(
          "label",
          _extends(
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 14,
                cursor: "pointer",
                ...style,
              },
            },
            rest,
          ),
          (label || description) &&
            /*#__PURE__*/ React.createElement(
              "span",
              {
                style: {
                  flex: 1,
                },
              },
              label &&
                /*#__PURE__*/ React.createElement(
                  "span",
                  {
                    style: {
                      display: "block",
                      font: "var(--type-body)",
                      fontWeight: "var(--weight-medium)",
                      color: "var(--text-heading)",
                    },
                  },
                  label,
                ),
              description &&
                /*#__PURE__*/ React.createElement(
                  "span",
                  {
                    style: {
                      display: "block",
                      font: "var(--type-caption)",
                      color: "var(--text-muted)",
                      marginTop: 2,
                    },
                  },
                  description,
                ),
            ),
          /*#__PURE__*/ React.createElement(
            "span",
            {
              onClick: () => onChange && onChange(!checked),
              style: {
                position: "relative",
                flex: "none",
                width: 48,
                height: 28,
                borderRadius: 999,
                background: checked
                  ? "var(--accent-primary)"
                  : "var(--cocoa-200)",
                transition: "background var(--dur-base) var(--ease-standard)",
              },
            },
            /*#__PURE__*/ React.createElement("span", {
              style: {
                position: "absolute",
                top: 3,
                left: checked ? 23 : 3,
                width: 22,
                height: 22,
                borderRadius: 999,
                background: "var(--white)",
                boxShadow: "var(--shadow-sm)",
                transition: "left var(--dur-base) var(--ease-spring)",
              },
            }),
          ),
        );
      }
      Object.assign(__ds_scope, { Switch });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Switch.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/navigation/DayStrip.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      const NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      function DayStrip({ days, value, onChange, marks = {}, style, ...rest }) {
        const list =
          days ||
          NAMES.map((n, i) => ({
            label: n,
            date: 7 + i,
          }));
        return /*#__PURE__*/ React.createElement(
          "div",
          _extends(
            {
              style: {
                display: "flex",
                gap: 6,
                justifyContent: "space-between",
                ...style,
              },
            },
            rest,
          ),
          list.map((d) => {
            const on = d.date === value;
            return /*#__PURE__*/ React.createElement(
              "button",
              {
                key: d.date,
                onClick: () => onChange && onChange(d.date),
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  padding: 0,
                  flex: 1,
                },
              },
              /*#__PURE__*/ React.createElement(
                "span",
                {
                  style: {
                    font: "var(--type-body-sm)",
                    fontWeight: on
                      ? "var(--weight-semibold)"
                      : "var(--weight-regular)",
                    color: on ? "var(--text-heading)" : "var(--text-faint)",
                  },
                },
                d.label,
              ),
              /*#__PURE__*/ React.createElement(
                "span",
                {
                  style: {
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 38,
                    height: 38,
                    borderRadius: 999,
                    background: on ? "var(--cocoa-900)" : "var(--white)",
                    color: on ? "var(--text-on-dark)" : "var(--text-body)",
                    font: `var(--weight-${on ? "semibold" : "medium"}) var(--text-base)/1 var(--font-body)`,
                    boxShadow: on ? "var(--shadow-md)" : "var(--shadow-xs)",
                    transition:
                      "background var(--dur-base) var(--ease-standard)",
                  },
                },
                d.date,
                marks[d.date] &&
                  /*#__PURE__*/ React.createElement("span", {
                    style: {
                      position: "absolute",
                      bottom: 5,
                      width: 4,
                      height: 4,
                      borderRadius: 999,
                      background: on ? "var(--surface-gold)" : marks[d.date],
                    },
                  }),
              ),
            );
          }),
        );
      }
      Object.assign(__ds_scope, { DayStrip });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/navigation/DayStrip.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/navigation/SegmentedTabs.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      function SegmentedTabs({
        tabs = [],
        value,
        onChange,
        size = "md",
        style,
        ...rest
      }) {
        const h = size === "lg" ? 48 : 40;
        return /*#__PURE__*/ React.createElement(
          "div",
          _extends(
            {
              style: {
                display: "inline-flex",
                gap: 4,
                padding: 4,
                background: "var(--bg-inset)",
                borderRadius: "var(--radius-pill)",
                ...style,
              },
            },
            rest,
          ),
          tabs.map((t) => {
            const key = typeof t === "string" ? t : t.value;
            const label = typeof t === "string" ? t : t.label;
            const count = typeof t === "string" ? undefined : t.count;
            const on = key === value;
            return /*#__PURE__*/ React.createElement(
              "button",
              {
                key: key,
                onClick: () => onChange && onChange(key),
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  height: h,
                  padding: "0 18px",
                  border: "none",
                  borderRadius: "var(--radius-pill)",
                  background: on ? "var(--white)" : "transparent",
                  color: on ? "var(--text-heading)" : "var(--text-muted)",
                  boxShadow: on ? "var(--shadow-sm)" : "none",
                  font: `var(--weight-semibold) var(--text-base)/1 var(--font-body)`,
                  cursor: "pointer",
                  transition:
                    "background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard)",
                },
              },
              label,
              count !== undefined &&
                /*#__PURE__*/ React.createElement(
                  "span",
                  {
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: 18,
                      height: 18,
                      padding: "0 5px",
                      borderRadius: 999,
                      background: on
                        ? "var(--surface-gold)"
                        : "var(--cocoa-200)",
                      color: "var(--cocoa-800)",
                      font: "var(--type-overline)",
                    },
                  },
                  count,
                ),
            );
          }),
        );
      }
      Object.assign(__ds_scope, { SegmentedTabs });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/navigation/SegmentedTabs.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/navigation/TabBar.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      function TabBar({
        items = [],
        value,
        onChange,
        fab,
        onFab,
        style,
        ...rest
      }) {
        return /*#__PURE__*/ React.createElement(
          "div",
          _extends(
            {
              style: {
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                height: 68,
                padding: "0 10px",
                background: "var(--white)",
                borderRadius: "var(--radius-pill)",
                boxShadow: "var(--shadow-lg)",
                ...style,
              },
            },
            rest,
          ),
          items.map((it) => {
            const on = it.value === value;
            return /*#__PURE__*/ React.createElement(
              "button",
              {
                key: it.value,
                onClick: () => onChange && onChange(it.value),
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  padding: "0 10px",
                  color: on ? "var(--accent-primary)" : "var(--text-faint)",
                  transition: "color var(--dur-fast) var(--ease-standard)",
                },
              },
              it.logo
                ? /*#__PURE__*/ React.createElement(__ds_scope.LogoMark, {
                    size: 22,
                  })
                : /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
                    name: it.icon,
                    size: 22,
                  }),
              /*#__PURE__*/ React.createElement(
                "span",
                {
                  style: {
                    font: "var(--type-overline)",
                    letterSpacing: "var(--tracking-wide)",
                  },
                },
                it.label,
              ),
            );
          }),
          fab &&
            /*#__PURE__*/ React.createElement(
              "button",
              {
                onClick: onFab,
                "aria-label": fab,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "none",
                  width: 48,
                  height: 48,
                  borderRadius: 999,
                  border: "none",
                  background: "var(--accent-primary)",
                  color: "var(--white)",
                  boxShadow: "var(--shadow-accent)",
                  cursor: "pointer",
                },
              },
              /*#__PURE__*/ React.createElement(__ds_scope.Icon, {
                name: fab,
                size: 22,
              }),
            ),
        );
      }
      Object.assign(__ds_scope, { TabBar });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/navigation/TabBar.jsx",
      error: String((e && e.message) || e),
    });
  }

  // components/navigation/TopBar.jsx
  try {
    (() => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      function TopBar({
        title,
        subtitle,
        onBack,
        right,
        align = "center",
        style,
        ...rest
      }) {
        return /*#__PURE__*/ React.createElement(
          "div",
          _extends(
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 12,
                minHeight: 48,
                ...style,
              },
            },
            rest,
          ),
          onBack &&
            /*#__PURE__*/ React.createElement(__ds_scope.IconButton, {
              icon: "arrow-left",
              tone: "plain",
              onClick: onBack,
              label: "Back",
            }),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                flex: 1,
                textAlign: align === "center" ? "center" : "left",
              },
            },
            title &&
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    font: "var(--type-label)",
                    fontSize: "var(--text-sm)",
                    letterSpacing: "var(--tracking-caps)",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  },
                },
                title,
              ),
            subtitle &&
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    font: "var(--type-h3)",
                    color: "var(--text-heading)",
                    marginTop: 2,
                  },
                },
                subtitle,
              ),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "flex",
                gap: 8,
                minWidth: onBack && align === "center" ? 40 : 0,
                justifyContent: "flex-end",
              },
            },
            right,
          ),
        );
      }
      Object.assign(__ds_scope, { TopBar });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/navigation/TopBar.jsx",
      error: String((e && e.message) || e),
    });
  }

  // ui_kits/njangi_app/ContributeScreen.jsx
  try {
    (() => {
      const { useState } = React;
      function ContributeScreen({ onBack, onSent }) {
        const [amount, setAmount] = useState("25000");
        const [method, setMethod] = useState("momo");
        const [confirm, setConfirm] = useState(false);
        const [auto, setAuto] = useState(true);
        return /*#__PURE__*/ React.createElement(
          React.Fragment,
          null,
          /*#__PURE__*/ React.createElement(
            Screen,
            {
              pad: 20,
              bottom: 40,
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  paddingTop: 4,
                },
              },
              /*#__PURE__*/ React.createElement(TopBar, {
                title: "Pay my share",
                onBack: onBack,
              }),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  marginTop: 18,
                },
              },
              /*#__PURE__*/ React.createElement(ListRow, {
                icon: "hand-coins",
                iconTone: "ochre",
                title: "Ndolo Ladies",
                subtitle: "Cycle 3 of 8 \xB7 due tomorrow",
                right: /*#__PURE__*/ React.createElement(
                  Badge,
                  {
                    tone: "warning",
                    dot: true,
                  },
                  "Due",
                ),
              }),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  marginTop: 20,
                },
              },
              /*#__PURE__*/ React.createElement(AmountField, {
                value: amount,
                onChange: (e) => setAmount(e.target.value),
                quickAmounts: [25000, 50000],
              }),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  marginTop: 24,
                },
              },
              /*#__PURE__*/ React.createElement(SectionHead, null, "Pay with"),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  },
                },
                [
                  {
                    id: "momo",
                    logo: "momo",
                    title: "MTN MoMo",
                    sub: "6 77 •• •• 09",
                  },
                  {
                    id: "om",
                    logo: "orange",
                    title: "Orange Money",
                    sub: "6 99 •• •• 42",
                  },
                  {
                    id: "bank",
                    icon: "landmark",
                    tone: "indigo",
                    title: "Afriland First Bank",
                    sub: "•• 4821",
                  },
                ].map((m) =>
                  /*#__PURE__*/ React.createElement(ListRow, {
                    key: m.id,
                    icon: m.icon,
                    iconTone: m.tone,
                    title: m.title,
                    subtitle: m.sub,
                    avatar: m.logo
                      ? /*#__PURE__*/ React.createElement(PayLogo, {
                          provider: m.logo,
                          size: 38,
                        })
                      : undefined,
                    onClick: () => setMethod(m.id),
                    right: /*#__PURE__*/ React.createElement(Checkbox, {
                      checked: method === m.id,
                      onChange: () => setMethod(m.id),
                    }),
                  }),
                ),
              ),
            ),
            /*#__PURE__*/ React.createElement(
              Card,
              {
                tone: "inset",
                pad: 16,
                style: {
                  marginTop: 20,
                },
              },
              /*#__PURE__*/ React.createElement(Switch, {
                checked: auto,
                onChange: setAuto,
                label: "Do this for me every round",
                description: "We debit the day before it's due",
              }),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  marginTop: 24,
                },
              },
              /*#__PURE__*/ React.createElement(
                Button,
                {
                  variant: "primary",
                  size: "lg",
                  block: true,
                  onClick: () => setConfirm(true),
                },
                "Continue",
              ),
              /*#__PURE__*/ React.createElement(
                "p",
                {
                  style: {
                    font: "var(--type-caption)",
                    color: "var(--text-faint)",
                    textAlign: "center",
                    marginTop: 12,
                  },
                },
                "Goes straight to Sona Bih, who collects this round.",
              ),
            ),
          ),
          /*#__PURE__*/ React.createElement(
            Sheet,
            {
              open: confirm,
              title: "All good?",
              subtitle: "Ndolo Ladies \xB7 Round 3",
              onClose: () => setConfirm(false),
              footer: /*#__PURE__*/ React.createElement(
                Button,
                {
                  variant: "primary",
                  size: "lg",
                  block: true,
                  onClick: () => {
                    setConfirm(false);
                    onSent();
                  },
                },
                "Send ",
                Number(amount).toLocaleString(),
                " FCFA",
              ),
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                },
              },
              /*#__PURE__*/ React.createElement(ListRow, {
                tone: "inset",
                avatar: /*#__PURE__*/ React.createElement(PayLogo, {
                  provider: "momo",
                  size: 38,
                }),
                title: "MTN MoMo",
                subtitle: "6 77 \u2022\u2022 \u2022\u2022 09",
              }),
              /*#__PURE__*/ React.createElement(ListRow, {
                tone: "inset",
                avatar: /*#__PURE__*/ React.createElement(Avatar, {
                  name: "Sona Bih",
                  size: "md",
                  ring: "gold",
                }),
                title: "Sona Bih",
                subtitle: "Collecting this round",
              }),
              /*#__PURE__*/ React.createElement(ListRow, {
                tone: "inset",
                icon: "receipt",
                iconTone: "cocoa",
                title: "Fee",
                subtitle: "Njangi takes nothing",
                value: "0",
                valueSub: "FCFA",
              }),
            ),
          ),
        );
      }
      Object.assign(window, {
        ContributeScreen,
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/njangi_app/ContributeScreen.jsx",
      error: String((e && e.message) || e),
    });
  }

  // ui_kits/njangi_app/Frame.jsx
  try {
    (() => {
      const { useState } = React;

      /* The phone shell every Njangi app screen is designed inside: 390×844,
   44px outer radius, cream content area, floating tab bar overlay. */
      function PhoneFrame({ children, dark = false, style }) {
        return /*#__PURE__*/ React.createElement(
          "div",
          {
            style: {
              position: "relative",
              width: 390,
              height: 844,
              flex: "none",
              background: dark ? "var(--cocoa-900)" : "var(--bg-page)",
              borderRadius: "var(--radius-phone)",
              overflow: "hidden",
              boxShadow: "var(--shadow-xl)",
              ...style,
            },
          },
          /*#__PURE__*/ React.createElement(StatusBar, {
            dark: dark,
          }),
          children,
        );
      }
      function StatusBar({ dark }) {
        const c = dark ? "var(--cocoa-50)" : "var(--cocoa-900)";
        return /*#__PURE__*/ React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 44,
              padding: "0 28px",
              color: c,
              font: "var(--weight-semibold) 14px/1 var(--font-body)",
              flex: "none",
            },
          },
          /*#__PURE__*/ React.createElement("span", null, "9:41"),
          /*#__PURE__*/ React.createElement(
            "span",
            {
              style: {
                display: "flex",
                gap: 5,
                alignItems: "center",
              },
            },
            /*#__PURE__*/ React.createElement(Icon, {
              name: "signal",
              size: 14,
            }),
            /*#__PURE__*/ React.createElement(Icon, {
              name: "wifi",
              size: 14,
            }),
            /*#__PURE__*/ React.createElement(Icon, {
              name: "battery-full",
              size: 17,
            }),
          ),
        );
      }

      /* Scrollable body with room for the floating tab bar */
      function Screen({ children, pad = 20, bottom = 96, style }) {
        return /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "njangi-scroll",
            style: {
              height: 800,
              overflowY: "auto",
              overflowX: "hidden",
              padding: `0 ${pad}px ${bottom}px`,
              ...style,
            },
          },
          children,
        );
      }
      function SectionHead({ children, action, onAction }) {
        return /*#__PURE__*/ React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
            },
          },
          /*#__PURE__*/ React.createElement(
            "span",
            {
              style: {
                font: "var(--type-overline)",
                letterSpacing: "var(--tracking-caps)",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              },
            },
            children,
          ),
          action &&
            /*#__PURE__*/ React.createElement(
              "span",
              {
                onClick: onAction,
                style: {
                  font: "var(--type-label)",
                  fontSize: "var(--text-xs)",
                  color: "var(--text-link)",
                  cursor: "pointer",
                },
              },
              action,
            ),
        );
      }
      const P = "../../assets/photos/";
      const MEMBERS = [
        {
          name: "Ada Nkeng",
          src: P + "people/w-01.jpg",
        },
        {
          name: "Eyong Tabi",
          src: P + "people/m-04.jpg",
        },
        {
          name: "Mbah Zita",
          src: P + "people/w-07.jpg",
        },
        {
          name: "Sona Bih",
          src: P + "people/w-03.jpg",
        },
        {
          name: "Ju Fomum",
          src: P + "people/m-07.jpg",
        },
        {
          name: "Kwei Ndam",
          src: P + "people/m-05.jpg",
        },
        {
          name: "Bih Ngwa",
          src: P + "people/w-08.jpg",
        },
        {
          name: "Tanwie Achu",
          src: P + "people/m-02.jpg",
        },
        {
          name: "Mami Ekwi",
          src: P + "people/w-09.jpg",
        },
        {
          name: "Nformi Awa",
        },
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
          name: "School Fees Circle",
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
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/njangi_app/Frame.jsx",
      error: String((e && e.message) || e),
    });
  }

  // ui_kits/njangi_app/GroupScreen.jsx
  try {
    (() => {
      const { useState } = React;
      function GroupScreen({ group, onBack, onContribute }) {
        const g = group || GROUPS[0];
        const [tab, setTab] = useState("members");
        return /*#__PURE__*/ React.createElement(
          Screen,
          {
            pad: 20,
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                paddingTop: 4,
              },
            },
            /*#__PURE__*/ React.createElement(TopBar, {
              title: g.name,
              onBack: onBack,
              right: /*#__PURE__*/ React.createElement(IconButton, {
                icon: "ellipsis",
                tone: "plain",
                label: "More",
              }),
            }),
          ),
          /*#__PURE__*/ React.createElement(
            Card,
            {
              tone: "accent",
              radius: "2xl",
              pad: 20,
              style: {
                marginTop: 16,
              },
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                },
              },
              /*#__PURE__*/ React.createElement(
                "div",
                null,
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      font: "var(--type-caption)",
                      color:
                        "color-mix(in oklab, var(--white) 78%, transparent)",
                    },
                  },
                  "Pot this cycle",
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "baseline",
                      gap: 6,
                      marginTop: 6,
                    },
                  },
                  /*#__PURE__*/ React.createElement(
                    "span",
                    {
                      style: {
                        font: "var(--type-amount)",
                        color: "var(--white)",
                        fontVariantNumeric: "tabular-nums",
                      },
                    },
                    g.pot,
                  ),
                  /*#__PURE__*/ React.createElement(
                    "span",
                    {
                      style: {
                        font: "var(--type-body-sm)",
                        color:
                          "color-mix(in oklab, var(--white) 78%, transparent)",
                      },
                    },
                    "FCFA",
                  ),
                ),
              ),
              /*#__PURE__*/ React.createElement(
                Badge,
                {
                  tone: "gold",
                  icon: "repeat",
                },
                g.cycle.split(" · ")[1],
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  marginTop: 18,
                },
              },
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    font: "var(--type-caption)",
                    color: "color-mix(in oklab, var(--white) 82%, transparent)",
                    marginBottom: 8,
                  },
                },
                /*#__PURE__*/ React.createElement(
                  "span",
                  null,
                  g.cycle.split(" · ")[0],
                ),
                /*#__PURE__*/ React.createElement(
                  "span",
                  null,
                  g.progress,
                  "% through",
                ),
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    height: 8,
                    borderRadius: 999,
                    background:
                      "color-mix(in oklab, var(--white) 28%, transparent)",
                    overflow: "hidden",
                  },
                },
                /*#__PURE__*/ React.createElement("div", {
                  style: {
                    width: g.progress + "%",
                    height: "100%",
                    borderRadius: 999,
                    background: "var(--white)",
                  },
                }),
              ),
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                marginTop: 12,
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 8,
              },
            },
            /*#__PURE__*/ React.createElement(StatTile, {
              tone: "inset",
              label: "Your share",
              value: g.share,
              unit: "FCFA",
            }),
            /*#__PURE__*/ React.createElement(StatTile, {
              tone: "inset",
              label: "Members",
              value: g.members,
            }),
            /*#__PURE__*/ React.createElement(StatTile, {
              tone: "inset",
              label: "Your turn",
              value: "#4",
            }),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                marginTop: 20,
              },
            },
            /*#__PURE__*/ React.createElement(
              Button,
              {
                variant: "primary",
                size: "lg",
                block: true,
                icon: "arrow-up-right",
                onClick: onContribute,
              },
              "Pay my share \xB7 ",
              g.share,
              " FCFA",
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                marginTop: 28,
              },
            },
            /*#__PURE__*/ React.createElement(SegmentedTabs, {
              tabs: [
                {
                  value: "members",
                  label: "Members",
                  count: g.members,
                },
                {
                  value: "order",
                  label: "Payout order",
                },
              ],
              value: tab,
              onChange: setTab,
              style: {
                width: "100%",
              },
            }),
          ),
          tab === "members"
            ? /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    marginTop: 14,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  },
                },
                MEMBERS.map((m, i) =>
                  /*#__PURE__*/ React.createElement(ListRow, {
                    key: m.name,
                    avatar: /*#__PURE__*/ React.createElement(Avatar, {
                      name: m.name,
                      size: "md",
                      ring: i === 3 ? "gold" : "none",
                    }),
                    title: m.name,
                    subtitle:
                      i === 3
                        ? "Collects this round"
                        : i < 2
                          ? "Paid · 2 days ago"
                          : i === 5
                            ? "Two days late"
                            : "Paid · today",
                    right: /*#__PURE__*/ React.createElement(
                      Badge,
                      {
                        tone: i === 3 ? "gold" : i === 5 ? "danger" : "success",
                        dot: true,
                      },
                      i === 3 ? "Collecting" : i === 5 ? "Late" : "Paid",
                    ),
                  }),
                ),
              )
            : /*#__PURE__*/ React.createElement(
                Card,
                {
                  pad: 18,
                  style: {
                    marginTop: 14,
                  },
                },
                /*#__PURE__*/ React.createElement(Timeline, {
                  steps: [
                    {
                      title: "Round 1 · Sona Bih",
                      meta: "10 Jan",
                      body: "Collected 480,000 FCFA",
                      done: true,
                    },
                    {
                      title: "Round 2 · Mbah Zita",
                      meta: "7 Feb",
                      body: "Collected 480,000 FCFA",
                      done: true,
                    },
                    {
                      title: "Round 3 · Sona Bih",
                      meta: "10 Mar",
                      body: "Collecting now — six of eight paid",
                      current: true,
                    },
                    {
                      title: "Round 4 · Ada Nkeng",
                      meta: "7 Apr",
                      body: "Your turn",
                    },
                    {
                      title: "Round 5 · Eyong Tabi",
                      meta: "10 May",
                    },
                  ],
                }),
              ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                marginTop: 28,
              },
            },
            /*#__PURE__*/ React.createElement(SectionHead, null, "Group rules"),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                },
              },
              /*#__PURE__*/ React.createElement(ListRow, {
                tone: "inset",
                icon: "calendar-clock",
                iconTone: "cocoa",
                title: "Collected every Friday",
                subtitle: "Reminder goes out Wednesday",
              }),
              /*#__PURE__*/ React.createElement(ListRow, {
                tone: "inset",
                icon: "scale",
                iconTone: "cocoa",
                title: "Late fee 1,000 FCFA",
                subtitle: "Agreed by the group in January",
              }),
              /*#__PURE__*/ React.createElement(ListRow, {
                tone: "inset",
                icon: "users-round",
                iconTone: "cocoa",
                title: "Order set by draw",
                subtitle: "Drawn at the first meeting",
              }),
            ),
          ),
        );
      }
      Object.assign(window, {
        GroupScreen,
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/njangi_app/GroupScreen.jsx",
      error: String((e && e.message) || e),
    });
  }

  // ui_kits/njangi_app/HomeScreen.jsx
  try {
    (() => {
      const { useState } = React;
      function HomeScreen({ onOpenGroup, onContribute, onOpenProfile }) {
        const [day, setDay] = useState(10);
        const [tab, setTab] = useState("active");
        const groups = GROUPS.filter((g) =>
          tab === "active" ? true : g.status === "paid",
        );
        return /*#__PURE__*/ React.createElement(
          React.Fragment,
          null,
          /*#__PURE__*/ React.createElement(
            Screen,
            null,
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  paddingTop: 8,
                },
              },
              /*#__PURE__*/ React.createElement(
                "div",
                null,
                /*#__PURE__*/ React.createElement(
                  "h1",
                  {
                    style: {
                      font: "var(--type-h1)",
                    },
                  },
                  "Morning, Ada",
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      font: "var(--type-body-sm)",
                      color: "var(--text-muted)",
                      marginTop: 4,
                    },
                  },
                  "Thursday, 10 March",
                ),
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                  },
                },
                /*#__PURE__*/ React.createElement(IconButton, {
                  icon: "bell",
                  badge: true,
                  label: "Notifications",
                }),
                /*#__PURE__*/ React.createElement(Avatar, {
                  name: "Ada Nkeng",
                  size: "md",
                  ring: "gold",
                  onClick: onOpenProfile,
                  style: {
                    cursor: "pointer",
                  },
                }),
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  marginTop: 20,
                },
              },
              /*#__PURE__*/ React.createElement(DayStrip, {
                value: day,
                onChange: setDay,
                marks: {
                  11: "var(--accent-primary)",
                  13: "var(--ochre-400)",
                },
              }),
            ),
            /*#__PURE__*/ React.createElement(
              Card,
              {
                tone: "dark",
                radius: "2xl",
                pad: 20,
                style: {
                  marginTop: 20,
                },
              },
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  },
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  null,
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      style: {
                        font: "var(--type-caption)",
                        color: "var(--cocoa-300)",
                      },
                    },
                    "Across 4 njangis",
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "baseline",
                        gap: 6,
                        marginTop: 6,
                      },
                    },
                    /*#__PURE__*/ React.createElement(
                      "span",
                      {
                        style: {
                          font: "var(--type-amount)",
                          color: "var(--white)",
                          fontVariantNumeric: "tabular-nums",
                        },
                      },
                      "1,640,000",
                    ),
                    /*#__PURE__*/ React.createElement(
                      "span",
                      {
                        style: {
                          font: "var(--type-body-sm)",
                          color: "var(--cocoa-300)",
                        },
                      },
                      "FCFA",
                    ),
                  ),
                ),
                /*#__PURE__*/ React.createElement(IconButton, {
                  icon: "eye",
                  tone: "soft",
                  style: {
                    background: "var(--cocoa-800)",
                    color: "var(--cocoa-100)",
                  },
                  label: "Hide balance",
                }),
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    gap: 10,
                    marginTop: 18,
                  },
                },
                /*#__PURE__*/ React.createElement(
                  Button,
                  {
                    variant: "gold",
                    size: "md",
                    icon: "arrow-up-right",
                    style: {
                      flex: 1,
                    },
                    onClick: onContribute,
                  },
                  "Put in",
                ),
                /*#__PURE__*/ React.createElement(
                  Button,
                  {
                    variant: "secondary",
                    size: "md",
                    icon: "hand-coins",
                    style: {
                      flex: 1,
                      background: "var(--cocoa-800)",
                      color: "var(--cocoa-50)",
                      border: "1px solid var(--cocoa-700)",
                    },
                  },
                  "Collect",
                ),
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  marginTop: 12,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                },
              },
              /*#__PURE__*/ React.createElement(StatTile, {
                icon: "calendar-clock",
                iconTone: "clay",
                label: "Next payout \u2014 yours",
                value: "4",
                unit: "days",
              }),
              /*#__PURE__*/ React.createElement(StatTile, {
                icon: "trophy",
                iconTone: "ochre",
                label: "Rounds never missed",
                value: "17",
                delta: "+2",
              }),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  marginTop: 28,
                },
              },
              /*#__PURE__*/ React.createElement(
                Card,
                {
                  tone: "peach",
                  radius: "2xl",
                  pad: 18,
                  onClick: onContribute,
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      gap: 14,
                      alignItems: "center",
                    },
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      style: {
                        flex: 1,
                      },
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        style: {
                          font: "var(--type-h3)",
                        },
                      },
                      "Ndolo Ladies is due tomorrow",
                    ),
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        style: {
                          font: "var(--type-body-sm)",
                          color: "var(--cocoa-700)",
                          marginTop: 4,
                        },
                      },
                      "25,000 FCFA. Six of eight have paid.",
                    ),
                    /*#__PURE__*/ React.createElement(
                      Button,
                      {
                        variant: "dark",
                        size: "sm",
                        style: {
                          marginTop: 12,
                        },
                      },
                      "Pay my share",
                    ),
                  ),
                  /*#__PURE__*/ React.createElement(ProgressRing, {
                    value: 75,
                    size: 78,
                    thickness: 9,
                    tone: "dark",
                    track: "color-mix(in oklab, var(--white) 55%, transparent)",
                    label: "6/8",
                  }),
                ),
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  marginTop: 28,
                },
              },
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 12,
                  },
                },
                /*#__PURE__*/ React.createElement(SegmentedTabs, {
                  tabs: [
                    {
                      value: "active",
                      label: "All",
                      count: 4,
                    },
                    {
                      value: "paid",
                      label: "Settled",
                      count: 2,
                    },
                  ],
                  value: tab,
                  onChange: setTab,
                }),
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  },
                },
                groups.map((g) =>
                  /*#__PURE__*/ React.createElement(ListRow, {
                    key: g.id,
                    icon: g.icon,
                    iconTone: g.tone,
                    title: g.name,
                    subtitle: g.cycle,
                    value: g.share,
                    valueSub: "per round",
                    chevron: true,
                    onClick: () => onOpenGroup(g),
                  }),
                ),
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  marginTop: 28,
                },
              },
              /*#__PURE__*/ React.createElement(
                SectionHead,
                {
                  action: "See all",
                },
                "Recent activity",
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  },
                },
                /*#__PURE__*/ React.createElement(ListRow, {
                  avatar: /*#__PURE__*/ React.createElement(Avatar, {
                    name: "Eyong Tabi",
                    size: "md",
                  }),
                  title: "Eyong paid his share",
                  subtitle: "Ndolo Ladies \xB7 2h ago",
                  right: /*#__PURE__*/ React.createElement(
                    Badge,
                    {
                      tone: "success",
                      dot: true,
                    },
                    "25,000",
                  ),
                }),
                /*#__PURE__*/ React.createElement(ListRow, {
                  avatar: /*#__PURE__*/ React.createElement(Avatar, {
                    name: "Mbah Zita",
                    size: "md",
                  }),
                  title: "Mbah collected round 2",
                  subtitle: "Bamenda Boys FC \xB7 yesterday",
                  right: /*#__PURE__*/ React.createElement(
                    Badge,
                    {
                      tone: "gold",
                    },
                    "300,000",
                  ),
                }),
                /*#__PURE__*/ React.createElement(ListRow, {
                  avatar: /*#__PURE__*/ React.createElement(Avatar, {
                    name: "Ju Fomum",
                    size: "md",
                  }),
                  title: "Ju is two days late",
                  subtitle: "School Fees Circle",
                  right: /*#__PURE__*/ React.createElement(
                    Badge,
                    {
                      tone: "danger",
                      dot: true,
                    },
                    "15,000",
                  ),
                }),
              ),
            ),
          ),
        );
      }
      Object.assign(window, {
        HomeScreen,
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/njangi_app/HomeScreen.jsx",
      error: String((e && e.message) || e),
    });
  }

  // ui_kits/njangi_app/ProfileScreen.jsx
  try {
    (() => {
      const { useState } = React;
      function ProfileScreen() {
        const [reminders, setReminders] = useState(true);
        const [visible, setVisible] = useState(false);
        const [biometric, setBiometric] = useState(true);
        return /*#__PURE__*/ React.createElement(
          Screen,
          null,
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                paddingTop: 8,
              },
            },
            /*#__PURE__*/ React.createElement(TopBar, {
              title: "Me",
              align: "left",
              right: /*#__PURE__*/ React.createElement(IconButton, {
                icon: "settings",
                label: "Settings",
              }),
            }),
          ),
          /*#__PURE__*/ React.createElement(
            Card,
            {
              radius: "2xl",
              pad: 20,
              style: {
                marginTop: 16,
                textAlign: "center",
              },
            },
            /*#__PURE__*/ React.createElement(Avatar, {
              name: "Ada Nkeng",
              size: "xl",
              ring: "gold",
              style: {
                margin: "0 auto",
              },
            }),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  font: "var(--type-h2)",
                  marginTop: 12,
                },
              },
              "Ada Nkeng",
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  font: "var(--type-body-sm)",
                  color: "var(--text-muted)",
                  marginTop: 2,
                },
              },
              "+237 6 77 21 40 09 \xB7 Douala",
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  gap: 8,
                  justifyContent: "center",
                  marginTop: 14,
                },
              },
              /*#__PURE__*/ React.createElement(
                Badge,
                {
                  tone: "success",
                  icon: "shield-check",
                },
                "Verified",
              ),
              /*#__PURE__*/ React.createElement(
                Badge,
                {
                  tone: "gold",
                  icon: "trophy",
                },
                "17 clean rounds",
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  gap: 10,
                  marginTop: 18,
                },
              },
              /*#__PURE__*/ React.createElement(
                Button,
                {
                  variant: "secondary",
                  size: "md",
                  icon: "pencil",
                  style: {
                    flex: 1,
                  },
                },
                "Edit",
              ),
              /*#__PURE__*/ React.createElement(
                Button,
                {
                  variant: "dark",
                  size: "md",
                  icon: "share-2",
                  style: {
                    flex: 1,
                  },
                },
                "Share my code",
              ),
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                marginTop: 12,
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 8,
              },
            },
            /*#__PURE__*/ React.createElement(StatTile, {
              tone: "inset",
              label: "Njangis",
              value: "4",
            }),
            /*#__PURE__*/ React.createElement(StatTile, {
              tone: "inset",
              label: "On time",
              value: "100",
              unit: "%",
            }),
            /*#__PURE__*/ React.createElement(StatTile, {
              tone: "inset",
              label: "Since",
              value: "'23",
            }),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                marginTop: 28,
              },
            },
            /*#__PURE__*/ React.createElement(SectionHead, null, "Reminders"),
            /*#__PURE__*/ React.createElement(
              Card,
              {
                pad: 16,
              },
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                  },
                },
                /*#__PURE__*/ React.createElement(Switch, {
                  checked: reminders,
                  onChange: setReminders,
                  label: "Payout reminders",
                  description: "A nudge two days before your turn",
                }),
                /*#__PURE__*/ React.createElement(Switch, {
                  checked: visible,
                  onChange: setVisible,
                  label: "Let members see my number",
                }),
                /*#__PURE__*/ React.createElement(Switch, {
                  checked: biometric,
                  onChange: setBiometric,
                  label: "Fingerprint to pay",
                }),
              ),
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                marginTop: 28,
              },
            },
            /*#__PURE__*/ React.createElement(SectionHead, null, "Account"),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                },
              },
              /*#__PURE__*/ React.createElement(ListRow, {
                avatar: /*#__PURE__*/ React.createElement(SocialLogo, {
                  network: "whatsapp",
                  size: 38,
                }),
                title: "Invite by WhatsApp",
                subtitle: "Send the group link to your contacts",
                chevron: true,
              }),
              /*#__PURE__*/ React.createElement(ListRow, {
                icon: "id-card",
                iconTone: "indigo",
                title: "Identity",
                subtitle: "Verified in January",
                chevron: true,
              }),
              /*#__PURE__*/ React.createElement(ListRow, {
                icon: "users-round",
                iconTone: "palm",
                title: "People I save with",
                subtitle: "14 contacts",
                chevron: true,
              }),
              /*#__PURE__*/ React.createElement(ListRow, {
                avatar: /*#__PURE__*/ React.createElement(SocialLogo, {
                  network: "whatsapp",
                  size: 38,
                }),
                title: "Get help",
                subtitle: "We reply on WhatsApp",
                chevron: true,
              }),
              /*#__PURE__*/ React.createElement(ListRow, {
                icon: "log-out",
                iconTone: "hibiscus",
                title: "Sign out",
                chevron: true,
              }),
            ),
          ),
        );
      }
      Object.assign(window, {
        ProfileScreen,
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/njangi_app/ProfileScreen.jsx",
      error: String((e && e.message) || e),
    });
  }

  // ui_kits/njangi_app/SignInScreen.jsx
  try {
    (() => {
      const { useState } = React;
      function SignInScreen({ onDone }) {
        const [phone, setPhone] = useState("6 77 21 40 09");
        return /*#__PURE__*/ React.createElement(
          PhoneFrame,
          null,
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                padding: "0 24px",
                height: 800,
                display: "flex",
                flexDirection: "column",
              },
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  paddingTop: 40,
                },
              },
              /*#__PURE__*/ React.createElement(Logo, {
                variant: "lockup",
                size: 56,
                tile: "gold",
              }),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  marginTop: 44,
                },
              },
              /*#__PURE__*/ React.createElement(
                "h1",
                {
                  style: {
                    font: "var(--type-display)",
                    fontSize: "var(--text-2xl)",
                  },
                },
                "Save together,",
                /*#__PURE__*/ React.createElement("br", null),
                "collect in turn.",
              ),
              /*#__PURE__*/ React.createElement(
                "p",
                {
                  style: {
                    font: "var(--type-body)",
                    color: "var(--text-muted)",
                    marginTop: 12,
                  },
                },
                "Put in the same amount every round. One person collects each time. We keep the record straight.",
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  marginTop: 32,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                },
              },
              /*#__PURE__*/ React.createElement(Input, {
                label: "Your number",
                prefix: "+237",
                value: phone,
                onChange: (e) => setPhone(e.target.value),
                hint: "We'll text you a 4-digit code.",
                size: "lg",
              }),
              /*#__PURE__*/ React.createElement(
                Button,
                {
                  variant: "primary",
                  size: "lg",
                  block: true,
                  iconAfter: "arrow-right",
                  onClick: onDone,
                },
                "Send me a code",
              ),
              /*#__PURE__*/ React.createElement(
                Button,
                {
                  variant: "ghost",
                  size: "md",
                  block: true,
                  icon: "ticket",
                  onClick: onDone,
                },
                "I have an invite code",
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginTop: 4,
                  },
                },
                /*#__PURE__*/ React.createElement("span", {
                  style: {
                    flex: 1,
                    height: 1,
                    background: "var(--border-subtle)",
                  },
                }),
                /*#__PURE__*/ React.createElement(
                  "span",
                  {
                    style: {
                      font: "var(--type-caption)",
                      color: "var(--text-muted)",
                    },
                  },
                  "or",
                ),
                /*#__PURE__*/ React.createElement("span", {
                  style: {
                    flex: 1,
                    height: 1,
                    background: "var(--border-subtle)",
                  },
                }),
              ),
              /*#__PURE__*/ React.createElement(
                Button,
                {
                  variant: "secondary",
                  size: "lg",
                  block: true,
                  icon: /*#__PURE__*/ React.createElement(SocialLogo, {
                    network: "google",
                    size: 20,
                    radius: "sm",
                  }),
                  onClick: onDone,
                },
                "Continue with Google",
              ),
              /*#__PURE__*/ React.createElement(
                Button,
                {
                  variant: "secondary",
                  size: "lg",
                  block: true,
                  icon: /*#__PURE__*/ React.createElement(SocialLogo, {
                    network: "apple",
                    size: 20,
                    radius: "sm",
                  }),
                  onClick: onDone,
                },
                "Continue with Apple",
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  marginTop: "auto",
                  paddingBottom: 28,
                },
              },
              /*#__PURE__*/ React.createElement(
                Card,
                {
                  tone: "inset",
                  pad: 16,
                  radius: "xl",
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      gap: 12,
                      alignItems: "center",
                    },
                  },
                  /*#__PURE__*/ React.createElement(IconTile, {
                    icon: "shield-check",
                    tone: "palm",
                    size: 40,
                  }),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      style: {
                        font: "var(--type-body-sm)",
                        color: "var(--text-body)",
                      },
                    },
                    "Money never sits with us. It moves straight from members to whoever is collecting.",
                  ),
                ),
              ),
            ),
          ),
        );
      }
      Object.assign(window, {
        SignInScreen,
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/njangi_app/SignInScreen.jsx",
      error: String((e && e.message) || e),
    });
  }

  // ui_kits/njangi_app/WalletScreen.jsx
  try {
    (() => {
      const { useState } = React;
      function WalletScreen() {
        const [tab, setTab] = useState("in");
        const rows = {
          in: [
            {
              t: "Ndolo Ladies",
              s: "Round 3 · today",
              v: "25,000",
              tone: "success",
            },
            {
              t: "Marché Mokolo Traders",
              s: "Round 5 · 8 March",
              v: "10,000",
              tone: "success",
            },
            {
              t: "Bamenda Boys FC",
              s: "Round 1 · 1 March",
              v: "50,000",
              tone: "success",
            },
            {
              t: "School Fees Circle",
              s: "Round 2 · 28 Feb",
              v: "15,000",
              tone: "success",
            },
          ],
          out: [
            {
              t: "Bamenda Boys FC",
              s: "You collected · 1 Feb",
              v: "300,000",
              tone: "gold",
            },
            {
              t: "Ndolo Ladies",
              s: "You collected · 10 Dec",
              v: "480,000",
              tone: "gold",
            },
          ],
        };
        return /*#__PURE__*/ React.createElement(
          Screen,
          null,
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                paddingTop: 8,
              },
            },
            /*#__PURE__*/ React.createElement(TopBar, {
              title: "Wallet",
              align: "left",
              right: /*#__PURE__*/ React.createElement(IconButton, {
                icon: "sliders-horizontal",
                label: "Filter",
              }),
            }),
          ),
          /*#__PURE__*/ React.createElement(
            Card,
            {
              radius: "2xl",
              pad: 20,
              style: {
                marginTop: 16,
              },
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                },
              },
              /*#__PURE__*/ React.createElement(
                "div",
                null,
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      font: "var(--type-caption)",
                      color: "var(--text-muted)",
                    },
                  },
                  "Put in this year",
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "baseline",
                      gap: 6,
                      marginTop: 6,
                    },
                  },
                  /*#__PURE__*/ React.createElement(
                    "span",
                    {
                      style: {
                        font: "var(--type-amount)",
                        fontVariantNumeric: "tabular-nums",
                      },
                    },
                    "1,640,000",
                  ),
                  /*#__PURE__*/ React.createElement(
                    "span",
                    {
                      style: {
                        font: "var(--type-body-sm)",
                        color: "var(--text-muted)",
                      },
                    },
                    "FCFA",
                  ),
                ),
              ),
              /*#__PURE__*/ React.createElement(ProgressRing, {
                value: 68,
                size: 72,
                thickness: 8,
                tone: "gold",
                label: "68%",
              }),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  gap: 4,
                  alignItems: "stretch",
                  height: 96,
                  marginTop: 22,
                },
              },
              [38, 52, 44, 68, 58, 84, 62, 74, 90, 56, 70, 46].map((h, i) =>
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    key: i,
                    style: {
                      flex: 1,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 6,
                    },
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      style: {
                        flex: 1,
                        width: "100%",
                        display: "flex",
                        alignItems: "flex-end",
                      },
                    },
                    /*#__PURE__*/ React.createElement("div", {
                      style: {
                        width: "100%",
                        height: h + "%",
                        borderRadius: "var(--radius-pill)",
                        background:
                          i === 8 ? "var(--clay-500)" : "var(--cocoa-100)",
                      },
                    }),
                  ),
                  /*#__PURE__*/ React.createElement(
                    "span",
                    {
                      style: {
                        font: "var(--type-overline)",
                        color:
                          i === 8 ? "var(--text-heading)" : "var(--text-faint)",
                      },
                    },
                    "JFMAMJJASOND"[i],
                  ),
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                marginTop: 12,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              },
            },
            /*#__PURE__*/ React.createElement(StatTile, {
              tone: "gold",
              icon: "hand-coins",
              label: "Collected so far",
              value: "780,000",
              unit: "FCFA",
            }),
            /*#__PURE__*/ React.createElement(StatTile, {
              tone: "dark",
              icon: "calendar-check",
              label: "Rounds paid on time",
              value: "17 / 17",
            }),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                marginTop: 28,
              },
            },
            /*#__PURE__*/ React.createElement(SegmentedTabs, {
              tabs: [
                {
                  value: "in",
                  label: "Money in",
                  count: 4,
                },
                {
                  value: "out",
                  label: "Payouts",
                  count: 2,
                },
              ],
              value: tab,
              onChange: setTab,
            }),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  marginTop: 14,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                },
              },
              rows[tab].map((r, i) =>
                /*#__PURE__*/ React.createElement(ListRow, {
                  key: i,
                  icon: tab === "in" ? "arrow-up-right" : "arrow-down-left",
                  iconTone: tab === "in" ? "palm" : "ochre",
                  title: r.t,
                  subtitle: r.s,
                  value: r.v,
                  valueSub: "FCFA",
                }),
              ),
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                marginTop: 28,
              },
            },
            /*#__PURE__*/ React.createElement(
              SectionHead,
              null,
              "Payment methods",
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                },
              },
              /*#__PURE__*/ React.createElement(ListRow, {
                avatar: /*#__PURE__*/ React.createElement(PayLogo, {
                  provider: "momo",
                  size: 38,
                }),
                title: "MTN MoMo",
                subtitle: "6 77 \u2022\u2022 \u2022\u2022 09",
                right: /*#__PURE__*/ React.createElement(
                  Badge,
                  {
                    tone: "neutral",
                  },
                  "Default",
                ),
                chevron: true,
              }),
              /*#__PURE__*/ React.createElement(ListRow, {
                avatar: /*#__PURE__*/ React.createElement(PayLogo, {
                  provider: "orange",
                  size: 38,
                }),
                title: "Orange Money",
                subtitle: "6 99 \u2022\u2022 \u2022\u2022 42",
                chevron: true,
              }),
              /*#__PURE__*/ React.createElement(ListRow, {
                icon: "landmark",
                iconTone: "indigo",
                title: "Afriland First Bank",
                subtitle: "\u2022\u2022 4821",
                chevron: true,
              }),
            ),
            /*#__PURE__*/ React.createElement(
              Button,
              {
                variant: "secondary",
                size: "md",
                block: true,
                icon: "plus",
                style: {
                  marginTop: 12,
                },
              },
              "Add a method",
            ),
          ),
        );
      }
      Object.assign(window, {
        WalletScreen,
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/njangi_app/WalletScreen.jsx",
      error: String((e && e.message) || e),
    });
  }

  // ui_kits/njangi_web/Hero.jsx
  try {
    (() => {
      function Hero({ onStart }) {
        return /*#__PURE__*/ React.createElement(
          Section,
          {
            style: {
              paddingTop: 72,
              paddingBottom: 64,
            },
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "1.05fr 0.95fr",
                gap: 56,
                alignItems: "center",
              },
            },
            /*#__PURE__*/ React.createElement(
              "div",
              null,
              /*#__PURE__*/ React.createElement(
                Eyebrow,
                null,
                "Rotating savings, done right",
              ),
              /*#__PURE__*/ React.createElement(
                "h1",
                {
                  style: {
                    font: "var(--weight-semibold) var(--text-5xl)/1.03 var(--font-display)",
                    letterSpacing: "var(--tracking-tight)",
                    marginTop: 16,
                  },
                },
                "Save together,",
                /*#__PURE__*/ React.createElement("br", null),
                "collect in turn.",
              ),
              /*#__PURE__*/ React.createElement(
                "p",
                {
                  style: {
                    font: "var(--type-body)",
                    fontSize: "var(--text-md)",
                    color: "var(--text-muted)",
                    marginTop: 20,
                    maxWidth: 440,
                  },
                },
                "Everyone puts in the same amount each round. One person collects each time. Njangi keeps the order, sends the reminders and shows the whole group who has paid.",
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    gap: 12,
                    marginTop: 30,
                  },
                },
                /*#__PURE__*/ React.createElement(
                  Button,
                  {
                    variant: "primary",
                    size: "lg",
                    iconAfter: "arrow-right",
                    onClick: onStart,
                  },
                  "Start a njangi",
                ),
                /*#__PURE__*/ React.createElement(
                  Button,
                  {
                    variant: "secondary",
                    size: "lg",
                    icon: "play",
                  },
                  "See how it works",
                ),
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    gap: 14,
                    alignItems: "center",
                    marginTop: 30,
                  },
                },
                /*#__PURE__*/ React.createElement(AvatarStack, {
                  people: MEMBERS,
                  size: "md",
                  max: 5,
                }),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      font: "var(--type-body-sm)",
                      color: "var(--text-muted)",
                    },
                  },
                  /*#__PURE__*/ React.createElement(
                    "strong",
                    {
                      style: {
                        color: "var(--text-heading)",
                      },
                    },
                    "12,400 groups",
                  ),
                  " across Cameroon, Gabon and Chad",
                ),
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                },
              },
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    position: "relative",
                  },
                },
                /*#__PURE__*/ React.createElement("div", {
                  style: {
                    position: "absolute",
                    inset: "-40px -30px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle at 50% 45%, var(--clay-100), transparent 70%)",
                  },
                }),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      position: "relative",
                      width: 320,
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    },
                  },
                  /*#__PURE__*/ React.createElement(
                    Card,
                    {
                      tone: "dark",
                      radius: "2xl",
                      pad: 20,
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        style: {
                          font: "var(--type-caption)",
                          color: "var(--cocoa-300)",
                        },
                      },
                      "Ndolo Ladies \xB7 pot this cycle",
                    ),
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        style: {
                          display: "flex",
                          alignItems: "baseline",
                          gap: 6,
                          marginTop: 6,
                        },
                      },
                      /*#__PURE__*/ React.createElement(
                        "span",
                        {
                          style: {
                            font: "var(--type-amount)",
                            color: "var(--white)",
                            fontVariantNumeric: "tabular-nums",
                          },
                        },
                        "480,000",
                      ),
                      /*#__PURE__*/ React.createElement(
                        "span",
                        {
                          style: {
                            font: "var(--type-body-sm)",
                            color: "var(--cocoa-300)",
                          },
                        },
                        "FCFA",
                      ),
                    ),
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        style: {
                          marginTop: 18,
                        },
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          style: {
                            height: 8,
                            borderRadius: 999,
                            background: "var(--cocoa-800)",
                            overflow: "hidden",
                          },
                        },
                        /*#__PURE__*/ React.createElement("div", {
                          style: {
                            width: "75%",
                            height: "100%",
                            background: "var(--ochre-300)",
                            borderRadius: 999,
                          },
                        }),
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          style: {
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: 8,
                            font: "var(--type-caption)",
                            color: "var(--cocoa-400)",
                          },
                        },
                        /*#__PURE__*/ React.createElement(
                          "span",
                          null,
                          "Six of eight paid",
                        ),
                        /*#__PURE__*/ React.createElement(
                          "span",
                          null,
                          "Round 3 of 8",
                        ),
                      ),
                    ),
                  ),
                  /*#__PURE__*/ React.createElement(ListRow, {
                    avatar: /*#__PURE__*/ React.createElement(Avatar, {
                      name: "Sona Bih",
                      ring: "gold",
                      size: "md",
                    }),
                    title: "Sona Bih",
                    subtitle: "Collects this round",
                    right: /*#__PURE__*/ React.createElement(
                      Badge,
                      {
                        tone: "gold",
                      },
                      "Turn 3",
                    ),
                  }),
                  /*#__PURE__*/ React.createElement(ListRow, {
                    icon: "arrow-up-right",
                    iconTone: "palm",
                    title: "Eyong paid his share",
                    subtitle: "2 hours ago",
                    value: "25,000",
                    valueSub: "FCFA",
                  }),
                  /*#__PURE__*/ React.createElement(
                    Card,
                    {
                      tone: "gold",
                      radius: "xl",
                      pad: 16,
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        style: {
                          display: "flex",
                          gap: 12,
                          alignItems: "center",
                        },
                      },
                      /*#__PURE__*/ React.createElement(IconTile, {
                        icon: "bell",
                        tone: "dark",
                        size: 38,
                      }),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          style: {
                            font: "var(--type-body-sm)",
                            color: "var(--cocoa-900)",
                            fontWeight: 500,
                          },
                        },
                        "You're up next \u2014 480,000 lands 7 April.",
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      }
      Object.assign(window, {
        Hero,
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/njangi_web/Hero.jsx",
      error: String((e && e.message) || e),
    });
  }

  // ui_kits/njangi_web/Sections.jsx
  try {
    (() => {
      const { useState } = React;
      function HowItWorks() {
        const steps = [
          {
            icon: "users-round",
            tone: "clay",
            t: "Start the group",
            b: "Name it, set the amount and how often. Invite people with a code or a WhatsApp link.",
          },
          {
            icon: "shuffle",
            tone: "ochre",
            t: "Draw the order",
            b: "Everyone sees who collects when. Change it later only if the whole group agrees.",
          },
          {
            icon: "hand-coins",
            tone: "palm",
            t: "Put in each round",
            b: "MoMo, Orange Money or bank. Turn on auto-pay and you can forget about it.",
          },
          {
            icon: "party-popper",
            tone: "hibiscus",
            t: "Collect your turn",
            b: "The money moves straight to you. No pot sitting with anybody in between.",
          },
        ];
        return /*#__PURE__*/ React.createElement(
          Section,
          {
            tone: "inset",
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                maxWidth: 620,
              },
            },
            /*#__PURE__*/ React.createElement(Eyebrow, null, "How it works"),
            /*#__PURE__*/ React.createElement(
              "h2",
              {
                style: {
                  font: "var(--weight-semibold) var(--text-3xl)/1.1 var(--font-display)",
                  letterSpacing: "var(--tracking-tight)",
                  marginTop: 14,
                },
              },
              "The same njangi you already run. Less arguing about who paid.",
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 14,
                marginTop: 40,
              },
            },
            steps.map((s, i) =>
              /*#__PURE__*/ React.createElement(
                Card,
                {
                  key: s.t,
                  radius: "2xl",
                  pad: 20,
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  },
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    },
                  },
                  /*#__PURE__*/ React.createElement(IconTile, {
                    icon: s.icon,
                    tone: s.tone,
                    size: 46,
                    radius: "lg",
                  }),
                  /*#__PURE__*/ React.createElement(
                    "span",
                    {
                      style: {
                        font: "var(--weight-semibold) var(--text-xl)/1 var(--font-display)",
                        color: "var(--cocoa-200)",
                      },
                    },
                    "0",
                    i + 1,
                  ),
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  null,
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      style: {
                        font: "var(--type-h3)",
                      },
                    },
                    s.t,
                  ),
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      style: {
                        font: "var(--type-body-sm)",
                        color: "var(--text-muted)",
                        marginTop: 6,
                      },
                    },
                    s.b,
                  ),
                ),
              ),
            ),
          ),
        );
      }
      function Numbers() {
        return /*#__PURE__*/ React.createElement(
          Section,
          {
            tone: "dark",
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1.2fr",
                gap: 56,
                alignItems: "center",
              },
            },
            /*#__PURE__*/ React.createElement(
              "div",
              null,
              /*#__PURE__*/ React.createElement(
                Eyebrow,
                {
                  onDark: true,
                },
                "By the numbers",
              ),
              /*#__PURE__*/ React.createElement(
                "h2",
                {
                  style: {
                    font: "var(--weight-semibold) var(--text-3xl)/1.1 var(--font-display)",
                    letterSpacing: "var(--tracking-tight)",
                    color: "var(--white)",
                    marginTop: 14,
                  },
                },
                "Groups keep going because nobody has to keep the book.",
              ),
              /*#__PURE__*/ React.createElement(
                "p",
                {
                  style: {
                    font: "var(--type-body)",
                    color: "var(--cocoa-300)",
                    marginTop: 16,
                    maxWidth: 400,
                  },
                },
                "Reminders go out before the deadline, not after. Every payment lands in one shared record the whole group can see.",
              ),
              /*#__PURE__*/ React.createElement(
                Button,
                {
                  variant: "gold",
                  size: "lg",
                  iconAfter: "arrow-right",
                  style: {
                    marginTop: 26,
                  },
                },
                "Start a njangi",
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                },
              },
              /*#__PURE__*/ React.createElement(StatTile, {
                tone: "gold",
                icon: "users-round",
                label: "Active groups",
                value: "12,400",
              }),
              /*#__PURE__*/ React.createElement(StatTile, {
                tone: "accent",
                icon: "hand-coins",
                label: "Moved this year",
                value: "8.4B",
                unit: "FCFA",
              }),
              /*#__PURE__*/ React.createElement(StatTile, {
                tone: "plain",
                icon: "calendar-check",
                label: "Rounds paid on time",
                value: "97",
                unit: "%",
                delta: "+4%",
              }),
              /*#__PURE__*/ React.createElement(StatTile, {
                tone: "plain",
                icon: "repeat",
                label: "Cycles completed",
                value: "31,900",
              }),
            ),
          ),
        );
      }
      function Testimonial() {
        const quotes = [
          {
            q: "We used to argue every Friday about who had paid. Now the list is just there, and everybody can see it.",
            n: "Ada Nkeng",
            r: "Ndolo Ladies · Douala, 8 members",
          },
          {
            q: "I run three njangis in the market. Before this I kept everything in one exercise book.",
            n: "Kwei Ndam",
            r: "Marché Mokolo Traders · 10 members",
          },
          {
            q: "The reminder two days early is the whole thing. Nobody is late any more.",
            n: "Eyong Tabi",
            r: "Bamenda Boys FC · 6 members",
          },
        ];
        const [i, setI] = useState(0);
        const t = quotes[i];
        return /*#__PURE__*/ React.createElement(
          Section,
          null,
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginBottom: 28,
              },
            },
            /*#__PURE__*/ React.createElement(
              "div",
              null,
              /*#__PURE__*/ React.createElement(
                Eyebrow,
                null,
                "From the groups",
              ),
              /*#__PURE__*/ React.createElement(
                "h2",
                {
                  style: {
                    font: "var(--weight-semibold) var(--text-2xl)/1.15 var(--font-display)",
                    marginTop: 12,
                  },
                },
                "What members tell us",
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  gap: 8,
                },
              },
              /*#__PURE__*/ React.createElement(IconButton, {
                icon: "arrow-left",
                onClick: () => setI((i - 1 + quotes.length) % quotes.length),
                label: "Previous",
              }),
              /*#__PURE__*/ React.createElement(IconButton, {
                icon: "arrow-right",
                tone: "dark",
                onClick: () => setI((i + 1) % quotes.length),
                label: "Next",
              }),
            ),
          ),
          /*#__PURE__*/ React.createElement(
            Card,
            {
              tone: "peach",
              radius: "3xl",
              pad: 40,
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  gap: 28,
                  alignItems: "flex-start",
                },
              },
              /*#__PURE__*/ React.createElement(IconTile, {
                icon: "quote",
                tone: "dark",
                size: 52,
                radius: "lg",
              }),
              /*#__PURE__*/ React.createElement(
                "div",
                null,
                /*#__PURE__*/ React.createElement(
                  "p",
                  {
                    style: {
                      font: "var(--weight-medium) var(--text-xl)/1.4 var(--font-display)",
                      color: "var(--cocoa-900)",
                      maxWidth: 720,
                    },
                  },
                  t.q,
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      gap: 12,
                      alignItems: "center",
                      marginTop: 24,
                    },
                  },
                  /*#__PURE__*/ React.createElement(Avatar, {
                    name: t.n,
                    size: "lg",
                  }),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    null,
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        style: {
                          font: "var(--type-label)",
                          fontSize: "var(--text-base)",
                          color: "var(--cocoa-900)",
                        },
                      },
                      t.n,
                    ),
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        style: {
                          font: "var(--type-caption)",
                          color: "var(--cocoa-700)",
                          marginTop: 2,
                        },
                      },
                      t.r,
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      }
      function Pricing() {
        const plans = [
          {
            name: "Group",
            price: "Free",
            sub: "Up to 12 members",
            feats: [
              "Shared payment record",
              "Reminders before the deadline",
              "MoMo and Orange Money",
              "Payout order by draw",
            ],
            cta: "Start a njangi",
            tone: "plain",
          },
          {
            name: "Group plus",
            price: "2,000",
            sub: "per cycle, any size",
            feats: [
              "Everything in Group",
              "Unlimited members",
              "Export the cycle record",
              "Late-fee tracking",
              "Two group admins",
            ],
            cta: "Choose plus",
            tone: "accent",
          },
          {
            name: "Association",
            price: "Talk to us",
            sub: "Unions, tontines, co-ops",
            feats: [
              "Many groups in one place",
              "Treasurer roles",
              "Bank settlement",
              "Onsite onboarding",
            ],
            cta: "Contact sales",
            tone: "plain",
          },
        ];
        return /*#__PURE__*/ React.createElement(
          Section,
          {
            tone: "inset",
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                textAlign: "center",
                maxWidth: 560,
                margin: "0 auto",
              },
            },
            /*#__PURE__*/ React.createElement(Eyebrow, null, "Fees"),
            /*#__PURE__*/ React.createElement(
              "h2",
              {
                style: {
                  font: "var(--weight-semibold) var(--text-3xl)/1.1 var(--font-display)",
                  letterSpacing: "var(--tracking-tight)",
                  marginTop: 14,
                },
              },
              "We don't take a cut of your pot.",
            ),
            /*#__PURE__*/ React.createElement(
              "p",
              {
                style: {
                  font: "var(--type-body)",
                  color: "var(--text-muted)",
                  marginTop: 12,
                },
              },
              "Most groups never pay us anything. Bigger ones pay per cycle, not per member.",
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 14,
                marginTop: 40,
                alignItems: "start",
              },
            },
            plans.map((p) => {
              const on = p.tone === "accent";
              return /*#__PURE__*/ React.createElement(
                Card,
                {
                  key: p.name,
                  tone: on ? "dark" : "plain",
                  radius: "2xl",
                  pad: 24,
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    },
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      style: {
                        font: "var(--type-h3)",
                        color: on ? "var(--white)" : "var(--text-heading)",
                      },
                    },
                    p.name,
                  ),
                  on &&
                    /*#__PURE__*/ React.createElement(
                      Badge,
                      {
                        tone: "gold",
                      },
                      "Most groups",
                    ),
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "baseline",
                      gap: 6,
                      marginTop: 16,
                    },
                  },
                  /*#__PURE__*/ React.createElement(
                    "span",
                    {
                      style: {
                        font: "var(--weight-semibold) var(--text-3xl)/1 var(--font-display)",
                        color: on ? "var(--white)" : "var(--text-heading)",
                        letterSpacing: "var(--tracking-tight)",
                      },
                    },
                    p.price,
                  ),
                  p.price !== "Free" &&
                    p.price !== "Talk to us" &&
                    /*#__PURE__*/ React.createElement(
                      "span",
                      {
                        style: {
                          font: "var(--type-body-sm)",
                          color: on ? "var(--cocoa-300)" : "var(--text-muted)",
                        },
                      },
                      "FCFA",
                    ),
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      font: "var(--type-caption)",
                      color: on ? "var(--cocoa-300)" : "var(--text-muted)",
                      marginTop: 4,
                    },
                  },
                  p.sub,
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      marginTop: 22,
                    },
                  },
                  p.feats.map((f) =>
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        key: f,
                        style: {
                          display: "flex",
                          gap: 10,
                          alignItems: "center",
                          font: "var(--type-body-sm)",
                          color: on ? "var(--cocoa-100)" : "var(--text-body)",
                        },
                      },
                      /*#__PURE__*/ React.createElement(Icon, {
                        name: "check",
                        size: 15,
                        style: {
                          color: on ? "var(--ochre-300)" : "var(--palm-500)",
                        },
                      }),
                      f,
                    ),
                  ),
                ),
                /*#__PURE__*/ React.createElement(
                  Button,
                  {
                    variant: on ? "gold" : "secondary",
                    size: "md",
                    block: true,
                    style: {
                      marginTop: 24,
                    },
                  },
                  p.cta,
                ),
              );
            }),
          ),
        );
      }
      function Faq() {
        const items = [
          [
            "Who holds the money?",
            "Nobody. When a round closes, the money moves from each member straight to whoever is collecting. Njangi never sits in the middle of it.",
          ],
          [
            "What if someone stops paying?",
            "The group sees it the day it happens. You can charge the late fee you agreed on, or move that person's turn to the back.",
          ],
          [
            "Can we change the payout order?",
            "Yes, but everyone has to agree in the app. We keep a record of the change so nobody can dispute it later.",
          ],
          [
            "Does it work without data?",
            "Reminders go out by SMS, and you can pay from the USSD menu if you are offline.",
          ],
        ];
        const [open, setOpen] = useState(0);
        return /*#__PURE__*/ React.createElement(
          Section,
          null,
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "0.8fr 1.2fr",
                gap: 56,
                alignItems: "start",
              },
            },
            /*#__PURE__*/ React.createElement(
              "div",
              null,
              /*#__PURE__*/ React.createElement(Eyebrow, null, "Questions"),
              /*#__PURE__*/ React.createElement(
                "h2",
                {
                  style: {
                    font: "var(--weight-semibold) var(--text-2xl)/1.15 var(--font-display)",
                    marginTop: 12,
                  },
                },
                "The things groups ask first",
              ),
              /*#__PURE__*/ React.createElement(
                "p",
                {
                  style: {
                    font: "var(--type-body-sm)",
                    color: "var(--text-muted)",
                    marginTop: 12,
                  },
                },
                "Still stuck? We answer on WhatsApp, usually within the hour.",
              ),
              /*#__PURE__*/ React.createElement(
                Button,
                {
                  variant: "secondary",
                  size: "md",
                  icon: "message-circle",
                  style: {
                    marginTop: 18,
                  },
                },
                "Message us",
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                },
              },
              items.map(([q, a], i) =>
                /*#__PURE__*/ React.createElement(
                  Card,
                  {
                    key: q,
                    tone: "outlined",
                    radius: "xl",
                    pad: 18,
                    onClick: () => setOpen(open === i ? -1 : i),
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      },
                    },
                    /*#__PURE__*/ React.createElement(
                      "span",
                      {
                        style: {
                          flex: 1,
                          font: "var(--type-h3)",
                          fontSize: "var(--text-base)",
                        },
                      },
                      q,
                    ),
                    /*#__PURE__*/ React.createElement(Icon, {
                      name: open === i ? "minus" : "plus",
                      size: 18,
                      style: {
                        color: "var(--text-muted)",
                      },
                    }),
                  ),
                  open === i &&
                    /*#__PURE__*/ React.createElement(
                      "p",
                      {
                        style: {
                          font: "var(--type-body-sm)",
                          color: "var(--text-muted)",
                          marginTop: 10,
                          maxWidth: 560,
                        },
                      },
                      a,
                    ),
                ),
              ),
            ),
          ),
        );
      }
      function FinalCta({ onStart }) {
        return /*#__PURE__*/ React.createElement(
          Section,
          {
            style: {
              paddingBottom: 96,
            },
          },
          /*#__PURE__*/ React.createElement(
            Card,
            {
              tone: "accent",
              radius: "3xl",
              pad: 48,
              style: {
                position: "relative",
                overflow: "hidden",
              },
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  position: "absolute",
                  right: -70,
                  bottom: -110,
                  color: "rgba(255,255,255,0.14)",
                  pointerEvents: "none",
                },
              },
              /*#__PURE__*/ React.createElement(LogoMark, {
                size: 340,
              }),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: 40,
                },
              },
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    flex: 1,
                  },
                },
                /*#__PURE__*/ React.createElement(
                  "h2",
                  {
                    style: {
                      font: "var(--weight-semibold) var(--text-3xl)/1.08 var(--font-display)",
                      color: "var(--white)",
                      letterSpacing: "var(--tracking-tight)",
                    },
                  },
                  "Get your group on it this week.",
                ),
                /*#__PURE__*/ React.createElement(
                  "p",
                  {
                    style: {
                      font: "var(--type-body)",
                      fontSize: "var(--text-md)",
                      color:
                        "color-mix(in oklab, var(--white) 84%, transparent)",
                      marginTop: 14,
                      maxWidth: 480,
                    },
                  },
                  "Set it up in about five minutes. Invite the people you already save with \u2014 they don't need to sign up before they can see the group.",
                ),
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    minWidth: 220,
                  },
                },
                /*#__PURE__*/ React.createElement(
                  Button,
                  {
                    variant: "dark",
                    size: "lg",
                    block: true,
                    iconAfter: "arrow-right",
                    onClick: onStart,
                  },
                  "Start a njangi",
                ),
                /*#__PURE__*/ React.createElement(
                  Button,
                  {
                    variant: "secondary",
                    size: "lg",
                    block: true,
                    icon: "smartphone",
                  },
                  "Get the app",
                ),
              ),
            ),
          ),
        );
      }
      Object.assign(window, {
        HowItWorks,
        Numbers,
        Testimonial,
        Pricing,
        Faq,
        FinalCta,
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/njangi_web/Sections.jsx",
      error: String((e && e.message) || e),
    });
  }

  // ui_kits/njangi_web/Site.jsx
  try {
    (() => {
      const { useState } = React;
      function SiteHeader({ onStart }) {
        return /*#__PURE__*/ React.createElement(
          "header",
          {
            style: {
              position: "sticky",
              top: 0,
              zIndex: 20,
              background:
                "color-mix(in oklab, var(--bg-page) 82%, transparent)",
              backdropFilter: "var(--blur-veil)",
              borderBottom: "1px solid var(--border-subtle)",
            },
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                maxWidth: "var(--content-max)",
                margin: "0 auto",
                padding: "0 var(--gutter-web)",
                height: 76,
                display: "flex",
                alignItems: "center",
                gap: 32,
              },
            },
            /*#__PURE__*/ React.createElement(Logo, {
              variant: "lockup",
              size: 38,
              tile: "gold",
            }),
            /*#__PURE__*/ React.createElement(
              "nav",
              {
                style: {
                  display: "flex",
                  gap: 26,
                  flex: 1,
                },
              },
              ["How it works", "For groups", "Trust & safety", "Help"].map(
                (l) =>
                  /*#__PURE__*/ React.createElement(
                    "a",
                    {
                      key: l,
                      href: "#",
                      style: {
                        font: "var(--type-body-sm)",
                        fontWeight: "var(--weight-medium)",
                        color: "var(--text-body)",
                        borderBottom: "none",
                      },
                    },
                    l,
                  ),
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                },
              },
              /*#__PURE__*/ React.createElement(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                },
                "Sign in",
              ),
              /*#__PURE__*/ React.createElement(
                Button,
                {
                  variant: "primary",
                  size: "sm",
                  iconAfter: "arrow-right",
                  onClick: onStart,
                },
                "Get the app",
              ),
            ),
          ),
        );
      }
      function Section({ children, tone, style }) {
        const bg =
          tone === "inset"
            ? "var(--bg-inset)"
            : tone === "dark"
              ? "var(--cocoa-900)"
              : "transparent";
        return /*#__PURE__*/ React.createElement(
          "section",
          {
            style: {
              background: bg,
              padding: "84px 0",
              ...style,
            },
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                maxWidth: "var(--content-max)",
                margin: "0 auto",
                padding: "0 var(--gutter-web)",
              },
            },
            children,
          ),
        );
      }
      function Eyebrow({ children, onDark }) {
        return /*#__PURE__*/ React.createElement(
          "div",
          {
            style: {
              font: "var(--type-overline)",
              letterSpacing: "var(--tracking-caps)",
              textTransform: "uppercase",
              color: onDark ? "var(--ochre-300)" : "var(--clay-600)",
            },
          },
          children,
        );
      }
      function SiteFooter() {
        const cols = [
          ["Product", ["How it works", "For groups", "Fees", "Download"]],
          ["Company", ["About", "Careers", "Press", "Contact"]],
          ["Trust", ["Security", "Terms", "Privacy", "Complaints"]],
        ];
        return /*#__PURE__*/ React.createElement(
          "footer",
          {
            style: {
              background: "var(--cocoa-900)",
              color: "var(--cocoa-300)",
              padding: "64px 0 40px",
            },
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                maxWidth: "var(--content-max)",
                margin: "0 auto",
                padding: "0 var(--gutter-web)",
              },
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "grid",
                  gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
                  gap: 32,
                },
              },
              /*#__PURE__*/ React.createElement(
                "div",
                null,
                /*#__PURE__*/ React.createElement(Logo, {
                  variant: "lockup",
                  size: 42,
                  tile: "dark",
                  color: "var(--white)",
                }),
                /*#__PURE__*/ React.createElement(
                  "p",
                  {
                    style: {
                      font: "var(--type-body-sm)",
                      marginTop: 12,
                      maxWidth: 260,
                    },
                  },
                  "The savings group you already run, with the record keeping taken off your hands.",
                ),
                /*#__PURE__*/ React.createElement(SocialLinks, {
                  networks: ["whatsapp", "facebook", "instagram"],
                  size: 36,
                  style: {
                    marginTop: 18,
                  },
                }),
              ),
              cols.map(([h, items]) =>
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    key: h,
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      style: {
                        font: "var(--type-overline)",
                        letterSpacing: "var(--tracking-caps)",
                        textTransform: "uppercase",
                        color: "var(--cocoa-400)",
                      },
                    },
                    h,
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        marginTop: 14,
                      },
                    },
                    items.map((i) =>
                      /*#__PURE__*/ React.createElement(
                        "a",
                        {
                          key: i,
                          href: "#",
                          style: {
                            font: "var(--type-body-sm)",
                            color: "var(--cocoa-200)",
                            borderBottom: "none",
                          },
                        },
                        i,
                      ),
                    ),
                  ),
                ),
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  borderTop: "1px solid var(--cocoa-800)",
                  marginTop: 44,
                  paddingTop: 22,
                  display: "flex",
                  justifyContent: "space-between",
                  font: "var(--type-caption)",
                  color: "var(--cocoa-400)",
                },
              },
              /*#__PURE__*/ React.createElement(
                "span",
                null,
                "\xA9 2026 Njangi. Douala, Cameroon.",
              ),
              /*#__PURE__*/ React.createElement(
                "span",
                null,
                "Amounts shown in FCFA",
              ),
            ),
          ),
        );
      }
      Object.assign(window, {
        SiteHeader,
        Section,
        Eyebrow,
        SiteFooter,
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/njangi_web/Site.jsx",
      error: String((e && e.message) || e),
    });
  }

  __ds_ns.Avatar = __ds_scope.Avatar;

  __ds_ns.AvatarStack = __ds_scope.AvatarStack;

  __ds_ns.Badge = __ds_scope.Badge;

  __ds_ns.Button = __ds_scope.Button;

  __ds_ns.Card = __ds_scope.Card;

  __ds_ns.Icon = __ds_scope.Icon;

  __ds_ns.IconButton = __ds_scope.IconButton;

  __ds_ns.LogoMark = __ds_scope.LogoMark;

  __ds_ns.Logo = __ds_scope.Logo;

  __ds_ns.SocialLogo = __ds_scope.SocialLogo;

  __ds_ns.SocialLinks = __ds_scope.SocialLinks;

  __ds_ns.Tag = __ds_scope.Tag;

  __ds_ns.IconTile = __ds_scope.IconTile;

  __ds_ns.ListRow = __ds_scope.ListRow;

  __ds_ns.PayLogo = __ds_scope.PayLogo;

  __ds_ns.ProgressBar = __ds_scope.ProgressBar;

  __ds_ns.ProgressRing = __ds_scope.ProgressRing;

  __ds_ns.StatTile = __ds_scope.StatTile;

  __ds_ns.Timeline = __ds_scope.Timeline;

  __ds_ns.EmptyState = __ds_scope.EmptyState;

  __ds_ns.Sheet = __ds_scope.Sheet;

  __ds_ns.Toast = __ds_scope.Toast;

  __ds_ns.AmountField = __ds_scope.AmountField;

  __ds_ns.Checkbox = __ds_scope.Checkbox;

  __ds_ns.Input = __ds_scope.Input;

  __ds_ns.Select = __ds_scope.Select;

  __ds_ns.Switch = __ds_scope.Switch;

  __ds_ns.DayStrip = __ds_scope.DayStrip;

  __ds_ns.SegmentedTabs = __ds_scope.SegmentedTabs;

  __ds_ns.TabBar = __ds_scope.TabBar;

  __ds_ns.TopBar = __ds_scope.TopBar;
})();
