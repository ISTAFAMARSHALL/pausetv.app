import { APPLE_TV_APP_LINK, AFTV_CODE, AMAZON_SIDELOAD_APK_LINK, IPHONE_APP_LINK, LINKS } from '../lib/constants'

const features = [
  ['Live TV, clearly organized', 'Browse your channels with a smooth, scrollable program guide that keeps what’s on now and next in view.'],
  ['Your library, in one place', 'Explore the movies and series included with your own service, with artwork and details where your provider supports them.'],
  ['Pick up where you paused', 'Continue Watching, favorites, and fast search make it simple to return to the shows and channels you use most.'],
  ['Made for the way you watch', 'Use Picture in Picture and playback audio and subtitle controls on supported devices.'],
  ['Built for the big screen', 'A focused, remote-first interface makes navigating on Apple TV and Fire TV feel natural from the couch.'],
  ['Your setup stays yours', 'Connect an Xtream Codes account or M3U playlist from a service you are authorized to access. Pause TeeVee does not provide channels or content.'],
]

function Arrow() { return <span aria-hidden="true">↗</span> }

function FeatureIcon({ name }: { name: 'guide' | 'library' | 'resume' | 'controls' | 'tv' | 'connect' }) {
  const paths = {
    guide: <><rect x="3" y="5" width="18" height="15" rx="2" /><path d="M3 10h18M8 5v15M13 10v10M17 10v10" /></>,
    library: <><rect x="3" y="4" width="7" height="16" rx="1.5" /><rect x="14" y="4" width="7" height="16" rx="1.5" /><path d="M5.5 8h2M16.5 8h2M5.5 12h2M16.5 12h2M5.5 16h2M16.5 16h2" /></>,
    resume: <><path d="M20 11a8 8 0 1 1-2.35-5.65" /><path d="M20 4v7h-7" /><path d="m11 8 4 4-4 4z" /></>,
    controls: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m10 9 5 3-5 3zM7 21h10" /></>,
    tv: <><rect x="3" y="5" width="18" height="13" rx="2" /><path d="m8 21 2-3m6 3-2-3M8 9h.01M12 9h.01M16 9h.01" /></>,
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
        <div className="nav-links"><a href="#features">Features</a><a href="#get">Get the app</a></div>
        <a className="nav-cta" href="#get">Get Pause TeeVee <Arrow /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="orb orb-one" /><div className="orb orb-two" />
        <div className="hero-copy">
          <p className="eyebrow"><i /> YOUR TV, BEAUTIFULLY</p>
          <h1>Find your place.<br /><em>Press pause.</em></h1>
          <p className="lede">Pause TeeVee is a fast, friendly player for the streaming service you already use—designed to make live TV, movies, and series feel right at home.</p>
          <div className="actions"><a className="button primary" href="#get">Choose your device <Arrow /></a><a className="button quiet" href="#features">Explore features</a></div>
          <p className="fine-print">Bring your own authorized Xtream Codes account or M3U playlist.</p>
        </div>
        <div className="hero-visual" aria-label="Pause TeeVee interface preview">
          <div className="screen-glow" />
          <div className="screen">
            <div className="screen-top"><span className="mini-brand"><b>Ⅱ</b> Pause TeeVee</span><span>⌕</span></div>
            <div className="screen-content">
              <p className="screen-label">CONTINUE WATCHING</p>
              <div className="feature-card"><div className="art art-a"><span>▶</span></div><div className="card-copy"><strong>Right where you left off</strong><small>Resume on your terms</small><div className="progress"><i /></div></div></div>
              <p className="screen-label second">LIVE NOW</p>
              <div className="channels"><span><i className="dot orange" /> 101&nbsp;&nbsp; Channel One <b>On now</b></span><span><i className="dot purple" /> 204&nbsp;&nbsp; Channel Two <b>Up next</b></span><span><i className="dot blue" /> 318&nbsp;&nbsp; Channel Three <b>Live</b></span></div>
            </div>
          </div>
          <div className="float-card"><span className="live-dot" /> YOUR GUIDE, YOUR WAY</div>
        </div>
      </section>

      <section className="trust shell"><p>ONE PLAYER. <span>YOUR OWN SERVICE.</span> EVERY SCREEN.</p></section>

      <section className="intro shell" id="features">
        <p className="eyebrow"><i /> MADE TO SETTLE IN</p>
        <div className="intro-grid"><h2>A better view of the <em>TV you already love.</em></h2><p>Pause TeeVee brings a clear, considered experience to the streaming service you subscribe to. Sign in with your own provider details, then browse, search, watch, and come back whenever you’re ready.</p></div>
        <div className="feature-grid">{features.map(([title, body], index) => <article className="feature" key={title}><div className={`feature-icon icon-${index}`}><FeatureIcon name={(['guide', 'library', 'resume', 'controls', 'tv', 'connect'] as const)[index]} /></div><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="devices" id="get"><div className="shell">
        <p className="eyebrow"><i /> TAKE A SEAT</p><h2>Ready on the screens<br />that matter.</h2>
        <div className="device-grid">
          <article className="device-card phone"><div className="device-icon"><DeviceIcon name="phone" /></div><p className="device-type">IPHONE & IPAD</p><h3>Carry your TV with you.</h3><p>Connect your own service and keep your favorites close at hand.</p><a href={IPHONE_APP_LINK}>Get the iPhone app <Arrow /></a></article>
          <article className="device-card tv"><div className="device-icon"><DeviceIcon name="appleTv" /></div><p className="device-type">APPLE TV</p><h3>The living room, refined.</h3><p>Settle into a remote-first experience built for the biggest screen in the house.</p><a href={APPLE_TV_APP_LINK}>Get it on Apple TV <Arrow /></a></article>
          <article className="device-card fire"><div className="device-icon"><DeviceIcon name="fireTv" /></div><p className="device-type">AMAZON FIRE TV</p><h3>Make Fire TV yours.</h3><p>Install Pause TeeVee with the verified Downloader code below.</p><a href="#downloader-code">See installation steps <Arrow /></a></article>
        </div>
      </div></section>

      <section className="install shell" id="fire-tv"><div className="install-copy"><p className="eyebrow"><i /> FIRE TV SETUP</p><h2>From download<br />to <em>showtime.</em></h2><p>Pause TeeVee for Fire TV is installed with Downloader. Open the app on your Fire TV, then enter the verified code below.</p><a className="button primary" href={AMAZON_SIDELOAD_APK_LINK}>Download the Fire TV APK <Arrow /></a></div><ol className="steps"><li><b>01</b><div><strong>Prepare your Fire TV</strong><span>Install and open the Downloader app from Amazon’s Appstore. Enable installs from unknown apps for Downloader in Fire TV settings.</span></div></li><li id="downloader-code"><b>02</b><div><strong>Enter the Downloader code</strong><span>In Downloader’s URL field, enter this verified code: <code>{AFTV_CODE}</code>.</span></div></li><li><b>03</b><div><strong>Install and open Pause TeeVee</strong><span>Choose Install when prompted, then open Pause TeeVee and connect the service you are authorized to use.</span></div></li></ol></section>

      <section className="closing shell"><div className="closing-glow" /><p className="eyebrow"><i /> YOUR TIME, WELL SPENT</p><h2>Less looking.<br /><em>More watching.</em></h2><p>Bring your own service. Make it feel like home.</p><a className="button primary" href="#get">Get Pause TeeVee <Arrow /></a></section>

      <footer className="footer shell"><a className="brand" href="#top"><span className="brand-mark">Ⅱ</span><span>Pause <span>TeeVee</span></span></a><p>Pause TeeVee is a player only. It does not provide channels or content.</p><div><a href={LINKS.privacy}>Privacy</a><a href={LINKS.terms}>Terms</a><a href={LINKS.support}>Support</a></div></footer>
    </main>
  )
}
