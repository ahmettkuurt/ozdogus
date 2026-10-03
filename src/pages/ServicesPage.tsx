import { Link } from 'react-router'
import { services } from '../data/services'
import { Icon } from '../components/Icon'
import { Photo } from '../components/Photo'
import { CtaBand, PageHead } from '../components/Blocks'

export function ServicesPage() {
  return (
    <>
      <PageHead
        eyebrow="Hizmetlerimiz"
        title="Kazıdan teslime, sahadaki her iş."
        lead="Tüm toprak işlerini tek ekip, tek sorumlu ve kendi makine parkımızla yürütüyoruz."
        crumbs={[{ label: 'Hizmetler' }]}
        image="hafriyat"
      />
      <section className="sec">
        <div className="wrap">
          <div className="bento">
            {services.map((s, i) => (
              <Link key={s.slug} to={`/hizmetler/${s.slug}`} className="tile reveal">
                <Photo name={s.image} alt={s.imageAlt} sizes={i === 0 ? '(min-width: 1080px) 50vw, 100vw' : '(min-width: 1080px) 25vw, (min-width: 720px) 50vw, 100vw'} />
                <span className="tile__no">{String(i + 1).padStart(2, '0')}</span>
                <span className="tile__go" aria-hidden="true"><Icon name="arrowUpRight" /></span>
                <div className="tile__body">
                  <h2>{s.title}</h2>
                  <p>{s.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Hangi hizmete ihtiyacınız olduğundan emin değil misiniz?" />
    </>
  )
}
