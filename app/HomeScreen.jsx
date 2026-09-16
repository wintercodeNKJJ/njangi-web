

function HomeScreen({ onOpenGroup, onContribute, onOpenProfile }) {
  const [day, setDay] = React.useState(10);
  const [tab, setTab] = React.useState('active');
  const groups = GROUPS.filter(g => tab === 'active' ? true : g.status === 'paid');
  return (
    <>
      <Screen>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', paddingTop: 8 }}>
          <div>
            <h1 style={{ font: 'var(--type-h1)' }}>Morning, Ada</h1>
            <div style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', marginTop: 4 }}>Thursday, 10 March</div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <IconButton icon="bell" badge label="Notifications" />
            <Avatar name="Ada Nkeng" size="md" ring="gold" onClick={onOpenProfile} style={{ cursor: 'pointer' }} />
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <DayStrip value={day} onChange={setDay} marks={{ 11: 'var(--accent-primary)', 13: 'var(--ochre-400)' }} />
        </div>

        <Card tone="dark" radius="2xl" pad={20} style={{ marginTop: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ font: 'var(--type-caption)', color: 'var(--cocoa-300)' }}>Across 4 njangis</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 6 }}>
                <span style={{ font: 'var(--type-amount)', color: 'var(--white)', fontVariantNumeric: 'tabular-nums' }}>1,640,000</span>
                <span style={{ font: 'var(--type-body-sm)', color: 'var(--cocoa-300)' }}>FCFA</span>
              </div>
            </div>
            <IconButton icon="eye" tone="soft" style={{ background: 'var(--cocoa-800)', color: 'var(--cocoa-100)' }} label="Hide balance" />
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
            <Button variant="gold" size="md" icon="arrow-up-right" style={{ flex: 1 }} onClick={onContribute}>Put in</Button>
            <Button variant="secondary" size="md" icon="hand-coins" style={{ flex: 1, background: 'var(--cocoa-800)', color: 'var(--cocoa-50)', border: '1px solid var(--cocoa-700)' }}>Collect</Button>
          </div>
        </Card>

        <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <StatTile icon="calendar-clock" iconTone="clay" label="Next payout — yours" value="4" unit="days" />
          <StatTile icon="trophy" iconTone="ochre" label="Rounds never missed" value="17" delta="+2" />
        </div>

        <div style={{ marginTop: 28 }}>
          <Card tone="peach" radius="2xl" pad={18} onClick={onContribute}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <div style={{ font: 'var(--type-h3)' }}>Ndolo Ladies is due tomorrow</div>
                <div style={{ font: 'var(--type-body-sm)', color: 'var(--cocoa-700)', marginTop: 4 }}>25,000 FCFA. Six of eight have paid.</div>
                <Button variant="dark" size="sm" style={{ marginTop: 12 }}>Pay my share</Button>
              </div>
              <ProgressRing value={75} size={78} thickness={9} tone="dark" track="color-mix(in oklab, var(--white) 55%, transparent)" label="6/8" />
            </div>
          </Card>
        </div>

        <div style={{ marginTop: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <SegmentedTabs tabs={[{ value: 'active', label: 'All', count: 4 }, { value: 'paid', label: 'Settled', count: 2 }]} value={tab} onChange={setTab} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {groups.map(g => (
              <ListRow key={g.id} icon={g.icon} iconTone={g.tone} title={g.name} subtitle={g.cycle}
                value={g.share} valueSub="per round" chevron onClick={() => onOpenGroup(g)} />
            ))}
          </div>
        </div>

        <div style={{ marginTop: 28 }}>
          <SectionHead action="See all">Recent activity</SectionHead>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <ListRow avatar={<Avatar name="Eyong Tabi" size="md" />} title="Eyong paid his share" subtitle="Ndolo Ladies · 2h ago" right={<Badge tone="success" dot>25,000</Badge>} />
            <ListRow avatar={<Avatar name="Mbah Zita" size="md" />} title="Mbah collected round 2" subtitle="Bamenda Boys FC · yesterday" right={<Badge tone="gold">300,000</Badge>} />
            <ListRow avatar={<Avatar name="Ju Fomum" size="md" />} title="Ju is two days late" subtitle="School Fees Circle" right={<Badge tone="danger" dot>15,000</Badge>} />
          </div>
        </div>
      </Screen>
    </>
  );
}
Object.assign(window, { HomeScreen });
