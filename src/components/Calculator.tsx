import { useId, useState } from 'react'
import { Icon } from './Icon'
import { compute, defaultCalc, fmt, soils, trucks, type CalcInput } from '../lib/excavation'

export function Calculator({
  initial = defaultCalc,
  onRequest,
  requestLabel = 'Bu ölçülerle teklif iste',
}: {
  initial?: CalcInput
  onRequest: (c: CalcInput) => void
  requestLabel?: string
}) {
  const [c, setC] = useState<CalcInput>(initial)
  const id = useId()
  const r = compute(c)
  const set = (k: keyof CalcInput) => (e: React.ChangeEvent<HTMLInputElement>) => setC({ ...c, [k]: e.target.value })

  const dims: { k: 'l' | 'w' | 'd'; label: string }[] = [
    { k: 'l', label: 'Uzunluk' },
    { k: 'w', label: 'Genişlik' },
    { k: 'd', label: 'Derinlik' },
  ]

  return (
    <div className="calc">
      <form className="calc__inputs" onSubmit={(e) => { e.preventDefault(); onRequest(c) }} aria-label="Hafriyat hacim hesaplayıcı">
        <div>
          <p className="eyebrow">Hafriyat hesaplayıcı</p>
          <h3 className="h3" style={{ marginTop: 10 }}>Kazı ölçülerini girin</h3>
        </div>
        <div className="calc__dims">
          {dims.map((d) => (
            <div className="field" key={d.k}>
              <label htmlFor={`${id}-${d.k}`}>{d.label}</label>
              <div className="input-unit">
                <input
                  id={`${id}-${d.k}`}
                  className="input"
                  inputMode="decimal"
                  autoComplete="off"
                  value={c[d.k]}
                  onChange={set(d.k)}
                />
                <span aria-hidden="true">m</span>
              </div>
            </div>
          ))}
        </div>

        <fieldset className="chips">
          <legend>Zemin cinsi</legend>
          {soils.map((s) => (
            <label className="chip" key={s.id}>
              <input type="radio" name={`${id}-soil`} value={s.id} checked={c.soil === s.id} onChange={set('soil')} />
              <span>{s.label}<small>×{fmt(s.swell, 2)}</small></span>
            </label>
          ))}
        </fieldset>

        <fieldset className="chips">
          <legend>Kamyon kapasitesi</legend>
          {trucks.map((t) => (
            <label className="chip" key={t.id}>
              <input type="radio" name={`${id}-truck`} value={t.id} checked={c.truck === t.id} onChange={set('truck')} />
              <span>{t.label}<small>{t.m3} m³</small></span>
            </label>
          ))}
        </fieldset>

        <div>
          <button type="submit" className="btn btn--accent btn--lg" disabled={!r.bank}>
            {requestLabel} <Icon name="arrowRight" />
          </button>
        </div>
      </form>

      <div className="calc__out" aria-live="polite">
        <p className="eyebrow">Tahmini sonuç</p>
        <div className="readout">
          <span>Yerinde hacim</span>
          <output>{fmt(r.bank)}<small>m³</small></output>
        </div>
        <div className="readout">
          <span>Gevşek hacim · kabarma ×{fmt(r.soil.swell, 2)}</span>
          <output>{fmt(r.loose)}<small>m³</small></output>
        </div>
        <div className="readout readout--hero">
          <span>Kamyon seferi · {r.truck.m3} m³ kapasite</span>
          <output>{fmt(r.trips)}<small>sefer</small></output>
        </div>
        <p className="calc__note">
          Kazılan toprak kabararak hacmi artar; nakliye gevşek hacme göre planlanır. Sonuçlar ön fikir içindir —
          kesin hacim ve fiyat ücretsiz keşif sonrası verilir.
        </p>
      </div>
    </div>
  )
}
