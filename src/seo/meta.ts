import { company, cityLabel } from '../data/company'
import { services, getService, generalFaqs, type Faq } from '../data/services'

export type PageMeta = {
  path: string
  title: string
  description: string
  noindex?: boolean
  jsonLd: Record<string, unknown>[]
}

const SITE = company.siteUrl
const OG_IMAGE = `${SITE}/og.png`
const BUSINESS_ID = `${SITE}/#isletme`

const withCity = (s: string) => (cityLabel ? `${s} ${cityLabel}` : s)
const fullTitle = (t: string) => `${t} | ${company.name}`
export const absUrl = (path: string) => `${SITE}${path === '/' ? '/' : path}`

// ---------- JSON-LD ----------

export function businessSchema(): Record<string, unknown> {
  const a = company.address
  const hasAddress = Boolean(a.street || a.city)
  const sameAs = Object.values(company.social).filter(Boolean)
  return {
    '@context': 'https://schema.org',
    '@type': ['GeneralContractor', 'LocalBusiness'],
    '@id': BUSINESS_ID,
    name: company.name,
    legalName: company.legalName,
    url: `${SITE}/`,
    logo: `${SITE}/brand/logo-color.png`,
    image: OG_IMAGE,
    telephone: company.phone,
    email: company.email,
    priceRange: '₺₺',
    ...(hasAddress && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: a.street,
        addressLocality: a.district || a.city,
        addressRegion: a.city,
        postalCode: a.postalCode,
        addressCountry: a.country,
      },
    }),
    ...(company.geo && {
      geo: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng },
    }),
    ...(company.serviceAreas.length && {
      areaServed: company.serviceAreas.map((name) => ({ '@type': 'City', name })),
    }),
    ...(company.foundingYear && { foundingDate: String(company.foundingYear) }),
    ...(sameAs.length && { sameAs }),
    openingHoursSpecification: company.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.schema.map((d) => `https://schema.org/${dayName[d]}`),
      opens: h.opens,
      closes: h.closes,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hafriyat hizmetleri',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, url: absUrl(`/hizmetler/${s.slug}`) },
      })),
    },
  }
}

const dayName: Record<string, string> = {
  Mo: 'Monday', Tu: 'Tuesday', We: 'Wednesday', Th: 'Thursday', Fr: 'Friday', Sa: 'Saturday', Su: 'Sunday',
}

const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE}/#site`,
  url: `${SITE}/`,
  name: company.name,
  inLanguage: 'tr-TR',
  publisher: { '@id': BUSINESS_ID },
})

export const faqSchema = (faqs: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Ana Sayfa', path: '/' }, ...items].map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: absUrl(it.path),
  })),
})

// ---------- Sayfa meta verileri ----------

type Static = Omit<PageMeta, 'path' | 'jsonLd'> & { crumb?: string; extra?: () => Record<string, unknown>[] }

const staticPages: Record<string, Static> = {
  '/': {
    title: withCity('Hafriyat, Kazı ve Yıkım Firması'),
    description:
      'Özdoğuş Hafriyat: temel kazısı, bina yıkımı, kaya kırma, dolgu-tesviye, moloz nakliyesi ve operatörlü iş makinesi kiralama. Ücretsiz keşif, hızlı teklif.',
    extra: () => [businessSchema(), websiteSchema(), faqSchema(generalFaqs)],
  },
  '/hizmetler': {
    title: 'Hafriyat Hizmetleri',
    description:
      'Hafriyat ve temel kazısı, yıkım, dolgu ve tesviye, kaya kırma, moloz nakliyesi ve iş makinesi kiralama hizmetlerimizi inceleyin.',
    crumb: 'Hizmetler',
  },
  '/makine-parki': {
    title: 'Makine Parkı',
    description:
      'Paletli ekskavatör, hidrolik kırıcı, kazıcı yükleyici, dozer, silindir ve damperli kamyonlardan oluşan makine parkımız.',
    crumb: 'Makine Parkı',
  },
  '/projeler': {
    title: 'Referans Projeler',
    description: 'Özdoğuş Hafriyat’ın tamamladığı kazı, yıkım ve tesviye projelerinden seçmeler: hacim, süre ve kullanılan makineler.',
    crumb: 'Projeler',
  },
  '/hakkimizda': {
    title: 'Hakkımızda',
    description: `${company.legalName}: kendi makine parkı ve deneyimli ekibiyle hafriyat, yıkım ve altyapı işlerinde çözüm ortağınız.`,
    crumb: 'Hakkımızda',
  },
  '/teklif-al': {
    title: 'Hafriyat Hesaplama ve Teklif Al',
    description:
      'Hafriyat hacmini ve kamyon sefer sayısını hemen hesaplayın, ücretsiz keşif ve teklif isteyin. Kazı, yıkım ve nakliye için hızlı dönüş.',
    crumb: 'Teklif Al',
  },
  '/iletisim': {
    title: 'İletişim',
    description: `${company.name} iletişim bilgileri: telefon, WhatsApp, e-posta ve çalışma saatleri. Ücretsiz keşif için hemen ulaşın.`,
    crumb: 'İletişim',
    extra: () => [businessSchema()],
  },
}

export const NOT_FOUND_META: PageMeta = {
  path: '/404',
  title: fullTitle('Sayfa Bulunamadı'),
  description: 'Aradığınız sayfa bulunamadı.',
  noindex: true,
  jsonLd: [],
}

export function getMeta(pathname: string): PageMeta {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname

  const page = staticPages[path]
  if (page) {
    const jsonLd = [...(page.extra?.() ?? [])]
    if (page.crumb) jsonLd.push(breadcrumbSchema([{ name: page.crumb, path }]))
    return {
      path,
      title: path === '/' ? `${company.name} | ${page.title}` : fullTitle(page.title),
      description: page.description,
      jsonLd,
    }
  }

  const m = path.match(/^\/hizmetler\/([^/]+)$/)
  const svc = m && getService(m[1])
  if (svc) {
    return {
      path,
      title: fullTitle(withCity(svc.metaTitle)),
      description: svc.metaDescription,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: svc.title,
          serviceType: svc.title,
          description: svc.metaDescription,
          url: absUrl(path),
          provider: { '@id': BUSINESS_ID, '@type': 'GeneralContractor', name: company.name, telephone: company.phone },
          ...(company.serviceAreas.length && { areaServed: company.serviceAreas }),
        },
        faqSchema(svc.faqs),
        breadcrumbSchema([
          { name: 'Hizmetler', path: '/hizmetler' },
          { name: svc.title, path },
        ]),
      ],
    }
  }

  return NOT_FOUND_META
}

/** Build sırasında statik HTML üretilecek tüm adresler. */
export const allRoutes = (): string[] => [
  ...Object.keys(staticPages),
  ...services.map((s) => `/hizmetler/${s.slug}`),
]

// ---------- <head> çıktısı (prerender) ----------

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export function headTags(meta: PageMeta): string {
  const url = absUrl(meta.path)
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    meta.noindex
      ? `<meta name="robots" content="noindex, follow" />`
      : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="tr_TR" />`,
    `<meta property="og:site_name" content="${esc(company.name)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    ...meta.jsonLd.map(
      (j) => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`,
    ),
  ]
  return tags.join('\n    ')
}
