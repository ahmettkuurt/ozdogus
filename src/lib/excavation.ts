// Hafriyat hacim hesabı: yerinde hacim × kabarma katsayısı → gevşek hacim → kamyon seferi.

export const soils = [
  { id: 'kum', label: 'Kum / çakıl', swell: 1.12 },
  { id: 'toprak', label: 'Bitkisel toprak', swell: 1.25 },
  { id: 'kil', label: 'Kil', swell: 1.3 },
  { id: 'kaya', label: 'Kaya', swell: 1.5 },
] as const

export const trucks = [
  { id: '12', label: '3 aks', m3: 12 },
  { id: '16', label: '4 aks', m3: 16 },
  { id: '20', label: 'Büyük damper', m3: 20 },
] as const

export type CalcInput = { l: string; w: string; d: string; soil: string; truck: string }

export const defaultCalc: CalcInput = { l: '20', w: '15', d: '3', soil: 'toprak', truck: '16' }

const num = (s: string) => {
  const n = parseFloat(s.replace(',', '.'))
  return Number.isFinite(n) && n > 0 ? n : 0
}
export const fmt = (n: number, d = 0) => n.toLocaleString('tr-TR', { maximumFractionDigits: d, minimumFractionDigits: d })

export function compute(c: CalcInput) {
  const soil = soils.find((s) => s.id === c.soil) ?? soils[1]
  const truck = trucks.find((t) => t.id === c.truck) ?? trucks[1]
  const bank = num(c.l) * num(c.w) * num(c.d)
  const loose = bank * soil.swell
  const trips = loose > 0 ? Math.ceil(loose / truck.m3) : 0
  return { bank, loose, trips, soil, truck }
}

export function summarize(c: CalcInput) {
  const r = compute(c)
  if (!r.bank) return ''
  return `Ölçüler: ${c.l} × ${c.w} × ${c.d} m · Zemin: ${r.soil.label} · Yerinde hacim ≈ ${fmt(r.bank)} m³ · Gevşek hacim ≈ ${fmt(r.loose)} m³ · Tahmini ${r.trips} sefer (${r.truck.m3} m³ kamyon)`
}

export function parseCalc(search: string): CalcInput | null {
  const q = new URLSearchParams(search)
  if (!q.get('l')) return null
  return {
    l: q.get('l') ?? defaultCalc.l,
    w: q.get('w') ?? defaultCalc.w,
    d: q.get('d') ?? defaultCalc.d,
    soil: q.get('soil') ?? defaultCalc.soil,
    truck: q.get('truck') ?? defaultCalc.truck,
  }
}
