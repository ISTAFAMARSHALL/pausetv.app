import { APPLE_TV_APP_LINK, AFTV_CODE, AMAZON_SIDELOAD_APK_LINK, FIRE_TV_VERSION, IPHONE_APP_LINK, LINKS, PLANS } from '../lib/constants'

type FeatureIconName = 'guide' | 'multiview' | 'library' | 'controls' | 'download' | 'bell' | 'shield' | 'palette' | 'connect'

const features: { icon: FeatureIconName; title: string; body: string; tier?: string }[] = [
  { icon: 'guide', title: 'Live TV, clearly organized', body: 'A smooth, scrollable program guide keeps what’s on now and next in view. Hide and reorder channels, set your own channel numbers, or bring your own XMLTV guide with a 48-hour window.' },
  { icon: 'multiview', title: 'Watch up to four at once', body: 'Multi-view puts two or four live channels on screen together. Choose which one you hear, swap layouts, and reload a tile with one press — on Apple TV, Fire TV and iPhone.', tier: 'PLUS · PRO' },
  { icon: 'library', title: 'Your library, in one place', body: 'Movies and series from your own service, with artwork and details where your provider supports them. Continue Watching, favorites and fast search bring you back to what you use most.' },
  { icon: 'controls', title: 'Made for the way you watch', body: 'Picture in Picture, audio and subtitle tracks, online subtitle search, and a sleep timer for live TV and movies alike.' },
  { icon: 'download', title: 'Take it offline', body: 'Download movies and episodes from your service and watch them when you’re off the network.', tier: 'PRO' },
  { icon: 'bell', title: 'Never miss a programme', body: 'Set a reminder from the guide. Pause TeeVee notifies you when it starts, and one press tunes you in.', tier: 'PRO' },
  { icon: 'shield', title: 'Family-safe by default', body: 'An app-lock PIN and content rating filters are included on every plan, free included.' },
  { icon: 'palette', title: 'Make it look like yours', body: 'Accent and background theme packs let you set the mood on every screen, with a larger collection on Pro.', tier: 'PLUS · PRO' },
  { icon: 'connect', title: 'Your setup stays yours', body: 'Connect an Xtream Codes account or M3U playlist from a service you are authorized to access, sign in with email or Apple, and keep your favorites, progress and settings in sync across devices. Pause TeeVee does not provide channels or content.' },
]

function Arrow() { return <span aria-hidden="true">↗</span> }

function FeatureIcon({ name }: { name: FeatureIconName }) {
  const paths = {
    guide: <><rect x="3" y="5" width="18" height="15" rx="2" /><path d="M3 10h18M8 5v15M13 10v10M17 10v10" /></>,
    multiview: <><rect x="3" y="4" width="8" height="7" rx="1.5" /><rect x="13" y="4" width="8" height="7" rx="1.5" /><rect x="3" y="13" width="8" height="7" rx="1.5" /><rect x="13" y="13" width="8" height="7" rx="1.5" /></>,
    library: <><rect x="3" y="4" width="7" height="16" rx="1.5" /><rect x="14" y="4" width="7" height="16" rx="1.5" /><path d="M5.5 8h2M16.5 8h2M5.5 12h2M16.5 12h2M5.5 16h2M16.5 16h2" /></>,
    controls: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m10 9 5 3-5 3zM7 21h10" /></>,
    download: <><path d="M12 4v11" /><path d="m7.5 10.5 4.5 4.5 4.5-4.5" /><path d="M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2" /></>,
    bell: <><path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15z" /><path d="M10 20a2 2 0 0 0 4 0" /></>,
    shield: <><path d="M12 3 5 6v5c0 4.5 3 8.2 7 9.5 4-1.3 7-5 7-9.5V6z" /><path d="m9.5 12 1.8 1.8L15 10" /></>,
    palette: <><path d="M12 3a9 9 0 0 0 0 18c1.2 0 2-.9 2-2 0-.6-.2-1-.5-1.4-.3-.4-.5-.8-.5-1.2 0-1 .9-1.9 2-1.9h1.7A4.3 4.3 0 0 0 21 10.2C21 6.2 17 3 12 3z" /><circle cx="7.5" cy="11" r="1" /><circle cx="10.5" cy="7.5" r="1" /><circle cx="15" cy="7.5" r="1" /></>,
    connect: <><path d="M8 12a4 4 0 0 0 4 4h2a4 4 0 0 0 0-8h-1" /><path d="M16 12a4 4 0 0 0-4-4h-2a4 4 0 0 0 0 8h1" /></>,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function DeviceIcon({ name }: { name: 'phone' | 'appleTv' | 'fireTv' }) {
  const paths = {
    phone: <><rect x="7" y="2.5" width="10" height="19" rx="2.2" /><path d="M11 18.5h2M10 5h4" /></>,
    appleTv: <><rect x="3" y="5" width="18" height="12" rx="2" /><path d="m8 21 2-4m6 4-2-4M11 9l4 2-4 2z" /></>,
    fireTv: <><rect x="3" y="6" width="18" height="11" rx="2" /><path d="M7 20h10M8 10h8M8 13h4" /></>,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Pause TeeVee home"><span className="brand-mark">Ⅱ</span><span>Pause <span>TeeVee</span></span></a>
        <div className="nav-links"><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#get">Get the app</a></div>
        <a className="nav-cta" href="#get">Get Pause TeeVee <Arrow /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="orb orb-one" /><div className="orb orb-two" />
        <div className="hero-copy">
          <p className="eyebrow"><i /> YOUR TV, BEAUTIFULLY</p>
          <h1>Find your place.<br /><em>Press pause.</em></h1>
          <p className="lede">Pause TeeVee is a fast, friendly player for the streaming service you already use—live TV, movies and series at home on every screen, with multi-view, offline downloads and cloud sync when you want more.</p>
          <div className="actions"><a className="button primary" href="#get">Choose your device <Arrow /></a><a className="button quiet" href="#pricing">See plans</a></div>
          <p className="fine-print">Free to start. Bring your own authorized Xtream Codes account or M3U playlist.</p>
        </div>
        <div className="hero-visual" aria-label="Pause TeeVee interface preview">
          <div className="screen-glow" />
          <div className="screen">
            <div className="screen-top"><span className="mini-brand"><b>Ⅱ</b> Pause TeeVee</span><span>⌕</span></div>
            <div className="screen-content">
              <p className="screen-label">CONTINUE WATCHING</p>
              <div className="feature-card"><div className="art art-a"><span>▶</span></div><div className="card-copy"><strong>Right where you left off</strong><small>Synced across your devices</small><div className="progress"><i /></div></div></div>
              <p className="screen-label second">MULTI-VIEW</p>
              <div className="channels"><span><i className="dot orange" /> 101&nbsp;&nbsp; Channel One <b>Audio</b></span><span><i className="dot purple" /> 204&nbsp;&nbsp; Channel Two <b>Live</b></span><span><i className="dot blue" /> 318&nbsp;&nbsp; Channel Three <b>Live</b></span></div>
            </div>
          </div>
          <div className="float-card"><span className="live-dot" /> UP TO 4 CHANNELS AT ONCE</div>
        </div>
      </section>

      <section className="trust shell"><p>ONE PLAYER. <span>YOUR OWN SERVICE.</span> EVERY SCREEN.</p></section>

      <section className="intro shell" id="features">
        <p className="eyebrow"><i /> MADE TO SETTLE IN</p>
        <div className="intro-grid"><h2>A better view of the <em>TV you already love.</em></h2><p>Pause TeeVee brings a clear, considered experience to the streaming service you subscribe to. Sign in with your own provider details, then browse, search, watch, and come back whenever you’re ready.</p></div>
        <div className="feature-grid">{features.map(({ icon, title, body, tier }, index) => <article className="feature" key={title}><div className={`feature-icon icon-${index}`}><FeatureIcon name={icon} /></div><h3>{title}{tier && <span className="tier-chip">{tier}</span>}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="pricing shell" id="pricing">
        <p className="eyebrow"><i /> SIMPLE PLANS</p>
        <div className="pricing-head"><h2>Start free.<br />Grow <em>when you’re ready.</em></h2><p>Every plan is the same app with more room to stretch out: more devices, more providers, and the features that make the big screen feel like yours. Pay monthly, yearly, or once.</p></div>
        <div className="plan-grid">{PLANS.map((plan) => (
          <article className={`plan${plan.featured ? ' featured' : ''}`} key={plan.id}>
            {plan.featured && <span className="plan-tag">MOST POPULAR</span>}
            <h3>{plan.name}</h3>
            <p className="for">{plan.tagline}</p>
            <p className="price">{plan.monthly}<small>{plan.oneTime ? 'one time' : plan.id === 'free' ? 'forever' : '/ month'}</small></p>
            <p className="price-alt">{plan.yearly ? `or ${plan.yearly} / year` : plan.oneTime ? 'No renewals, ever' : 'No card needed'}</p>
            <ul>{plan.features.map((f) => <li key={f}>{f}</li>)}</ul>
          </article>
        ))}</div>
        <p className="pricing-note">Prices in USD. On iPhone, iPad and Apple TV, subscriptions are billed through the App Store and managed in your Apple ID settings. On Fire TV, scan the QR code in the app to finish secure checkout on your phone. Plans unlock features in the app; your streaming service is provided by, and paid to, your own provider.</p>
      </section>

      <section className="devices" id="get"><div className="shell">
        <p className="eyebrow"><i /> TAKE A SEAT</p><h2>Ready on the screens<br />that matter.</h2>
        <div className="device-grid">
          <article className="device-card phone"><div className="device-icon"><DeviceIcon name="phone" /></div><p className="device-type">IPHONE & IPAD</p><h3>Carry your TV with you.</h3><p>The full guide, multi-view, downloads and Picture in Picture, with your favorites close at hand.</p><a href={IPHONE_APP_LINK}>Get the iPhone app <Arrow /></a></article>
          <article className="device-card tv"><div className="device-icon"><DeviceIcon name="appleTv" /></div><p className="device-type">APPLE TV</p><h3>The living room, refined.</h3><p>A remote-first experience built for the biggest screen in the house, with four-way multi-view and a sleep timer at your thumb.</p><a href={APPLE_TV_APP_LINK}>Get it on Apple TV <Arrow /></a></article>
          <article className="device-card fire"><div className="device-icon"><DeviceIcon name="fireTv" /></div><p className="device-type">AMAZON FIRE TV · v{FIRE_TV_VERSION}</p><h3>Make Fire TV yours.</h3><p>Install Pause TeeVee with the verified Downloader code below and get the same guide, multi-view and library on your Fire Stick.</p><a href="#downloader-code">See installation steps <Arrow /></a></article>
        </div>
      </div></section>

      <section className="install shell" id="fire-tv"><div className="install-copy"><p className="eyebrow"><i /> FIRE TV SETUP</p><h2>From download<br />to <em>showtime.</em></h2><p>Pause TeeVee for Fire TV is installed with Downloader. Open the app on your Fire TV, then enter the verified code below. Already installed? Use the same steps to update to v{FIRE_TV_VERSION}.</p><a className="button primary" href={AMAZON_SIDELOAD_APK_LINK}>Download the Fire TV APK (v{FIRE_TV_VERSION}) <Arrow /></a></div><ol className="steps"><li><b>01</b><div><strong>Prepare your Fire TV</strong><span>Install and open the Downloader app from Amazon’s Appstore. Enable installs from unknown apps for Downloader in Fire TV settings.</span></div></li><li id="downloader-code"><b>02</b><div><strong>Enter the Downloader code</strong><span>In Downloader’s URL field, enter this verified code: <code>{AFTV_CODE}</code>.</span></div></li><li><b>03</b><div><strong>Install and open Pause TeeVee</strong><span>Choose Install when prompted, then open Pause TeeVee and connect the service you are authorized to use.</span></div></li></ol></section>

      <section className="closing shell"><div className="closing-glow" /><p className="eyebrow"><i /> YOUR TIME, WELL SPENT</p><h2>Less looking.<br /><em>More watching.</em></h2><p>Bring your own service. Make it feel like home.</p><a className="button primary" href="#get">Get Pause TeeVee <Arrow /></a></section>

      <footer className="footer shell"><a className="brand" href="#top"><span className="brand-mark">Ⅱ</span><span>Pause <span>TeeVee</span></span></a><p>Pause TeeVee is a player only. It does not provide channels or content.</p><div><a href={LINKS.privacy}>Privacy</a><a href={LINKS.terms}>Terms</a><a href={LINKS.support}>Support</a></div></footer>
    </main>
  )
}
