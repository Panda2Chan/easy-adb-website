import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Check, ChevronRight, Download, Github, MonitorDown, PackageOpen, Radio, ShieldCheck, Smartphone, Wifi } from 'lucide-react'
import './styles.css'

const github = 'https://github.com/Panda2Chan/easy-adb'
const releases = `${github}/releases`
const windowsDownload = `${github}/releases/latest/download/EasyADB-Setup-x64.exe`
const macosDownload = `${github}/releases/latest/download/easy-adb-mac-universal.zip`

function DeviceScene() {
  return <div className="device-scene" aria-label="Easy ADB 连接设备示意图">
    <div className="scene-glow" />
    <div className="scene-grid" />
    <div className="device-window">
      <div className="window-bar"><span className="traffic red"/><span className="traffic yellow"/><span className="traffic green"/><span className="window-title">Easy ADB</span><span className="window-status"><i/>已连接</span></div>
      <div className="window-body">
        <div className="device-line"><div className="device-icon"><MonitorDown size={19}/></div><div><strong>客厅电视</strong><span>192.168.1.82 · 在线</span></div><Check size={17} className="check"/></div>
        <div className="install-card"><div className="apk-mark"><PackageOpen size={23}/></div><div className="install-copy"><strong>stream-player.apk</strong><span>准备安装到客厅电视</span></div><span className="install-chip">APK</span></div>
        <div className="progress-label"><span>正在安装</span><strong>82%</strong></div><div className="progress"><span/></div>
      </div>
    </div>
    <div className="floating-pill pill-top"><Wifi size={15}/>Wi‑Fi 调试</div>
    <div className="floating-pill pill-bottom"><Radio size={15}/>USB / 网络</div>
    <div className="scene-line line-one"/><div className="scene-line line-two"/>
  </div>
}

function App() {
  return <div className="site">
    <header className="nav shell">
      <a className="brand" href="#top" aria-label="Easy ADB 首页"><img className="brand-mark" src="/easy-adb-mark.svg" alt="" aria-hidden="true" /><span>easy<span className="brand-dot">.</span>adb</span></a>
      <nav className="nav-links"><a href="#features">能力</a><a href="#workflow">怎么用</a><a href={github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a></nav>
      <a className="nav-cta" href={releases} target="_blank" rel="noreferrer">下载 <ArrowUpRight size={15}/></a>
    </header>

    <main id="top">
      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot"/>轻量 Android 工具</div>
          <h1>把 APK，<em>装到该去的地方。</em></h1>
          <p className="hero-text">Easy ADB 让连接手机、电视和盒子变得简单。选一台设备，拖入 APK，剩下的交给它。</p>
          <div className="hero-actions"><a className="button button-primary" href={releases} target="_blank" rel="noreferrer"><Download size={17}/>下载 Easy ADB<ArrowUpRight size={15}/></a><a className="button button-quiet" href={github} target="_blank" rel="noreferrer"><Github size={17}/>查看源码</a></div>
          <div className="hero-meta"><span><ShieldCheck size={15}/>开源项目</span><span><Check size={15}/>Windows / macOS</span><span>MIT License</span></div>
        </div>
        <DeviceScene/>
      </section>

      <section className="signal-strip shell"><div className="signal-label">为这些场景而做</div><div className="signal-items"><span><Smartphone size={18}/>Android 手机</span><span><MonitorDown size={18}/>智能电视</span><span><Radio size={18}/>电视盒子</span><span className="signal-note">USB 或 Wi‑Fi，按你习惯来</span></div></section>

      <section id="features" className="feature-section shell"><div className="section-intro"><span className="section-index">01 / 03</span><h2>连接这件事，<br/><em>不该复杂。</em></h2><p>从第一次打开，到把应用装进客厅电视，只需要一个清晰的窗口。</p></div><div className="feature-list">
        <article className="feature-row"><div className="feature-number">01</div><div className="feature-icon"><Wifi/></div><div className="feature-content"><h3>USB 或 Wi‑Fi</h3><p>插上线就能发现设备，也支持无线地址和配对码。手机、电视、盒子使用同一套入口。</p></div><span className="feature-tag">连接</span></article>
        <article className="feature-row"><div className="feature-number">02</div><div className="feature-icon"><PackageOpen/></div><div className="feature-content"><h3>拖入就安装</h3><p>本地 APK 直接拖进窗口。也可以粘贴下载地址，自动完成下载、校验和安装。</p></div><span className="feature-tag">安装</span></article>
        <article className="feature-row"><div className="feature-number">03</div><div className="feature-icon"><ShieldCheck/></div><div className="feature-content"><h3>始终知道装到哪</h3><p>选中的目标设备会被锁定在安装按钮上。设备名称、连接状态和任务进度都清清楚楚。</p></div><span className="feature-tag">安心</span></article>
      </div></section>

      <section id="workflow" className="workflow shell"><div className="workflow-head"><div><span className="section-index">02 / 03</span><h2>三步，开始安装。</h2></div><p>没有命令行，也不用记住 ADB 参数。</p></div><div className="steps"><div className="step"><span>01</span><strong>连接设备</strong><p>USB 插入，或在同一网络中输入设备地址。</p></div><ChevronRight className="step-arrow"/><div className="step"><span>02</span><strong>选择 APK</strong><p>拖入文件，或者粘贴一个 APK 下载直链。</p></div><ChevronRight className="step-arrow"/><div className="step"><span>03</span><strong>开始安装</strong><p>确认目标设备，等待安装完成。</p></div></div></section>

      <section className="download-section shell"><div className="download-card"><div className="download-copy"><span className="section-index">03 / 03</span><h2>从你的电脑开始。</h2><p>Easy ADB 是开源的。下载一个适合你的版本，或者从 GitHub 查看每一行代码。</p><div className="download-actions"><a className="button button-primary" href={windowsDownload} target="_blank" rel="noreferrer">Windows <ArrowUpRight size={15}/></a><a className="button button-quiet" href={macosDownload} target="_blank" rel="noreferrer">macOS <ArrowUpRight size={15}/></a><a className="text-link" href={releases} target="_blank" rel="noreferrer">GitHub Releases <ArrowUpRight size={15}/></a></div></div><div className="version-note"><div className="version-label">当前提供</div><div className="version-row"><span>Windows</span><strong>x64 安装程序</strong></div><div className="version-row"><span>macOS</span><strong>Apple Silicon / Intel</strong></div><div className="version-foot"><Github size={14}/>版本和更新发布在 GitHub</div></div></div></section>
    </main>

    <footer className="footer shell"><a className="brand" href="#top"><img className="brand-mark" src="/easy-adb-mark.svg" alt="" aria-hidden="true" /><span>easy<span className="brand-dot">.</span>adb</span></a><span className="footer-copy">让 Android 安装，回到它该有的简单。</span><div className="footer-links"><a href={github} target="_blank" rel="noreferrer">GitHub</a><a href={github} target="_blank" rel="noreferrer">开源仓库</a><a href={releases} target="_blank" rel="noreferrer">下载</a></div></footer>
  </div>
}

createRoot(document.getElementById('root')!).render(<App />)
