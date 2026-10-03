import { useState } from 'react'
import { Link } from 'react-router'
import { company, telHref, whatsappHref, WA_DEFAULT } from '../data/company'
import { Icon } from '../components/Icon'
import { PageHead } from '../components/Blocks'

function MapSlot() {
  const [load, setLoad] = useState(false)
  const a = company.address
  const query = company.geo ? `${company.geo.lat},${company.geo.lng}` : [a.street, a.district, a.city].filter(Boolean).join(' ')

  if (!query) {
    return (
      <div className="map-slot">
        <p>Konum bilgisi yakında eklenecek.</p>
      </div>
    )
  }
  return (
    <div className="map-slot">
      {load ? (
        <iframe
          title={`${company.name} konumu`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div style={{ display: 'grid', gap: 14, justifyItems: 'center' }}>
          <p>Harita Google Haritalar'dan yüklenir.</p>
          <button type="button" className="btn btn--accent" onClick={() => setLoad(true)}>
            <Icon name="mapPin" /> Haritayı göster
          </button>
        </div>
      )}
    </div>
  )
}

export function ContactPage() {
  const a = company.address
  const addressLine = [a.street, a.district, a.city].filter(Boolean).join(', ')

  return (
    <>
      <PageHead
        eyebrow="İletişim"
        title="Bize ulaşın"
        lead="Keşif için arayın, WhatsApp'tan konum ve fotoğraf gönderin ya da teklif formunu doldurun."
        crumbs={[{ label: 'İletişim' }]}
      />

      <section className="sec">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <address style={{ fontStyle: 'normal' }}>
            <div className="contact-cards">
              <a className="contact-card" href={telHref}>
                <span className="ico"><Icon name="phone" /></span>
                <span><small>Telefon</small><strong>{company.phoneDisplay}</strong></span>
              </a>
              <a className="contact-card" href={whatsappHref(WA_DEFAULT)} target="_blank" rel="noopener noreferrer">
                <span className="ico"><Icon name="message" /></span>
                <span><small>WhatsApp</small><strong>Mesaj gönderin</strong></span>
              </a>
              <a className="contact-card" href={`mailto:${company.email}`}>
                <span className="ico"><Icon name="mail" /></span>
                <span><small>E-posta</small><strong>{company.email}</strong></span>
              </a>
              {addressLine && (
                <div className="contact-card">
                  <span className="ico"><Icon name="mapPin" /></span>
                  <span><small>Adres</small><strong>{addressLine}</strong></span>
                </div>
              )}
              <div className="contact-card">
                <span className="ico"><Icon name="clock" /></span>
                <span>
                  <small>Çalışma saatleri</small>
                  {company.hours.map((h) => <strong key={h.days}>{h.days}, {h.time}</strong>)}
                  <small style={{ marginTop: 4 }}>{company.hoursNote}</small>
                </span>
              </div>
            </div>
            <p style={{ marginTop: 28 }}>
              <Link to="/teklif-al" className="btn btn--accent btn--lg">Teklif formuna git <Icon name="arrowRight" /></Link>
            </p>
          </address>

          <div style={{ display: 'grid', gap: 28 }}>
            <MapSlot />
            {company.serviceAreas.length > 0 && (
              <div>
                <h2 className="h3" style={{ marginBottom: 14 }}>Hizmet bölgelerimiz</h2>
                <ul className="tags" role="list">
                  {company.serviceAreas.map((s) => <li key={s} className="pill">{s}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
