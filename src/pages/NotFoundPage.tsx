import { Link } from 'react-router'
import { Icon } from '../components/Icon'

export function NotFoundPage() {
  return (
    <section className="page-hero page-hero--plain on-photo" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="wrap" style={{ paddingTop: 'calc(var(--header-h) + 48px)', paddingBottom: 64 }}>
        <p className="eyebrow">Hata 404</p>
        <h1 className="h1" style={{ marginTop: 18, color: '#fff' }}>Aradığınız sayfa bulunamadı.</h1>
        <p className="lead" style={{ marginTop: 20 }}>Sayfa taşınmış ya da kaldırılmış olabilir.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
          <Link to="/" className="btn btn--accent btn--lg">Ana sayfa <Icon name="arrowRight" /></Link>
          <Link to="/hizmetler" className="btn btn--glass btn--lg">Hizmetler</Link>
        </div>
      </div>
    </section>
  )
}
