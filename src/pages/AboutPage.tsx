import { company } from '../data/company'
import { Icon, type IconName } from '../components/Icon'
import { Photo } from '../components/Photo'
import { Checks, CtaBand, PageHead, SectionHead } from '../components/Blocks'

const principles: { icon: IconName; t: string; d: string }[] = [
  { icon: 'target', t: 'Ölçülü iş', d: 'Kotlar lazer nivo ile kontrol edilir. Parsel, projedeki kotta teslim edilir.' },
  { icon: 'truck', t: 'Kendi makinemiz', d: 'Makine parkımız bize ait; takvim projenize göre kurulur.' },
  { icon: 'file', t: 'Yasal döküm', d: 'Hafriyat ve moloz yalnızca ruhsatlı sahalara, belgeli olarak taşınır.' },
  { icon: 'shield', t: 'Güvenli saha', d: 'İş güvenliği planı, şev kontrolü ve komşu yapı koruması her işin ilk adımıdır.' },
]

export function AboutPage() {
  return (
    <>
      <PageHead
        eyebrow="Hakkımızda"
        title="Zemini hazırlıyoruz, gerisini siz inşa edin."
        lead={`${company.legalName}; hafriyat, yıkım ve altyapı işlerinde kendi makine parkı ve deneyimli ekibiyle çalışan bir saha firmasıdır.`}
        crumbs={[{ label: 'Hakkımızda' }]}
        image="operator"
      />

      <section className="sec">
        <div className="wrap intro">
          <div className="reveal">
            <p className="eyebrow">Biz kimiz</p>
            <p className="statement">
              Bir binanın kalıbı kurulmadan önce toprağın doğru kazılması, doğru taşınması ve parselin doğru kotta
              bırakılması gerekir. <em>Bizim işimiz tam olarak bu.</em>
            </p>
            <div className="prose" style={{ marginTop: 24 }}>
              <p className="lead">
                {company.foundingYear ? `${company.foundingYear} yılından bu yana ` : ''}müteahhitlerin, bireysel arsa
                sahiplerinin ve kurumların sahalarını aynı özenle hazırlıyoruz. İşi sahada konuşur, yazılı teklif verir,
                söz verdiğimiz takvimde teslim ederiz.
              </p>
            </div>
          </div>
          <div className="intro__media reveal">
            <div className="a"><Photo name="kiralama" alt="Ekskavatör bir altyapı şantiyesinde çalışıyor" sizes="(min-width: 960px) 40vw, 90vw" /></div>
            <div className="b"><Photo name="backhoe" alt="Kazıcı yükleyici ve sahada çalışan ekip" sizes="(min-width: 960px) 25vw, 50vw" /></div>
          </div>
        </div>
      </section>

      <section className="sec dark">
        <div className="wrap">
          <SectionHead eyebrow="İlkelerimiz" title="Sahada dört kural." />
          <div className="features">
            {principles.map((p) => (
              <div key={p.t} className="feature reveal">
                <div className="feature__ico"><Icon name={p.icon} /></div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Belgeler & yeterlilikler</p>
            <h2 className="h2" style={{ marginTop: 18 }}>Resmi ve şeffaf.</h2>
          </div>
          <div className="aside-card">
            {/* TODO: firmanın gerçek belgeleriyle güncelleyin (K belgesi, ISO, oda kaydı vb.) */}
            <Checks items={['Ticaret sicil ve oda kaydı', 'İş güvenliği planı ve eğitimli operatörler', 'Ruhsatlı döküm sahası anlaşmaları', 'Belge listesi eklenecek']} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
