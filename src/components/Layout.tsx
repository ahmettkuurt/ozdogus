import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import { company, tel2Href, telHref, whatsappHref, WA_DEFAULT } from '../data/company'
import { services } from '../data/services'
import { publishedProjects } from '../data/projects'
import { HeadSync } from '../seo/HeadSync'
import { Icon } from './Icon'
import { PhoneMenu } from './PhoneMenu'

const nav = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/hizmetler', label: 'Hizmetler' },
  { to: '/makine-parki', label: 'Makine Parkı' },
  { to: '/projeler', label: 'Projeler' },
  { to: '/hakkimizda', label: 'Hakkımızda' },
  { to: '/iletisim', label: 'İletişim' },
].filter((n) => n.to !== '/projeler' || publishedProjects.length > 0)

// Vektör logo (public/brand/logo-*.svg). Oran: 3768 × 1245
export function Logo({ variant = 'color', height = 50, className }: { variant?: 'color' | 'white'; height?: number; className?: string }) {
  const w = Math.round(height * (3768 / 1245))
  return (
    <img
      className={className}
      src={`/brand/logo-${variant}.svg`}
      alt={variant === 'white' ? company.shortLegal : ''}
      width={w}
      height={height}
      decoding="async"
    />
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)
  const openRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const opener = openRef.current
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      opener?.focus()
    }
  }, [open])

  return (
    <>
      <header className={`header${solid ? ' is-solid' : ''}`}>
        <div className="wrap">
          <Link to="/" className="header__logo" aria-label={`${company.name} — ana sayfa`}>
            <Logo variant="white" className="logo-white" />
            <Logo variant="color" className="logo-color" />
          </Link>
          <nav className="nav" aria-label="Ana menü">
            <ul role="list">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink to={n.to} end={n.to === '/'}>{n.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__cta">
            <PhoneMenu align="right" />
            <Link to="/teklif-al" className="btn btn--accent">
              Teklif Al <Icon name="arrowRight" />
            </Link>
          </div>
          <button
            ref={openRef}
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobil-menu"
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" label="Menüyü aç" />
          </button>
        </div>
      </header>

      <div id="mobil-menu" className="drawer" role="dialog" aria-modal="true" aria-label="Menü" hidden={!open}>
        <div className="drawer__top">
          <Logo variant="white" height={42} />
          <button ref={closeRef} type="button" className="drawer__close" onClick={() => setOpen(false)}>
            <Icon name="close" label="Menüyü kapat" />
          </button>
        </div>
        <nav aria-label="Mobil menü" onClick={(e) => (e.target as HTMLElement).closest('a') && setOpen(false)}>
          <ul role="list">
            {[...nav, { to: '/teklif-al', label: 'Teklif Al' }].map((n) => (
              <li key={n.to}>
                <NavLink to={n.to} end={n.to === '/'}>
                  {n.label} <Icon name="arrowRight" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="drawer__actions">
          <PhoneMenu className="btn btn--accent btn--lg" up />
          <a className="btn btn--glass btn--lg" href={whatsappHref(WA_DEFAULT)} target="_blank" rel="noopener noreferrer">
            <Icon name="message" /> WhatsApp'tan yazın
          </a>
        </div>
      </div>
    </>
  )
}

function ActionBar() {
  return (
    <nav className="action-bar" aria-label="Hızlı iletişim">
      <PhoneMenu className="action-bar__btn" label="Ara" up />
      <a href={whatsappHref(WA_DEFAULT)} target="_blank" rel="noopener noreferrer">
        <Icon name="message" /> WhatsApp
      </a>
      <Link to="/teklif-al">
        Teklif Al <Icon name="arrowRight" />
      </Link>
    </nav>
  )
}

const socialLabels: Record<keyof typeof company.social, string> = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  tiktok: 'TikTok',
}

function Footer() {
  const a = company.address
  const addressLine = [a.street, a.district, a.city].filter(Boolean).join(', ')
  const social = (Object.entries(company.social) as [keyof typeof company.social, string][]).filter(([, url]) => url)
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" aria-label={`${company.name} — ana sayfa`}>
              <Logo variant="white" height={56} />
            </Link>
            <p>Hafriyat, temel kazısı, yıkım, kaya kırma, dolgu-tesviye ve operatörlü iş makinesi kiralamada güvenilir çözüm ortağınız.</p>
            {social.length > 0 && (
              <ul className="social" role="list">
                {social.map(([k, url]) => (
                  <li key={k}>
                    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${socialLabels[k]} (yeni sekmede açılır)`} title={socialLabels[k]}>
                      <Icon name={k} />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h2>Hizmetler</h2>
            <ul role="list">
              {services.map((s) => (
                <li key={s.slug}><Link to={`/hizmetler/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Kurumsal</h2>
            <ul role="list">
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
              ))}
              <li><Link to="/teklif-al">Teklif Al</Link></li>
            </ul>
          </div>
          <div>
            <h2>İletişim</h2>
            <ul role="list">
              <li><a href={telHref}>{company.phoneDisplay}</a></li>
              {company.phone2 && <li><a href={tel2Href}>{company.phone2Display}</a></li>}
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              {addressLine && <li>{addressLine}</li>}
              {company.hours.map((h) => (
                <li key={h.days}>{h.days}<br />{h.time}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {company.legalName}</span>
          <span>Tüm hakları saklıdır.</span>
        </div>
      </div>
    </footer>
  )
}

function useRouteEffects() {
  const { pathname } = useLocation()
  const first = useRef(true)

  useEffect(() => {
    if (first.current) first.current = false
    else window.scrollTo(0, 0)

    const els = document.querySelectorAll<HTMLElement>('.reveal:not(.is-in)')
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}

export function Layout() {
  useRouteEffects()
  return (
    <>
      <a className="skip-link" href="#icerik">İçeriğe geç</a>
      <HeadSync />
      <Header />
      <main id="icerik" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <ActionBar />
    </>
  )
}
