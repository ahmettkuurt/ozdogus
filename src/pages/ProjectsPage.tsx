import { publishedProjects as projects, type Project } from '../data/projects'
import { Photo } from '../components/Photo'
import { CtaBand, PageHead } from '../components/Blocks'

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="card reveal">
      <div className="card__media">
        <Photo name={p.image} alt={p.title} sizes="(min-width: 1080px) 33vw, 100vw" />
        <span className="pill pill--on-media">{p.service}</span>
        {p.sample && <span className="pill pill--warn">Örnek kayıt</span>}
      </div>
      <div className="card__body">
        <p className="card__meta">{p.location} · {p.year}</p>
        <h3>{p.title}</h3>
        <p className="card__meta">{p.summary}</p>
        <dl className="specs">
          <div><dt>Hacim</dt><dd>{p.volume ?? '—'}</dd></div>
          <div><dt>Süre</dt><dd>{p.duration ?? '—'}</dd></div>
          <div><dt>Yıl</dt><dd>{p.year}</dd></div>
        </dl>
      </div>
    </article>
  )
}

export function ProjectsPage() {
  return (
    <>
      <PageHead
        eyebrow="Referanslar"
        title="Tamamladığımız projeler"
        lead="Tamamladığımız işleri rakamlarıyla paylaşıyoruz: ne kadar toprak, ne kadar sürede, hangi yöntemle."
        crumbs={[{ label: 'Projeler' }]}
        image="aerial2"
      />
      <section className="sec">
        <div className="wrap">
          {projects.length > 0 ? (
            <div className="cards">
              {projects.map((p) => <ProjectCard key={p.id} p={p} />)}
            </div>
          ) : (
            <p className="lead">Proje arşivimiz hazırlanıyor. Referanslarımız için bizi arayabilirsiniz.</p>
          )}
        </div>
      </section>
      <CtaBand title="Sıradaki proje sizinki olsun." />
    </>
  )
}
