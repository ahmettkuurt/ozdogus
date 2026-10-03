import { Link, useParams } from 'react-router'
import { getService, services } from '../data/services'
import { machines } from '../data/machines'
import { company, telHref, whatsappHref, WA_DEFAULT } from '../data/company'
import { Icon } from '../components/Icon'
import { Photo } from '../components/Photo'
import { Checks, CtaBand, FaqList, PageHead, SectionHead } from '../components/Blocks'
import { MachineCard } from './FleetPage'
import { NotFoundPage } from './NotFoundPage'

const tr = (s: string) => s.toLocaleLowerCase('tr-TR')

export function ServiceDetailPage() {
  const { slug = '' } = useParams()
  const svc = getService(slug)
  if (!svc) return <NotFoundPage />

  const idx = services.indexOf(svc)
  const next = services[(idx + 1) % services.length]
  const used = machines.filter((m) => svc.machines.some((n) => tr(n) === tr(m.name)))

  return (
    <>
      <PageHead
        eyebrow={`Hizmet ${String(idx + 1).padStart(2, '0')}`}
        title={svc.title}
        lead={svc.lead}
        crumbs={[{ label: 'Hizmetler', to: '/hizmetler' }, { label: svc.title }]}
        image={svc.image}
      />

      <section className="sec">
        <div className="wrap content-grid">
          <div>
            <figure className="figure reveal">
              <Photo name={svc.image} alt={svc.imageAlt} sizes="(min-width: 1000px) 60vw, 100vw" />
            </figure>
            <p className="eyebrow">Nasıl çalışıyoruz</p>
            <div className="prose" style={{ marginTop: 18 }}>
              {svc.body.map((p) => <p key={p.slice(0, 24)} className="lead">{p}</p>)}
            </div>
          </div>
          <aside className="sticky">
            <div className="aside-card">
              <h2>Hizmet kapsamı</h2>
              <Checks items={svc.scope} />
            </div>
            <div className="aside-card aside-card--dark">
              <h2>Ücretsiz keşif isteyin</h2>
              <p>Sahayı görelim, aynı gün ya da ertesi iş günü yazılı teklifinizi iletelim.</p>
              <div className="stack">
                <Link to="/teklif-al" className="btn btn--accent">Teklif al <Icon name="arrowRight" /></Link>
                <a href={telHref} className="btn btn--glass"><Icon name="phone" /> {company.phoneDisplay}</a>
                <a href={whatsappHref(WA_DEFAULT)} className="btn btn--glass" target="_blank" rel="noopener noreferrer"><Icon name="message" /> WhatsApp</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {used.length > 0 && (
        <section className="sec surface">
          <div className="wrap">
            <SectionHead eyebrow="Kullanılan makineler" title="Bu işte sahadaki ekipman" />
            <div className="cards">
              {used.map((m) => <MachineCard key={m.id} m={m} />)}
            </div>
          </div>
        </section>
      )}

      <section className="sec">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Sık sorulanlar</p>
            <h2 className="h2 balance" style={{ marginTop: 18 }}>{svc.title} hakkında</h2>
          </div>
          <FaqList faqs={svc.faqs} />
        </div>
      </section>

      <section className="sec--sm" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Link to={`/hizmetler/${next.slug}`} className="next-link">
            <span>
              <small>Sonraki hizmet</small>
              <strong>{next.title}</strong>
            </span>
            <span className="tile__go" aria-hidden="true"><Icon name="arrowRight" /></span>
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
