import type { PhotoName } from './photos'

export type Faq = { q: string; a: string }

export type Service = {
  slug: string
  code: string
  title: string
  short: string
  image: PhotoName
  imageAlt: string
  metaTitle: string
  metaDescription: string
  lead: string
  body: string[]
  scope: string[]
  machines: string[]
  faqs: Faq[]
}

export const services: Service[] = [
  {
    slug: 'hafriyat-ve-kazi',
    image: 'hafriyat',
    imageAlt: 'Sarı paletli ekskavatör şantiyede toprak kazıyor',
    code: 'HK',
    title: 'Hafriyat & Temel Kazısı',
    short: 'Bina temeli, bodrum, otopark ve altyapı kazıları; projeye uygun kot ve şev ile.',
    metaTitle: 'Hafriyat ve Temel Kazısı',
    metaDescription:
      'Bina temeli, bodrum ve otopark kazısı. Projeye uygun kot, güvenli şev, kendi makine parkı ve nakliye ile anahtar teslim hafriyat hizmeti.',
    lead: 'Temel kazısı, bir yapının geri kalan her şeyinin üzerine oturduğu işdir. Kotu, şevi ve zemini doğru bırakmak; inşaatın ilk gününden itibaren zaman ve para kazandırır.',
    body: [
      'Kazıya başlamadan önce sahayı yerinde inceliyor, zemin etüdü ve mimari/statik projeye göre kazı kotlarını, şev açılarını ve makine giriş-çıkış güzergâhını planlıyoruz. Komşu yapılara yakın parsellerde iksa ihtiyacını projeyle birlikte değerlendiriyoruz.',
      'Kazı süresince kotlar lazer nivo ile kontrol edilir; çıkan hafriyat aynı anda kamyonlarla ruhsatlı döküm sahalarına taşınır. Böylece saha hiçbir zaman toprak yığınına dönmez ve kalıp ekibi planlanan günde işe başlar.',
    ],
    scope: [
      'Bina temeli ve bodrum kat kazısı',
      'Otopark ve sığınak kazıları',
      'Altyapı, kanal ve boru hattı kazıları',
      'Havuz ve depo kazıları',
      'Lazer nivo ile kot kontrolü',
      'Hafriyatın eş zamanlı nakliyesi',
    ],
    machines: ['Paletli ekskavatör', 'Damperli kamyon', 'Kazıcı yükleyici'],
    faqs: [
      {
        q: 'Temel kazısı fiyatı nasıl belirlenir?',
        a: 'Fiyat; kazılacak hacim (m³), zemin cinsi (toprak, kil, kaya), sahaya erişim, döküm sahasına mesafe ve iş takvimine göre belirlenir. Kesin fiyat için ücretsiz yerinde keşif yapıyoruz.',
      },
      {
        q: 'Kazı için hangi izinler gerekir?',
        a: 'Yapı ruhsatı alınmış parsellerde belediyenin hafriyat ve döküm izni gerekir. Döküm sahası ve nakliye belgeleri konusunda süreci sizinle birlikte yürütüyoruz.',
      },
      {
        q: 'Bir temel kazısı ne kadar sürer?',
        a: 'Standart bir apartman parselinde temel kazısı genellikle birkaç gün ile iki hafta arasında tamamlanır. Kaya çıkması, erişim ve nakliye mesafesi süreyi etkiler; keşifte size net bir takvim veririz.',
      },
    ],
  },
  {
    slug: 'yikim',
    image: 'yikim',
    imageAlt: 'Yıkım ekskavatörü bir binanın çelik iskeletini söküyor',
    code: 'YK',
    title: 'Bina Yıkımı',
    short: 'Ruhsatlı, kontrollü ve çevreye duyarlı yıkım; molozun ayrıştırılması ve taşınması dahil.',
    metaTitle: 'Bina Yıkımı ve Kontrollü Yıkım',
    metaDescription:
      'Ruhsatlı, kontrollü bina yıkımı. Komşu yapıları koruyan yıkım planı, toz kontrolü, moloz ayrıştırma ve nakliye ile güvenli yıkım hizmeti.',
    lead: 'Yıkım hızlı görünen ama planlaması en çok dikkat isteyen iştir. Amaç binayı yıkmak değil; komşuyu, yolu ve çalışanı koruyarak parseli temiz teslim etmektir.',
    body: [
      'Yıkım öncesinde elektrik, su ve doğalgaz bağlantılarının kesildiğini doğruluyor, yıkım sırasını ve makine konumlarını komşu yapılara göre planlıyoruz. Gerekli durumlarda yıkım yukarıdan aşağıya, kat kat ilerler.',
      'Toz, sulama ile kontrol altında tutulur. Demir, beton ve diğer atıklar sahada ayrıştırılır; geri kazanılabilir malzeme ayrı değerlendirilir, moloz ruhsatlı sahalara taşınır.',
    ],
    scope: [
      'Konut ve ticari bina yıkımı',
      'Kentsel dönüşüm yıkımları',
      'Fabrika ve depo yıkımı',
      'Kısmi / iç yıkım işleri',
      'Sulama ile toz kontrolü',
      'Moloz ayrıştırma ve nakliye',
    ],
    machines: ['Paletli ekskavatör', 'Hidrolik kırıcı', 'Damperli kamyon'],
    faqs: [
      {
        q: 'Bina yıkımı için hangi belgeler gerekir?',
        a: 'Belediyeden yıkım ruhsatı, abonelik kapatma belgeleri ve kentsel dönüşümde ilgili kurum onayları gerekir. Evrak sürecinde size yol gösteriyoruz.',
      },
      {
        q: 'Yıkım sırasında komşu binalar nasıl korunur?',
        a: 'Yıkım sırası ve makine konumu komşu yapılara göre planlanır, ortak duvarlar kontrollü şekilde ayrılır ve toz sulama ile bastırılır.',
      },
      {
        q: 'Yıkım molozu ne oluyor?',
        a: 'Moloz sahada ayrıştırılır; demir gibi geri kazanılabilir malzemeler ayrılır, kalan moloz ruhsatlı döküm sahalarına taşınır.',
      },
    ],
  },
  {
    slug: 'dolgu-ve-tesviye',
    image: 'tesviye',
    imageAlt: 'Dozer kırmızı toprağı tesviye ediyor',
    code: 'DT',
    title: 'Dolgu & Tesviye',
    short: 'Arazi düzenleme, kot alma, kademeli dolgu ve sıkıştırma; yol ve saha hazırlığı.',
    metaTitle: 'Arazi Tesviye ve Dolgu',
    metaDescription:
      'Arazi tesviye, kot alma ve kontrollü dolgu. Katman katman serme ve silindirle sıkıştırma ile yol, saha ve parsel hazırlığı.',
    lead: 'Düz görünen bir arazi, doğru serilmiş ve sıkıştırılmış katmanların sonucudur. Tesviyeyi projedeki kota göre yapıyor, dolguyu kademeli sıkıştırıyoruz.',
    body: [
      'Arazinin mevcut kotlarını ölçerek kazı ve dolgu dengesini çıkarıyoruz; mümkün olduğunda sahadaki malzemeyi yeniden kullanarak nakliye maliyetini düşürüyoruz.',
      'Dolgu malzemesi katmanlar halinde serilir ve her katman silindirle sıkıştırılır. Böylece zamanla oturma yapan, çukurlaşan zeminlerin önüne geçilir.',
    ],
    scope: [
      'Arazi ve parsel tesviyesi',
      'Kot alma ve kazı-dolgu dengesi',
      'Kademeli dolgu ve sıkıştırma',
      'Yol ve saha altyapı hazırlığı',
      'Stabilize serme',
      'Dolgu malzemesi temini',
    ],
    machines: ['Dozer', 'Silindir', 'Lastikli yükleyici', 'Damperli kamyon'],
    faqs: [
      {
        q: 'Dolgu neden katman katman yapılır?',
        a: 'Tek seferde dökülen dolgu iç kısımlarda sıkışmaz ve zamanla oturur. Katmanlı serme ve her katmanın sıkıştırılması zeminin taşıma gücünü korur.',
      },
      {
        q: 'Dolgu malzemesini siz mi temin ediyorsunuz?',
        a: 'Evet. Projenin ihtiyacına göre dolgu ve stabilize malzemesini temin edip sahaya getiriyoruz.',
      },
    ],
  },
  {
    slug: 'kaya-kirma',
    image: 'kaya',
    imageAlt: 'Lastikli yükleyici kırılmış taş yığınında çalışıyor',
    code: 'KK',
    title: 'Kaya Kırma',
    short: 'Hidrolik kırıcı ile sert zemin ve kaya kazısı; patlatma gerektirmeyen kontrollü kırım.',
    metaTitle: 'Kaya Kırma ve Kırıcı Hizmeti',
    metaDescription:
      'Hidrolik kırıcı ile kaya kırma ve sert zemin kazısı. Patlatmasız, kontrollü ve yerleşim alanlarına uygun kaya kazısı hizmeti.',
    lead: 'Kazıda kaya çıktığında iş durmaz, yöntem değişir. Hidrolik kırıcı ataşmanıyla kayayı patlatmadan, kontrollü şekilde kırıp kazıya devam ediyoruz.',
    body: [
      'Kırıcı, ekskavatöre takılan hidrolik bir ataşmandır. Patlatmaya göre çok daha kontrollüdür; bu nedenle yerleşim alanlarında, komşu yapılara yakın parsellerde güvenle kullanılır.',
      'Kırılan kaya aynı gün yüklenip taşınabilir ya da uygun olduğunda sahada dolgu malzemesi olarak değerlendirilir.',
    ],
    scope: [
      'Temel kazısında kaya kırma',
      'Sert zemin ve kaya kazısı',
      'Beton ve betonarme kırımı',
      'Kanal kazılarında kaya kırma',
      'Kırılan malzemenin nakliyesi',
    ],
    machines: ['Hidrolik kırıcı', 'Paletli ekskavatör', 'Damperli kamyon'],
    faqs: [
      {
        q: 'Kaya çıkması kazı fiyatını etkiler mi?',
        a: 'Evet. Kaya kırma daha yavaş ilerler ve ek ekipman gerektirir. Zemin etüdü varsa keşifte bunu baştan hesaba katarız.',
      },
      {
        q: 'Kırıcı kullanımı komşu binalara zarar verir mi?',
        a: 'Hidrolik kırıcı patlatmaya göre çok daha düşük titreşim oluşturur. Komşu yapılara yakın noktalarda kırım kademeli ve kontrollü yapılır.',
      },
    ],
  },
  {
    slug: 'moloz-ve-nakliye',
    image: 'nakliye',
    imageAlt: 'Yükleyici damperli kamyona hafriyat yüklüyor',
    code: 'MN',
    title: 'Moloz & Hafriyat Nakliyesi',
    short: 'Hafriyat toprağı, moloz ve inşaat atığının ruhsatlı döküm sahalarına taşınması.',
    metaTitle: 'Moloz ve Hafriyat Nakliyesi',
    metaDescription:
      'Hafriyat toprağı, moloz ve inşaat atığı nakliyesi. Damperli kamyonlarla ruhsatlı döküm sahalarına yasal ve hızlı taşıma.',
    lead: 'Sahadan çıkan her kamyon, yasal bir döküm sahasına gitmelidir. Hafriyat ve molozu belgeli şekilde, planlanan sefer sayısıyla taşıyoruz.',
    body: [
      'Kazı ve yıkım işlerimizde nakliye işin içindedir; ayrıca yalnızca nakliye hizmeti de veriyoruz. Sefer sayısını yükleme hızına göre planlayarak sahada bekleyen kamyon ya da biriken toprak bırakmıyoruz.',
      'Döküm, belediyelerin belirlediği ruhsatlı sahalara yapılır. Yükleme sırasında yol temizliğine ve kamyon üstü örtüsüne dikkat ediyoruz.',
    ],
    scope: [
      'Hafriyat toprağı nakliyesi',
      'Yıkım molozu taşıma',
      'İnşaat atığı ve tadilat molozu',
      'Ruhsatlı döküm sahasına döküm',
      'Yükleme ve saha temizliği',
    ],
    machines: ['Damperli kamyon', 'Lastikli yükleyici', 'Kazıcı yükleyici'],
    faqs: [
      {
        q: 'Küçük miktarda moloz da alıyor musunuz?',
        a: 'Evet. Tadilat sonrası birkaç kamyonluk moloz için de hizmet veriyoruz; miktarı ve konumu iletmeniz yeterli.',
      },
      {
        q: 'Bir kamyon kaç metreküp taşır?',
        a: 'Kullanılan kamyona göre değişmekle birlikte yaygın damperli kamyonlar sefer başına yaklaşık 12–20 m³ gevşek malzeme taşır. Teklif sayfamızdaki hesaplayıcı ile tahmini sefer sayısını görebilirsiniz.',
      },
    ],
  },
  {
    slug: 'is-makinesi-kiralama',
    image: 'kiralama',
    imageAlt: 'Operatörlü ekskavatör altyapı şantiyesinde çalışıyor',
    code: 'İM',
    title: 'İş Makinesi Kiralama',
    short: 'Operatörlü ekskavatör, kepçe, kırıcı, dozer ve kamyon kiralama; saatlik, günlük, aylık.',
    metaTitle: 'Operatörlü İş Makinesi Kiralama',
    metaDescription:
      'Operatörlü ekskavatör, kazıcı yükleyici (JCB), kırıcı, dozer, silindir ve damperli kamyon kiralama. Saatlik, günlük ve aylık seçenekler.',
    lead: 'Projenizde eksik olan tek şey bir makine ise, operatörüyle birlikte kiralıyoruz. Bakımlı makine, deneyimli operatör, net saat kaydı.',
    body: [
      'Makinelerimiz düzenli bakımdan geçer ve deneyimli operatörlerle birlikte sahaya gelir. Kiralama saatlik, günlük veya aylık yapılabilir.',
      'İhtiyacınız olan makine tipini bilmiyorsanız işi anlatmanız yeterli; uygun makineyi ve süreyi birlikte belirleriz.',
    ],
    scope: [
      'Operatörlü paletli ekskavatör',
      'Kazıcı yükleyici (JCB tipi)',
      'Hidrolik kırıcı',
      'Dozer ve silindir',
      'Damperli kamyon',
      'Saatlik / günlük / aylık kiralama',
    ],
    machines: ['Paletli ekskavatör', 'Kazıcı yükleyici', 'Hidrolik kırıcı', 'Dozer', 'Silindir', 'Damperli kamyon'],
    faqs: [
      {
        q: 'Makineler operatörlü mü kiralanıyor?',
        a: 'Evet, makinelerimizi deneyimli operatörleriyle birlikte kiralıyoruz.',
      },
      {
        q: 'En kısa kiralama süresi nedir?',
        a: 'İşin türüne ve sahaya mesafeye göre değişir. Kısa süreli işler için saatlik ya da yarım günlük seçenekleri birlikte değerlendirebiliriz.',
      },
    ],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)

export const generalFaqs: Faq[] = [
  {
    q: 'Keşif ücretli mi?',
    a: 'Hayır. Teklif öncesi saha keşfi ücretsizdir. Formu doldurmanız ya da bizi aramanız yeterli.',
  },
  {
    q: 'Teklifi ne kadar sürede alırım?',
    a: 'Keşif sonrası genellikle aynı gün ya da ertesi iş günü yazılı teklif iletiyoruz.',
  },
  {
    q: 'Hafriyat ruhsatı ve döküm belgeleriyle ilgileniyor musunuz?',
    a: 'Evet. Belediye hafriyat izni, döküm sahası ve nakliye belgeleri konusunda süreci sizinle birlikte yürütüyoruz.',
  },
  {
    q: 'Hangi bölgelerde hizmet veriyorsunuz?',
    a: 'Hizmet bölgemiz için bizi arayabilir ya da iletişim sayfamızı inceleyebilirsiniz; şehir dışı büyük projeler için de teklif veriyoruz.',
  },
]
