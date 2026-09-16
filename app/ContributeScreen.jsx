

function ContributeScreen({ onBack, onSent }) {
  const [amount, setAmount] = React.useState('25000');
  const [method, setMethod] = React.useState('momo');
  const [confirm, setConfirm] = React.useState(false);
  const [auto, setAuto] = React.useState(true);
  return (
    <>
      <Screen pad={20} bottom={40}>
        <div style={{ paddingTop: 4 }}>
          <TopBar title="Pay my share" onBack={onBack} />
        </div>
        <div style={{ marginTop: 18 }}>
          <ListRow icon="hand-coins" iconTone="ochre" title="Ndolo Ladies" subtitle="Cycle 3 of 8 · due tomorrow" right={<Badge tone="warning" dot>Due</Badge>} />
        </div>
        <div style={{ marginTop: 20 }}>
          <AmountField value={amount} onChange={e => setAmount(e.target.value)} quickAmounts={[25000, 50000]} />
        </div>
        <div style={{ marginTop: 24 }}>
          <SectionHead>Pay with</SectionHead>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { id: 'momo', icon: 'smartphone', tone: 'ochre', title: 'MTN MoMo', sub: '6 77 •• •• 09' },
              { id: 'om', icon: 'smartphone-nfc', tone: 'clay', title: 'Orange Money', sub: '6 99 •• •• 42' },
              { id: 'bank', icon: 'landmark', tone: 'indigo', title: 'Afriland First Bank', sub: '•• 4821' },
            ].map(m => (
              <ListRow key={m.id} icon={m.icon} iconTone={m.tone} title={m.title} subtitle={m.sub}
                onClick={() => setMethod(m.id)}
                right={<Checkbox checked={method === m.id} onChange={() => setMethod(m.id)} />} />
            ))}
          </div>
        </div>
        <Card tone="inset" pad={16} style={{ marginTop: 20 }}>
          <Switch checked={auto} onChange={setAuto} label="Do this for me every round" description="We debit the day before it's due" />
        </Card>
        <div style={{ marginTop: 24 }}>
          <Button variant="primary" size="lg" block onClick={() => setConfirm(true)}>Continue</Button>
          <p style={{ font: 'var(--type-caption)', color: 'var(--text-faint)', textAlign: 'center', marginTop: 12 }}>
            Goes straight to Sona Bih, who collects this round.
          </p>
        </div>
      </Screen>
      <Sheet open={confirm} title="All good?" subtitle="Ndolo Ladies · Round 3"
        onClose={() => setConfirm(false)}
        footer={<Button variant="primary" size="lg" block onClick={() => { setConfirm(false); onSent(); }}>Send {Number(amount).toLocaleString()} FCFA</Button>}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <ListRow tone="inset" icon="smartphone" iconTone="ochre" title="MTN MoMo" subtitle="6 77 •• •• 09" />
          <ListRow tone="inset" avatar={<Avatar name="Sona Bih" size="md" ring="gold" />} title="Sona Bih" subtitle="Collecting this round" />
          <ListRow tone="inset" icon="receipt" iconTone="cocoa" title="Fee" subtitle="Njangi takes nothing" value="0" valueSub="FCFA" />
        </div>
      </Sheet>
    </>
  );
}
Object.assign(window, { ContributeScreen });
