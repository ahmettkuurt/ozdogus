import { Link, useNavigate } from 'react-router'
import { company, stats, telHref } from '../data/company'
import { services, generalFaqs } from '../data/services'
import { machines } from '../data/machines'
import { projects } from '../data/projects'
import { Icon, type IconName } from '../components/Icon'
import { Photo } from '../components/Photo'
import { Checks, CtaBand, FaqList, SectionHead } from '../components/Blocks'
import { Calculator } from '../components/Calculator'
import type { CalcInput } from '../lib/excavation'
import { MachineCard } from './FleetPage'
import { ProjectCard } from './ProjectsPage'

const badges: { icon: IconName; t: string; d: string }[] = [
  { icon: 'truck', t: 'Kendi makine parkı', d: 'Taşeronsuz, takvime sadık' },
  { icon: 'file', t: 'Ruhsatlı döküm', d: 'Belgeli nakliye ve döküm' },
  { icon: 'target', t: 'Ücretsiz keşif', d: 'Yerinde ölçüm, yazılı teklif' },
  { icon: 'zap', t: '7/24 acil müdahale', d: 'Yıkım ve kazıda hızlı ekip' },
]

const features: { icon: IconName; t: string; d: string }[] = [
  { icon: 'target', t: 'Ölçülü iş', d: 'Kotlar lazer nivo ile kontrol edilir; parsel projedeki kotta teslim edilir.' },
  { icon: 'clock', t: 'Söz verilen takvim', d: 'Kendi makinelerimizle çalıştığımız için planı biz kurar, biz tutarız.' },
  { icon: 'shield', t: 'Güvenli saha', d: 'İş güvenliği planı, şev kontrolü ve komşu yapı koruması her işin ilk adımı.' },
  { icon: 'file', t: 'Yasal süreç', d: 'Hafriyat izni, döküm sahası ve nakliye belgelerini sizin yerinize takip ederiz.' },
]

const process = [
  { t: 'Keşif', d: 'Sahayı yerinde görür, zemini ve erişimi değerlendiririz.' },
  { t: 'Teklif', d: 'Hacim, süre ve makine planıyla net, yazılı teklif.' },
  { t: 'İzin & planlama', d: 'Hafriyat izni, döküm sahası ve iş güvenliği planı.' },
  { t: 'Kazı & nakliye', d: 'Kazı ve nakliye eş zamanlı, kotlar lazerle kontrollü.' },
  { t: 'Teslim', d: 'Parsel temiz, projedeki kotta ve kalıba hazır.' },
]

export function HomePage() {
  const navigate = useNavigate()
  const toQuote = (c: CalcInput) => navigate(`/teklif-al?${new URLSearchParams({ ...c }).toString()}#teklif-formu`)

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero on-photo" aria-labelledby="hero-baslik">
        <div className="hero__media">
          <Photo name="hero" priority sizes="100vw" alt="" />
        </div>
        <div className="wrap hero__inner">
          <p className="eyebrow">Hafriyat · Kazı · Yıkım · Makine kiralama</p>
          <h1 id="hero-baslik" className="balance" style={{ marginTop: 20 }}>
            Sağlam yapılar, <span className="accent-text">doğru kazıyla</span> başlar.
            <span className="sr-only"> {company.name} — hafriyat ve kazı firması</span>
          </h1>
          <p className="lead">
            Temel kazısından bina yıkımına, kaya kırmadan moloz nakliyesine kadar sahanızı kendi makine parkımız ve
            deneyimli ekibimizle, projedeki kotta ve zamanında hazırlıyoruz.
          </p>
          <div className="hero__ctas">
            <Link to="/teklif-al" className="btn btn--accent btn--lg">
              Ücretsiz keşif isteyin <Icon name="arrowRight" />
            </Link>
            <a href={telHref} className="btn btn--glass btn--lg">
              <Icon name="phone" /> {company.phoneDisplay}
            </a>
          </div>
          <ul className="hero__badges" role="list">
            {badges.map((b) => (
              <li key={b.t}>
                <Icon name={b.icon} />
                <div>
                  <strong>{b.t}</strong>
                  <span>{b.d}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- INTRO ---------- */}
      <section className="sec" aria-labelledby="biz-kimiz">
        <div className="wrap intro">
          <div className="reveal">
            <p className="eyebrow" id="biz-kimiz">{company.name}</p>
            <p className="statement balance">
              İnşaatın görünmeyen ama her şeyi taşıyan kısmıyla uğraşıyoruz: <em>zemin.</em> Doğru kazılmış, doğru
              taşınmış ve doğru kotta bırakılmış bir parsel, projenin geri kalanını hızlandırır.
            </p>
            <Checks items={['Müteahhitler, arsa sahipleri ve kurumlar için tek muhatap', 'Kazı, nakliye ve döküm tek planda', 'Deneyimli operatörler, bakımlı makineler']} />
            <p style={{ marginTop: 32 }}>
              <Link to="/hakkimizda" className="link"><span>Bizi tanıyın</span> <Icon name="arrowRight" /></Link>
            </p>
          </div>
          <div className="intro__media reveal">
            <div className="a"><Photo name="aerial" alt="Kuşbakışı bir kazı ve altyapı şantiyesi" sizes="(min-width: 960px) 40vw, 90vw" /></div>
            <div className="b"><Photo name="operator" alt="Baret ve yelek giymiş operatör iş makinesinin kabininde" sizes="(min-width: 960px) 25vw, 50vw" /></div>
            <div className="intro__chip">
              <Icon name="shield" />
              <div>
                <strong>İş güvenliği önce</strong>
                <span>Her sahada güvenlik planı</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HİZMETLER ---------- */}
      <section className="sec surface" aria-labelledby="hizmetler">
        <div className="wrap">
          <SectionHead eyebrow="Hizmetlerimiz" title="Toprağa dair her iş, tek ekip." id="hizmetler">
            Kazı, yıkım, nakliye ve makine kiralamayı tek elden yönetiyoruz. Taşeron zinciri yok, sorumluluk net.
          </SectionHead>
          <div className="bento">
            {services.map((s, i) => (
              <Link key={s.slug} to={`/hizmetler/${s.slug}`} className="tile reveal">
                <Photo name={s.image} alt={s.imageAlt} sizes={i === 0 ? '(min-width: 1080px) 50vw, 100vw' : '(min-width: 1080px) 25vw, (min-width: 720px) 50vw, 100vw'} />
                <span className="tile__no">{String(i + 1).padStart(2, '0')}</span>
                <span className="tile__go" aria-hidden="true"><Icon name="arrowUpRight" /></span>
                <div className="tile__body">
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- NEDEN BİZ ---------- */}
      <section className="sec dark" aria-labelledby="neden">
        <div className="wrap">
          <SectionHead eyebrow="Neden Özdoğuş" title="Sahada fark yaratan dört ilke." id="neden">
            Büyük ya da küçük, her işe aynı disiplinle yaklaşıyoruz.
          </SectionHead>
          <div className="features">
            {features.map((f) => (
              <div key={f.t} className="feature reveal">
                <div className="feature__ico"><Icon name={f.icon} /></div>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
          {stats.length > 0 && (
            <div className="stats">
              {stats.map((s) => (
                <div key={s.label} className="stat reveal">
                  <strong>{s.value}{s.unit && <small>{s.unit}</small>}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------- SÜREÇ ---------- */}
      <section className="sec" aria-labelledby="surec">
        <div className="wrap">
          <SectionHead eyebrow="Nasıl çalışıyoruz" title="İlk aramadan teslime beş adım." id="surec" />
          <ol className="process" role="list">
            {process.map((p) => (
              <li key={p.t} className="reveal">
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- MAKİNE PARKI ---------- */}
      <section className="sec surface" aria-labelledby="makineler">
        <div className="wrap">
          <SectionHead eyebrow="Makine parkı" title="Her iş için doğru makine." id="makineler">
            Ekskavatörden kamyona bakımlı makineler, deneyimli operatörler. Tümü operatörlü kiralanabilir.
          </SectionHead>
          <div className="rail" tabIndex={0} aria-label="Makine listesi, yatay kaydırılabilir">
            {machines.map((m) => <MachineCard key={m.id} m={m} compact />)}
          </div>
          <p style={{ marginTop: 28 }}>
            <Link to="/makine-parki" className="link"><span>Tüm makine parkı</span> <Icon name="arrowRight" /></Link>
          </p>
        </div>
      </section>

      {/* ---------- PROJELER ---------- */}
      {projects.length > 0 && (
        <section className="sec" aria-labelledby="projeler">
          <div className="wrap">
            <SectionHead eyebrow="Referanslar" title="Tamamladığımız işlerden." id="projeler">
              Her projeyi rakamlarıyla anlatıyoruz: hacim, süre ve kullanılan yöntem.
            </SectionHead>
            <div className="cards">
              {projects.slice(0, 3).map((p) => <ProjectCard key={p.id} p={p} />)}
            </div>
            <p style={{ marginTop: 32 }}>
              <Link to="/projeler" className="link"><span>Tüm projeler</span> <Icon name="arrowRight" /></Link>
            </p>
          </div>
        </section>
      )}

      {/* ---------- HESAPLAYICI ---------- */}
      <section className="sec surface" aria-labelledby="hesapla">
        <div className="wrap">
          <SectionHead eyebrow="Hafriyat hesaplama" title="Kaç kamyon toprak çıkar?" id="hesapla">
            Ölçüleri girin; yerinde hacmi, kabarma sonrası gevşek hacmi ve tahmini kamyon seferini anında görün.
          </SectionHead>
          <Calculator onRequest={toQuote} />
        </div>
      </section>

      {/* ---------- SSS ---------- */}
      <section className="sec" aria-labelledby="sss">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Sık sorulanlar</p>
            <h2 id="sss" className="h2" style={{ marginTop: 18 }}>Merak edilenler</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Cevabını bulamadığınız bir soru mu var? <a href={telHref}>Bizi arayın</a>, sahada konuşalım.
            </p>
          </div>
          <FaqList faqs={generalFaqs} />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
