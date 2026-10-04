import type { PhotoName } from './photos'

export type Project = {
  id: string
  title: string
  location: string
  year: string
  service: string
  volume?: string
  duration?: string
  summary: string
  image: PhotoName
  // Örnek kayıtlar sitede "ÖRNEK" damgasıyla gösterilir. Gerçek projeler girildiğinde silin.
  sample?: boolean
}

// TODO: gerçek referans projelerle değiştirin (fotoğraflar için `public/projeler/` kullanılabilir).
export const projects: Project[] = [
  {
    id: 'ornek-1',
    image: 'aerial',
    title: 'Konut projesi temel kazısı',
    location: 'İlçe / Şehir',
    year: '20XX',
    service: 'Hafriyat & Temel Kazısı',
    volume: '— m³',
    duration: '— gün',
    summary: 'Bodrum katlı konut projesinde temel kazısı, eş zamanlı nakliye ve kot kontrolü.',
    sample: true,
  },
  {
    id: 'ornek-2',
    image: 'demolition',
    title: 'Kentsel dönüşüm yıkımı',
    location: 'İlçe / Şehir',
    year: '20XX',
    service: 'Bina Yıkımı',
    volume: '— m³',
    duration: '— gün',
    summary: 'Bitişik nizam binada kontrollü yıkım, moloz ayrıştırma ve parselin temiz teslimi.',
    sample: true,
  },
  {
    id: 'ornek-3',
    image: 'aerial2',
    title: 'Sanayi parseli tesviyesi',
    location: 'İlçe / Şehir',
    year: '20XX',
    service: 'Dolgu & Tesviye',
    volume: '— m³',
    duration: '— gün',
    summary: 'Kazı-dolgu dengesiyle arazi tesviyesi, katmanlı dolgu ve silindirle sıkıştırma.',
    sample: true,
  },
]

// Sitede yalnızca gerçek (örnek olmayan) projeler gösterilir; hiç yoksa Projeler sayfası menüden ve Google'dan gizlenir.
export const publishedProjects = projects.filter((p) => !p.sample)
