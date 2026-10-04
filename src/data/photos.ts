// Fotoğraflar: Openverse üzerinden bulunan CC0 (kamu malı) görseller — kaynaklar docs/photo-credits.json.
// TODO: firmanın kendi saha fotoğraflarıyla değiştirilmesi önerilir (aynı adla public/img/ altına koymak yeterli).

export const photos = {
  hero: { w: 1024, h: 683 },
  hafriyat: { w: 1024, h: 683 },
  yikim: { w: 1024, h: 574 },
  tesviye: { w: 1024, h: 560 },
  kaya: { w: 1024, h: 683 },
  nakliye: { w: 1024, h: 683 },
  kiralama: { w: 1024, h: 681 },
  aerial: { w: 1024, h: 657 },
  operator: { w: 1024, h: 681 },
  loader: { w: 1024, h: 576 },
  truck: { w: 1024, h: 683 },
  backhoe: { w: 1024, h: 681 },
  excavator: { w: 1024, h: 791 },
  demolition: { w: 1024, h: 681 },
  aerial2: { w: 1024, h: 682 },
  // Makine parkı: Wikimedia Commons (CC0 / CC BY-SA) — kaynaklar docs/photo-credits.json
  'hitachi-135': { w: 1024, h: 768 },
  'jcb-3cx': { w: 1024, h: 768 },
  'jcb-1cx': { w: 1024, h: 682 },
  'nh-e37c': { w: 1024, h: 787 },
  'bobcat-s590': { w: 1024, h: 576 },
  'bomag-bw120': { w: 1024, h: 662 },
  'manitou-1840': { w: 1024, h: 682 },
  forklift: { w: 1024, h: 791 },
} as const

export type PhotoName = keyof typeof photos
