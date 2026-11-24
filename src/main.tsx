import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Check, ChevronRight, Download, Github, Keyboard, List, MonitorDown, PackageOpen, Radio, ShieldCheck, Smartphone, Wifi } from 'lucide-react'
import './styles.css'

const github = 'https://github.com/Panda2Chan/easy-adb'
const releases = `${github}/releases`
const version = 'v0.3.0'
const releasePage = `${releases}/tag/${version}`
const assetBase = `${releases}/latest/download`

function DownloadButtons() {
  return <>
    <a className="button button-primary" href={`${assetBase}/EasyADB-Setup-x64.exe`}><Download size={17}/>下载 Windows 版</a>
    <a className="button button-quiet" href={`${assetBase}/easy-adb-mac-universal.zip`}><Download size={17}/>下载 macOS 版</a>
  </>
}

const features = [
  { icon: Wifi, tag: '连接', title: '发现无线设备', text: '在同一局域网发现通过 mDNS 广播的 ADB 设备，首次按提示配对。老电视可手输 IP，最近连过的 5 台无线设备可一键重连。' },
  { icon: PackageOpen, tag: '安装', title: '安装前检查兼容性', text: '支持 APK、常见 APKS 和仅含 APK 的 XAPK，暂不支持带 OBB 数据的 XAPK。预检发现 Android 版本或 CPU 架构明确不兼容时，会阻止安装。' },
  { icon: List, tag: '应用', title: '按包名查找已装应用', text: '在「设备应用」查看版本和安装包大小（含分包，不含数据与缓存）。用户应用可确认后卸载，系统应用仅供查看。' },
  { icon: ShieldCheck, tag: '诊断', title: '看懂安装错误', text: '常见错误附中文原因、处理建议和设备原始报错。遇到版本降级提示，可确认后重试，结果取决于设备的安装策略。' },
  { icon: Keyboard, tag: '输入', title: '用电脑向设备输入文本', text: '先在设备上选中输入框，再发送最多 512 个可打印 ASCII 字符，如英文字母、数字、空格和半角标点。中文和表情不在支持范围内。' },
]

function DeviceScene() {
  return <div className="device-scene" aria-label="Easy ADB 连接设备示意图">
    <div className="scene-glow" />
    <div className="scene-grid" />
    <div className="device-window">
      <div className="window-bar"><span className="traffic red"/><span className="traffic yellow"/><span className="traffic green"/><span className="window-title">Easy ADB</span><span className="window-status"><i/>已连接</span></div>
      <div className="window-body">
        <div className="device-line"><div className="device-icon"><MonitorDown size={19}/></div><div><strong>客厅电视</strong><span>192.168.1.82 · 在线</span></div><Check size={17} className="check"/></div>
        <div className="install-card"><div className="apk-mark"><PackageOpen size={23}/></div><div className="install-copy"><strong>stream-player.apk</strong><span>准备安装到客厅电视</span></div><span className="install-chip">APK</span></div>
        <div className="progress-label"><span>正在下载</span><strong>82%</strong></div><div className="progress"><span/></div>
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
      <a className="brand" href="#top" aria-label="Easy ADB 首页"><img className="brand-mark" src="/easy-adb-icon-512.png" alt="" aria-hidden="true" /><span>easy<span className="brand-dot">.</span>adb</span></a>
      <nav className="nav-links"><a href="#features">能力</a><a href="#workflow">怎么用</a><a href={github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a></nav>
      <a className="nav-cta" href="#download">下载 <ArrowUpRight size={15}/></a>
    </header>

    <main id="top">
      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot"/>Easy ADB {version}</div>
          <h1>把 APK，<em>装到该去的地方。</em></h1>
          <p className="hero-text">通过 USB 或 Wi‑Fi 连接 Android 手机、电视和盒子。选好设备，先检查安装包是否兼容，再安装。</p>
          <div className="hero-actions"><DownloadButtons/></div>
          <div className="hero-meta"><span><ShieldCheck size={15}/>开源项目</span><span><Check size={15}/>Windows / macOS</span><span>MIT License</span></div>
        </div>
        <DeviceScene/>
      </section>

      <section className="signal-strip shell"><div className="signal-label">为这些场景而做</div><div className="signal-items"><span><Smartphone size={18}/>Android 手机</span><span><MonitorDown size={18}/>智能电视</span><span><Radio size={18}/>电视盒子</span><span className="signal-note">USB 或 Wi‑Fi，按你习惯来</span></div></section>

      <section id="features" className="feature-section shell"><div className="section-intro"><span className="section-index">01 / 03</span><h2>连接这件事，<br/><em>不该复杂。</em></h2><p>在设备列表中选中目标，再安装应用、查看包信息或发送文本。</p></div><div className="feature-list">
        {features.map(({ icon: Icon, title, text, tag }, index) => (
          <article className="feature-row" key={title}>
            <div className="feature-number">{String(index + 1).padStart(2, '0')}</div>
            <div className="feature-icon"><Icon/></div>
            <div className="feature-content"><h3>{title}</h3><p>{text}</p></div>
            <span className="feature-tag">{tag}</span>
          </article>
        ))}
      </div></section>

      <section id="workflow" className="workflow shell"><div className="workflow-head"><div><span className="section-index">02 / 03</span><h2>三步，开始安装。</h2></div><p>没有命令行，也不用记住 ADB 参数。</p></div><div className="steps"><div className="step"><span>01</span><strong>连接设备</strong><p>开启 USB 调试，用数据线连接并在设备上允许调试；也可在「无线连接」中配对。</p></div><ChevronRight className="step-arrow"/><div className="step"><span>02</span><strong>预检安装包</strong><p>拖入本地安装包，或粘贴 HTTP(S) 直链后点「下载并预检」。</p></div><ChevronRight className="step-arrow"/><div className="step"><span>03</span><strong>开始安装</strong><p>核对设备名称和预检结果，再点击安装。</p></div></div></section>

      <section id="download" className="download-section shell">
        <div className="download-card">
          <div className="download-copy">
            <span className="section-index">03 / 03</span><h2>从你的电脑开始。</h2>
            <p>启动时会检查 GitHub 正式版本。也可手动点「检查更新」，发现新版后打开发行页下载。</p>
            <div className="download-actions">
              <DownloadButtons/>
              <a className="text-link" href={releasePage} target="_blank" rel="noreferrer">{version} 发布说明 <ArrowUpRight size={15}/></a>
            </div>
          </div>
          <div className="version-note">
            <div className="version-label">系统要求</div>
            <div className="version-row"><span>Windows</span><strong>Windows 10 2004 及以上 · x64</strong></div>
            <div className="version-row"><span>macOS</span><strong>macOS 14 及以上 · Apple 芯片 / Intel</strong></div>
            <div className="version-foot"><Github size={14}/>macOS 首次启动请见包内 README-Mac.txt</div>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer shell"><a className="brand" href="#top"><img className="brand-mark" src="/easy-adb-icon-512.png" alt="" aria-hidden="true" /><span>easy<span className="brand-dot">.</span>adb</span></a><span className="footer-copy">让 Android 安装，回到它该有的简单。</span><div className="footer-links"><a href={github} target="_blank" rel="noreferrer">开源仓库</a><a href={releases} target="_blank" rel="noreferrer">下载</a></div></footer>
  </div>
}

createRoot(document.getElementById('root')!).render(<App />)
