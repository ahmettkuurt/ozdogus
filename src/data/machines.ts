import type { PhotoName } from './photos'

export type MachineKind = 'excavator' | 'backhoe' | 'skidsteer' | 'roller' | 'telehandler' | 'forklift'

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

// Değerler üretici kataloglarından yaklaşık olarak alınmıştır. TODO: firma ile teyit edin.
export const machines: Machine[] = [
  {
    id: 'hitachi-135',
    image: 'hitachi-135',
    kind: 'excavator',
    name: 'Hitachi 135',
    role: '14 tonluk paletli ekskavatör',
    specs: [
      { label: 'Sınıf', value: '14 ton' },
      { label: 'Yürüyüş', value: 'Paletli, kısa kuyruk' },
      { label: 'Kullanım', value: 'Temel kazısı / yükleme' },
    ],
    count: null,
  },
  {
    id: 'jcb-3cx',
    image: 'jcb-3cx',
    kind: 'backhoe',
    name: 'JCB 3CX',
    role: 'Bekoloder (kazıcı yükleyici)',
    specs: [
      { label: 'Sınıf', value: '~8 ton' },
      { label: 'Ön kova', value: '~1,0 m³' },
      { label: 'Kullanım', value: 'Kanal / yükleme' },
    ],
    count: null,
  },
  {
    id: 'jcb-1cx',
    image: 'jcb-1cx',
    kind: 'backhoe',
    name: 'JCB 1CX',
    role: 'Mini bekoloder',
    specs: [
      { label: 'Sınıf', value: '~3 ton' },
      { label: 'Yapı', value: 'Kompakt, kayar yönlü' },
      { label: 'Kullanım', value: 'Dar alan / bahçe / altyapı' },
    ],
    count: null,
  },
  {
    id: 'nh-e37c',
    image: 'nh-e37c',
    kind: 'excavator',
    name: 'New Holland E37C',
    role: '4 tonluk paletli ekskavatör',
    specs: [
      { label: 'Sınıf', value: '4 ton' },
      { label: 'Yürüyüş', value: 'Paletli' },
      { label: 'Kullanım', value: 'Bodrum / kanal / peyzaj' },
    ],
    count: null,
  },
  {
    id: 'wacker-ez17',
    image: 'wacker-ez17',
    kind: 'excavator',
    name: 'Wacker Neuson EZ17',
    role: '2 tonluk paletli ekskavatör',
    specs: [
      { label: 'Sınıf', value: '2 ton' },
      { label: 'Kuyruk', value: 'Sıfır kuyruk' },
      { label: 'Kullanım', value: 'Bina içi / dar alan' },
    ],
    count: null,
  },
  {
    id: 'bobcat-s590',
    image: 'bobcat-s590',
    kind: 'skidsteer',
    name: 'Bobcat S590',
    role: 'Mini yükleyici',
    specs: [
      { label: 'Kapasite', value: '~950 kg' },
      { label: 'Yürüyüş', value: 'Lastikli' },
      { label: 'Kullanım', value: 'Yükleme / temizlik' },
    ],
    count: null,
  },
  {
    id: 'bomag-bw120',
    image: 'bomag-bw120',
    kind: 'roller',
    name: 'Bomag BW 120',
    role: 'Silindir',
    specs: [
      { label: 'Tip', value: 'Çift tamburlu, vibrasyonlu' },
      { label: 'Tambur', value: '1,2 m' },
      { label: 'Kullanım', value: 'Dolgu / asfalt / yol' },
    ],
    count: null,
  },
  {
    id: 'manitou-1840',
    image: 'manitou-1840',
    kind: 'telehandler',
    name: 'Manitou MT 1840',
    role: 'Teleskopik yükleyici',
    specs: [
      { label: 'Kaldırma yüksekliği', value: '~18 m' },
      { label: 'Kapasite', value: '~4 ton' },
      { label: 'Kullanım', value: 'Malzeme kaldırma / taşıma' },
    ],
    count: null,
  },
  {
    id: 'baoli-forklift',
    image: 'forklift',
    kind: 'forklift',
    name: 'Baoli Forklift',
    role: 'Forklift',
    specs: [
      { label: 'Kullanım', value: 'Palet / malzeme taşıma' },
      { label: 'Saha', value: 'Şantiye / depo' },
    ],
    count: null,
  },
]
