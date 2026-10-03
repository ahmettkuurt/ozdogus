# Özdoğuş Hafriyat — Ürün Dokümanı (product.md)

> Kurumsal web sitesinin tek referans dokümanı. Tasarım kararları `ui-ux-pro-max` skill'i ile üretildi; kalıcı tasarım sistemi: `design-system/ozdogus-hafriyat/MASTER.md`.

---

## 1. Amaç

Özdoğuş Hafriyat için; güven veren, hızlı, mobilde kusursuz çalışan ve yerel aramalarda ("hafriyat firması", "kazı işleri", "yıkım", "iş makinesi kiralama" + şehir/ilçe) üst sıralarda çıkan bir web sitesi.

**Ölçülebilir hedefler**
| Hedef | Metrik |
|---|---|
| Teklif talebi toplamak | Form / WhatsApp / telefon tıklaması |
| Yerel SEO | Hedef anahtar kelimelerde ilk sayfa, Google İşletme Profili ile uyum |
| Performans | Lighthouse Performance ≥ 95, SEO = 100, Accessibility ≥ 95, CLS < 0.1 |
| Mobil | 375px'ten itibaren yatay kaydırma yok, tüm dokunma alanları ≥ 44×44px |

## 2. Hedef Kitle

| Kitle | İhtiyaç | Sitede ne arıyor |
|---|---|---|
| Müteahhitler / inşaat firmaları | Kapasite, makine parkı, takvime uyum | Makine listesi, referans projeler, hızlı teklif |
| Bireysel arsa / ev sahipleri | Temel kazısı, yıkım, moloz atımı | Fiyat fikri, süreç, güven |
| Belediye / kamu / sanayi | Resmi yeterlilik, belgeler | Belgeler, ruhsatlar, büyük ölçekli işler |

Kullanım bağlamı: çoğunlukla **şantiyede, mobil telefondan**, güneş altında → yüksek kontrast, büyük dokunma hedefleri, tek dokunuşla arama/WhatsApp.

## 3. Tasarım Yönü — Modern & Şık (v2)

> v1 ("Şantiye Föyü", brütalist) firma tarafından beğenilmedi ve tamamen kaldırıldı (2026-10-03).

**Skill çıktıları (`ui-ux-pro-max`)**
- Tipografi: **"Geometric Modern" → Outfit (başlık) + Work Sans (gövde)**, ikisi de Türkçe karakter (latin-ext) destekli. Outfit'in yuvarlak geometrisi logodaki "ÖD" amblemiyle uyumlu.
- Dial ayarı: variance 4 (dengeli/modern), motion 5 (standart), density 3 (geniş boşluk).
- Kaçınılanlar: ucuz görseller, hızlı/sert animasyonlar, AI mor-pembe gradientler.

**Konsept:** Gerçek saha fotoğraflarıyla sinematik, koyu lacivert + sıcak kırık beyaz; turuncu yalnızca vurgu ve CTA'da.
- Tam ekran fotoğraflı hero, şeffaf header → kaydırınca buzlu cam beyaz header
- Fotoğraflı "bento" hizmet ızgarası, yumuşak köşeli kartlar (18–28px), hafif gölgeler
- Hap (pill) butonlar, ince çizgiler, bol beyaz alan
- Mobilde alta sabit, yuvarlak "Ara · WhatsApp · Teklif Al" çubuğu

### Tasarım token'ları
| Token | Değer | Kullanım |
|---|---|---|
| `--navy-950/900` | `#06121F` / `#0A1C30` | Hero, koyu bölümler, footer |
| `--brand` | `#13508C` | Logo laciverti: odak halkası, ikon zeminleri |
| `--accent` | `#F28A2E` | Logo turuncusu: CTA (üzerinde koyu metin), vurgular |
| `--accent-ink` | `#A8520B` | Açık zeminde turuncu metin (≥ 4.5:1) |
| `--bg` / `--surface` | `#F6F4F0` / `#FFFFFF` | Sayfa zemini / kartlar |
| `--ink` / `--muted` | `#0E1726` / `#5D6878` | Başlık / ikincil metin |
| `--r` / `--r-lg` | 18px / 28px | Kart köşeleri |

### Fotoğraflar
- Şu an: Openverse üzerinden bulunan **CC0 (kamu malı)** iş makinesi fotoğrafları, filigransız 1024px sürümler, WebP (800/1024px srcset). Kaynak listesi: `docs/photo-credits.json`.
- **Öneri:** firmanın kendi saha/makine fotoğrafları çekilip `public/img/` altına aynı adlarla konmalı — hem güven hem yerel SEO için en büyük fark bu olur.

## 4. Site Haritası

| URL | Sayfa | Ana anahtar kelime |
|---|---|---|
| `/` | Ana sayfa | hafriyat firması {şehir} |
| `/hizmetler` | Hizmetler özeti | hafriyat hizmetleri |
| `/hizmetler/hafriyat-ve-kazi` | Hafriyat & temel kazısı | temel kazısı, hafriyat kazı |
| `/hizmetler/yikim` | Bina yıkımı | bina yıkımı, kontrollü yıkım |
| `/hizmetler/dolgu-ve-tesviye` | Dolgu & tesviye | arazi tesviye, dolgu |
| `/hizmetler/kaya-kirma` | Kaya kırma / kırıcı | kaya kırma, kırıcı hizmeti |
| `/hizmetler/moloz-ve-nakliye` | Moloz & hafriyat nakliyesi | moloz atımı, hafriyat nakliye |
| `/hizmetler/is-makinesi-kiralama` | İş makinesi kiralama | ekskavatör kiralama, kepçe kiralama |
| `/makine-parki` | Makine parkı | |
| `/projeler` | Referans projeler | |
| `/hakkimizda` | Hakkımızda, belgeler | |
| `/teklif-al` | Hafriyat hacim hesaplayıcı + teklif formu | hafriyat hesaplama |
| `/iletisim` | İletişim, harita, çalışma saatleri | |
| `*` | 404 | (noindex) |

## 5. Ana Sayfa Akışı

1. **Hero:** tam ekran fotoğraf, "Sağlam yapılar, doğru kazıyla başlar." + Ücretsiz keşif / telefon CTA'ları + 4 güven rozeti
2. **Tanıtım:** kısa firma beyanı, onay listesi, üst üste binen iki fotoğraf
3. **Hizmetler:** 6 fotoğraflı bento kart
4. **Neden Özdoğuş:** koyu bant, 4 ilke (+ rakamlar girildiğinde istatistik kutuları)
5. **Süreç:** 5 adımlı zaman çizelgesi
6. **Makine parkı:** yatay kaydırılan kartlar
7. **Referans projeler**
8. **Hafriyat hesaplayıcı**
9. **SSS** (FAQPage şeması)
10. **Fotoğraflı kapanış CTA paneli**

## 6. Öne Çıkan Özellik: Hafriyat Hacim Hesaplayıcı

- Girdiler: uzunluk, genişlik, derinlik (m), zemin tipi, kamyon kapasitesi
- Kabarma katsayıları: kum/çakıl 1.12 · bitkisel toprak 1.25 · kil 1.30 · kaya 1.50
- Çıktılar: yerinde hacim (m³), gevşek hacim (m³), tahmini kamyon sefer sayısı
- "Bu değerlerle teklif iste" → değerler teklif formuna otomatik dolar
- Not: sonuç **tahminidir**, kesin fiyat keşif sonrası verilir (açıkça belirtilir)

## 7. Teklif / İletişim Akışı

- Form alanları: ad soyad, telefon, hizmet, iş adresi/ilçe, tahmini hacim, mesaj, KVKK onayı
- Doğrulama: blur anında satır içi hata (`aria-describedby`), gönderimde odaklanabilir hata özeti (skill UX kuralları)
- Gönderim: `company.formEndpoint` tanımlıysa (ör. Formspree) POST; değilse hazır mesajla **WhatsApp**'a yönlendirme
- Her sayfada sabit mobil eylem çubuğu: **Ara · WhatsApp · Teklif Al**

## 8. SEO Planı

**Teknik**
- Vite + React + TypeScript, **build sırasında statik HTML üretimi (SSG/prerender)** — her URL için tam içerikli HTML, JS beklemeden taranabilir
- Sayfa başına benzersiz `<title>` (≤ 60 karakter), `meta description` (≤ 155), `canonical`, Open Graph, Twitter Card
- `lang="tr"`, `hreflang` gerekirse ileride
- `sitemap.xml` ve `robots.txt` build'de otomatik üretilir
- Tek `h1`, mantıklı başlık hiyerarşisi, anlamlı `alt` metinleri
- Temiz Türkçe slug'lar (ç→c, ğ→g, ı→i, ö→o, ş→s, ü→u)
- 404 sayfası `noindex`

**Yapısal veri (JSON-LD)**
- `GeneralContractor` / `LocalBusiness`: ad, adres, telefon, çalışma saatleri, hizmet bölgesi (`areaServed`), koordinat, logo, sosyal hesaplar
- `Service` (her hizmet sayfası)
- `BreadcrumbList` (alt sayfalar)
- `FAQPage` (SSS bölümleri)
- `WebSite`

**Yerel SEO**
- NAP (ad-adres-telefon) bilgisi tüm sitede tek kaynaktan (`src/data/company.ts`) ve Google İşletme Profili ile birebir aynı
- Hizmet bölgesi (ilçeler) listesi içerikte ve şemada
- Google Haritalar gömme (iletişim sayfasında, tıklanınca yüklenen — performans için)

**Performans (skill: Performance HIGH)**
- Rota bazlı code-splitting (`React.lazy`)
- Font preconnect + `display=swap`, kritik CSS inline
- Görsellere sabit boyut, ekran altı lazy-load, CLS < 0.1

## 9. Erişilebilirlik (skill: Accessibility CRITICAL)

- Metin kontrastı ≥ 4.5:1 (turuncu zemin üstünde siyah metin)
- Görünür odak halkası (kaldırılmaz), tam klavye gezinmesi, "İçeriğe geç" bağlantısı
- İkon-only butonlarda `aria-label`, dekoratif SVG'lerde `aria-hidden`
- Dokunma hedefleri ≥ 44×44px, aralarında ≥ 8px
- `prefers-reduced-motion` desteği
- Responsive kontrol: 375 / 768 / 1024 / 1440px

## 10. Teknik Mimari

```
src/
  data/company.ts        ← firma bilgileri (NAP, telefon, şehir, ilçeler, sosyal) — TEK KAYNAK
  data/services.ts       ← hizmet içerikleri
  data/machines.ts       ← makine parkı
  data/projects.ts       ← referans projeler
  seo/                   ← meta, JSON-LD üreticileri, rota listesi
  components/            ← Header, Footer, MobileActionBar, Button, illüstrasyonlar (SVG)
  pages/                 ← sayfa bileşenleri
  styles/                ← token'lar + global CSS
scripts/prerender.ts     ← build sonrası statik HTML + sitemap üretimi
design-system/ozdogus-hafriyat/MASTER.md  ← skill'in kalıcı tasarım sistemi
```

Bağımlılıklar minimum: `react`, `react-dom`, `react-router`. CSS framework yok (özgün görünüm için el yapımı CSS).

## 11. Fazlar

| Faz | Kapsam | Durum |
|---|---|---|
| **0 — Keşif** | product.md, `ui-ux-pro-max` skill kurulumu, tasarım sistemi üretimi (`MASTER.md`) | ✅ |
| **1 — Altyapı** | Bağımlılıklar, router, SSG/prerender, token'lar, global CSS, fontlar | ✅ |
| **2 — Bileşenler** | Header, mobil menü, footer, mobil eylem çubuğu, butonlar, SVG çizimler, logo | ✅ |
| **3 — Sayfalar** | Ana sayfa, hizmetler + 6 detay, makine parkı, projeler, hakkımızda, teklif (hesaplayıcı), iletişim, 404 | ✅ |
| **4 — SEO** | Meta etiketler, JSON-LD, sitemap, robots, manifest, OG görseli, prerender doğrulama | ✅ |
| **5 — Kalite** | Build/lint, skill pre-delivery checklist, erişilebilirlik, responsive ekran kontrolleri, Lighthouse | ✅ (Lighthouse yayında ölçülecek) |
| **6 — Yayın** | Alan adı, hosting (Netlify/Vercel/Cloudflare Pages), Google Search Console, İşletme Profili | ⬜ |

## 12. Firmadan Beklenen Bilgiler

Bunlar gelene kadar `src/data/company.ts` içinde açıkça işaretli yer tutucular kullanılır:

- [ ] **Logo** (SVG tercih; yoksa yüksek çözünürlüklü PNG)
- [ ] Resmi firma unvanı, kuruluş yılı
- [ ] Adres, şehir, hizmet verilen ilçeler
- [ ] Telefon, WhatsApp, e-posta, çalışma saatleri
- [ ] Makine parkı (marka/model, adet, tonaj)
- [ ] Referans projeler (+ fotoğraflar), müşteri yorumları
- [ ] Belgeler (K belgesi, ISO vb.), sosyal medya hesapları
- [ ] Alan adı (canonical ve sitemap için)
