// Firma bilgileri — sitedeki TÜM ad/adres/telefon (NAP) verisi buradan okunur.
// "TODO" ile işaretli alanlar firma tarafından doldurulmalıdır. Boş bırakılan
// isteğe bağlı alanlar (şehir, ilçeler, sosyal hesaplar) sitede otomatik gizlenir.

export const company = {
  name: 'Özdoğuş Hafriyat',
  legalName: 'Özdoğuş Hafriyat İnşaat Sanayi ve Ticaret Ltd. Şti.',
  shortLegal: 'Özdoğuş Hafriyat İnş. San. ve Tic. Ltd. Şti.',

  // Ana alan adı (sonunda / olmadan) — canonical, sitemap ve yapılandırılmış veri bunu kullanır.
  // ozdogushafriyat.com (www'suz) ve eski kiralikismakinalari.gen.tr / kiralikbobcat.gen.tr adresleri bu adrese
  // Cloudflare yönlendirme kurallarıyla 301 yönlenir; eski sayfa adresleri public/_redirects içinde (docs/cloudflare-kurulum.md).
  siteUrl: 'https://www.ozdogushafriyat.com',

  // TODO: gerçek iletişim bilgileri
  phone: '+905335745423',
  phoneDisplay: '0 533 574 54 23',
  phone2: '+905386314879',
  phone2Display: '0 538 631 48 79',
  whatsapp: '905386314879',
  email: 'info@ozdogushafriyat.com',

  // TODO: adres ve hizmet bölgesi
  address: {
    street: 'Tavukçuyolu Cad. No:173',
    district: 'Ümraniye',
    city: 'İstanbul',
    postalCode: '34775',
    country: 'TR',
  },
  geo: null as { lat: number; lng: number } | null,
  // Eski sitelerdeki hizmet bölgesi bilgisinden: Ümraniye merkezli, İstanbul'un tüm ilçeleri ve çevre iller
  serviceAreas: ['İstanbul', 'Ümraniye', 'Çekmeköy', 'Ataşehir', 'Sancaktepe', 'Üsküdar', 'Kadıköy', 'Maltepe', 'Kartal', 'Pendik', 'Tuzla', 'Sultanbeyli', 'Beykoz', 'Şile', 'Avrupa Yakası', 'Kocaeli'] as string[],

  hours: [
    { days: 'Pazartesi – Cumartesi', time: '07:00 – 19:00', schema: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], opens: '07:00', closes: '19:00' },
  ],
  hoursNote: 'Acil yıkım ve kazı işleri için 7/24 ulaşabilirsiniz.',

  // Kuruluş yılı (Kardeşler Demir Doğrama Çelik Konstrüksiyon olarak) — boşsa "yıl" istatistiği gizlenir
  foundingYear: 1991 as number | null,

  // TODO: sosyal medya profilleri (tam URL)
  social: {
    instagram: 'https://www.instagram.com/ozdogushafriyat',
    facebook: 'https://www.facebook.com/ozdogus.hafriyat.2025/',
    tiktok: 'https://www.tiktok.com/@ozdogushafriyat',
  },

  // Teklif formu gönderim adresi (ör. Formspree). Boşsa form WhatsApp'a yönlendirir.
  formEndpoint: '',
}

export const telHref = `tel:${company.phone}`
export const tel2Href = `tel:${company.phone2}`
export const whatsappHref = (text?: string) =>
  `https://wa.me/${company.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const cityLabel = company.address.city

// Ana sayfa rakam şeridi — dizi boşken şerit gizlenir.
// Deneyim yılı kuruluş yılından hesaplanır (site derlendiği yıla göre).
const experienceYears = company.foundingYear ? new Date().getFullYear() - company.foundingYear : null

export const stats: { value: string; unit?: string; label: string }[] = [
  { value: '850+', label: 'Tamamlanan proje' },
  { value: '500+', label: 'Mutlu müşteri' },
  { value: '30+', label: 'İş makinesi' },
  ...(experienceYears ? [{ value: `${experienceYears}+`, label: 'Yıllık deneyim' }] : []),
]

export const WA_DEFAULT = 'Merhaba, hafriyat hizmeti için bilgi ve teklif almak istiyorum.'
