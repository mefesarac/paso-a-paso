# Paso a Paso – İspanyolca (A1 → C1)

Telefon ve tablet için yapılmış, çevrimdışı çalışabilen bir İspanyolca öğrenme uygulaması (PWA). Arayüz İngilizce.

## İçerik
- **Kurs:** 5 seviye, **77 ders** (A1: 17, A2: 16, B1: 16, B2: 14, C1: 14), Instituto Cervantes müfredatını kapsıyor. Toplam **1.078 boşluk doldurma** sorusu ve **731 örnek cümle** var. Ders başına 14–20 alıştırma rastgele seçildiği için tekrarlarda aynı sorular gelmiyor.
- **Hata defteri:** gramer, cümle ve fiil sorularında yanlış yaptıkların deftere eklenir; iki kez doğru cevaplayınca silinir.
- **Kelime:** **4.000'den fazla kelime ve ifade** (ders kelimeleri + 71 deste). Temel desteler bir kelime sıklığı listesine göre seçildi. Öğrenilen her şey aralıklı tekrara (spaced repetition) eklenir.
- **Fiil çekimi:** kurallarla çalışan bir motor; **712 fiil**, 16 zaman kipi, düzensiz fiiller ve dönüşlü emir kipleri dahil (144 test formu doğrulandı). Tam tablolar ve fiil alıştırmaları var.
- **Kütüphane:** **40 okuma metni**. Bunlar seviyeye göre yazılmış metinler, B2–C1 için uzun makaleler, ve Cervantes, Lazarillo, Bécquer, Machado, Martí, Darío, Storni, Lorca, Quiroga ve Clarín'den telif süresi dolmuş eserler. Ayrıca 20 iki sesli diyalog, gramer başvurusu ve gerçek İspanyolca kaynakları (podcast, radyo, gazete, sözlük) için bağlantılar var.
- **Pratik:** dikte, çeviri, sayı/fiyat/yıl/saat dinleme, telaffuz rehberi, benzer kelimeleri ayırt etme testi, tekerlemeler, örnek cevaplı 14 yazma görevi, okuma ve dinleme hız ayarı.
- **AI öğretmen (isteğe bağlı):** kendi Claude API anahtarınla (Anthropic) metinlerini ayrıntılı düzelttirebilir, 14 senaryoda sesli ya da yazılı sohbet edebilirsin. Anahtar sadece cihazında saklanır ve yalnızca api.anthropic.com'a gönderilir; kullanım ücreti Anthropic hesabına yansır.
- **Sınavlar:** her seviye için 30 soruluk sınav; %70 ile geçince yazdırılabilir sertifika. Ayrıca seviye tespit sınavı ve rozetler var.
- **Hata bildirme:** derslerde, metinlerde ve sorularda "⚑ Report" bağlantısı var; GitHub'da hazır doldurulmuş bir hata kaydı açar.

Telaffuz için cihazın kendi metin-okuma (TTS) motoru kullanılır. Ses çıkmazsa cihaz ayarlarından İspanyolca bir ses paketi yükle.

**Kaynaklar ve lisanslar:** Temel kelime destelerindeki kelime seçimi [hermitdave/FrequencyWords](https://github.com/hermitdave/FrequencyWords) sıklık listesinden yararlanır (içerik CC BY-SA 4.0). Edebi metinler Wikisource ve Project Gutenberg'den alındı ve telif süreleri dolmuştur. Çeviriler, açıklamalar ve diğer içerikler bu uygulama için yazıldı.

## Çalıştırma
Bilgisayarda:
```bash
./serve.sh          # veya: python3 -m http.server 8000
```
Sonra tarayıcıda `http://localhost:8000` adresini aç.

Aynı Wi-Fi'daki telefon veya tablette: `serve.sh` çalışırken ekranda yazan `http://<bilgisayar-IP>:8000` adresini aç.

> Not: Uygulamayı ana ekrana **yükleme**, **çevrimdışı** kullanım ve **mikrofon** için tarayıcılar HTTPS ister (localhost hariç). Yerel ağdan (http://IP) açınca dersler ve sesler çalışır, ama yükleme ve mikrofon çalışmayabilir.

## Telefona/tablete yükleme (önerilen)
Klasörü herhangi bir ücretsiz statik barındırma servisine yükle; hepsi HTTPS verir:
- **GitHub Pages:** dosyaları bir repoya koy → Settings → Pages.
- **Netlify Drop:** https://app.netlify.com/drop adresine klasörü sürükle-bırak.

Sonra:
- **Android (Chrome):** sayfayı aç → ana sayfadaki "Install" butonu veya menü → "Uygulamayı yükle".
- **iPhone/iPad (Safari):** Paylaş → "Ana Ekrana Ekle".

İlerleme cihazda (localStorage) saklanır. Başka cihaza taşımak için Profil → Export / Import.

## Dosya yapısı
```
index.html              uygulama iskeleti
css/style.css           mobil öncelikli tasarım, tablet düzeni, koyu tema
js/app.js               uygulama motoru (dersler, alıştırmalar, kütüphane, profil)
js/conj.js              fiil çekim motoru
js/data/a1.js … c1.js   ilk 40 ders; extra-a/b/c.js: ek 37 ders + ders sırası
js/data/vocab-*.js      tematik kelime desteleri;  verbs.js: fiil listesi
js/data/readings*.js    okuma metinleri;  dialogues.js, writing.js, pron.js
sw.js                   çevrimdışı önbellek (service worker)
manifest.webmanifest    PWA tanımı, icons/  uygulama simgeleri
```
Yeni ders eklemek için ilgili `js/data/*.js` dosyasındaki `units` dizisine aynı formatta bir nesne ekle. İçerik değiştirdikten sonra `sw.js` içindeki `CACHE` sürümünü artır (`pasoapaso-v2` gibi).
