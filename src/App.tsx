import { useLikeCounter } from './hooks/useLikeCounter'
import { ScrambleText } from './components/ScrambleText'
import avatarUrl from './assets/fufu.jpg'
import './App.css'

const Tag = ({ label, value, accent }: { label: string; value: string; accent?: boolean }) => (
  <div className={`tag-item ${accent ? 'accent' : ''}`}>
    <span className="tag-label">{label}</span>
    <span className="tag-value">{value}</span>
  </div>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

function App() {
  const { count, increment } = useLikeCounter();

  return (
    <div className="page">
      <main className="shell">
        <article className="hero-section">
          <div className="hero-content">

            <aside className="avatar-container">
              <div className="avatar-frame">
                <img src={avatarUrl} className="avatar-img" alt="Jiesendesi Profile" />
              </div>
              <div className="avatar-decor" aria-hidden="true" />
            </aside>

            <section className="info-panel">
              <header className="kicker-group">
                <span className="mono kicker-text">PERSONAL_PROFILE</span>
                <div className="kicker-line" aria-hidden="true" />
              </header>
              
              <h1 className="main-title">
                <ScrambleText text="JIESENDESI" speed={60} />
              </h1>

              <div className="bio-container">
                <p className="bio-text">
                  这是一个从手机 <span className="highlight">Termux</span> 端发出的 React 站点。
                  <br />
                  <span className="bio-sub">正在探索数字世界的边缘，吗。</span>
                </p>
              </div>

              <nav className="tags">
                <Tag label="SKILL_01" value="React: 学" />
                <Tag label="SKILL_02" value="Vite: 学" />
                <Tag label="STATUS" value="全都不会" accent />
              </nav>

              <footer className="action-area">
                <button className="btn-industrial" onClick={increment}>
                  <span className="btn-label">
                    <HeartIcon />
                    爱来自杰森德斯
                  </span>
                  <span className="btn-divider" aria-hidden="true" />
                  <span className="btn-count mono">{count}</span>
                </button>
                <div className="hint-mono">
                  <span className="blink">_</span> 按下按钮提供“活着”的反馈
                </div>
              </footer>
            </section>
          </div>
        </article>

        <footer className="quote-section">
          <div className="quote-meta">
            <span className="mono">ACHIVE_02</span>
            <div className="meta-line" />
          </div>
          <div className="quote-content">
            <span className="quote-large-icon" aria-hidden="true">“</span>
            <div className="quote-text-group">
              <p className="quote-main">指尖拨动，全球可见，吗</p>
              <p className="quote-sub mono">—— 去玩了</p>
            </div>
          </div>
          <div className="quote-id-stamp">JSDS</div>
        </footer>
      </main>
    </div>
  )
}

export default App
