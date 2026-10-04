import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { whatsappHref, WA_DEFAULT } from '../data/company'
import { PhoneMenu } from './PhoneMenu'
import type { PhotoName } from '../data/photos'
import type { Faq } from '../data/services'
import { Icon } from './Icon'
import { Photo } from './Photo'

export function PageHead({
  eyebrow,
  title,
  lead,
  crumbs,
  image,
  aside,
}: {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  crumbs: { label: string; to?: string }[]
  image?: PhotoName
  aside?: ReactNode
}) {
  return (
    <section className={`page-hero on-photo${image ? '' : ' page-hero--plain'}`}>
      {image && (
        <div className="page-hero__media">
          <Photo name={image} priority sizes="100vw" />
        </div>
      )}
      <div className="wrap page-hero__inner">
        <div>
          <nav aria-label="Sayfa yolu">
            <ol className="crumbs" role="list">
              <li><Link to="/">Ana sayfa</Link></li>
              {crumbs.map((c) => (
                <li key={c.label}>
                  {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h1 balance">{title}</h1>
        </div>
        {(lead || aside) && (
          <div>
            {lead && <p className="lead">{lead}</p>}
            {aside}
          </div>
        )}
      </div>
    </section>
  )
}

export function SectionHead({
  eyebrow,
  title,
  children,
  id,
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
  id?: string
}) {
  return (
    <div className={`sec-head${children ? ' sec-head--split' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2 balance" id={id}>{title}</h2>
      {children && <p className="lead">{children}</p>}
    </div>
  )
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="faq">
      {faqs.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  )
}

export function CtaBand({ title = 'Projenizi konuşalım, sahayı birlikte görelim.' }: { title?: ReactNode }) {
  return (
    <section className="sec--sm" aria-label="Teklif alın">
      <div className="wrap">
        <div className="cta reveal">
          <Photo name="kiralama" sizes="(min-width: 1280px) 1280px, 100vw" />
          <div className="cta__grid">
            <div>
              <p className="eyebrow">Ücretsiz keşif · Yazılı teklif</p>
              <h2 className="h2 balance">{title}</h2>
            </div>
            <div className="cta__actions">
              <Link to="/teklif-al" className="btn btn--accent btn--lg">
                Teklif Al <Icon name="arrowRight" />
              </Link>
              <PhoneMenu className="btn btn--glass btn--lg" up />
              <a href={whatsappHref(WA_DEFAULT)} className="btn btn--glass btn--lg" target="_blank" rel="noopener noreferrer">
                <Icon name="message" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Checks({ items }: { items: string[] }) {
  return (
    <ul className="checks" role="list">
      {items.map((t) => (
        <li key={t}>
          <Icon name="check" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  )
}
