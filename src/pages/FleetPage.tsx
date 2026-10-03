import { machines, type Machine } from '../data/machines'
import { Photo } from '../components/Photo'
import { CtaBand, PageHead } from '../components/Blocks'

export function MachineCard({ m, compact = false }: { m: Machine; compact?: boolean }) {
  return (
    <article className="card reveal">
      <div className="card__media">
        {m.image ? (
          <Photo name={m.image} alt={m.name} sizes="(min-width: 1080px) 25vw, 80vw" />
        ) : (
          <div className="card__placeholder"><img src="/brand/emblem-white.svg" alt="" width={240} height={156} loading="lazy" /></div>
        )}
        {m.count !== null && <span className="pill pill--on-media">{m.count} adet</span>}
      </div>
      <div className="card__body">
        <h3>{m.name}</h3>
        <p className="card__meta">{m.role}</p>
        {!compact && (
          <dl className="specs">
            {m.specs.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </article>
  )
}

export function FleetPage() {
  return (
    <>
      <PageHead
        eyebrow="Makine parkı"
        title="Bakımlı makineler, deneyimli operatörler."
        lead="Kendi makinelerimizle çalışıyoruz; bu yüzden takvimi biz belirliyor, sözümüzü tutuyoruz. Tüm makineler operatörlü olarak kiralanabilir."
        crumbs={[{ label: 'Makine Parkı' }]}
        image="excavator"
      />
      <section className="sec">
        <div className="wrap">
          <div className="cards">
            {machines.map((m) => <MachineCard key={m.id} m={m} />)}
          </div>
        </div>
      </section>
      <CtaBand title="Operatörlü makineye mi ihtiyacınız var?" />
    </>
  )
}
