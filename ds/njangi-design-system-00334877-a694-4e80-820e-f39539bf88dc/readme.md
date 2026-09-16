# Njangi Design System

Njangi is a mobile-first money app for **rotating savings groups** — the *njangi*
(also called *tontine*, *susu* or ROSCA) that people across Cameroon and the wider
Central African region already run between friends, market traders, church groups
and work colleagues. Everyone contributes the same amount each round; one member
collects the whole pot each time; the cycle repeats until everybody has had a turn.

The product's job is not to invent a new financial instrument. It is to take the
exercise book off the treasurer's hands: keep the payout order, send reminders
before the deadline, and show the whole group who has paid.

## Products in this system

| Surface | Where | What it covers |
|---|---|---|
| **Njangi mobile app** | `ui_kits/njangi_app/` | The member app. Sign in, home, groups list, group detail, pay-my-share, wallet, profile. 390×844. |
| **Njangi marketing site** | `ui_kits/njangi_web/` | One landing page at 1280px: hero, how it works, numbers, testimonials, fees, FAQ, footer. |

## Sources this system was built from

Fifteen JPEG mood-board references were supplied in `uploads/` — Dribbble-style
mobile app shots (a black/yellow freelance payments dashboard, two warm-palette
habit trackers, a logistics tracking app, three health/calorie trackers, a
minimalist app-icon study). **No codebase, Figma file, or brand asset pack was
provided**, so:

- The component inventory is authored from scratch to fit the njangi domain (see *Components*), not extracted from a source library.
- The colour palette follows the brief — *warm, suitable for Central African regions* — grounded in the terracotta/cream/cocoa habit-tracker references rather than the blue and green health-app references, which were treated as layout references only.
- **The logo is real.** The obi mark and the *njangi* wordmark (Urbanist ExtraBold) were supplied by the brand and are wired through the system as `<Logo />` / `<LogoMark />` — never re-set the name in type and never inline the SVG. Source files: `assets/logo-mark.svg`, `assets/logo-icon-gold.svg`. The word *njangi* is set in Outfit Semibold, lowercase — see `guidelines/brand-wordmark.card.html`. **Please send real logo files.**
- Layout patterns copied from the references, deliberately: the greeting + week-strip header, the dark hero balance card with two inline actions, tinted icon squircles leading every list row, pill segmented tabs in a trough, the floating bottom tab bar with a raised action button, circular progress rings, and the peach reminder card.

**Fonts are substitutions.** No font binaries were supplied. `tokens/fonts.css`
loads the closest Google Fonts matches from CDN — **Outfit** for display,
**Figtree** for body, **DM Mono** for IDs and codes. **Please send the real font
files** (or confirm these) and we'll swap in local `@font-face` rules.

---

## CONTENT FUNDAMENTALS

Njangi's voice is **casual, plain and warm** — a person who is in the group with
you, not a bank writing to a customer.

**Person.** Second person, always: *you*, *your turn*, *your share*. The company
is *we* and appears rarely, only where a promise is being made — "We keep the
record straight", "We don't take a cut of your pot." Never "the user", never
"members are advised".

**Casing.** Sentence case everywhere: headings, buttons, labels, nav. The only
uppercase is the 11px micro-caps used for section and screen titles
(`PAYMENTS`, `TIMELINES · 3`) — a deliberate, structural device, never a
decorative one. Never ALL-CAPS body copy or all-caps buttons.

**Sentence length.** Short. Two clauses at most. Contractions are welcome
("don't", "you're", "nobody has to"). Periods on full sentences; no periods on
labels, captions or single-phrase card subtitles.

**Money.** Figures with thousands separators and tabular figures; currency as a
plain suffix in muted text: `25,000 FCFA`. Never a currency symbol glued to the
number, never rounded to "25k" in an amount (only in a chart axis or a headline
stat like *8.4B FCFA*).

**Domain vocabulary — the words we use:**

| Say | Don't say |
|---|---|
| njangi, group | savings circle, ROSCA, scheme |
| round, cycle | period, instalment plan, term |
| put in / your share | contribute, remit, deposit |
| collect / your turn | disburse, receive disbursement |
| the pot | the fund, the balance pool |
| late | delinquent, in arrears, defaulted |

**Specific examples, verbatim from the kits:**

- Greeting: *"Morning, Ada"* / *"Thursday, 10 March"*
- Hero: *"Save together, collect in turn."*
- Nudge card: *"Ndolo Ladies is due tomorrow — 25,000 FCFA. Six of eight have paid."*
- Success toast: *"Your 25,000 is in. Seven of eight paid."*
- Reassurance: *"Goes straight to Sona Bih, who collects this round."*
- Fees headline: *"We don't take a cut of your pot."*
- Empty state: *"No groups yet — start one and invite the people you already save with."*
- Late status: *"Two days late"* — not *"Payment overdue by 2 days"*.

**Tone in bad news.** State the fact, then the option. *"That transfer didn't go
through. Try again, or use another number."* No apology theatre, no exclamation
marks on failures.

**Praise is short and dry.** *"Nice one."* *"17 clean rounds."* Never *"Amazing
job! 🎉"*.

**Emoji: no.** Not in product UI, not in marketing copy, not in notifications.
The mood-board references use emoji in their titles; the brand does not. Status
is carried by a coloured Badge, never by a glyph in a sentence.

**Numbers as copy.** Counts sit inside the label, not in a parenthetical:
*"Members · 8"*, *"TIMELINES · 3"*, or as a Badge count on a tab.

---

## VISUAL FOUNDATIONS

### Colour

The palette is warm end to end. There is **no cool grey anywhere** — every
neutral is a brown-grey (`--cocoa-*`), which is what makes the system read as
warm even on a plain white card.

- **Clay** (`--clay-500` #DE5A22) — burnt terracotta, the primary action colour. One clay element per screen.
- **Ochre** (`--ochre-300`/`-400`) — gold. Money collected, streaks, "your turn", the accent on dark surfaces.
- **Cocoa** (`--cocoa-50…900`) — all text, borders and dark surfaces. `--cocoa-900` #1F1511 is the "black".
- **Palm** — green: paid, on track, verified.
- **Hibiscus** — pink-red: late, failed, danger. The one loud decorative colour.
- **Indigo cloth** — deep blue borrowed from wax print. Rare, informational only.
- **Cream** `#FBF6EF` is the page. **Sand** `#F5EDE2` is the recessed tone. White is reserved for cards, so cards separate from the page without needing a border.

Saturated fills carry white text in exactly two places: the primary Button and
the Toast. Everywhere else, status colour appears as a **soft tint background with
darker same-hue text** (Badge, status pills).

### Type

**Outfit** (geometric, soft terminals) for display, headings and all amounts —
Semibold 600, tracking `-0.01em` to `-0.02em`. **Figtree** for body, labels and
captions. **DM Mono** only for group IDs, invite codes and token names.

Ramp: 11 · 12 · 13 · 15 · 17 · 20 · 24 · 30 · 38 · 48 · 64. Mobile body is 15px,
captions 12px, and nothing in the app goes below 11px. Amounts use
`font-variant-numeric: tabular-nums` without exception so columns of money line up.

### Spacing and layout

4px base, with 6px as a legal step for chip padding and tile gaps. Phone screens
use a **20px side gutter**, **28px between sections**, **12px between sibling
cards**, **16px card padding** (20px on hero cards). Web sections are 84px tall
in padding with a 1180px content max and a 32px gutter. Minimum tap target 44px.

Fixed elements on mobile: the status bar and the **floating bottom tab bar**
(inset 20px from all three edges, never edge-to-edge). Everything else scrolls
under them. Sheets are pinned to the bottom edge.

### Shape

**Nothing has a sharp corner.** 6 / 10 / 14 / 18 / 22 / 28 / 36 / 999. Controls
(buttons, tabs, chips, badges, day pills, avatars, the tab bar, toasts) are
**full pills**. Inputs are the single exception at 14px — that contrast is how a
field reads as typeable rather than tappable. Cards are 22px, hero cards and
sheets 28px, the phone frame 44px. Icon tiles are 14px rounded squares.

### Backgrounds

Flat warm colour. **No photography, no illustration, no repeating pattern, no
texture, no grain.** The only gradient in the whole system is a soft clay radial
wash behind the marketing hero collage — and it is decorative, never behind
text. Marketing sections alternate cream → sand → cocoa-900 → cream; at most two
background tones per screenful.

### Cards

White fill, no border, warm low-contrast shadow (`--shadow-sm`), 22px radius.
The bordered variant (`tone="outlined"`, hairline `--cocoa-100`, no shadow) is
for dense/secondary content like the FAQ accordion. Inset cards use the sand fill
with neither border nor shadow. Exactly **one** dark or clay hero card per screen.

### Shadows

All shadows are `color-mix` tints of `--cocoa-900` at 5–14% — warm brown, never
neutral black. Six steps: xs (hairline lift on rows) → xl (sheets). Clay buttons
get `--shadow-accent`, a 30% clay glow. Inner shadows are used **only** as a
1px white top highlight on gold surfaces; there is no neumorphic inset system.

### Transparency and blur

Used in two places only: the sticky web header (page colour at 82% +
`saturate(150%) blur(14px)`) and the sheet scrim (cocoa-900 at 42% + 3px blur).
Cards are never translucent. On dark and clay surfaces, secondary text is
`color-mix` white at 75–84% rather than a separate grey token.

### Motion

- **220ms / `--ease-standard`** is the default for colour, shadow and layout changes.
- **340ms / `--ease-entrance`** for things arriving: sheets rise 16px and fade, toasts the same.
- **`--ease-spring`** (the one bouncy curve) is reserved for the Switch knob and payout/streak celebrations. Never on a page transition.
- **90ms** press feedback.
- Progress bars and rings animate their fill over 340ms; nothing loops except the button spinner.

### Hover and press

Hover **darkens the fill by one ramp step** (clay-500 → clay-600) — never
opacity, never a lift on buttons. Tappable cards and rows lift 1px and go from
`--shadow-xs` to `--shadow-md`. Press **shrinks to 0.97** and drops the shadow to
xs; there is no separate press colour. Focus is a 3px clay ring at 32% opacity,
never a browser outline.

### Imagery

Member portraits are the only imagery, always circular with a 2px white ring, and
initials on a soft brand tint when there's no photo. A gold halo marks whose turn
it is to collect. No stock photography anywhere in the system yet — **if the brand
has real photography, send it**; it should be warm-toned, daylight, and shot with
real groups rather than desks.

---

## LOGO

Two parts: the **obi mark** — the kola nut drawn as one continuous stroke, standing
for the shared pot passed hand to hand — and the **wordmark**, *njangi* set
lowercase in Urbanist ExtraBold with a tight track and a dot on the descender.

**Always use the component.** `<Logo />` and `<LogoMark />` from `components/core/`.
Never re-type the name, never inline the SVG, never redraw the mark.

- `variant="lockup"` — mark + wordmark side by side. Site header, sign-in, footer. The default.
- `variant="stacked"` — mark above wordmark. Splash, share cards, anything square.
- `variant="mark"` — mark in a tile (`tile="gold"` or `tile="dark"`). App icon, favicon, avatar-sized slots.
- `variant="wordmark"` — type only, where the mark already appears nearby.
- `<LogoMark />` — bare stroke, inherits `currentColor`. The Home tab, watermarks, inline use in a sentence.

**Where it appears, and where it does not.** The mark anchors entry points: the
Home tab, the sign-in screen, the site header and footer, and as a large
low-contrast watermark in the closing CTA band. It does **not** repeat on every
screen — an in-app screen that already sits behind the Home tab does not need a
second mark in its top bar.

**Rules.** Clear space on all sides equals the height of the mark's inner
counter (roughly 25% of the mark box). Minimum mark size 32px — below that the
interior lines close up; use the tiled `variant="mark"` instead. Gold mark on
cocoa, cocoa mark on gold or cream, white mark on clay. Never stretch, rotate,
recolour outside the palette, add a shadow to the stroke, or place the untiled
mark over a photograph or a busy tint. See `guidelines/brand-wordmark.card.html`.

---

## ICONOGRAPHY

**Set: Lucide, 2px stroke, round caps, outline only.** No brand icon assets were
supplied, so this is a **flagged substitution** — Lucide was chosen because its
soft round terminals match the geometric-with-soft-corners feel of the mood
board. Glyphs are loaded from `unpkg.com/lucide-static@0.469.0/icons/<name>.svg`
and applied as a CSS mask so they inherit `currentColor`; see `Icon.jsx`.

- **Never hand-draw an SVG icon.** Use `<Icon name="…" />`. If a needed glyph is missing from Lucide, ask before substituting.
- **Sizes:** 16 inline with text, 20 default, 24 inside icon tiles, 28 in the bottom tab bar. Never above 32.
- **Presentation:** most icons sit inside an `IconTile` — a 40px rounded square (14px radius) with a 50-step tint background and a 600-step glyph. Bare glyphs appear only in buttons, chevrons and the tab bar.
- **Fill vs outline:** outline everywhere. Lucide's few filled variants are not used.
- **Emoji: never**, in UI or copy. **Unicode as icons: never** — except the middle dot `·` used as a separator in metadata lines, and the bullet `•` used to mask phone-number digits.
- **No icon font, no sprite sheet** — the mask approach means there is nothing to install.
- Common glyphs: `hand-coins` (contribute), `piggy-bank` (savings), `users-round` (group), `wallet`, `calendar-clock` (due), `repeat` (cycle), `shuffle` (draw order), `trophy` (streak), `shield-check` (verified), `bell` (reminder), `smartphone` (mobile money), `landmark` (bank), `arrow-up-right` / `arrow-down-left` (money in / out).

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. Imports only.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills front matter for use in Claude Code.
- `thumbnail.html` — homepage tile.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`

**`assets/`** — `logo-mark.svg` (the obi mark, single stroke, inherits colour), `logo-icon-gold.svg` (app-icon tile, gold on cocoa).

**`guidelines/`** — 20 specimen cards: colour ramps (clay, ochre, cocoa, palm/hibiscus/indigo), surfaces, status, text colours; type (display, body, micro-caps, amounts, ramp); spacing scale, spacing in use, radii, elevation, motion; brand wordmark, voice, iconography.

**Components** — 26 exports in 5 groups:

- `components/core/` — **Button**, **IconButton**, **Icon**, **Badge**, **Tag**, **Card**, **Avatar**, **AvatarStack**
- `components/forms/` — **Input**, **AmountField**, **Select**, **Checkbox**, **Switch**
- `components/navigation/` — **SegmentedTabs**, **TabBar**, **TopBar**, **DayStrip**
- `components/data/` — **IconTile**, **StatTile**, **ListRow**, **ProgressBar**, **ProgressRing**, **Timeline**
- `components/feedback/` — **Sheet**, **Toast**, **EmptyState**

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` HTML.

**Intentional additions** (no source library defined an inventory, so the set was
authored for the domain; these three are worth calling out):

- **Icon** — a wrapper over the Lucide glyph set, so no screen ever inlines an SVG.
- **IconTile** — the tinted rounded-square glyph holder that leads nearly every list row in the references; factored out rather than repeated inline.
- **AmountField** — a domain primitive. Entering a contribution is the app's central act and needed its own large, centred treatment.

**`ui_kits/`** — `njangi_app/` (7 screens + frame), `njangi_web/` (landing page). Each has its own README.

## Open questions for the brand team

1. **Logo** — supplied and in use. Still missing: a horizontal one-colour version for print, and a favicon/ICO set.
2. **Fonts** — Outfit / Figtree / DM Mono are substitutions from Google Fonts.
3. **Icons** — Lucide is a substitution.
4. **Photography** — none supplied; avatars fall back to initials.
5. **Markets and currency** — FCFA and Cameroonian place names are assumed throughout. Confirm the launch markets.
