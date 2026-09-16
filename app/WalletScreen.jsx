

function WalletScreen() {
  const [tab, setTab] = React.useState('in');
  const rows = {
    in: [
      { t: 'Ndolo Ladies', s: 'Round 3 · today', v: '25,000', tone: 'success' },
      { t: 'Marché Mokolo Traders', s: 'Round 5 · 8 March', v: '10,000', tone: 'success' },
      { t: 'Bamenda Boys FC', s: 'Round 1 · 1 March', v: '50,000', tone: 'success' },
      { t: 'School Fees Circle', s: 'Round 2 · 28 Feb', v: '15,000', tone: 'success' },
    ],
    out: [
      { t: 'Bamenda Boys FC', s: 'You collected · 1 Feb', v: '300,000', tone: 'gold' },
      { t: 'Ndolo Ladies', s: 'You collected · 10 Dec', v: '480,000', tone: 'gold' },
    ],
  };
  return (
    <Screen>
      <div style={{ paddingTop: 8 }}>
        <TopBar title="Wallet" align="left" right={<IconButton icon="sliders-horizontal" label="Filter" />} />
      </div>

      <Card radius="2xl" pad={20} style={{ marginTop: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ font: 'var(--type-caption)', color: 'var(--text-muted)' }}>Put in this year</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 6 }}>
              <span style={{ font: 'var(--type-amount)', fontVariantNumeric: 'tabular-nums' }}>1,640,000</span>
              <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)' }}>FCFA</span>
            </div>
          </div>
          <ProgressRing value={68} size={72} thickness={8} tone="gold" label="68%" />
        </div>
        <div style={{ display: 'flex', gap: 4, alignItems: 'stretch', height: 96, marginTop: 22 }}>
          {[38, 52, 44, 68, 58, 84, 62, 74, 90, 56, 70, 46].map((h, i) => (
            <div key={i} style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end' }}>
                <div style={{
                  width: '100%', height: h + '%', borderRadius: 'var(--radius-pill)',
                  background: i === 8 ? 'var(--clay-500)' : 'var(--cocoa-100)',
                }} />
              </div>
              <span style={{ font: 'var(--type-overline)', color: i === 8 ? 'var(--text-heading)' : 'var(--text-faint)' }}>
                {'JFMAMJJASOND'[i]}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <StatTile tone="gold" icon="hand-coins" label="Collected so far" value="780,000" unit="FCFA" />
        <StatTile tone="dark" icon="calendar-check" label="Rounds paid on time" value="17 / 17" />
      </div>

      <div style={{ marginTop: 28 }}>
        <SegmentedTabs tabs={[{ value: 'in', label: 'Money in', count: 4 }, { value: 'out', label: 'Payouts', count: 2 }]} value={tab} onChange={setTab} />
        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {rows[tab].map((r, i) => (
            <ListRow key={i} icon={tab === 'in' ? 'arrow-up-right' : 'arrow-down-left'} iconTone={tab === 'in' ? 'palm' : 'ochre'}
              title={r.t} subtitle={r.s} value={r.v} valueSub="FCFA" />
          ))}
        </div>
      </div>

      <div style={{ marginTop: 28 }}>
        <SectionHead>Payment methods</SectionHead>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <ListRow icon="smartphone" iconTone="ochre" title="MTN MoMo" subtitle="6 77 •• •• 09" right={<Badge tone="neutral">Default</Badge>} chevron />
          <ListRow icon="landmark" iconTone="indigo" title="Afriland First Bank" subtitle="•• 4821" chevron />
        </div>
        <Button variant="secondary" size="md" block icon="plus" style={{ marginTop: 12 }}>Add a method</Button>
      </div>
    </Screen>
  );
}
Object.assign(window, { WalletScreen });
