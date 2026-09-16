

function GroupScreen({ group, onBack, onContribute }) {
  const g = group || GROUPS[0];
  const [tab, setTab] = React.useState('members');
  return (
    <Screen pad={20}>
      <div style={{ paddingTop: 4 }}>
        <TopBar title={g.name} onBack={onBack} right={<IconButton icon="ellipsis" tone="plain" label="More" />} />
      </div>

      <Card tone="accent" radius="2xl" pad={20} style={{ marginTop: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ font: 'var(--type-caption)', color: 'color-mix(in oklab, var(--white) 78%, transparent)' }}>Pot this cycle</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 6 }}>
              <span style={{ font: 'var(--type-amount)', color: 'var(--white)', fontVariantNumeric: 'tabular-nums' }}>{g.pot}</span>
              <span style={{ font: 'var(--type-body-sm)', color: 'color-mix(in oklab, var(--white) 78%, transparent)' }}>FCFA</span>
            </div>
          </div>
          <Badge tone="gold" icon="repeat">{g.cycle.split(' · ')[1]}</Badge>
        </div>
        <div style={{ marginTop: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', font: 'var(--type-caption)', color: 'color-mix(in oklab, var(--white) 82%, transparent)', marginBottom: 8 }}>
            <span>{g.cycle.split(' · ')[0]}</span><span>{g.progress}% through</span>
          </div>
          <div style={{ height: 8, borderRadius: 999, background: 'color-mix(in oklab, var(--white) 28%, transparent)', overflow: 'hidden' }}>
            <div style={{ width: g.progress + '%', height: '100%', borderRadius: 999, background: 'var(--white)' }} />
          </div>
        </div>
      </Card>

      <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        <StatTile tone="inset" label="Your share" value={g.share} unit="FCFA" />
        <StatTile tone="inset" label="Members" value={g.members} />
        <StatTile tone="inset" label="Your turn" value="#4" />
      </div>

      <div style={{ marginTop: 20 }}>
        <Button variant="primary" size="lg" block icon="arrow-up-right" onClick={onContribute}>Pay my share · {g.share} FCFA</Button>
      </div>

      <div style={{ marginTop: 28 }}>
        <SegmentedTabs tabs={[{ value: 'members', label: 'Members', count: g.members }, { value: 'order', label: 'Payout order' }]} value={tab} onChange={setTab} style={{ width: '100%' }} />
      </div>

      {tab === 'members' ? (
        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {MEMBERS.map((m, i) => (
            <ListRow key={m.name}
              avatar={<Avatar name={m.name} size="md" ring={i === 3 ? 'gold' : 'none'} />}
              title={m.name}
              subtitle={i === 3 ? 'Collects this round' : i < 2 ? 'Paid · 2 days ago' : i === 5 ? 'Two days late' : 'Paid · today'}
              right={<Badge tone={i === 3 ? 'gold' : i === 5 ? 'danger' : 'success'} dot>{i === 3 ? 'Collecting' : i === 5 ? 'Late' : 'Paid'}</Badge>} />
          ))}
        </div>
      ) : (
        <Card pad={18} style={{ marginTop: 14 }}>
          <Timeline steps={[
            { title: 'Round 1 · Sona Bih', meta: '10 Jan', body: 'Collected 480,000 FCFA', done: true },
            { title: 'Round 2 · Mbah Zita', meta: '7 Feb', body: 'Collected 480,000 FCFA', done: true },
            { title: 'Round 3 · Sona Bih', meta: '10 Mar', body: 'Collecting now — six of eight paid', current: true },
            { title: 'Round 4 · Ada Nkeng', meta: '7 Apr', body: 'Your turn' },
            { title: 'Round 5 · Eyong Tabi', meta: '10 May' },
          ]} />
        </Card>
      )}

      <div style={{ marginTop: 28 }}>
        <SectionHead>Group rules</SectionHead>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <ListRow tone="inset" icon="calendar-clock" iconTone="cocoa" title="Collected every Friday" subtitle="Reminder goes out Wednesday" />
          <ListRow tone="inset" icon="scale" iconTone="cocoa" title="Late fee 1,000 FCFA" subtitle="Agreed by the group in January" />
          <ListRow tone="inset" icon="users-round" iconTone="cocoa" title="Order set by draw" subtitle="Drawn at the first meeting" />
        </div>
      </div>
    </Screen>
  );
}
Object.assign(window, { GroupScreen });
