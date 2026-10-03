import type { PhotoName } from './photos'

export type MachineKind = 'excavator' | 'loader' | 'backhoe' | 'dozer' | 'truck' | 'roller' | 'breaker'

export type Machine = {
  id: string
  kind: MachineKind
  name: string
  role: string
  // Fotoğraf yoksa kartta marka renginde yer tutucu gösterilir
  image?: PhotoName
  specs: { label: string; value: string }[]
  // TODO: gerçek adet — null ise adet gösterilmez
  count: number | null
}

export const machines: Machine[] = [
  {
    id: 'ekskavator',
    image: 'excavator',
    kind: 'excavator',
    name: 'Paletli Ekskavatör',
    role: 'Temel kazısı, yükleme, yıkım',
    specs: [
      { label: 'Sınıf', value: '20–35 ton' },
      { label: 'Kova', value: '1,0–2,0 m³' },
      { label: 'Kazı derinliği', value: '6–7 m' },
    ],
    count: null,
  },
  {
    id: 'kirici',
    image: 'demolition',
    kind: 'breaker',
    name: 'Hidrolik Kırıcı',
    role: 'Kaya, beton ve sert zemin kırımı',
    specs: [
      { label: 'Taşıyıcı', value: 'Ekskavatör' },
      { label: 'Kullanım', value: 'Kaya / betonarme' },
      { label: 'Yöntem', value: 'Patlatmasız' },
    ],
    count: null,
  },
  {
    id: 'kazici-yukleyici',
    image: 'backhoe',
    kind: 'backhoe',
    name: 'Kazıcı Yükleyici',
    role: 'Dar alan, kanal ve altyapı işleri',
    specs: [
      { label: 'Tip', value: 'JCB tipi' },
      { label: 'Ön kova', value: '~1,0 m³' },
      { label: 'Kullanım', value: 'Kanal / yükleme' },
    ],
    count: null,
  },
  {
    id: 'yukleyici',
    image: 'loader',
    kind: 'loader',
    name: 'Lastikli Yükleyici',
    role: 'Hızlı yükleme ve stok sahası',
    specs: [
      { label: 'Kova', value: '2,5–3,5 m³' },
      { label: 'Kullanım', value: 'Yükleme / taşıma' },
      { label: 'Zemin', value: 'Stabil saha' },
    ],
    count: null,
  },
  {
    id: 'dozer',
    kind: 'dozer',
    name: 'Dozer',
    role: 'Tesviye, sıyırma, malzeme itme',
    specs: [
      { label: 'Kullanım', value: 'Tesviye / sıyırma' },
      { label: 'Yürüyüş', value: 'Paletli' },
      { label: 'Bıçak', value: 'Düz / U tipi' },
    ],
    count: null,
  },
  {
    id: 'silindir',
    kind: 'roller',
    name: 'Silindir',
    role: 'Dolgu ve stabilize sıkıştırma',
    specs: [
      { label: 'Tip', value: 'Vibrasyonlu' },
      { label: 'Kullanım', value: 'Dolgu / yol' },
      { label: 'Uygulama', value: 'Katmanlı' },
    ],
    count: null,
  },
  {
    id: 'kamyon',
    image: 'truck',
    kind: 'truck',
    name: 'Damperli Kamyon',
    role: 'Hafriyat ve moloz nakliyesi',
    specs: [
      { label: 'Aks', value: '3–4 aks' },
      { label: 'Kapasite', value: '12–20 m³' },
      { label: 'Döküm', value: 'Ruhsatlı saha' },
    ],
    count: null,
  },
]
