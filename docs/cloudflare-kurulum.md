# Cloudflare kurulumu — ozdogushafriyat.com

Site ücretsiz **Cloudflare Workers** (statik site) üzerinde yayınlanır. GitHub'daki `ahmettkuurt/ozdogus` deposuna her
gönderimde (push) Cloudflare siteyi kendiliğinden yeniden derler ve yayınlar.

Ana adres: **https://www.ozdogushafriyat.com**
- `ozdogushafriyat.com` (www'suz) → www adresine yönlenir
- Eski `kiralikismakinalari.gen.tr` ve `kiralikbobcat.gen.tr` → www adresine yönlenir, eski sayfalar yeni
  karşılıklarına gider (`public/_redirects`)

> ⚠️ Alan adı Google Workspace e-postasını da taşıyor. DNS'e dokunan her adımdan sonra
> `info@ozdogushafriyat.com` adresine dışarıdan bir e-posta gönderip geldiğini kontrol edin.

---

## 1. Cloudflare hesabı ve alan adı

1. https://dash.cloudflare.com/sign-up adresinden ücretsiz hesap açın.
2. **Add a domain** → `ozdogushafriyat.com` yazın → **Free** planı seçin.
3. Cloudflare mevcut DNS kayıtlarını tarar. Devam etmeden önce listede şunların **olduğunu** kontrol edin:
   - **MX** kaydı/kayıtları (Google Workspace: `smtp.google.com` ya da `aspmx.l.google.com` ile başlayanlar)
   - **TXT** kayıtları: `v=spf1 include:_spf.google.com ~all`, `google-site-verification=…`
   - Varsa `google._domainkey` (DKIM) TXT kaydı
   Eksik olan varsa alan adını aldığınız paneldeki DNS sayfasından bakıp aynısını elle ekleyin.
   MX ve TXT kayıtları **gri bulut (DNS only)** kalmalı.
4. Cloudflare size iki **nameserver** (ad sunucusu) verir (ör. `xxx.ns.cloudflare.com`).
5. Alan adını aldığınız panelde (Google üzerinden alındıysa artık **Squarespace Domains** →
   https://account.squarespace.com/domains):
   - Önce **DNSSEC**'i kapatın (açıksa).
   - **Nameservers** → "Use custom nameservers" → Cloudflare'in verdiği iki adresi girin.
6. Cloudflare'e dönüp **Check nameservers** deyin. Etkinleşmesi birkaç dakika ile birkaç saat sürer;
   e-posta bildirimi gelir. Sonra e-posta testini yapın.

## 2. Siteyi yayınlama (Workers)

Site Cloudflare **Workers** üzerinde statik site olarak çalışır; ayarlar depodaki `wrangler.jsonc` dosyasındadır.

1. Cloudflare panelinde **Workers & Pages** → **Create application** → **Import a repository** (GitHub).
2. GitHub hesabını bağlayın, `ahmettkuurt/ozdogus` deposunu seçin.
3. "Set up your application" ekranı:
   | Alan | Değer |
   |---|---|
   | Project name | `ozdogus` (wrangler.jsonc içindeki `name` ile aynı olmalı) |
   | Build command | `npm run build` |
   | Deploy command | `npx wrangler deploy` |
   | Preview command | olduğu gibi bırakın |
   | Enable Preview builds | açık kalabilir |
   | Protect with Cloudflare Access | **kapalı** (açılırsa site herkese kapanır) |
   Node sürümü depodaki `.node-version` dosyasından (22) okunur.
4. **Deploy**. İlk derleme 1–3 dakika sürer; site önce `ozdogus.<hesap-adı>.workers.dev` adresinde açılır.

## 3. Alan adını siteye bağlama

1. Workers & Pages → `ozdogus` → **Settings** → **Domains & Routes** → **Add** → **Custom domain**:
   - `www.ozdogushafriyat.com` ekleyin (DNS kaydını Cloudflare kendisi oluşturur).
   - Aynı şekilde `ozdogushafriyat.com` (www'suz) da ekleyin.
2. **www'suz adresi www'ye yönlendirin:** Alan adı (`ozdogushafriyat.com`) → **Rules** → **Redirect Rules**
   → **Create rule** → şablonlardan **"Redirect from Root to WWW"** seçin. Ya da elle:
   - When incoming requests match: **Hostname equals** `ozdogushafriyat.com`
   - Then: **Dynamic** → `concat("https://www.ozdogushafriyat.com", http.request.uri.path)`
   - Status code: **301**, **Preserve query string** işaretli
3. **SSL/TLS** → **Edge Certificates** → **Always Use HTTPS**: açık.

## 4. Eski alan adlarını yönlendirme (önerilir — Google'daki birikim korunur)

`kiralikismakinalari.gen.tr` ve `kiralikbobcat.gen.tr` için ayrı ayrı:

1. Cloudflare → **Add a domain** → alan adı → **Free**.
2. DNS kayıtlarını silin (eski hosting kayıtları), yerine iki kayıt ekleyin:
   | Type | Name | Content | Proxy |
   |---|---|---|---|
   | A | `@` | `192.0.2.1` | **Proxied (turuncu bulut)** |
   | A | `www` | `192.0.2.1` | **Proxied (turuncu bulut)** |
   (`192.0.2.1` boş bir adres; istek ona hiç gitmez, Cloudflare önce yönlendirir.)
3. **Rules** → **Redirect Rules** → **Create rule**:
   - When incoming requests match: **All incoming requests**
   - Then: **Dynamic** → `concat("https://www.ozdogushafriyat.com", http.request.uri.path)`
   - Status code: **301**, **Preserve query string** kapalı
4. `.gen.tr` alan adının kayıtlı olduğu firmanın panelinden nameserver'ları Cloudflare'in verdikleriyle değiştirin.
5. Alan adlarını en az 6–12 ay yenilemeye devam edin.

Eski sayfa adresleri (`/kiralik-is-makinalari-istanbul.html` gibi) önce aynı yolla
`www.ozdogushafriyat.com`'a gelir, orada `public/_redirects` onları yeni sayfalara gönderir.

## 5. Google

1. **Search Console** (https://search.google.com/search-console) → **Alan (Domain)** mülkü →
   `ozdogushafriyat.com`. Doğrulama TXT kaydını Cloudflare DNS'ine ekleyin (Cloudflare otomatik ekleme de önerir).
2. **Sitemaps** → `https://www.ozdogushafriyat.com/sitemap.xml` gönderin.
3. Eski alan adları Search Console'da kayıtlıysa: eski mülk → **Ayarlar → Adres değişikliği** →
   yeni mülk olarak `ozdogushafriyat.com` seçin.
4. **Google İşletme Profili**: web sitesi `https://www.ozdogushafriyat.com`; ad, adres ve telefonlar
   sitedekiyle birebir aynı.

## 6. Yayın sonrası kontrol listesi

- [ ] `https://www.ozdogushafriyat.com` açılıyor, kilit (https) var
- [ ] `ozdogushafriyat.com` ve `http://…` → `https://www.ozdogushafriyat.com`'a gidiyor
- [ ] `https://www.ozdogushafriyat.com/hizmetler/yikim/` → sondaki `/` olmadan açılıyor
- [ ] `https://www.ozdogushafriyat.com/olmayan-sayfa` → "Sayfa bulunamadı"
- [ ] Eski adres: `kiralikismakinalari.gen.tr/kiralik-is-makinalari-istanbul.html` → İş Makinesi Kiralama sayfası
- [ ] `info@ozdogushafriyat.com` e-posta alıp gönderiyor

## Güncelleme

Kodda yapılan değişiklik `main` dalına gönderildiğinde (git push) Cloudflare siteyi kendisi yeniden yayınlar.
Yayın geçmişi ve gerekirse eski sürüme dönüş: Workers & Pages → `ozdogus` → **Deployments**.
