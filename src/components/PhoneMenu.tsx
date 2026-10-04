import { useState } from 'react'
import { company, tel2Href, telHref } from '../data/company'
import { Icon } from './Icon'

const phones = [
  { href: telHref, label: company.phoneDisplay },
  ...(company.phone2 ? [{ href: tel2Href, label: company.phone2Display }] : []),
]

// Arama butonu: üzerine gelince (dokunmatikte dokununca) iki numara açılır, seçilen numara aranır.
// Tek numara varsa doğrudan arayan düz bir link olur.
export function PhoneMenu({
  className = 'btn btn--glass',
  label = 'Bizi Arayın',
  up = false,
  align = 'left',
}: {
  className?: string
  label?: string
  // Liste yukarı açılır — taşması kesilen (overflow: hidden) alanlarda ve ekranın altındaki çubukta
  up?: boolean
  align?: 'left' | 'right'
}) {
  const [open, setOpen] = useState(false)

  if (phones.length === 1) {
    return (
      <a href={telHref} className={className}>
        <Icon name="phone" /> <span className="phone-menu__label">{company.phoneDisplay}</span>
      </a>
    )
  }

  return (
    <div
      className={`phone-menu phone-menu--${align}${up ? ' phone-menu--up' : ''}${open ? ' is-open' : ''}`}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false)}
      onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
    >
      <button type="button" className={className} aria-expanded={open} aria-haspopup="true" onClick={() => setOpen((o) => !o)}>
        <Icon name="phone" /> <span className="phone-menu__label">{label}</span>
      </button>
      <ul className="phone-menu__list" role="list" aria-label="Aranacak numarayı seçin">
        {phones.map((p) => (
          <li key={p.href}>
            <a href={p.href} onClick={() => setOpen(false)}>
              <Icon name="phone" /> {p.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
