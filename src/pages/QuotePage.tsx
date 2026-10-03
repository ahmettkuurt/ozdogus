import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'
import { company, telHref, whatsappHref } from '../data/company'
import { services } from '../data/services'
import { Calculator } from '../components/Calculator'
import { defaultCalc, parseCalc, summarize, type CalcInput } from '../lib/excavation'
import { PageHead } from '../components/Blocks'
import { Icon } from '../components/Icon'

type Fields = { name: string; phone: string; service: string; location: string; volume: string; message: string; kvkk: boolean }
type Draft = Omit<Fields, 'volume'> & { volume: string | null }
type Errors = Partial<Record<keyof Fields, string>>

const empty: Draft = { name: '', phone: '', service: '', location: '', volume: null, message: '', kvkk: false }

const noSubscribe = () => () => {}

const labels: Record<keyof Fields, string> = {
  name: 'Ad soyad',
  phone: 'Telefon',
  service: 'Hizmet',
  location: 'İş adresi / ilçe',
  volume: 'Tahmini hacim / ölçüler',
  message: 'Mesajınız',
  kvkk: 'Aydınlatma metni onayı',
}

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (f.name.trim().length < 3) e.name = 'Adınızı ve soyadınızı yazın.'
  const digits = f.phone.replace(/\D/g, '')
  if (!digits) e.phone = 'Size dönebilmemiz için telefon numaranızı yazın.'
  else if (digits.length < 10) e.phone = 'Telefon numarası en az 10 haneli olmalı (ör. 0532 123 45 67).'
  if (!f.service) e.service = 'İhtiyacınız olan hizmeti seçin.'
  if (f.location.trim().length < 2) e.location = 'İşin yapılacağı ilçe veya adresi yazın.'
  if (!f.kvkk) e.kvkk = 'Devam etmek için aydınlatma metnini onaylayın.'
  return e
}

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null
  return (
    <p className="field-error" id={id}>
      <Icon name="alert" /> {msg}
    </p>
  )
}

export function QuotePage() {
  // Ana sayfadaki hesaplayıcıdan gelen ölçüler (?l=&w=&d=…). Sunucu anlık görüntüsü boş olduğu için
  // prerender çıktısıyla hydrate uyuşmazlığı oluşmaz; değerler hydrate sonrası uygulanır.
  const search = useSyncExternalStore(noSubscribe, () => window.location.search, () => '')
  const fromUrl = useMemo(() => parseCalc(search), [search])
  const [draft, setDraft] = useState<Draft>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({})
  const [showSummary, setShowSummary] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'whatsapp' | 'failed'>('idle')
  const summaryRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const f: Fields = {
    ...draft,
    volume: draft.volume ?? (fromUrl ? summarize(fromUrl) : ''),
    service: draft.service || (fromUrl ? 'hafriyat-ve-kazi' : ''),
  }

  useEffect(() => {
    if (showSummary) summaryRef.current?.focus()
  }, [showSummary])

  const update = <K extends keyof Fields>(k: K, v: Fields[K]) => {
    const next = { ...f, [k]: v }
    setDraft(next)
    if (touched[k]) setErrors(validate(next))
  }
  const blur = (k: keyof Fields) => () => {
    setTouched((t) => ({ ...t, [k]: true }))
    setErrors(validate(f))
  }
  const err = (k: keyof Fields) => (touched[k] || showSummary ? errors[k] : undefined)
  const aria = (k: keyof Fields) => ({
    'aria-invalid': err(k) ? (true as const) : undefined,
    'aria-describedby': err(k) ? `${k}-hata` : undefined,
  })

  const fromCalculator = (c: CalcInput) => {
    setDraft({ ...f, volume: summarize(c), service: f.service || 'hafriyat-ve-kazi' })
    formRef.current?.scrollIntoView({ block: 'start' })
    document.getElementById('name')?.focus({ preventScroll: true })
  }

  const message = () => {
    const svc = services.find((s) => s.slug === f.service)?.title ?? f.service
    return [
      'Merhaba, web sitenizden teklif talebi:',
      `Ad soyad: ${f.name}`,
      `Telefon: ${f.phone}`,
      `Hizmet: ${svc}`,
      `Konum: ${f.location}`,
      f.volume && `Hacim: ${f.volume}`,
      f.message && `Not: ${f.message}`,
    ]
      .filter(Boolean)
      .join('\n')
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const v = validate(f)
    setErrors(v)
    if (Object.keys(v).length) {
      setShowSummary(false)
      requestAnimationFrame(() => setShowSummary(true))
      return
    }
    setShowSummary(false)

    if (!company.formEndpoint) {
      window.open(whatsappHref(message()), '_blank', 'noopener')
      setStatus('whatsapp')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(company.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...f, _subject: 'Web sitesi teklif talebi' }),
      })
      setStatus(res.ok ? 'sent' : 'failed')
    } catch {
      setStatus('failed')
    }
  }

  const errorList = (Object.keys(errors) as (keyof Fields)[]).filter((k) => errors[k])

  return (
    <>
      <PageHead
        eyebrow="Teklif al"
        title="Hesaplayın, teklifinizi alın."
        lead="Önce kazı hacmini ve kamyon seferini tahmin edin, sonra formu gönderin. Keşif ücretsiz; yazılı teklif genellikle aynı gün ya da ertesi iş günü elinizde."
        crumbs={[{ label: 'Teklif Al' }]}
        image="nakliye"
      />

      <section className="sec surface" aria-labelledby="hesaplayici">
        <div className="wrap">
          <h2 id="hesaplayici" className="sr-only">Hafriyat hacim hesaplayıcı</h2>
          <Calculator key={search} initial={fromUrl ?? defaultCalc} onRequest={fromCalculator} requestLabel="Değerleri forma aktar" />
        </div>
      </section>

      <section className="sec" id="teklif-formu" aria-labelledby="form-baslik">
        <div className="wrap split split--form" ref={formRef}>
          <div>
            <p className="eyebrow">Teklif formu</p>
            <h2 id="form-baslik" className="h2" style={{ margin: '18px 0 32px' }}>İşinizi anlatın.</h2>

            {status === 'sent' && (
              <div className="success" role="status">
                <h2>Talebiniz alındı.</h2>
                <p>En kısa sürede {f.phone} numarasından size dönüş yapacağız.</p>
              </div>
            )}
            {status === 'whatsapp' && (
              <div className="success" role="status">
                <h2>WhatsApp açıldı.</h2>
                <p>Hazırlanan mesajı göndermeniz yeterli. Pencere açılmadıysa <a href={whatsappHref(message())} target="_blank" rel="noopener noreferrer">buraya dokunun</a> ya da <a href={telHref}>{company.phoneDisplay}</a> numarasını arayın.</p>
              </div>
            )}
            {status === 'failed' && (
              <div className="error-summary" role="alert" style={{ marginBottom: 20 }}>
                <h2>Gönderilemedi</h2>
                <p>Bağlantı sorunu oluştu. Tekrar deneyin ya da <a href={telHref}>{company.phoneDisplay}</a> numarasını arayın.</p>
              </div>
            )}

            {status !== 'sent' && status !== 'whatsapp' && (
              <form noValidate onSubmit={submit} className="form-grid form-card">
                {showSummary && errorList.length > 0 && (
                  <div className="error-summary" role="alert" tabIndex={-1} ref={summaryRef} aria-labelledby="hata-baslik">
                    <h2 id="hata-baslik">Formda {errorList.length} eksik var</h2>
                    <ul>
                      {errorList.map((k) => (
                        <li key={k}><a href={`#${k}`}>{labels[k]}: {errors[k]}</a></li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="form-grid form-grid--2">
                  <div className="field">
                    <label htmlFor="name">{labels.name} *</label>
                    <input id="name" className="input" autoComplete="name" value={f.name} onChange={(e) => update('name', e.target.value)} onBlur={blur('name')} {...aria('name')} />
                    <FieldError id="name-hata" msg={err('name')} />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">{labels.phone} *</label>
                    <input id="phone" className="input" type="tel" inputMode="tel" autoComplete="tel" placeholder="05XX XXX XX XX" value={f.phone} onChange={(e) => update('phone', e.target.value)} onBlur={blur('phone')} {...aria('phone')} />
                    <FieldError id="phone-hata" msg={err('phone')} />
                  </div>
                  <div className="field">
                    <label htmlFor="service">{labels.service} *</label>
                    <select id="service" className="input" value={f.service} onChange={(e) => update('service', e.target.value)} onBlur={blur('service')} {...aria('service')}>
                      <option value="">Seçin</option>
                      {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                      <option value="diger">Diğer / emin değilim</option>
                    </select>
                    <FieldError id="service-hata" msg={err('service')} />
                  </div>
                  <div className="field">
                    <label htmlFor="location">{labels.location} *</label>
                    <input id="location" className="input" autoComplete="address-level2" value={f.location} onChange={(e) => update('location', e.target.value)} onBlur={blur('location')} {...aria('location')} />
                    <FieldError id="location-hata" msg={err('location')} />
                  </div>
                  <div className="field span-2">
                    <label htmlFor="volume">{labels.volume}</label>
                    <input id="volume" className="input" value={f.volume} onChange={(e) => update('volume', e.target.value)} aria-describedby="volume-ipucu" />
                    <p className="hint" id="volume-ipucu">Yukarıdaki hesaplayıcıdan “Değerleri forma aktar” ile otomatik doldurabilirsiniz.</p>
                  </div>
                  <div className="field span-2">
                    <label htmlFor="message">{labels.message}</label>
                    <textarea id="message" className="input" value={f.message} onChange={(e) => update('message', e.target.value)} placeholder="Zemin durumu, komşu yapılar, istenen başlangıç tarihi…" />
                  </div>
                </div>

                <div className="field">
                  <label className="check" htmlFor="kvkk">
                    <input id="kvkk" type="checkbox" checked={f.kvkk} onChange={(e) => update('kvkk', e.target.checked)} onBlur={blur('kvkk')} {...aria('kvkk')} />
                    <span>Kişisel verilerimin teklif hazırlanması amacıyla işlenmesine ilişkin aydınlatma metnini okudum, onaylıyorum. *</span>
                  </label>
                  <FieldError id="kvkk-hata" msg={err('kvkk')} />
                </div>

                <div>
                  <button type="submit" className="btn btn--accent btn--lg" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Gönderiliyor…' : company.formEndpoint ? 'Teklif iste' : 'WhatsApp ile gönder'}
                    <Icon name="arrowRight" />
                  </button>
                </div>
              </form>
            )}
          </div>

          <aside className="aside-card aside-card--dark sticky" aria-label="Hızlı iletişim">
            <h2>Beklemek istemiyor musunuz?</h2>
            <p style={{ marginBottom: 20 }}>Hafta içi ve cumartesi {company.hours[0].time} arası doğrudan arayın. {company.hoursNote}</p>
            <div className="stack">
              <a href={telHref} className="btn btn--accent btn--lg"><Icon name="phone" /> {company.phoneDisplay}</a>
              <a href={whatsappHref('Merhaba, teklif almak istiyorum.')} className="btn btn--glass btn--lg" target="_blank" rel="noopener noreferrer"><Icon name="message" /> WhatsApp</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
