import { company } from '../data/company'
import { Icon, type IconName } from '../components/Icon'
import { Photo } from '../components/Photo'
import { Checks, CtaBand, PageHead, SectionHead } from '../components/Blocks'

const history: { t: string; d: string }[] = [
  { t: '1991 · Kuruluş', d: 'Kardeşler Demir Doğrama Çelik Konstrüksiyon adıyla, 40 m²’lik bir atölyede ticaret hayatına başladı.' },
  { t: '1991–1997 · Atölye dönemi', d: 'Demir doğrama ve çelik konstrüksiyon işlerinde ustalık, titizlik ve güven üzerine kurulu bir iş anlayışı gelişti.' },
  { t: '1997 sonrası · Özdoğuş Ltd. Şti.', d: 'Kurucumuz Nurettin Kurt ve oğullarının ortak kararıyla Özdoğuş Ltd. Şti. hayata geçti.' },
  { t: 'Bugün · Özdoğuş Hafriyat', d: 'Kendi makine parkı ve uzman kadrosuyla İstanbul ve çevresinde hafriyat, yıkım ve altyapı hizmeti.' },
]

const principles: { icon: IconName; t: string; d: string }[] = [
  { icon: 'target', t: 'Ölçülü iş', d: 'Kotlar lazer nivo ile kontrol edilir. Parsel, projedeki kotta teslim edilir.' },
  { icon: 'truck', t: 'Kendi makinemiz', d: 'Makine parkımız bize ait; takvim projenize göre kurulur.' },
  { icon: 'file', t: 'Yasal döküm', d: 'Hafriyat ve moloz yalnızca ruhsatlı döküm sahalarına taşınır.' },
  { icon: 'shield', t: 'Güvenli saha', d: 'İş güvenliği planı, şev kontrolü ve komşu yapı koruması her işin ilk adımıdır.' },
]

export function AboutPage() {
  return (
    <>
      <PageHead
        eyebrow="Hakkımızda"
        title="Zemini hazırlıyoruz, gerisini siz inşa edin."
        lead={`${company.foundingYear ? `${company.foundingYear}’den bu yana süren tecrübesiyle ` : ''}${company.legalName}; İstanbul ve çevresinde hafriyat, yıkım ve altyapı işlerinde kendi makine parkı ve uzman kadrosuyla hizmet veren köklü bir aile şirketidir.`}
        crumbs={[{ label: 'Hakkımızda' }]}
        image="operator"
      />

      <section className="sec">
        <div className="wrap intro">
          <div className="reveal">
            <p className="eyebrow">Biz kimiz</p>
            <p className="statement">
              40 m²’lik bir atölyede başlayan yolculuk, bugün İstanbul’un dört bir yanında sahaya çıkan bir hafriyat
              firmasına dönüştü. <em>Değişmeyen tek şey, işimize gösterdiğimiz özen.</em>
            </p>
            <div className="prose" style={{ marginTop: 24 }}>
              <p className="lead">
                Sektörün köklü firmalarından biri olan Özdoğuş’un temelleri, 1991 yılında “Kardeşler Demir Doğrama Çelik
                Konstrüksiyon” adıyla, yalnızca 40 m²’lik bir atölyede atıldı. Demir doğrama ve çelik konstrüksiyon
                alanında kazanılan ustalık; titiz çalışma, kaliteli işçilik ve verilen söze sadakat anlayışını da
                beraberinde getirdi.
              </p>
              <p>
                1997 yılına kadar atölye ölçeğinde sürdürülen faaliyetler, bu tarihten sonra kurucumuz Nurettin Kurt ve
                oğullarının ortak vizyonuyla yeni bir döneme taşındı ve Özdoğuş Ltd. Şti. hayata geçti. Bir aile şirketi
                olmanın getirdiği sorumluluk bilinci ve yıllar içinde biriken saha tecrübesi, bugün de çalışma
                kültürümüzün temelini oluşturuyor.
              </p>
              <p>
                Bugün Özdoğuş Hafriyat; yılların kazandırdığı tecrübe, tam teşekküllü makine ve ekipman parkı, uzman
                kadrosu ve yenilikçi bakış açısıyla İstanbul ve çevresinde hizmet veriyor. Temel kazısından bina
                yıkımına, dolgu ve tesviyeden operatörlü iş makinesi kiralamaya kadar her projeye özgü çözümler
                geliştiriyor; müteahhitlerin, bireysel arsa sahiplerinin ve kurumların sahalarını aynı özenle
                hazırlıyoruz. İşi sahada konuşur, yazılı teklif verir, söz verdiğimiz takvimde teslim ederiz.
              </p>
            </div>
          </div>
          <div className="intro__media reveal">
            <div className="a"><Photo name="kiralama" alt="Ekskavatör bir altyapı şantiyesinde çalışıyor" sizes="(min-width: 960px) 40vw, 90vw" /></div>
            <div className="b"><Photo name="backhoe" alt="Kazıcı yükleyici ve sahada çalışan ekip" sizes="(min-width: 960px) 25vw, 50vw" /></div>
          </div>
        </div>
      </section>

      <section className="sec surface" aria-labelledby="tarihce">
        <div className="wrap">
          <SectionHead eyebrow="Tarihçemiz" title="Atölyeden şantiyeye." id="tarihce">
            Otuz yılı aşkın süredir aynı aile, aynı özen ve aynı iş ahlakıyla çalışıyoruz.
          </SectionHead>
          <ol className="process" role="list">
            {history.map((h) => (
              <li key={h.t} className="reveal">
                <h3>{h.t}</h3>
                <p>{h.d}</p>
              </li>
            ))}
          </ol>
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
