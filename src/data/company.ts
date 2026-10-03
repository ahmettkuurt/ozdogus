// Firma bilgileri — sitedeki TÜM ad/adres/telefon (NAP) verisi buradan okunur.
// "TODO" ile işaretli alanlar firma tarafından doldurulmalıdır. Boş bırakılan
// isteğe bağlı alanlar (şehir, ilçeler, sosyal hesaplar) sitede otomatik gizlenir.

export const company = {
  name: 'Özdoğuş Hafriyat',
  legalName: 'Özdoğuş Hafriyat İnşaat Sanayi ve Ticaret Ltd. Şti.',
  shortLegal: 'Özdoğuş Hafriyat İnş. San. ve Tic. Ltd. Şti.',

  // TODO: yayına alınacak alan adı (sonunda / olmadan) — canonical ve sitemap bunu kullanır
  siteUrl: 'https://www.ozdogushafriyat.com.tr',

  // TODO: gerçek iletişim bilgileri
  phone: '+905335745423',
  phoneDisplay: '0 533 574 54 23',
  whatsapp: '905335745423',
  email: 'info@ozdogushafriyat.com.tr',

  // TODO: adres ve hizmet bölgesi
  address: {
    street: '',
    district: '',
    city: '',
    postalCode: '',
    country: 'TR',
  },
  geo: null as { lat: number; lng: number } | null,
  serviceAreas: [] as string[],

  hours: [
    { days: 'Pazartesi – Cumartesi', time: '07:00 – 19:00', schema: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], opens: '07:00', closes: '19:00' },
  ],
  hoursNote: 'Acil yıkım ve kazı işleri için 7/24 ulaşabilirsiniz.',

  // TODO: kuruluş yılı (boşsa "yıl" istatistiği gizlenir)
  foundingYear: null as number | null,

  // TODO: sosyal medya profilleri (tam URL)
  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
  },

  // Teklif formu gönderim adresi (ör. Formspree). Boşsa form WhatsApp'a yönlendirir.
  formEndpoint: '',
}

export const telHref = `tel:${company.phone}`
export const whatsappHref = (text?: string) =>
  `https://wa.me/${company.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const cityLabel = company.address.city

// Ana sayfa rakam şeridi. TODO: gerçek değerleri girin — dizi boşken şerit gizlenir.
// Örnek: { value: '250.000+', unit: 'm³', label: 'Taşınan hafriyat' }
export const stats: { value: string; unit?: string; label: string }[] = []

export const WA_DEFAULT = 'Merhaba, hafriyat hizmeti için bilgi ve teklif almak istiyorum.'
